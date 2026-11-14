import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { GoogleGenAI } from '@google/genai';
import { resolveServerApiKey, scrubSecrets } from './keyCipher';

export interface RagChunk {
  id: string;
  category: string;
  title: string;
  sectionId: string | null;
  url: string | null;
  urlLabel: string | null;
  image: string | null;
  content: string;
  vector: number[];
}

export interface RagIndexFile {
  version: string;
  embeddingModel: string;
  chatModel: string;
  dimensions: number;
  trainedAt: string;
  chunkCount: number;
  chunks: RagChunk[];
}

export interface ChatTurnMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface RetrievedSource {
  id: string;
  category: string;
  title: string;
  score: number;
  sectionId: string | null;
  url: string | null;
  urlLabel: string | null;
  image: string | null;
}

const MODEL_CHAT = 'gemini-3.5-flash-lite';
const MODEL_EMBED = 'gemini-embedding-001';
const TOP_K = 7;
const SOURCE_SCORE_THRESHOLD = 0.61;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQ = 30;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: IncomingMessage): string {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.trim()) {
    return fwd.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX_REQ) return false;
  bucket.count += 1;
  return true;
}

function isAllowedOrigin(req: IncomingMessage): boolean {
  const origin = req.headers.origin;
  if (!origin) return true; // same-origin or server-side fetch
  try {
    const u = new URL(origin);
    const host = u.hostname.toLowerCase();
    return (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host.endsWith('.vercel.app') ||
      host.endsWith('turnio.dev') ||
      host.endsWith('domation.net')
    );
  } catch {
    return false;
  }
}

const SYSTEM_INSTRUCTION = `Bạn là **Turnio AI** — Trợ lý AI cá nhân hóa chuyên trách Hồ sơ Năng lực & Kiến trúc Hệ thống của Huỳnh Trọng Phúc (Turnio DEV / TURNIO) — Fullstack Developer, Systems Architect & AI Automation Specialist, CEO Founder DOMARKETING (DOMATION).

NGUYÊN TẮC BẮT BUỘC:
1. Trả lời HOÀN TOÀN dựa trên ngữ cảnh tri thức [KIẾN THỨC ĐƯỢC TRUY XUẤT] bên dưới. Phản hồi tự nhiên, sắc bén, giàu thông tin kỹ thuật & số liệu thực chứng có trong tài liệu, giữ đúng bản sắc trợ lý AI riêng của Turnio (không tự ý nhắc hay quảng bá tên model bên thứ ba).
2. KHÔNG BAO GIỜ bịa đặt số liệu, URL, công nghệ, tên khách hàng hay cam kết không xuất hiện trong tài liệu được truy xuất. Nếu thông tin không có trong hồ sơ (ví dụ báo giá chưa niêm yết hoặc chi tiết riêng tư), hãy nói rõ trung thực và hướng dẫn liên hệ trực tiếp qua turniodev@gmail.com hoặc LinkedIn https://www.linkedin.com/in/turnio-dev/.
3. Phân biệt chính xác bản chất nghiệp vụ: ví dụ RichLand (crm.richland.city) là hệ thống ERP & Quản lý Dữ liệu / Quản lý Lead Bất động sản (KHÔNG phải giỏ hàng TMĐT); INKICA (ai.inkica.com) là AI Prepress & 3D POD Studio; EcoLife Signature là dự án BĐS Capital House tổng thầu 7 trụ cột.
4. Trình bày gọn gàng bằng Markdown rõ ràng: nhấn mạnh **số liệu / tech stack** quan trọng, chia bullet hợp lý, có thể gắn link [Tên](url) nếu url có trong tài liệu truy xuất. Độ dài súc tích, đi thẳng vào trọng tâm câu hỏi (có thể đào sâu chi tiết kỹ thuật khi người dùng hỏi sâu về kiến trúc, code, database, API).
5. Tự động trả lời cùng ngôn ngữ với câu hỏi của người dùng (mặc định Tiếng Việt nếu hỏi Tiếng Việt, Tiếng Anh nếu hỏi Tiếng Anh).`;

let cachedIndex: RagIndexFile | null = null;

function loadRagIndex(): RagIndexFile {
  if (cachedIndex) return cachedIndex;

  const candidatePaths = [
    path.resolve(process.cwd(), 'src', 'data', 'ragIndex.json'),
    path.resolve(process.cwd(), 'data', 'ragIndex.json'),
  ];

  for (const p of candidatePaths) {
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8');
      cachedIndex = JSON.parse(raw) as RagIndexFile;
      return cachedIndex;
    }
  }

  throw new Error(`RAG index file not found. Looked in: ${candidatePaths.join(', ')}`);
}

function normalizeL2(vec: number[]): number[] {
  let sumSq = 0;
  for (let i = 0; i < vec.length; i++) sumSq += vec[i] * vec[i];
  const norm = Math.sqrt(sumSq) || 1;
  return vec.map((v) => v / norm);
}

function dotProduct(a: number[], b: number[]): number {
  const len = Math.min(a.length, b.length);
  let sum = 0;
  for (let i = 0; i < len; i++) sum += a[i] * b[i];
  return sum;
}

async function readJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  const preParsed = (req as IncomingMessage & { body?: unknown }).body;
  if (preParsed && typeof preParsed === 'object' && !Buffer.isBuffer(preParsed)) {
    return preParsed as Record<string, unknown>;
  }
  if (typeof preParsed === 'string' && preParsed.trim()) {
    return JSON.parse(preParsed) as Record<string, unknown>;
  }

  const chunks: Buffer[] = [];
  let totalBytes = 0;
  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk));
    totalBytes += buf.length;
    if (totalBytes > 128 * 1024) {
      throw new Error('Request payload exceeds 128KB limit');
    }
    chunks.push(buf);
  }
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  return JSON.parse(raw) as Record<string, unknown>;
}

function writeSseEvent(res: ServerResponse, event: string, data: unknown) {
  res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

function sendJsonError(res: ServerResponse, status: number, error: string) {
  if (!res.headersSent) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  }
  res.end(JSON.stringify({ error }));
}

export async function handleRagChatHttp(
  req: IncomingMessage,
  res: ServerResponse,
  apiKey?: string
): Promise<void> {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (!isAllowedOrigin(req)) {
    sendJsonError(res, 403, 'Origin not permitted by API proxy policy.');
    return;
  }

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    sendJsonError(res, 405, 'Method not allowed. Use POST.');
    return;
  }

  const clientIp = getClientIp(req);
  if (!checkRateLimit(clientIp)) {
    sendJsonError(res, 429, 'Bạn gửi quá nhiều yêu cầu liên tiếp. Vui lòng thử lại sau ít giây.');
    return;
  }

  let resolvedKey = '';
  try {
    resolvedKey = resolveServerApiKey(apiKey);
  } catch (err) {
    console.error('[RAG-CHAT] Secret unwrap error:', scrubSecrets(String(err)));
    sendJsonError(res, 500, 'Lỗi giải mã cấu hình API bảo mật trên server.');
    return;
  }

  if (!resolvedKey) {
    sendJsonError(res, 500, 'Server chưa cấu hình khóa bảo mật Turnio AI.');
    return;
  }

  let body: Record<string, unknown>;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    sendJsonError(res, 400, err instanceof Error ? err.message : 'Invalid JSON body');
    return;
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  const messages: ChatTurnMessage[] = rawMessages
    .filter(
      (m): m is ChatTurnMessage =>
        Boolean(m) &&
        typeof m === 'object' &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0
    )
    .slice(-10)
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, 2000),
    }));

  const currentTurn = messages[messages.length - 1];
  if (!currentTurn || currentTurn.role !== 'user') {
    sendJsonError(res, 400, 'Tin nhắn cuối cùng phải từ người dùng.');
    return;
  }

  try {
    const ragIndex = loadRagIndex();
    const ai = new GoogleGenAI({ apiKey: resolvedKey });

    // Contextualize short follow-up questions semantically using prior user turns (pure vector retrieval)
    const previousUserTurns = messages.slice(0, -1).filter((m) => m.role === 'user');
    const lastUserTurn = previousUserTurns[previousUserTurns.length - 1];
    const queryForEmbedding = lastUserTurn
      ? `${lastUserTurn.content}\n${currentTurn.content}`
      : currentTurn.content;

    const embedRes = await ai.models.embedContent({
      model: MODEL_EMBED,
      contents: queryForEmbedding,
      config: {
        taskType: 'RETRIEVAL_QUERY',
        outputDimensionality: ragIndex.dimensions || 768,
      },
    });

    const queryValues = embedRes.embeddings?.[0]?.values;
    if (!queryValues || queryValues.length === 0) {
      throw new Error('Không thể tạo vector embedding cho câu hỏi.');
    }
    const queryVector = normalizeL2(queryValues);

    const ranked = ragIndex.chunks
      .map((chunk) => ({
        chunk,
        score: dotProduct(queryVector, chunk.vector),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_K);

    // Select top relevant reference cards strictly by semantic score (zero keyword rules)
    const seenSourceKeys = new Set<string>();
    const sources: RetrievedSource[] = [];
    for (const item of ranked) {
      if (item.score < SOURCE_SCORE_THRESHOLD) continue;
      if (!item.chunk.image && !item.chunk.url && !item.chunk.sectionId) continue;
      const dedupeKey = `${item.chunk.title}|${item.chunk.url || ''}|${item.chunk.image || ''}`;
      if (seenSourceKeys.has(dedupeKey)) continue;
      seenSourceKeys.add(dedupeKey);
      sources.push({
        id: item.chunk.id,
        category: item.chunk.category,
        title: item.chunk.title,
        score: Number(item.score.toFixed(4)),
        sectionId: item.chunk.sectionId,
        url: item.chunk.url,
        urlLabel: item.chunk.urlLabel,
        image: item.chunk.image,
      });
      if (sources.length >= 3) break;
    }

    const contextBlock = ranked
      .map(
        ({ chunk, score }, idx) =>
          `### [${idx + 1}] ${chunk.title} (${chunk.category} • Độ tương đồng ngữ nghĩa: ${score.toFixed(3)})${
            chunk.url ? `\nLink: ${chunk.url}` : ''
          }\n${chunk.content}`
      )
      .join('\n\n');

    const historyText =
      messages.length > 1
        ? messages
            .slice(0, -1)
            .slice(-6)
            .map((m) => `${m.role === 'user' ? 'Người dùng' : 'Trợ lý AI'}: ${m.content}`)
            .join('\n\n')
        : 'Chưa có lượt hội thoại trước.';

    const compositeInput = `[KIẾN THỨC ĐƯỢC TRUY XUẤT TỪ HỒ SƠ THỰC TẾ]
${contextBlock}

[LỊCH SỬ HỘI THOẠI GẦN ĐÂY]
${historyText}

[CÂU HỎI HIỆN TẠI CỦA NGƯỜI DÙNG]
${currentTurn.content}`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    writeSseEvent(res, 'sources', {
      sources,
      topScore: ranked[0] ? Number(ranked[0].score.toFixed(4)) : 0,
    });

    const stream = await ai.interactions.create({
      model: MODEL_CHAT,
      system_instruction: SYSTEM_INSTRUCTION,
      input: compositeInput,
      stream: true,
    });

    for await (const event of stream) {
      if (res.writableEnded || res.destroyed) break;
      if (
        event.event_type === 'step.delta' &&
        event.delta?.type === 'text' &&
        typeof event.delta.text === 'string'
      ) {
        writeSseEvent(res, 'delta', { text: event.delta.text });
      }
    }

    if (!res.writableEnded && !res.destroyed) {
      writeSseEvent(res, 'done', { ok: true });
      res.end();
    }
  } catch (err) {
    const rawMsg = err instanceof Error ? err.message : 'Lỗi kết nối máy chủ Turnio AI.';
    const safeMsg = scrubSecrets(rawMsg);
    console.error('[RAG-CHAT] Error:', safeMsg);
    if (!res.headersSent) {
      sendJsonError(res, 500, safeMsg);
    } else if (!res.writableEnded && !res.destroyed) {
      writeSseEvent(res, 'error', { error: safeMsg });
      res.end();
    }
  }
}
