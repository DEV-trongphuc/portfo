import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  MousePointerClick,
  Play,
  Radio,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const STORY_ACTS = [
  {
    step: '00s • Capture Webhook',
    title: 'Bắt trọn Lead từ Ads & Web 3D ngay lập tức',
    desc: 'Tự động ghi nhận dữ liệu qua Webhook, không rơi rụng trên file Excel.',
    icon: <MousePointerClick size={16} className="text-[#1E40FF]" />,
    badge: 'Capture',
  },
  {
    step: '< 4.2s • Dedupe & ZaloBot',
    title: 'Lọc trùng 6 tháng & chia xoay vòng Đại lý F1',
    desc: 'Chấm điểm nhu cầu và bắn thông báo tức thì qua ZaloBot & CRM.',
    icon: <Zap size={16} className="text-[#0284C7]" />,
    badge: 'Dispatch',
  },
  {
    step: '24/7 • Feedback Meta CAPI',
    title: 'Gửi trạng thái chốt đơn ngược về Meta HTTP 200',
    desc: 'Mã hóa SHA-256 giúp AI quảng cáo tự lọc rác và tìm khách mua thật.',
    icon: <Radio size={16} className="text-emerald-600" />,
    badge: 'Meta CAPI',
  },
];

const TheBridge: React.FC = () => {
  // Interactive 4-second live pipeline simulation (-1 = idle, 0/1/2 = active step, 3 = HTTP 200 completed)
  const [simStep, setSimStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;
    setSimStep(0);
    const t1 = window.setTimeout(() => setSimStep(1), 950);
    const t2 = window.setTimeout(() => setSimStep(2), 1950);
    const t3 = window.setTimeout(() => {
      setSimStep(3);
      setIsRunning(false);
    }, 3000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [isRunning]);

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
  };

  return (
    <section className="py-16 lg:py-20 relative z-10 overflow-hidden">
      <div className="mx-auto px-4 sm:px-8 max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Right (Desktop): Narrative Storytelling */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div>
              <motion.span
                initial={{ opacity: 1, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                className="inline-flex items-center gap-1.5 text-[#1E40FF] font-bold tracking-[0.2em] uppercase text-[11px] mb-2"
              >
                <Sparkles size={12} /> The Hybrid Story • Marketing Gặp Code
              </motion.span>

              <motion.h2
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-950 leading-[1.35] mb-3"
              >
                Từ 1 click quảng cáo thành{' '}
                <span className="block font-editorial text-gradient-inkica">
                  lịch hẹn trong 4 giây.
                </span>
              </motion.h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Loại bỏ độ trễ xử lý dữ liệu và đứt gãy phản hồi ngược về nền tảng quảng cáo.
              </p>
            </div>

            <ResponsiveSlideDeck
              items={STORY_ACTS}
              keyExtractor={(act) => act.badge}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-1"
              gapClass="gap-3"
              ariaLabel="Quy trình Lead 4 giây"
              renderItem={(act, idx) => {
                const isActive = simStep === idx;
                const isDone = simStep > idx;
                return (
                  <div
                    className={`rounded-2xl p-4 transition-all h-full border ${
                      isActive
                        ? 'bg-blue-50/90 border-[#1E40FF] ring-2 ring-[#1E40FF]/20 shadow-md -translate-y-0.5'
                        : isDone
                        ? 'bg-emerald-50/60 border-emerald-300 shadow-xs'
                        : 'bg-white/95 border-slate-200/90 hover:border-[#1E40FF]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isDone
                            ? 'bg-emerald-100 border-emerald-200 text-emerald-600'
                            : isActive
                            ? 'bg-white border-[#1E40FF]/40'
                            : 'bg-blue-50 border-blue-100'
                        }`}
                      >
                        {isDone ? <CheckCircle2 size={16} /> : act.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                            {act.step}
                          </span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1E40FF] text-white text-[9.5px] font-bold animate-pulse">
                              Đang chạy...
                            </span>
                          )}
                          {isDone && (
                            <span className="text-[10px] font-bold text-emerald-700">✓ Hoàn tất</span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-slate-950 leading-snug mb-1">
                          {act.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{act.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>

          {/* Left (Desktop): Interactive Light Glass IDE Execution Pipeline Card */}
          <motion.div
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6 order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_24px_60px_-20px_rgba(30,64,255,0.16)] text-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#1E40FF] flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/75">
                    <GitBranch size={12} /> automation-pipeline.ts
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E40FF] hover:bg-blue-700 disabled:opacity-60 text-white text-[10.5px] font-bold shadow-xs transition-all cursor-pointer"
                >
                  {simStep === 3 ? <RotateCcw size={11} /> : <Play size={11} />}
                  <span>
                    {isRunning
                      ? 'Đang mô phỏng...'
                      : simStep === 3
                      ? 'Chạy lại Demo'
                      : 'Chạy Thử Pipeline (4s)'}
                  </span>
                </button>
              </div>

              <div className="font-mono text-xs leading-relaxed space-y-2 overflow-x-auto rounded-2xl bg-slate-50/90 border border-slate-200/80 p-3.5 sm:p-4">
                <div
                  className={`rounded-xl px-2.5 py-1.5 transition-colors ${
                    simStep === 0
                      ? 'bg-blue-100/80 border-l-2 border-[#1E40FF]'
                      : simStep > 0
                      ? 'bg-emerald-50/70'
                      : ''
                  }`}
                >
                  <div className="text-slate-400">// 01. Lead Trigger -&gt; Dedupe &amp; Score</div>
                  <div>
                    <span className="text-[#1E40FF] font-semibold">const</span> lead ={' '}
                    <span className="text-indigo-600 font-semibold">await</span>{' '}
                    captureLead(webhookPayload);
                  </div>
                  <div>
                    <span className="text-[#1E40FF] font-semibold">const</span> isClean = !{' '}
                    <span className="text-indigo-600 font-semibold">await</span>{' '}
                    dedupe6Months(lead.phoneHash);
                  </div>
                </div>

                <div
                  className={`rounded-xl px-2.5 py-1.5 transition-colors ${
                    simStep === 1
                      ? 'bg-blue-100/80 border-l-2 border-[#1E40FF]'
                      : simStep > 1
                      ? 'bg-emerald-50/70'
                      : ''
                  }`}
                >
                  <div className="text-slate-400">// 02. Round-Robin F1 Agency &amp; ZaloBot</div>
                  <div>
                    <span className="text-[#1E40FF] font-semibold">if</span> (isClean) {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#1E40FF] font-semibold">await</span>{' '}
                    <span className="text-emerald-700 font-semibold">zaloBot.dispatchNextAgency</span>
                    (lead, [<span className="text-amber-600">&apos;Tùng Long&apos;</span>,{' '}
                    <span className="text-amber-600">&apos;Hợp Nhất&apos;</span>,{' '}
                    <span className="text-amber-600">&apos;IHD&apos;</span>]);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#1E40FF] font-semibold">await</span>{' '}
                    crm.autoScoreQuality(lead.id);
                  </div>
                  <div>{'}'}</div>
                </div>

                <div
                  className={`rounded-xl px-2.5 py-1.5 transition-colors ${
                    simStep === 2
                      ? 'bg-blue-100/80 border-l-2 border-[#1E40FF]'
                      : simStep > 2
                      ? 'bg-emerald-50/70'
                      : ''
                  }`}
                >
                  <div className="text-slate-400">// 03. Feedback Loop -&gt; Meta CAPI HTTP 200</div>
                  <div>
                    <span className="text-[#1E40FF] font-semibold">await</span>{' '}
                    <span className="text-sky-700 font-semibold">metaCAPI.sendEvent</span>(lead.status
                    === <span className="text-emerald-700 font-semibold">&apos;QUALIFIED&apos;</span>{' '}
                    ? <span className="text-emerald-700 font-semibold">&apos;Schedule&apos;</span> :{' '}
                    <span className="text-rose-600 font-semibold">&apos;DisqualifiedLead&apos;</span>);
                  </div>
                </div>
              </div>

              {simStep >= 0 && (
                <div className="mt-3 px-3.5 py-2 rounded-xl bg-slate-900 text-white font-mono text-[11px] flex items-center justify-between gap-2">
                  <span className="truncate">
                    {simStep === 0 && '→ [0.4s] Webhook Lead captured & hashed SHA-256'}
                    {simStep === 1 && '→ [1.9s] ZaloBot Alert dispatched to Đại lý F1 #1'}
                    {simStep === 2 && '→ [3.1s] Sending Conversion Event to Meta Graph API...'}
                    {simStep === 3 && '✓ [3.8s] Pipeline complete • HTTP 200 OK'}
                  </span>
                  <span
                    className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold ${
                      simStep === 3 ? 'bg-emerald-500 text-slate-950' : 'bg-blue-500 text-white'
                    }`}
                  >
                    {simStep === 3 ? '200 OK' : `STEP ${simStep + 1}/3`}
                  </span>
                </div>
              )}

              {/* Compact Bottom Pipeline Status Bar */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-blue-50/75 border border-blue-200/70 p-2.5">
                  <div className="text-sm font-black text-[#1E40FF]">0.8s</div>
                  <div className="text-[10px] font-medium text-slate-600">ZaloBot Alert</div>
                </div>
                <div className="rounded-xl bg-emerald-50/75 border border-emerald-200/70 p-2.5">
                  <div className="text-sm font-black text-emerald-600">100%</div>
                  <div className="text-[10px] font-medium text-slate-600">SHA-256 CAPI</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-2.5">
                  <div className="text-sm font-black text-slate-900 inline-flex items-center gap-1 justify-center">
                    Zero <ArrowRight size={11} className="text-[#1E40FF]" />
                  </div>
                  <div className="text-[10px] font-medium text-slate-600">Lead Sót / Ôm</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheBridge;
