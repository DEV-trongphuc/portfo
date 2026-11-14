import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Bot, CheckCircle2, Maximize2, Radio, ShieldCheck, XCircle } from 'lucide-react';
import { DOMATION_V2_CAPI_SHOWCASE } from '../../constants';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const FEATURES = [
  {
    title: 'Lọc Trùng 6 Tháng Tự Động',
    desc: 'Quét trùng đa chiến dịch ngay khi lead vừa đổ về Meta / Website.',
    icon: <ShieldCheck size={17} />,
  },
  {
    title: 'Chia Vòng 3 Sàn F1 (< 5s)',
    desc: 'Phân bổ công bằng qua ZaloBot kèm cơ chế tự bù ticket khi lỗi số.',
    icon: <Bot size={17} />,
  },
  {
    title: 'Auto Đánh Giá Độ Nét Lead',
    desc: 'Chấm điểm chất lượng lead theo sàn và theo từng mẫu quảng cáo.',
    icon: <Activity size={17} />,
  },
  {
    title: 'Cải Thiện Meta CAPI Đại Lý',
    desc: 'Tự bắn ngược tín hiệu Thiện chí / Notlead HTTP 200 dạy lại AI Meta.',
    icon: <Radio size={17} />,
  },
];

const SIMULATOR_EVENTS = [
  { id: 'qualified', label: 'Khách Thiện Chí', eventName: 'Lead (Qualified) • 200 OK', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { id: 'booked', label: 'Đã Hẹn / Cọc', eventName: 'Schedule High-Value • 200 OK', color: 'text-[#1E40FF] bg-blue-50 border-blue-200' },
  { id: 'notlead', label: 'Sai Số / Notlead', eventName: 'DisqualifiedLead • Exclude AI', color: 'text-rose-700 bg-rose-50 border-rose-200' },
];

const OWNER_LOGOS = [
  { src: '/assets/partners/logo_capital_house.webp', name: 'Capital House' },
  { src: '/assets/partners/logo_ecolife_ngang.webp', name: 'EcoLife Signature' },
];

const F1_AGENCY_LOGOS = [
  { src: '/assets/partners/logo_tung_long.webp', name: 'Tùng Long' },
  { src: '/assets/partners/logo_hop_nhat.webp', name: 'Hợp Nhất Land' },
  { src: '/assets/partners/logo_ihd_group.webp', name: 'IHD Group' },
];

const DomationDataShowcase: React.FC = () => {
  const [simIndex, setSimIndex] = useState(0);
  const [zoomScreen, setZoomScreen] = useState<{ src: string; title: string } | null>(null);
  const sim = SIMULATOR_EVENTS[simIndex];

  return (
    <section id="domation-data" className="py-16 lg:py-22 relative z-10 border-t border-slate-200/80">
      <div className="mx-auto px-4 sm:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: MINTH-style Clean Header + 2x2 Feature Cards + Compact CAPI Toggle */}
          <motion.div
            initial={{ opacity: 1, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-5 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Radio size={13} />
                <span>Auto Data Routing &amp; Meta CAPI</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-950 leading-[1.36] mb-2.5">
                Chia Data Đa Đại Lý &amp;{' '}
                <span className="block sm:inline font-editorial text-gradient-inkica">
                  Cải Thiện Meta CAPI.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tự động hóa trọn vẹn từ lúc khách điền form, chia xoay vòng qua ZaloBot đến tự đánh
                giá &amp; gửi tín hiệu chuyển đổi ngược về quảng cáo.
              </p>
            </div>

            <ResponsiveSlideDeck
              items={FEATURES}
              keyExtractor={(f) => f.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3"
              ariaLabel="Tính năng DOMATION Data & Meta CAPI"
              renderItem={(f) => (
                <div className="bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/40 p-3.5 rounded-2xl shadow-xs transition-all group h-full">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E40FF] flex items-center justify-center mb-2 group-hover:bg-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-1 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              )}
            />

            {/* Compact 1-Line Interactive CAPI Signal Switch */}
            <div className="bg-white/90 border border-slate-200/90 rounded-2xl p-3.5 space-y-2.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {SIMULATOR_EVENTS.map((ev, i) => (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => setSimIndex(i)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer inline-flex items-center gap-1 ${
                      simIndex === i
                        ? 'bg-[#1E40FF] text-white border-[#1E40FF]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {ev.id === 'notlead' ? <XCircle size={11} /> : <CheckCircle2 size={11} />}
                    {ev.label}
                  </button>
                ))}
              </div>
              <div className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold ${sim.color}`}>
                Signal → {sim.eventName}
              </div>
            </div>
          </motion.div>

          {/* Right: Paginated Slider Screenshot Deck (1/mobile, 2/tablet, 2x2/desktop) */}
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-7"
          >
            <ResponsiveSlideDeck
              items={DOMATION_V2_CAPI_SHOWCASE}
              keyExtractor={(screen) => screen.id}
              desktopMode="slider"
              desktopPerPage={4}
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              ariaLabel="Thư viện màn hình DOMATION V2 CAPI"
              renderItem={(screen) => (
                <div
                  onClick={() => setZoomScreen({ src: screen.image, title: screen.title })}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white p-1.5 shadow-sm hover:border-[#1E40FF]/45 hover:shadow-md transition-all cursor-zoom-in h-full"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-50 relative">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    
                    />
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <Maximize2 size={12} />
                    </span>
                  </div>
                  <div className="px-2 pt-2 pb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900 truncate">{screen.title}</span>
                    <span className="text-[10px] font-semibold text-[#1E40FF] shrink-0">HD ↗</span>
                  </div>
                </div>
              )}
            />
          </motion.div>
        </div>

        {/* Sub-logos row below */}
        <div className="mt-8 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Hệ Thống Đang Kết Nối &amp; Chia Lead Tự Động
          </span>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {OWNER_LOGOS.map((ag) => (
              <div
                key={ag.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/80"
              >
                <img src={ag.src} alt={ag.name} loading="lazy" className="h-5 w-auto object-contain" decoding="async" />
                <span className="text-[11px] font-semibold text-slate-700">{ag.name}</span>
              </div>
            ))}
            <span className="hidden sm:inline-block h-6 w-px bg-slate-300 mx-1.5" aria-hidden="true" />
            {F1_AGENCY_LOGOS.map((ag) => (
              <div
                key={ag.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/80"
              >
                <img src={ag.src} alt={ag.name} loading="lazy" className="h-5 w-auto object-contain" decoding="async" />
                <span className="text-[11px] font-semibold text-slate-700">{ag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!zoomScreen}
        onClose={() => setZoomScreen(null)}
        title={zoomScreen?.title || 'Meta CAPI & Chia Data'}
        className="max-w-5xl"
      >
        {zoomScreen && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
            <img
              src={zoomScreen.src}
              alt={zoomScreen.title}
              className="w-full max-h-[75vh] object-contain mx-auto rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default DomationDataShowcase;
