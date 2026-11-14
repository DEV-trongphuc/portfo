import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  Loader2,
  RotateCcw,
  Send,
  Sparkles,
  Square,
  X,
} from 'lucide-react';

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

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: RetrievedSource[];
  error?: string;
  isStreaming?: boolean;
}

interface AiPortfolioChatbotProps {
  onNavigateSection?: (sectionId: string) => void;
  hidden?: boolean;
}

interface StarterSuggestion {
  label: string;
  prompt: string;
}

const STARTER_SUGGESTIONS: StarterSuggestion[] = [
  {
    label: 'Các dự án nổi bật nhất',
    prompt: 'Kể về những dự án hệ thống & AI nổi bật nhất mà Huỳnh Trọng Phúc từng xây dựng?',
  },
  {
    label: 'Thế mạnh công nghệ & AI',
    prompt: 'Thế mạnh chuyên môn về Fullstack, hệ thống dữ liệu và AI Automation của Turnio là gì?',
  },
  {
    label: 'Kinh nghiệm triển khai doanh nghiệp',
    prompt: 'Turnio đã đồng hành triển khai chuyển đổi số cho những doanh nghiệp và đối tác tiêu biểu nào?',
  },
  {
    label: 'Liên hệ & hợp tác dự án',
    prompt: 'Tôi muốn kết nối hợp tác dự án hoặc trao đổi công việc với Huỳnh Trọng Phúc thì liên hệ qua đâu?',
  },
];

function createMsgId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function isSafeHref(rawUrl: string): boolean {
  const trimmed = rawUrl.trim();
  if (trimmed.startsWith('/')) return true;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIdx = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      tokens.push(
        <strong key={`b-${keyIdx++}`} className="font-semibold text-slate-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      tokens.push(
        <code
          key={`c-${keyIdx++}`}
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-100 text-[#1E40FF] font-mono text-[12px] border border-slate-200/80"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('[')) {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (linkMatch && isSafeHref(linkMatch[2])) {
        const external = /^https?:\/\//i.test(linkMatch[2]);
        tokens.push(
          <a
            key={`a-${keyIdx++}`}
            href={linkMatch[2]}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-[#1E40FF] underline decoration-[#1E40FF]/35 hover:decoration-[#1E40FF] font-medium inline-flex items-center gap-0.5"
          >
            {linkMatch[1]}
            {external && <ArrowUpRight size={11} className="inline shrink-0" />}
          </a>
        );
      } else {
        tokens.push(token);
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }

  return tokens;
}

function renderSafeMarkdown(raw: string): React.ReactNode {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  if (!normalized) return null;

  const lines = normalized.split('\n');
  const blocks: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let listItems: React.ReactNode[] = [];
  let keyIdx = 0;

  const flushList = () => {
    if (!listType || listItems.length === 0) return;
    if (listType === 'ul') {
      blocks.push(
        <ul key={`ul-${keyIdx++}`} className="list-disc pl-4 space-y-1 my-1.5 text-slate-700">
          {listItems}
        </ul>
      );
    } else {
      blocks.push(
        <ol key={`ol-${keyIdx++}`} className="list-decimal pl-4 space-y-1 my-1.5 text-slate-700">
          {listItems}
        </ol>
      );
    }
    listType = null;
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    const bulletMatch = /^[-*•]\s+(.+)$/.exec(trimmed);
    if (bulletMatch) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      listItems.push(
        <li key={`li-${keyIdx++}`} className="leading-relaxed">
          {renderInlineMarkdown(bulletMatch[1])}
        </li>
      );
      continue;
    }

    const orderedMatch = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (orderedMatch) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
      }
      listItems.push(
        <li key={`li-${keyIdx++}`} className="leading-relaxed">
          {renderInlineMarkdown(orderedMatch[1])}
        </li>
      );
      continue;
    }

    flushList();

    const headingMatch = /^#{1,4}\s+(.+)$/.exec(trimmed);
    if (headingMatch) {
      blocks.push(
        <p key={`h-${keyIdx++}`} className="font-bold text-slate-900 text-[13.5px] mt-2 first:mt-0">
          {renderInlineMarkdown(headingMatch[1])}
        </p>
      );
      continue;
    }

    blocks.push(
      <p key={`p-${keyIdx++}`} className="leading-relaxed text-slate-700">
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  }

  flushList();
  return <div className="space-y-1.5 text-[13.5px]">{blocks}</div>;
}

export const AiPortfolioChatbot: React.FC<AiPortfolioChatbotProps> = ({
  onNavigateSection,
  hidden = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [lastFailedPrompt, setLastFailedPrompt] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 639px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Lock background scroll only when mobile full-screen overlay is open
  useEffect(() => {
    if (!isOpen || !isMobile) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const scrollToBottom = useCallback((smooth = false) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(false);
    }
  }, [messages.length, isOpen, scrollToBottom]);

  const stopGeneration = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
    setMessages((prev) =>
      prev.map((m) => (m.isStreaming ? { ...m, isStreaming: false } : m))
    );
  }, []);

  const resetChat = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
    setLastFailedPrompt(null);
    setMessages([]);
    setInput('');
  }, []);

  const sendMessage = useCallback(
    async (rawText: string, options?: { isRetry?: boolean }) => {
      const prompt = rawText.trim();
      if (!prompt || isStreaming) return;

      setLastFailedPrompt(null);
      if (!options?.isRetry) {
        setInput('');
      }

      const userMsg: ChatMessage = {
        id: createMsgId(),
        role: 'user',
        content: prompt,
      };
      const assistantId = createMsgId();
      const assistantPlaceholder: ChatMessage = {
        id: assistantId,
        role: 'assistant',
        content: '',
        isStreaming: true,
      };

      const baseHistory = options?.isRetry
        ? messages.filter(
            (m, idx) => !(idx === messages.length - 1 && m.role === 'assistant' && m.error)
          )
        : messages;

      const apiHistory = [
        ...baseHistory
          .filter((m) => m.content.trim().length > 0 && !m.error)
          .map((m) => ({ role: m.role, content: m.content })),
        ...(options?.isRetry ? [] : [{ role: 'user' as const, content: prompt }]),
      ];

      setMessages((prev) => {
        const cleaned = options?.isRetry
          ? prev.filter(
              (m, idx) => !(idx === prev.length - 1 && m.role === 'assistant' && m.error)
            )
          : [...prev, userMsg];
        return [...cleaned, assistantPlaceholder];
      });

      setIsStreaming(true);
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
          },
          body: JSON.stringify({ messages: apiHistory }),
          signal: controller.signal,
        });

        const contentType = response.headers.get('content-type') || '';
        if (!response.ok || !contentType.includes('text/event-stream')) {
          let errMsg = `Không thể kết nối Turnio AI (HTTP ${response.status}).`;
          try {
            const payload = (await response.json()) as { error?: string };
            if (payload?.error) errMsg = payload.error;
          } catch {
            // Keep HTTP fallback
          }
          throw new Error(errMsg);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error('Trình duyệt không hỗ trợ đọc luồng phản hồi.');
        }

        const decoder = new TextDecoder();
        let buffer = '';
        let streamError: string | null = null;

        const processBlock = (rawBlock: string) => {
          const normalized = rawBlock.replace(/\r\n/g, '\n').trim();
          if (!normalized) return;

          let eventName = 'message';
          const dataLines: string[] = [];

          for (const line of normalized.split('\n')) {
            if (line.startsWith(':')) continue;
            if (line.startsWith('event:')) {
              eventName = line.slice(6).trim();
            } else if (line.startsWith('data:')) {
              dataLines.push(line.slice(5).trim());
            }
          }

          if (dataLines.length === 0) return;
          const rawJson = dataLines.join('\n');

          let parsed: Record<string, unknown>;
          try {
            parsed = JSON.parse(rawJson) as Record<string, unknown>;
          } catch {
            return;
          }

          if (eventName === 'sources') {
            const sources = Array.isArray(parsed.sources)
              ? (parsed.sources as RetrievedSource[])
              : [];
            setMessages((prev) =>
              prev.map((m) => (m.id === assistantId ? { ...m, sources } : m))
            );
          } else if (eventName === 'delta') {
            const deltaText = typeof parsed.text === 'string' ? parsed.text : '';
            if (!deltaText) return;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: m.content + deltaText } : m
              )
            );
            scrollToBottom(false);
          } else if (eventName === 'error') {
            const errText =
              typeof parsed.error === 'string'
                ? parsed.error
                : 'Lỗi kết nối máy chủ Turnio AI. Vui lòng thử lại.';
            streamError = errText;
            setLastFailedPrompt(prompt);
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, error: errText, isStreaming: false } : m
              )
            );
          } else if (eventName === 'done') {
            setMessages((prev) =>
              prev.map((m) => (m.id === assistantId ? { ...m, isStreaming: false } : m))
            );
          }
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, '\n');

          let separatorIdx = buffer.indexOf('\n\n');
          while (separatorIdx !== -1) {
            const block = buffer.slice(0, separatorIdx);
            buffer = buffer.slice(separatorIdx + 2);
            processBlock(block);
            separatorIdx = buffer.indexOf('\n\n');
          }
        }

        if (buffer.trim()) {
          processBlock(buffer);
        }

        if (!streamError) {
          setMessages((prev) =>
            prev.map((m) => {
              if (m.id !== assistantId) return m;
              if (!m.content.trim() && !m.error) {
                return {
                  ...m,
                  isStreaming: false,
                  error: 'Chưa nhận được phản hồi từ hệ thống. Vui lòng thử lại.',
                };
              }
              return { ...m, isStreaming: false };
            })
          );
        }
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, isStreaming: false } : m))
          );
          return;
        }
        const errMessage =
          err instanceof Error && err.message
            ? err.message
            : 'Không thể kết nối máy chủ Turnio AI lúc này.';
        setLastFailedPrompt(prompt);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, error: errMessage, isStreaming: false } : m
          )
        );
      } finally {
        abortRef.current = null;
        setIsStreaming(false);
        scrollToBottom(true);
      }
    },
    [isStreaming, messages, scrollToBottom]
  );

  const handleSourceJump = useCallback(
    (sectionId: string) => {
      if (isMobile) {
        setIsOpen(false);
      }
      onNavigateSection?.(sectionId);
    },
    [isMobile, onNavigateSection]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  };

  if (hidden && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Floating Personalized Turnio AI Launcher */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => inputRef.current?.focus(), 120);
          }}
          aria-label="Mở trợ lý Turnio AI"
          data-testid="ai-chatbot-launcher"
          style={{ color: '#FFFFFF' }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] group flex items-center justify-center sm:justify-start gap-2.5 w-12 h-12 sm:w-auto sm:h-12 sm:pl-2 sm:pr-4 rounded-full bg-gradient-to-tr from-[#1E40FF] via-[#2563EB] to-[#0EA5E9] text-white shadow-[0_14px_34px_-6px_rgba(30,64,255,0.48)] hover:shadow-[0_18px_40px_-4px_rgba(30,64,255,0.62)] hover:scale-[1.03] active:scale-[0.98] transition-all border border-white/25 cursor-pointer"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/18 backdrop-blur-md">
            <Sparkles size={18} color="#FFFFFF" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#1E40FF]" />
          </span>
          <span className="hidden sm:flex flex-col items-start leading-tight">
            <span style={{ color: '#FFFFFF' }} className="text-[13px] font-bold tracking-tight">
              Hỏi Turnio AI
            </span>
            <span style={{ color: '#E0F2FE' }} className="text-[10.5px] font-medium">
              Trợ lý cá nhân hóa
            </span>
          </span>
        </button>
      )}

      {/* Chatbot Panel: Spacious floating window on >= sm, Full-screen 100dvh on Mobile */}
      {isOpen && (
        <aside
          aria-label="Trợ lý AI cá nhân của Turnio"
          data-testid="ai-chatbot-panel"
          className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-[70] flex flex-col w-full h-[100dvh] sm:w-[490px] md:w-[530px] lg:w-[560px] sm:max-w-[calc(100vw-2.5rem)] sm:h-[min(680px,calc(100dvh-2.5rem))] sm:max-h-[calc(100dvh-2.5rem)] rounded-none sm:rounded-[24px] bg-white/98 sm:bg-white/95 backdrop-blur-2xl border-0 sm:border sm:border-slate-200/90 shadow-[0_28px_72px_-12px_rgba(30,64,255,0.22),0_10px_28px_-6px_rgba(15,23,42,0.12)] overflow-hidden"
        >
          {/* High-contrast Personal Header (avoids global h2 color cascade) */}
          <header className="shrink-0 flex items-center justify-between gap-3 px-4 sm:px-5 pt-[max(0.9rem,env(safe-area-inset-top))] pb-3.5 bg-gradient-to-r from-[#0F172A] via-[#172554] to-[#1E40FF] border-b border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0 w-10 h-10 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
                <Bot size={20} color="#FFFFFF" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#172554]" />
              </div>
              <div className="min-w-0">
                <p
                  role="heading"
                  aria-level={2}
                  style={{ color: '#FFFFFF' }}
                  className="text-[15.5px] font-bold tracking-tight truncate m-0 leading-snug"
                >
                  Turnio AI
                </p>
                <p
                  style={{ color: '#DBEAFE' }}
                  className="text-[11.5px] truncate m-0 leading-snug"
                >
                  Trợ lý cá nhân • Huỳnh Trọng Phúc
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={resetChat}
                  title="Tạo cuộc trò chuyện mới"
                  aria-label="Tạo cuộc trò chuyện mới"
                  style={{ color: '#FFFFFF' }}
                  className="p-2 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <RotateCcw size={16} color="#FFFFFF" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Đóng trợ lý AI"
                aria-label="Đóng trợ lý AI"
                data-testid="ai-chatbot-close"
                style={{ color: '#FFFFFF' }}
                className="p-2 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
              >
                <X size={18} color="#FFFFFF" />
              </button>
            </div>
          </header>

          {/* Messages Area */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 flex flex-col bg-slate-50/60"
          >
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col justify-between gap-6">
                {/* Simple, breathable welcome message */}
                <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white border border-slate-200/90 px-4 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
                  <p className="text-[13.5px] leading-relaxed text-slate-700 m-0">
                    Chào bạn! Mình là <strong className="text-slate-900">Turnio AI</strong> — trợ lý cá nhân được huấn luyện từ hồ sơ dự án & kinh nghiệm thực chiến của <strong className="text-slate-900">Huỳnh Trọng Phúc</strong>. Bạn muốn tìm hiểu thông tin gì hôm nay?
                  </p>
                </div>

                {/* Compact bottom suggestion pills (does NOT fill the whole chat viewport) */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-0.5 m-0">
                    Gợi ý nhanh
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {STARTER_SUGGESTIONS.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => void sendMessage(item.prompt)}
                        className="px-3.5 py-2 rounded-full bg-white hover:bg-blue-50/80 border border-slate-200 hover:border-[#1E40FF]/45 text-[12.5px] font-medium text-slate-700 hover:text-[#1E40FF] transition-all shadow-[0_1px_4px_rgba(15,23,42,0.03)] cursor-pointer text-left"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => {
                  if (msg.role === 'user') {
                    return (
                      <div key={msg.id} className="flex justify-end">
                        <div
                          style={{ color: '#FFFFFF' }}
                          className="max-w-[84%] px-4 py-2.5 rounded-2xl rounded-br-md bg-[#1E40FF] text-[13.5px] leading-relaxed shadow-[0_6px_16px_-4px_rgba(30,64,255,0.32)]"
                        >
                          {msg.content}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={msg.id} className="flex flex-col items-start gap-2">
                      {/* Assistant Bubble */}
                      <div className="max-w-[94%] rounded-2xl rounded-tl-md bg-white border border-slate-200/90 px-4 py-3 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                        {msg.error ? (
                          <div className="space-y-2">
                            <p className="text-[13px] text-rose-600 font-medium leading-relaxed m-0">
                              {msg.error}
                            </p>
                            {lastFailedPrompt && (
                              <button
                                type="button"
                                onClick={() =>
                                  void sendMessage(lastFailedPrompt, { isRetry: true })
                                }
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-[12px] font-semibold border border-rose-200 transition-colors cursor-pointer"
                              >
                                <RotateCcw size={12} />
                                <span>Thử lại câu hỏi</span>
                              </button>
                            )}
                          </div>
                        ) : msg.content ? (
                          <>
                            {renderSafeMarkdown(msg.content)}
                            {msg.isStreaming && (
                              <span className="inline-block w-1.5 h-3.5 ml-1 align-middle bg-[#1E40FF] animate-pulse rounded-xs" />
                            )}
                          </>
                        ) : (
                          <div className="flex items-center gap-2 text-[12.5px] text-slate-500">
                            <Loader2 size={14} className="animate-spin text-[#1E40FF]" />
                            <span>Turnio AI đang trả lời...</span>
                          </div>
                        )}
                      </div>

                      {/* Subtle Related Portfolio Sources when present */}
                      {msg.sources && msg.sources.length > 0 && !msg.isStreaming && !msg.error && (
                        <div className="w-full flex gap-2 overflow-x-auto pb-0.5">
                          {msg.sources.map((src) => (
                            <div
                              key={src.id}
                              className="shrink-0 max-w-[230px] rounded-xl bg-white border border-slate-200/85 px-2.5 py-2 flex items-center gap-2.5 shadow-[0_1px_4px_rgba(15,23,42,0.03)]"
                            >
                              {src.image && (
                                <img
                                  src={src.image}
                                  alt={src.title}
                                  loading="lazy"
                                  className="w-9 h-9 rounded-lg object-cover shrink-0 border border-slate-100"
                                />
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-[11.5px] font-semibold text-slate-800 truncate leading-snug m-0">
                                  {src.title}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5 text-[10.5px] font-semibold">
                                  {src.sectionId && onNavigateSection && (
                                    <button
                                      type="button"
                                      onClick={() => handleSourceJump(src.sectionId!)}
                                      className="text-[#1E40FF] hover:underline cursor-pointer"
                                    >
                                      Xem mục này
                                    </button>
                                  )}
                                  {src.url && (
                                    <a
                                      href={src.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-0.5 text-slate-500 hover:text-[#1E40FF]"
                                    >
                                      <span>{src.urlLabel || 'Mở link'}</span>
                                      <ExternalLink size={9.5} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Clean Composer */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 px-3.5 sm:px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white border-t border-slate-200/85"
          >
            <div className="flex items-end gap-2 rounded-2xl bg-slate-50 border border-slate-200 focus-within:border-[#1E40FF]/55 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1E40FF]/10 px-3.5 py-2 transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleTextareaKeyDown}
                rows={1}
                placeholder="Nhắn tin với Turnio AI..."
                aria-label="Nhập câu hỏi cho Turnio AI"
                data-testid="ai-chatbot-input"
                className="flex-1 resize-none bg-transparent text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:outline-none max-h-28 leading-5 py-1"
              />
              {isStreaming ? (
                <button
                  type="button"
                  onClick={stopGeneration}
                  aria-label="Dừng trả lời"
                  style={{ color: '#FFFFFF' }}
                  className="shrink-0 w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Square size={14} color="#FFFFFF" fill="#FFFFFF" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Gửi tin nhắn"
                  data-testid="ai-chatbot-send"
                  style={{ color: input.trim() ? '#FFFFFF' : '#94A3B8' }}
                  className="shrink-0 w-9 h-9 rounded-xl bg-[#1E40FF] hover:bg-[#1733CC] disabled:bg-slate-200 flex items-center justify-center transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                </button>
              )}
            </div>
          </form>
        </aside>
      )}
    </>
  );
};
