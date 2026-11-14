import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, MousePointerClick, Radio, Sparkles, Zap } from 'lucide-react';
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
              renderItem={(act) => (
                <div className="bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/40 rounded-2xl p-4 shadow-xs transition-all h-full">
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
                </div>
              )}
            />
          </div>

          {/* Left (Desktop): Clean Light Glass IDE Execution Pipeline Card */}
          <motion.div
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6 order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_24px_60px_-20px_rgba(30,64,255,0.16)] text-slate-800">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#1E40FF] flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/75">
                  <GitBranch size={12} /> automation-pipeline.ts
                </span>
              </div>

              <div className="font-mono text-xs leading-relaxed space-y-1.5 overflow-x-auto rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4">
                <div className="text-slate-400">// 01. Lead Trigger -&gt; Dedupe &amp; Score</div>
                <div>
                  <span className="text-[#1E40FF] font-semibold">const</span> lead ={' '}
                  <span className="text-indigo-600 font-semibold">await</span> captureLead(webhookPayload);
                </div>
                <div>
                  <span className="text-[#1E40FF] font-semibold">const</span> isClean = !{' '}
                  <span className="text-indigo-600 font-semibold">await</span> dedupe6Months(lead.phoneHash);
                </div>

                <div className="pt-2 text-slate-400">// 02. Round-Robin F1 Agency &amp; ZaloBot</div>
                <div>
                  <span className="text-[#1E40FF] font-semibold">if</span> (isClean) {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-[#1E40FF] font-semibold">await</span>{' '}
                  <span className="text-emerald-700 font-semibold">zaloBot.dispatchNextAgency</span>(lead, [
                  <span className="text-amber-600">&apos;Tùng Long&apos;</span>,{' '}
                  <span className="text-amber-600">&apos;Hợp Nhất&apos;</span>,{' '}
                  <span className="text-amber-600">&apos;IHD&apos;</span>]);
                </div>
                <div className="pl-4">
                  <span className="text-[#1E40FF] font-semibold">await</span> crm.autoScoreQuality(lead.id);
                </div>
                <div>{'}'}</div>

                <div className="pt-2 text-slate-400">// 03. Feedback Loop -&gt; Meta CAPI HTTP 200</div>
                <div>
                  <span className="text-[#1E40FF] font-semibold">await</span>{' '}
                  <span className="text-sky-700 font-semibold">metaCAPI.sendEvent</span>(lead.status ==={' '}
                  <span className="text-emerald-700 font-semibold">&apos;QUALIFIED&apos;</span> ?{' '}
                  <span className="text-emerald-700 font-semibold">&apos;Schedule&apos;</span> :{' '}
                  <span className="text-rose-600 font-semibold">&apos;DisqualifiedLead&apos;</span>);
                </div>
              </div>

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
