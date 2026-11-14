import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Box,
  Building2,
  CheckCircle2,
  ExternalLink,
  Layers,
  Maximize2,
  Radio,
} from 'lucide-react';
import { ECOLIFE_3D_UNITS } from '../../constants';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';
import Tilt3DCard from '../UI/Tilt3DCard';

export interface RealEstateShowcaseProps {
  onOpenEcoLifeModal: () => void;
}

const RealEstateShowcase: React.FC<RealEstateShowcaseProps> = ({
  onOpenEcoLifeModal,
}) => {
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);
  const [videoMode, setVideoMode] = useState<'3d' | 'facade'>('3d');

  const highlights = [
    {
      icon: <Box size={17} className="text-[#1E40FF]" />,
      title: '3D Nhập Vai Căn Hộ Chuẩn Bàn Giao',
      desc: 'Trải nghiệm WebGL Three.js 360° nhập vai bước vào từng phòng, dựng đúng vật liệu & nội thất chuẩn bàn giao của 8 mẫu căn hộ A1–B6.',
    },
    {
      icon: <Radio size={17} className="text-[#0284C7]" />,
      title: 'CRM Chia Data Auto Đánh Giá & Cải Thiện CAPI Các Đại Lý',
      desc: 'Phân bổ lead tự động dưới 5s qua ZaloBot, chấm điểm chất lượng tự động & bắn tín hiệu Meta CAPI giúp cải thiện tỷ lệ chốt cho 3 sàn F1.',
    },
    {
      icon: <Layers size={17} className="text-emerald-600" />,
      title: 'Phim Dự Án & 25+ Ấn Phẩm OOH Thực Tế',
      desc: 'Đồng bộ từ Website Quiet Luxury, Catalog 16 trang, Tờ gập 7×7 đến Hoarding 36×22m (Nghiệm thu BBNT 0511/2026-CRM & MEDIA).',
    },
  ];

  const subPartnerLogos = [
    { src: '/assets/partners/logo_capital_house.webp', alt: 'Capital House Group', role: 'Chủ đầu tư' },
    { src: '/assets/partners/logo_ecolife_ngang.webp', alt: 'EcoLife Signature Đà Nẵng', role: 'Dự án' },
    { src: '/assets/partners/logo_tung_long.webp', alt: 'Tùng Long Real Estate', role: 'Đại lý F1' },
    { src: '/assets/partners/logo_hop_nhat.webp', alt: 'Hợp Nhất Land', role: 'Đại lý F1' },
    { src: '/assets/partners/logo_ihd_group.webp', alt: 'Tập đoàn IHD', role: 'Đại lý F1' },
  ];

  return (
    <section id="real-estate" className="py-16 lg:py-22 relative z-10 border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative">
        {/* Clean Executive Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          <div className="space-y-2.5 max-w-3xl">
            <motion.div
              initial={{ opacity: 1, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[11px] font-bold uppercase tracking-[0.16em]"
            >
              <Building2 size={13} />
              <span>Enterprise Client Project • WebGL 3D, AI &amp; CAPI</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-950 leading-[1.35]"
            >
              Dự Án Triển Khai:{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                EcoLife 3D × Capital House.
              </span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
              <CheckCircle2 size={13} />
              Production 09/2026 • Client Showcase
            </span>
          </div>
        </div>

        {/* Clean 2-Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Clean Highlight Features + Dual Equal Buttons */}
          <motion.div
            initial={{ opacity: 1, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-5 space-y-4"
          >
            <ResponsiveSlideDeck
              items={highlights}
              keyExtractor={(item) => item.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-1"
              gapClass="gap-3"
              ariaLabel="Điểm nhấn hệ thống EcoLife Signature"
              renderItem={(item) => (
                <div className="bg-white/95 border border-slate-200/90 hover:border-blue-300 rounded-2xl p-4 shadow-xs transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-950 leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={onOpenEcoLifeModal}
                className="btn-inkica-primary h-10 px-4 text-xs uppercase tracking-wider cursor-pointer whitespace-nowrap"
              >
                <span>Hồ Sơ 3D &amp; 25 Ấn Phẩm</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href="https://ai.ecolifesignature.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="ql-btn-outline h-10 px-4 text-xs uppercase tracking-wider whitespace-nowrap"
              >
                <Bot size={14} className="text-[#1E40FF] shrink-0" />
                <span>Trợ Lý AI Portal</span>
                <ExternalLink size={12} className="shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Right: 3D Walkthrough Video Clip & 3D Units Preview Gallery */}
          <motion.div
            initial={{ opacity: 1, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 space-y-3"
          >
            {/* Compact Clip Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/95 border border-slate-200/90 shadow-xs">
                <button
                  type="button"
                  onClick={() => setVideoMode('3d')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    videoMode === '3d'
                      ? 'bg-[#1E40FF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Clip 3D Nhập Vai Căn Hộ
                </button>
                <button
                  type="button"
                  onClick={() => setVideoMode('facade')}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    videoMode === 'facade'
                      ? 'bg-[#1E40FF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Phim dự án
                </button>
              </div>

              <button
                type="button"
                onClick={onOpenEcoLifeModal}
                className="text-xs font-bold text-[#1E40FF] hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Mở Chi Tiết Dự Án</span>
                <ArrowUpRight size={13} />
              </button>
            </div>

            <Tilt3DCard maxTilt={3}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-[0_18px_46px_-18px_rgba(15,23,42,0.2)]">
                {videoMode === '3d' ? (
                  <video
                    key="video-3d"
                    src="/assets/ecolife/ecolife_3d_preview.mp4"
                    poster="/assets/ecolife/FACADE_HUONG_CHINH_03.webp"
                    muted
                    loop
                    controls
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    key="video-youtube-project"
                    src="https://www.youtube.com/embed/To3VGqPfwY8?rel=0"
                    title="Phim dự án EcoLife Signature"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </Tilt3DCard>
          </motion.div>
        </div>

        {/* Full-Width Single Row: 8 3D Units Across Entire Width */}
        <div className="mt-8 pt-6 border-t border-slate-200/75 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              8 Mẫu Căn Hộ 3D Trực Tuyến
            </span>
            <a
              href="https://ecolifesignature.vn/3d/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-extrabold text-[#1E40FF] hover:underline inline-flex items-center gap-1"
            >
              <span>ecolifesignature.vn/3d</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <ResponsiveSlideDeck
            items={ECOLIFE_3D_UNITS}
            keyExtractor={(unit) => unit.code}
            desktopMode="grid"
            desktopGridClass="lg:grid-cols-8"
            gapClass="gap-2.5"
            ariaLabel="8 căn hộ mẫu 3D EcoLife Signature"
            renderItem={(unit) => (
              <a
                href={unit.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-slate-200 hover:border-[#1E40FF] rounded-xl p-1.5 group transition-all block h-full"
              >
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-50 mb-1.5">
                  <img
                    src={unit.image}
                    alt={unit.code}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  
                  />
                </div>
                <div className="flex items-center justify-between gap-1 px-1 pb-0.5">
                  <span className="text-[11px] font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors truncate">
                    {unit.code} • {unit.area}
                  </span>
                  <ArrowUpRight
                    size={11}
                    className="text-slate-400 group-hover:text-[#1E40FF] shrink-0"
                  />
                </div>
              </a>
            )}
          />
        </div>

        {/* Sub-Logos Row Below (Logo phụ hàng dưới: CĐT + Dự án | 3 Sàn F1) */}
        <div className="mt-8 pt-5 border-t border-slate-200/75 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Chủ Đầu Tư • Dự Án &nbsp;|&nbsp; 3 Đại Lý Phân Phối F1
          </span>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {subPartnerLogos.slice(0, 2).map((logo) => (
              <div
                key={logo.alt}
                title={`${logo.alt} (${logo.role})`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/80"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-5 sm:h-6 w-auto object-contain" decoding="async"
                />
                <span className="text-[10px] font-semibold text-slate-500 hidden sm:inline">
                  {logo.role}
                </span>
              </div>
            ))}
            <span className="hidden sm:inline-block h-6 w-px bg-slate-300 mx-1.5" aria-hidden="true" />
            {subPartnerLogos.slice(2).map((logo) => (
              <div
                key={logo.alt}
                title={`${logo.alt} (${logo.role})`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/80"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-5 sm:h-6 w-auto object-contain" decoding="async"
                />
                <span className="text-[10px] font-semibold text-slate-500 hidden sm:inline">
                  {logo.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={Boolean(zoomImg)}
        onClose={() => setZoomImg(null)}
        title={zoomImg?.title}
        className="max-w-4xl"
      >
        {zoomImg && (
          <div className="p-4 sm:p-6 bg-white flex justify-center">
            <img
              src={zoomImg.src}
              alt={zoomImg.title}
              className="w-full max-h-[78vh] object-contain rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default RealEstateShowcase;
