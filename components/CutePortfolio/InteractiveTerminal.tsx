import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warning' | 'input' | 'output';
  time: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  };

  // Add initial lines on mount
  useEffect(() => {
    setLogs([
      { text: 'Initializing DOMATION Command Core v2.4.9...', type: 'info', time: getTimestamp() },
      { text: 'Connecting to Meta Ads Conversion API webhook...', type: 'info', time: getTimestamp() },
      { text: 'System Health: 100% | CPU Load: 1.2% | Database: Connected', type: 'success', time: getTimestamp() },
      { text: 'AI Knowledge Base loaded (650 topics trained).', type: 'success', time: getTimestamp() },
      { text: 'Type /help to view interactive commands.', type: 'warning', time: getTimestamp() },
    ]);
  }, []);

  // Simulate background MarTech logs
  useEffect(() => {
    const mockEvents = [
      { text: 'Meta Ads Webhook: 1 new Lead generated from Flora Campaign.', type: 'success' },
      { text: 'AutoFlow Pro: Routed lead data to CRM database (Round-Robin).', type: 'info' },
      { text: 'Zalo Bot: Dispatched voucher ZNS message to user (+8493xxxx241).', type: 'success' },
      { text: 'LMS Sync: Enrolled 3 new doctors to CME Training course.', type: 'info' },
      { text: 'Mystery Tarot: Gemini AI automatically drafted 1 new SEO article.', type: 'success' },
      { text: 'Security Core: Port scanning check passed. Firewall ACTIVE.', type: 'info' },
      { text: 'System Check: Memory optimization complete. Freed 24MB.', type: 'warning' },
    ];

    const interval = setInterval(() => {
      const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)];
      setLogs((prev) => [
        ...prev,
        { text: randomEvent.text, type: randomEvent.type as any, time: getTimestamp() }
      ]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom of console
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputValue.trim();
    if (!cleanCmd) return;

    // Add command to log
    const userLog: LogLine = {
      text: `guest@domation:~$ ${cleanCmd}`,
      type: 'input',
      time: getTimestamp(),
    };

    let replyLogs: LogLine[] = [];

    // Parse command
    const parts = cleanCmd.split(' ');
    const cmd = parts[0].toLowerCase();

    switch (cmd) {
      case '/help':
        replyLogs = [
          { text: 'Available interactive commands:', type: 'info', time: getTimestamp() },
          { text: '  /status    - Display live system resources & server health.', type: 'output', time: getTimestamp() },
          { text: '  /skills    - Render Huynh Trong Phuc\'s skill breakdown in ASCII.', type: 'output', time: getTimestamp() },
          { text: '  /projects  - List main digital products built & managed.', type: 'output', time: getTimestamp() },
          { text: '  /optimize  - Launch AI optimization algorithm on client page.', type: 'output', time: getTimestamp() },
          { text: '  /contact   - Get developer coordinates (Email, Zalo, Site).', type: 'output', time: getTimestamp() },
          { text: '  /clear     - Wipe out all console screen buffers.', type: 'output', time: getTimestamp() },
        ];
        break;
      case '/status':
        replyLogs = [
          { text: '--- SYSTEM OVERVIEW ---', type: 'info', time: getTimestamp() },
          { text: `Uptime: ${(performance.now() / 1000 / 60).toFixed(2)} mins`, type: 'output', time: getTimestamp() },
          { text: 'NodeJS V8 Thread: ACTIVE', type: 'output', time: getTimestamp() },
          { text: 'Active Webhooks Stream: 2.12 req/sec', type: 'success', time: getTimestamp() },
          { text: 'Network Latency: 12ms (Cloudflare Edge CDN)', type: 'output', time: getTimestamp() },
        ];
        break;
      case '/skills':
        replyLogs = [
          { text: '--- DEV & MARTECH EXPERIENCE STACK ---', type: 'info', time: getTimestamp() },
          { text: 'Automation Flow: [██████████████████] 99%', type: 'success', time: getTimestamp() },
          { text: 'React & NodeJS:  [████████████████░░] 88%', type: 'output', time: getTimestamp() },
          { text: 'Meta/Google Ads: [█████████████████░] 92%', type: 'output', time: getTimestamp() },
          { text: 'Zalo Mini Apps:  [███████████████░░░] 82%', type: 'output', time: getTimestamp() },
        ];
        break;
      case '/projects':
        replyLogs = [
          { text: '--- CORE SYSTEMS DEVELOPED ---', type: 'info', time: getTimestamp() },
          { text: '1. DOMATION CRM (Enterprise SME Customer & Pipeline Core)', type: 'output', time: getTimestamp() },
          { text: '2. AutoFlow Pro (Multi-channel Marketing Automation Engine)', type: 'output', time: getTimestamp() },
          { text: '3. Mystery Tarot (Gemini AI Powered Content Generation App)', type: 'output', time: getTimestamp() },
          { text: '4. LMS E-learning Platform (Admissions & Course Delivery System)', type: 'output', time: getTimestamp() },
        ];
        break;
      case '/optimize':
        replyLogs = [
          { text: 'Executing page audit...', type: 'warning', time: getTimestamp() },
          { text: 'Scanning assets... Loading compressed WebP images... Done.', type: 'output', time: getTimestamp() },
          { text: 'Tuning Framer Motion physics... Smooth physics active.', type: 'output', time: getTimestamp() },
          { text: 'Compressing DOM nodes... 99.9% layout score achieved.', type: 'success', time: getTimestamp() },
          { text: '🚀 System fully optimized! Giao diện mượt như Sunsilk!', type: 'success', time: getTimestamp() },
        ];
        break;
      case '/contact':
        replyLogs = [
          { text: '--- COORDINATES ---', type: 'info', time: getTimestamp() },
          { text: 'Email: contact@domation.net', type: 'output', time: getTimestamp() },
          { text: 'Website: https://domation.net', type: 'output', time: getTimestamp() },
          { text: 'Zalo / Phone: +84 93 xxxx 882', type: 'output', time: getTimestamp() },
        ];
        break;
      case '/clear':
        setLogs([]);
        setInputValue('');
        return;
      default:
        replyLogs = [
          { text: `Error: command "${cleanCmd}" not found. Type /help to see list.`, type: 'warning', time: getTimestamp() }
        ];
    }

    setLogs((prev) => [...prev, userLog, ...replyLogs]);
    setHistory((prev) => [cleanCmd, ...prev]);
    setHistoryIndex(-1);
    setInputValue('');
  };

  // Keyboard navigation for command history
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputValue(history[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  return (
    <div className="bg-[#05020c]/90 border border-purple-500/25 rounded-2xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(168,85,247,0.3)] backdrop-blur-xl w-full">
      {/* Terminal Title Bar */}
      <div className="bg-[#12082b]/80 border-b border-purple-500/15 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Traffic Lights Controls */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider ml-2 flex items-center gap-1.5">
            <TerminalIcon size={12} className="text-purple-400" />
            domation-core-console ~ bash
          </span>
        </div>
        <div className="flex items-center gap-4 text-[9px] text-slate-500 font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1"><Cpu size={10} className="text-emerald-500 animate-pulse" /> 1.2% CPU</span>
          <span className="flex items-center gap-1"><ShieldAlert size={10} className="text-purple-400" /> Secure SSL</span>
        </div>
      </div>

      {/* Terminal Display Logs */}
      <div className="p-4 sm:p-5 h-64 overflow-y-auto font-mono text-[10px] sm:text-xs leading-relaxed text-justify space-y-1.5 select-text selection:bg-purple-500/30 selection:text-white">
        {logs.map((log, idx) => {
          let textClass = 'text-slate-300';
          let prefix = '';

          if (log.type === 'success') {
            textClass = 'text-emerald-400';
            prefix = '[✔] ';
          } else if (log.type === 'warning') {
            textClass = 'text-amber-400 font-bold';
            prefix = '[!] ';
          } else if (log.type === 'input') {
            textClass = 'text-purple-300 font-bold';
          } else if (log.type === 'output') {
            textClass = 'text-slate-400';
          }

          return (
            <div key={idx} className={`flex items-start gap-2.5 ${textClass}`}>
              <span className="text-slate-600 select-none shrink-0">[{log.time}]</span>
              <span className="break-all">{prefix}{log.text}</span>
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleCommandSubmit} className="bg-[#030014]/60 border-t border-purple-500/10 px-4 py-3 flex items-center gap-2">
        <span className="text-purple-400 font-mono text-xs select-none">guest@domation:~$</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type /help and press Enter..."
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-600 selection:bg-purple-500/30"
          autoFocus={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button type="submit" className="hidden" />
      </form>
    </div>
  );
};
