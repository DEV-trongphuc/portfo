import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Box,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  Maximize2,
  Palette,
  Scissors,
  Sparkles,
  Wand2,
} from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';
import Tilt3DCard from '../UI/Tilt3DCard';

interface InkicaScreen {
  id: string;
  src: string;
  badge: string;
  title: string;
}

const INKICA_SCREENS: InkicaScreen[] = [
  {
    id: 'quick-mockup',
    src: '/assets/inkica/inkica_quick_mockup.jpg',
    badge: 'QUICK MOCKUP STUDIO',
    title: 'Render Mockup 3D Người Mẫu Thật Đa Màu Vải',
  },
  {
    id: 'orchestrator',
    src: '/assets/inkica/inkica_orchestrator.jpg',
    badge: 'AUTO ORCHESTRATOR',
    title: '6 Tác Nhân AI Prepress Trong Một Khung Chat',
  },
  {
    id: 'aop-3d',
    src: '/assets/inkica/inkica_aop_3d.jpg',
    badge: 'AOP 3D CAD STUDIO',
    title: 'Bóc Rập .PSD Bezier & Live 3D Mockup 4 Góc Xoay',
  },
  {
    id: 'extract-dynamic',
    src: '/assets/inkica/inkica_extract_dynamic.jpg',
    badge: 'NEURAL EXTRACT -> MOCKUP',
    title: 'Tách Nền 300 DPI & Áp Lên Bộ Sưu Tập Model',
  },
  {
    id: 'templates',
    src: '/assets/inkica/inkica_template_mockup.jpg',
    badge: 'DETECT BLANK & TEMPLATES',
    title: 'Nhận Diện Phôi Trống & Quản Lý Thư Viện POD',
  },
];

const INKICA_FEATURES = [
  {
    icon: <Scissors size={17} />,
    title: '300 DPI Neural Extract',
    desc: 'Tách hình in PNG trong suốt từ ảnh mẫu (SAM 3 + ViTMatte).',
  },
  {
    icon: <Box size={17} />,
    title: 'AOP 3D CAD & Seam Rulers',
    desc: '208 SKU AOP & 88 Canonical Models chuẩn rập (0 px lệch).',
  },
  {
    icon: <Palette size={17} />,
    title: 'Dynamic Color & Halftone',
    desc: 'Đổi màu vải live, lưới Halftone LPI & số hóa thêu (.DST).',
  },
  {
    icon: <Wand2 size={17} />,
    title: 'Auto Orchestrator & 4K',
    desc: 'Chat điều phối tách nền, AI Redesign & render mockup hàng loạt.',
  },
];

const INKICA_STACK = [
  {
    name: 'Next.js 14',
    sub: 'App Router',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" fill="#0F172A" />
        <path
          d="M15.8 17.5L9.3 8.5H8V16h1.2v-5.7l5.6 7.7c.35-.15.69-.32 1-.5zM14.8 8.5H16v5.2l-1.2-1.6V8.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    sub: 'Fullstack Strict',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#3178C6" />
        <path
          d="M13.2 11.4H10.7V18H9.2v-6.6H6.7V10h6.5v1.4zm1.5 5.2c.4.35 1 .55 1.7.55.85 0 1.3-.36 1.3-.9 0-.48-.32-.77-1.15-1.08l-.52-.19c-1.22-.45-1.95-1.1-1.95-2.32 0-1.36 1.07-2.28 2.66-2.28.72 0 1.4.18 1.92.48l-.48 1.24c-.45-.25-.96-.4-1.42-.4-.76 0-1.18.35-1.18.85 0 .48.36.74 1.2 1.05l.52.19c1.3.48 1.97 1.13 1.97 2.38 0 1.44-1.11 2.38-2.85 2.38-.88 0-1.72-.23-2.24-.62l.52-1.33z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'Three.js WebGL',
    sub: '3D Garment',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <path
          d="M4 19L12 3.5L20 19H4z"
          fill="none"
          stroke="#1E40FF"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 19L12 11.2L15.5 19M6.3 14.5h11.4"
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'NestJS + BullMQ',
    sub: 'Queue Engine',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <path
          d="M12 2.5C7 2.5 3 6.3 3 11.1c0 3.7 2.2 6.8 5.6 8.3-.3-1-.1-2 .6-2.8.8-1 1.7-1.1 2.8-1.1 1.2 0 2.3.4 3.2 1.4.5.6.8 1.4.7 2.4 3.2-1.6 5.1-4.6 5.1-8.2C21 6.3 17 2.5 12 2.5zm-2.6 8.4a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zm5.2 0a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6z"
          fill="#E0234E"
        />
      </svg>
    ),
  },
  {
    name: 'Python • SAM 3',
    sub: 'AI Vision',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <path
          d="M11.9 3C8.5 3 8.7 4.5 8.7 4.5v1.6h3.3v.5H6.8S4.5 6.3 4.5 9.6c0 3.2 2 3.1 2 3.1h1.2v-1.6s-.1-2 2-2h3.4s1.9 0 1.9-1.8V4.6S15.3 3 11.9 3zm-1.6 1.1a.65.65 0 110 1.3.65.65 0 010-1.3z"
          fill="#3776AB"
        />
        <path
          d="M12.1 21c3.4 0 3.2-1.5 3.2-1.5v-1.6H12v-.5h5.2s2.3.3 2.3-3c0-3.2-2-3.1-2-3.1h-1.2v1.6s.1 2-2 2h-3.4s-1.9 0-1.9 1.8v2.7S8.7 21 12.1 21zm1.6-1.1a.65.65 0 110-1.3.65.65 0 010 1.3z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: 'ag-psd CAD',
    sub: 'Bezier Pattern',
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#001E36" />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fill="#31A8FF"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="sans-serif"
        >
          Ps
        </text>
      </svg>
    ),
  },
];

const InkicaPodShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [previewImg, setPreviewImg] = useState<InkicaScreen | null>(null);
  const currentScreen = INKICA_SCREENS[activeIdx];
  const touchStartX = React.useRef<number | null>(null);

  const handlePrevScreen = () =>
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : INKICA_SCREENS.length - 1));
  const handleNextScreen = () =>
    setActiveIdx((prev) => (prev < INKICA_SCREENS.length - 1 ? prev + 1 : 0));

  return (
    <section
      id="inkica-pod"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Clean Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3">
              <Sparkles size={13} />
              <span>FLAGSHIP AI PRODUCT • PRINT-ON-DEMAND</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-slate-900 leading-[1.35] mb-2">
              INKICA AI Studio<span className="hidden sm:inline"> —</span>{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                Prepress &amp; 3D Garment POD.
              </span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Nền tảng AI Prepress &amp; Render 3D Garment tất-cả-trong-một tại ai.inkica.com.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://ai.inkica.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-inkica-primary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Trải Nghiệm ai.inkica.com</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Alternating Balanced Split Layout: Visual Left (6 cols) | 2x2 Cards & Logo Stack Right (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Real Studio Preview Stage */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between gap-3.5">
            <Tilt3DCard maxTilt={3.5}>
              <motion.div
                key={currentScreen.id}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => setPreviewImg(currentScreen)}
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(e) => {
                  const startX = touchStartX.current;
                  touchStartX.current = null;
                  if (startX === null) return;
                  const endX = e.changedTouches[0]?.clientX ?? startX;
                  const dx = endX - startX;
                  if (dx < -40) handleNextScreen();
                  else if (dx > 40) handlePrevScreen();
                }}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 hover:border-[#1E40FF]/40 transition-all cursor-pointer touch-pan-y"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-white">
                  <img
                    src={currentScreen.src}
                    alt={currentScreen.title}
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500" loading="lazy"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Phóng to màn hình INKICA"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewImg(currentScreen);
                  }}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[11px] font-bold text-slate-800 hover:text-[#1E40FF] flex items-center gap-1.5 cursor-pointer"
                >
                  <Maximize2 size={12} /> Phóng to
                </button>

                <div className="px-4 py-3 bg-white border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-extrabold text-slate-900 truncate">
                    {currentScreen.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#1E40FF] shrink-0">
                    <Layers size={11} /> {currentScreen.badge}
                  </span>
                </div>
              </motion.div>
            </Tilt3DCard>

            {/* Prev / SlideDot / Next Navigation Strip (Mobile & All Viewports) */}
            <div className="flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-1.5">
                {INKICA_SCREENS.map((screen, idx) => (
                  <button
                    key={screen.id}
                    type="button"
                    aria-label={`Xem ${screen.badge}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIdx
                        ? 'w-7 bg-[#1E40FF]'
                        : 'w-2 bg-slate-300 hover:bg-blue-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-[11px] font-mono font-bold text-slate-500 tabular-nums">
                  0{activeIdx + 1}/0{INKICA_SCREENS.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevScreen}
                  aria-label="Màn hình INKICA trước"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-[#1E40FF] hover:text-[#1E40FF] text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={handleNextScreen}
                  aria-label="Màn hình INKICA tiếp theo"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-[#1E40FF] hover:text-[#1E40FF] text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* 5 Clean Thumbnail Switchers (Desktop/Tablet) */}
            <div className="hidden sm:grid grid-cols-5 gap-2.5">
              {INKICA_SCREENS.map((screen, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    type="button"
                    key={screen.id}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={screen.badge}
                    className={`rounded-xl p-1 border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-50/70 border-[#1E40FF]'
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-50">
                      <img
                        src={screen.src}
                        alt={screen.badge}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Balanced Feature Cards + Tech Language Logo Grid */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between gap-4">
            <ResponsiveSlideDeck
              items={INKICA_FEATURES}
              keyExtractor={(feat) => feat.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              className="flex-1"
              ariaLabel="Tính năng INKICA AI Studio"
              renderItem={(feat, idx) => (
                <div className="group p-4 rounded-2xl inkica-glass-card flex flex-col justify-between gap-3 h-full">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/75 text-[#1E40FF] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white">
                      {feat.icon}
                    </div>
                    <span className="text-[10.5px] font-black tracking-widest text-slate-300 group-hover:text-[#1E40FF]/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              )}
            />

            {/* Tech Stack Matrix with Language / Framework Icons */}
            <div className="p-4 rounded-2xl inkica-glass-card space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#1E40FF]">
                <span className="inline-flex items-center gap-1.5 uppercase tracking-wider">
                  <Cpu size={13} /> Core Tech Stack
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Fullstack • WebGL • AI Vision
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {INKICA_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-200/85 hover:bg-white hover:border-[#1E40FF]/40 transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                      {tech.logo}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11.5px] font-bold text-slate-900 truncate leading-tight">
                        {tech.name}
                      </div>
                      <div className="text-[9.5px] font-medium text-slate-500 truncate">
                        {tech.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!previewImg}
        onClose={() => setPreviewImg(null)}
        title={previewImg ? `${previewImg.badge} — ${previewImg.title}` : 'INKICA AI Studio'}
        className="max-w-6xl"
      >
        {previewImg && (
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2">
            <img
              src={previewImg.src}
              alt={previewImg.title}
              className="w-full h-auto max-h-[78vh] object-contain rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default InkicaPodShowcase;
