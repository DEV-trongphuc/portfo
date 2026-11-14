import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Building2, Layers, Linkedin, Sparkles } from 'lucide-react';
import { PARTNERS } from '../../constants';
import domLogo from '../../imgs/dom_logo.webp';

interface HeroProps {
  onOpenDomationModal: () => void;
  onOpenEcoLifeModal: () => void;
  onJumpSection: (id: string) => void;
}

interface SphereBrandNode {
  name: string;
  logo: string;
  sub: string;
  target?: string;
  url?: string;
}

const SPHERE_NODES: SphereBrandNode[] = [
  {
    name: 'Capital House Group',
    logo: '/assets/partners/logo_capital_house.webp',
    sub: 'WebGL 3D & CRM Auto CAPI',
    target: 'real-estate',
  },
  {
    name: 'EcoLife Signature',
    logo: '/assets/partners/logo_ecolife_ngang.webp',
    sub: '3D Interactive & AI Portal',
    target: 'real-estate',
  },
  {
    name: 'DOMATION Ecosystem',
    logo: domLogo,
    sub: 'ERP 5.0 & Marketing Automation',
    target: 'erp-showcase',
  },
  {
    name: 'Tùng Long',
    logo: '/assets/partners/logo_tung_long.webp',
    sub: 'Auto Chia Data < 5s',
    target: 'domation-data',
  },
  {
    name: 'Hợp Nhất',
    logo: '/assets/partners/logo_hop_nhat.webp',
    sub: 'Auto Routing & CRM Sync',
    target: 'domation-data',
  },
  {
    name: 'IHD Group',
    logo: '/assets/partners/logo_ihd_group.webp',
    sub: 'Meta CAPI Dataset Sync',
    target: 'domation-data',
  },
  ...PARTNERS.map((p) => ({
    name: p.name,
    logo: p.image,
    sub: 'Enterprise Partner',
    url: p.website,
  })),
];

const InteractiveBrandSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const rotRef = useRef({ yaw: 0.4, pitch: 0.2, vx: 0.0036, vy: 0.001 });
  const hoveredRef = useRef<number | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    hoveredRef.current = hoveredIdx;
  }, [hoveredIdx]);

  const basePoints = useMemo(() => {
    const count = SPHERE_NODES.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return SPHERE_NODES.map((_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
      };
    });
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(32, now - lastTime) / 16.67;
      lastTime = now;

      if (hoveredRef.current === null) {
        rotRef.current.yaw += rotRef.current.vx * dt;
        rotRef.current.pitch += rotRef.current.vy * dt;
      }
      setTick((t) => (t + 1) % 10000);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    rotRef.current.vx = nx * 0.013;
    rotRef.current.vy = -ny * 0.01;
  };

  const handlePointerLeave = () => {
    setHoveredIdx(null);
    rotRef.current.vx = 0.0036;
    rotRef.current.vy = 0.001;
  };

  const radius = 205;
  const { yaw, pitch } = rotRef.current;
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch);
  const sinP = Math.sin(pitch);

  const projected = basePoints.map((pt, idx) => {
    const x1 = pt.x * cosY - pt.z * sinY;
    const z1 = pt.x * sinY + pt.z * cosY;
    const y2 = pt.y * cosP - z1 * sinP;
    const z2 = pt.y * sinP + z1 * cosP;

    const depth = (z2 + 1) / 2;
    const scale = 0.62 + depth * 0.48;
    const opacity = 0.48 + depth * 0.52;

    return {
      idx,
      node: SPHERE_NODES[idx],
      x: x1 * radius,
      y: y2 * radius,
      scale,
      opacity,
      zIndex: Math.round(depth * 100),
    };
  });

  const hoveredItem = hoveredIdx !== null ? SPHERE_NODES[hoveredIdx] : null;

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[450px] sm:h-[490px] flex items-center justify-center select-none"
    >
      {/* Subtle 3D Sphere Orbital Rings */}
      <div className="pointer-events-none absolute w-[390px] h-[390px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-200/45" />
      <div className="pointer-events-none absolute w-[280px] h-[280px] rounded-full border border-dashed border-sky-300/35" />

      {/* Soft Pastel Energy Core Aura in Sphere Center (zIndex 50 -> Translucent, never dark) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <motion.div
          animate={{ scale: [1, 1.38, 1], opacity: [0.38, 0.1, 0.38] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-36 h-36 rounded-full border border-sky-300/35 bg-sky-200/15 blur-[2px]"
        />
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.14, 0.45] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute w-24 h-24 rounded-full border border-blue-300/35 bg-blue-200/20 blur-[1px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          className="absolute w-20 h-20 rounded-full border border-transparent border-t-blue-400/50 border-r-sky-300/55"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute w-14 h-14 rounded-full border border-dashed border-sky-300/60 border-b-blue-300/45"
        />
        <motion.div
          animate={{ scale: [0.92, 1.12, 0.92], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-11 h-11 rounded-full bg-gradient-to-br from-sky-200/75 via-blue-300/50 to-indigo-200/45 ring-4 ring-sky-100/50 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-white/95 blur-[0.5px]" />
        </motion.div>
      </div>

      {/* Logo-only 3D Orbiting Nodes — wider spacing, no text labels unless hovered */}
      {projected.map((p) => {
        const isHovered = hoveredIdx === p.idx;
        return (
          <div
            key={`${p.node.name}-${p.idx}`}
            onMouseEnter={() => setHoveredIdx(p.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              transform: `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) scale(${
                isHovered ? 1.28 : p.scale.toFixed(3)
              })`,
              opacity: isHovered ? 1 : p.opacity,
              zIndex: isHovered ? 200 : p.zIndex,
            }}
            aria-label={p.node.name}
            className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/95 backdrop-blur-sm border p-2 flex items-center justify-center transition-shadow select-none cursor-default ${
              isHovered
                ? 'border-[#1E40FF] ring-4 ring-blue-100/80'
                : 'border-slate-200/90'
            }`}
          >
            <img
              src={p.node.logo}
              alt={p.node.name}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        );
      })}

      {/* Floating Hovered Brand Name Only (Hover Only, No Idle Hint, No Click) */}
      {hoveredItem && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <div className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold whitespace-nowrap flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>{hoveredItem.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({
  onOpenDomationModal,
  onOpenEcoLifeModal,
  onJumpSection,
}) => {
  const [text, setText] = useState('');
  const fullText = 'TURNIO.';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden border-b border-slate-200/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Crisp Identity & 1-Row Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 mb-6">
              <Sparkles size={12} className="text-[#1E40FF]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E40FF]">
                Fullstack Developer - AI Automation
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.15] text-slate-950 mb-6">
              Hello, I&apos;m <span className="text-[#1E40FF]">{text || 'TURNIO.'}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-[1.75] max-w-xl mb-8">
              Thiết kế hệ thống <strong className="text-slate-900 font-semibold">Flow - Automation</strong>, tối ưu quy trình vận hành và xây dựng giải pháp{' '}
              <strong className="text-slate-900 font-semibold">chuyển đổi số toàn diện</strong> cho doanh nghiệp.
            </p>

            {/* 3 Inline Compact Stats */}
            <div className="grid grid-cols-3 gap-3.5 max-w-xl mb-8">
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-[#1E40FF] leading-tight mb-1">
                  15+
                </div>
                <div className="text-[11px] font-bold text-slate-800">Apps &amp; AI Systems</div>
              </div>
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-slate-950 leading-tight mb-1">
                  30+
                </div>
                <div className="text-[11px] font-bold text-slate-800">Doanh Nghiệp Hợp Tác</div>
              </div>
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 leading-tight mb-1">
                  7+ Năm
                </div>
                <div className="text-[11px] font-bold text-slate-800">Growth &amp; Engineering</div>
              </div>
            </div>

            {/* Single-row Clean 3 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onJumpSection('inkica-pod')}
                className="btn-inkica-primary px-4 sm:px-5 py-2.5 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Box size={14} />
                <span>Khám Phá Hệ Sinh Thái</span>
                <ArrowRight size={13} />
              </button>

              <button
                type="button"
                onClick={onOpenEcoLifeModal}
                className="ql-btn-outline px-4 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Building2 size={14} className="text-[#1E40FF]" />
                <span>Case Study Tiêu Biểu</span>
              </button>

              <button
                type="button"
                onClick={onOpenDomationModal}
                className="ql-btn-outline px-4 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Layers size={14} className="text-[#1E40FF]" />
                <span>Kiến Trúc Hệ Thống</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Rotating Brand Sphere (Logos Only) */}
          <div className="lg:col-span-6">
            <InteractiveBrandSphere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
