import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, MousePointerClick, Radio, Sparkles, Zap } from 'lucide-react';

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
                <br className="hidden sm:inline" />
                <span className="font-editorial text-gradient-inkica">lịch hẹn trong 4 giây.</span>
              </motion.h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Loại bỏ độ trễ xử lý dữ liệu và đứt gãy phản hồi ngược về nền tảng quảng cáo.
              </p>
            </div>

            <div className="space-y-3">
              {STORY_ACTS.map((act, idx) => (
                <motion.div
                  key={act.badge}
                  initial={{ opacity: 1, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/40 rounded-2xl p-4 shadow-xs transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      {act.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                          {act.step}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-950 leading-snug mb-1">
                        {act.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{act.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Left (Desktop): Live Execution Pipeline Visual */}
          <motion.div
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6 order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl bg-[#0B1120] border border-slate-800 p-5 sm:p-6 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.45)] text-slate-200">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-sky-400 flex items-center gap-1.5">
                  <GitBranch size={12} /> automation-pipeline.ts
                </span>
              </div>

              <div className="font-mono text-xs leading-relaxed space-y-1.5 overflow-x-auto">
                <div className="text-slate-500">// 01. Lead Trigger -&gt; Dedupe &amp; Score</div>
                <div>
                  <span className="text-sky-400">const</span> lead ={' '}
                  <span className="text-indigo-300">await</span> captureLead(webhookPayload);
                </div>
                <div>
                  <span className="text-sky-400">const</span> isClean = !{' '}
                  <span className="text-indigo-300">await</span> dedupe6Months(lead.phoneHash);
                </div>

                <div className="pt-2 text-slate-500">// 02. Round-Robin F1 Agency &amp; ZaloBot</div>
                <div>
                  <span className="text-sky-400">if</span> (isClean) {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">await</span>{' '}
                  <span className="text-emerald-400">zaloBot.dispatchNextAgency</span>(lead, [
                  <span className="text-amber-300">&apos;Tùng Long&apos;</span>,{' '}
                  <span className="text-amber-300">&apos;Hợp Nhất&apos;</span>,{' '}
                  <span className="text-amber-300">&apos;IHD&apos;</span>]);
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">await</span> crm.autoScoreQuality(lead.id);
                </div>
                <div>{'}'}</div>

                <div className="pt-2 text-slate-500">// 03. Feedback Loop -&gt; Meta CAPI HTTP 200</div>
                <div>
                  <span className="text-sky-400">await</span>{' '}
                  <span className="text-cyan-300">metaCAPI.sendEvent</span>(lead.status ==={' '}
                  <span className="text-emerald-300">&apos;QUALIFIED&apos;</span> ?{' '}
                  <span className="text-emerald-300">&apos;Schedule&apos;</span> :{' '}
                  <span className="text-rose-400">&apos;DisqualifiedLead&apos;</span>);
                </div>
              </div>

              {/* Compact Bottom Pipeline Status Bar */}
              <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
                  <div className="text-sm font-black text-sky-400">0.8s</div>
                  <div className="text-[10px] text-slate-400">ZaloBot Alert</div>
                </div>
                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
                  <div className="text-sm font-black text-emerald-400">100%</div>
                  <div className="text-[10px] text-slate-400">SHA-256 CAPI</div>
                </div>
                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
                  <div className="text-sm font-black text-white inline-flex items-center gap-1 justify-center">
                    Zero <ArrowRight size={11} className="text-sky-400" />
                  </div>
                  <div className="text-[10px] text-slate-400">Lead Sót / Ôm</div>
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
