import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  Database,
  Filter,
  LayoutGrid,
  Maximize2,
  TrendingUp,
} from 'lucide-react';
import { DOMATION_CRM_IMAGES } from '../../constants';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const CRM_FEATURES = [
  {
    title: 'Quản Lý Giỏ Hàng Dự Án',
    desc: 'Theo dõi tình trạng giữ chỗ, lock căn & booking theo thời gian thực.',
    icon: <LayoutGrid size={17} />,
  },
  {
    title: 'Lọc Trùng SĐT Đa Kênh',
    desc: 'Chống trùng hợp đồng & ghi nhận chính xác nguồn Lead đầu tiên.',
    icon: <Filter size={17} />,
  },
  {
    title: 'Auto Chấm Lead & Điều Phối',
    desc: 'Tự động chia sale theo lượt & phân loại nhiệt độ khách hàng.',
    icon: <Database size={17} />,
  },
  {
    title: 'Đồng Bộ CAPI Về Đại Lý',
    desc: 'Truyền trực tiếp chuyển đổi thật về Meta cải thiện ROAS đại lý.',
    icon: <TrendingUp size={17} />,
  },
];

const DomationCrmShowcase: React.FC = () => {
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section
      id="domation-crm"
      className="py-16 lg:py-22 relative z-10 border-t border-slate-200/80"
    >
      <div className="mx-auto px-4 sm:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: MINTH-style Clean Features */}
          <motion.div
            initial={{ opacity: 1, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-5 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Database size={13} />
                <span>Real-Time Enterprise CRM</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-950 leading-[1.36] mb-2.5">
                360{' '}
                <span className="block sm:inline font-editorial text-gradient-inkica">
                  CRM System.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hệ thống CRM quản trị giỏ hàng doanh nghiệp, phân bổ lead đa đại lý &amp; đồng
                bộ trạng thái booking trực tiếp về đội ngũ kinh doanh.
              </p>
            </div>

            <ResponsiveSlideDeck
              items={CRM_FEATURES}
              keyExtractor={(item) => item.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3"
              ariaLabel="Tính năng 360 CRM"
              renderItem={(item) => (
                <div className="bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/40 p-3.5 rounded-2xl shadow-xs transition-all group h-full">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-2 group-hover:bg-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              )}
            />

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[11px] font-bold">
                <Building2 size={12} /> {DOMATION_CRM_IMAGES.length} Màn Hình CRM
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                <CheckCircle2 size={12} /> BBNT 2026
              </span>
            </div>
          </motion.div>

          {/* Right: Clean SaaS CRM Growth Funnel Visual + Toggleable Real Screens */}
          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-7"
          >
            <ResponsiveSlideDeck
              items={DOMATION_CRM_IMAGES}
              keyExtractor={(img) => String(img.id)}
              desktopMode="slider"
              desktopPerPage={4}
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              ariaLabel="Giao diện 360 CRM"
              renderItem={(img) => (
                <div
                  onClick={() => setZoomImage(img)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white p-1.5 shadow-sm hover:border-[#1E40FF]/45 hover:shadow-md transition-all cursor-zoom-in h-full"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-50 relative">
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/95 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <Maximize2 size={12} />
                    </span>
                  </div>
                  <div className="px-2 pt-2 pb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900 truncate">{img.title}</span>
                    <span className="text-[10px] font-semibold text-[#0284C7] shrink-0">Zoom ↗</span>
                  </div>
                </div>
              )}
            />
          </motion.div>
        </div>

        {/* Sub-Logos Bottom Strip */}
        <div className="mt-8 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Đối Tác Triển Khai Thực Tế
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80">
              <img
                src="/assets/partners/logo_capital_house.webp"
                alt="Capital House"
                className="h-5 w-auto object-contain" loading="lazy" decoding="async"
              />
              <span className="text-xs font-semibold text-slate-700">Tập đoàn Capital House</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80">
              <img
                src="/assets/partners/logo_ecolife_ngang.webp"
                alt="EcoLife Signature"
                className="h-5 w-auto object-contain" loading="lazy" decoding="async"
              />
              <span className="text-xs font-semibold text-slate-700">EcoLife Signature Đà Nẵng</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!zoomImage}
        onClose={() => setZoomImage(null)}
        title={zoomImage?.title || '360 CRM Preview'}
        className="max-w-5xl"
      >
        {zoomImage && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
            <img
              src={zoomImage.src}
              alt={zoomImage.title}
              className="w-full max-h-[75vh] object-contain mx-auto rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default DomationCrmShowcase;
