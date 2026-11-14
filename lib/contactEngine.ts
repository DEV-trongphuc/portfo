import type { IncomingMessage, ServerResponse } from 'node:http';

export const DEFAULT_APPS_SCRIPT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbw3rzpfXvneN7mAVgvUFAmrP0BvkdU1yK1JCyiCAJp49bI_HRTr1Lkp07Q4BahEzYko2w/exec';

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  pageUrl?: string;
}

function sendJson(res: ServerResponse, status: number, body: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

async function readBody(req: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export async function handleContactHttp(
  req: IncomingMessage,
  res: ServerResponse,
  explicitWebhookUrl?: string
) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'Method Not Allowed' });
  }

  let parsed: ContactPayload;
  try {
    const raw = await readBody(req);
    parsed = JSON.parse(raw || '{}') as ContactPayload;
  } catch {
    return sendJson(res, 400, { ok: false, error: 'JSON không hợp lệ.' });
  }

  const name = (parsed.name ?? '').trim();
  const phone = (parsed.phone ?? '').trim();
  const email = (parsed.email ?? '').trim();
  const company = (parsed.company ?? '').trim();
  const service = (parsed.service ?? 'Tư vấn Hệ thống / AI / Martech').trim();
  const message = (parsed.message ?? '').trim();
  const pageUrl = (parsed.pageUrl ?? '').trim();

  if (!name || name.length < 2) {
    return sendJson(res, 400, { ok: false, error: 'Vui lòng nhập Họ và Tên.' });
  }
  if (!phone || !/^[0-9+\s().-]{8,18}$/.test(phone)) {
    return sendJson(res, 400, { ok: false, error: 'Số điện thoại chưa đúng định dạng.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendJson(res, 400, { ok: false, error: 'Email chưa đúng định dạng.' });
  }
  if (!company || company.length < 2) {
    return sendJson(res, 400, { ok: false, error: 'Vui lòng nhập tên Đơn vị / Công ty.' });
  }

  const webhookUrl = (
    explicitWebhookUrl ||
    process.env.APPS_SCRIPT_WEBHOOK_URL ||
    DEFAULT_APPS_SCRIPT_WEBHOOK_URL
  ).trim();

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
      body: JSON.stringify({
        name,
        phone,
        email,
        company,
        service,
        message,
        pageUrl,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const text = await upstream.text();
    let result: Record<string, unknown> = {};
    try {
      result = JSON.parse(text) as Record<string, unknown>;
    } catch {
      return sendJson(res, 502, {
        ok: false,
        error: 'Google Apps Script không trả về JSON hợp lệ.',
      });
    }

    if (!upstream.ok || result.ok === false) {
      return sendJson(res, 502, {
        ok: false,
        error: String(result.error ?? `Apps Script HTTP ${upstream.status}`),
      });
    }

    return sendJson(res, 200, {
      ok: true,
      mode: 'apps_script',
      rowNumber: result.rowNumber ?? null,
      emailSent: Boolean(result.emailSent),
      timestamp: result.timestamp ?? null,
    });
  } catch (err) {
    return sendJson(res, 504, {
      ok: false,
      error: `Không thể kết nối Google Apps Script: ${String(err)}`,
    });
  }
}
