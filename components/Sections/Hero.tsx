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
    name: 'INKICA AI Studio',
    logo: '/assets/partners/logo_inkica_icon.svg',
    sub: 'AI Prepress & AOP 3D WebGL',
    target: 'inkica-pod',
    url: 'https://ai.inkica.com/',
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
  ...PARTNERS.filter((p) => p.name.toLowerCase() !== 'inkica').map((p) => ({
    name: p.name,
    logo: p.image,
    sub: 'Enterprise Partner',
    url: p.website,
  })),
];

const InteractiveBrandSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDraggingUI, setIsDraggingUI] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 540) : 520
  );

  const IDLE_VX = 0.0034;
  const IDLE_VY = 0.0009;
  const rotRef = useRef({ yaw: 0.4, pitch: 0.2, vx: IDLE_VX, vy: IDLE_VY });
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    lastX: 0,
    lastY: 0,
    totalMoved: 0,
  });
  const hoveredRef = useRef<number | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    hoveredRef.current = hoveredIdx;
  }, [hoveredIdx]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const updateWidth = () => {
      if (el.clientWidth > 0) setContainerWidth(el.clientWidth);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    const el = containerRef.current;
    let rafId = 0;
    let lastTime = performance.now();
    let isInView = true;

    const animate = (now: number) => {
      if (!isInView || document.hidden) {
        rafId = 0;
        return;
      }
      const dt = Math.min(32, now - lastTime) / 16.67;
      lastTime = now;

      if (!dragRef.current.active && hoveredRef.current === null) {
        rotRef.current.yaw += rotRef.current.vx * dt;
        rotRef.current.pitch += rotRef.current.vy * dt;
        rotRef.current.vx += (IDLE_VX - rotRef.current.vx) * 0.03 * dt;
        rotRef.current.vy += (IDLE_VY - rotRef.current.vy) * 0.03 * dt;
      }
      setTick((t) => (t + 1) % 10000);
      rafId = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!rafId && isInView && !document.hidden) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(animate);
      }
    };

    const stopLoop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const observer =
      el && typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              isInView = Boolean(entry?.isIntersecting);
              if (isInView) startLoop();
              else stopLoop();
            },
            { threshold: 0.02 }
          )
        : null;

    if (el && observer) observer.observe(el);

    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener('visibilitychange', onVisibility);
    startLoop();

    return () => {
      stopLoop();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      lastX: e.clientX,
      lastY: e.clientY,
      totalMoved: 0,
    };
    rotRef.current.vx = 0;
    rotRef.current.vy = 0;
    setIsDraggingUI(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Synthetic events in tests may not carry an active native pointer
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.active) {
      const dx = e.clientX - dragRef.current.lastX;
      const dy = e.clientY - dragRef.current.lastY;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      dragRef.current.totalMoved += Math.hypot(dx, dy);

      const sensitivity = 0.008;
      rotRef.current.yaw += dx * sensitivity;
      rotRef.current.pitch -= dy * sensitivity;
      // Record flick momentum capped cleanly so release coasts smoothly
      rotRef.current.vx = Math.max(-0.07, Math.min(0.07, dx * sensitivity * 0.55));
      rotRef.current.vy = Math.max(-0.05, Math.min(0.05, -dy * sensitivity * 0.55));
      return;
    }

    if (e.pointerType === 'mouse') {
      const rect = e.currentTarget.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      rotRef.current.vx = nx * 0.009;
      rotRef.current.vy = -ny * 0.007;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setIsDraggingUI(false);
    try {
      if (e.currentTarget.hasPointerCapture(dragRef.current.pointerId)) {
        e.currentTarget.releasePointerCapture(dragRef.current.pointerId);
      }
    } catch {
      // Ignore synthetic capture release edge cases
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    endDrag(e);
    setHoveredIdx(null);
    if (
      Math.abs(rotRef.current.vx) <= 0.01 &&
      Math.abs(rotRef.current.vy) <= 0.01
    ) {
      rotRef.current.vx = IDLE_VX;
      rotRef.current.vy = IDLE_VY;
    }
  };

  // Clamp radius dynamically from containerWidth so orbiting badges (<= 48px on mobile) never clip horizontally
  const isCompactViewport = containerWidth < 460;
  const nodePad = isCompactViewport ? 60 : 72;
  const radius = Math.min(205, Math.max(116, Math.floor((containerWidth - nodePad) / 2)));
  const outerRingPx = Math.round(radius * 2);
  const innerRingPx = Math.round(radius * 1.38);

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
    const scale = isCompactViewport ? 0.62 + depth * 0.36 : 0.62 + depth * 0.48;
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
      data-testid="interactive-brand-sphere"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={handlePointerLeave}
      style={{ touchAction: 'none' }}
      className={`relative w-full h-[350px] sm:h-[490px] flex items-center justify-center select-none ${
        isDraggingUI ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Subtle 3D Sphere Orbital Rings scaled cleanly inside container width */}
      <div
        style={{ width: outerRingPx, height: outerRingPx }}
        className="pointer-events-none absolute rounded-full border border-blue-200/45"
      />
      <div
        style={{ width: innerRingPx, height: innerRingPx }}
        className="pointer-events-none absolute rounded-full border border-dashed border-sky-300/35"
      />

      {/* Soft Pastel Energy Core Aura in Sphere Center (zIndex 50 -> Translucent, never dark) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <motion.div
          animate={{ scale: [1, 1.38, 1], opacity: [0.38, 0.1, 0.38] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-sky-300/35 bg-sky-200/15 blur-[2px]"
        />
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.14, 0.45] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-300/35 bg-blue-200/20 blur-[1px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-transparent border-t-blue-400/50 border-r-sky-300/55"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-dashed border-sky-300/60 border-b-blue-300/45"
        />
        <motion.div
          animate={{ scale: [0.92, 1.12, 0.92], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-sky-200/75 via-blue-300/50 to-indigo-200/45 ring-4 ring-sky-100/50 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/95 blur-[0.5px]" />
        </motion.div>
      </div>

      {/* Logo-only 3D Orbiting Nodes — drag sphere to rotate freely in 3D */}
      {projected.map((p) => {
        const isHovered = hoveredIdx === p.idx;
        return (
          <div
            key={`${p.node.name}-${p.idx}`}
            onMouseEnter={() => {
              if (!dragRef.current.active) setHoveredIdx(p.idx);
            }}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => {
              if (dragRef.current.totalMoved < 6) {
                setHoveredIdx((prev) => (prev === p.idx ? null : p.idx));
              }
            }}
            style={{
              transform: `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) scale(${
                isHovered ? (isCompactViewport ? 1.15 : 1.28) : p.scale.toFixed(3)
              })`,
              opacity: isHovered ? 1 : p.opacity,
              zIndex: isHovered ? 200 : p.zIndex,
            }}
            aria-label={p.node.name}
            className={`absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm border p-1.5 sm:p-2 flex items-center justify-center transition-shadow select-none ${
              isHovered
                ? 'border-[#1E40FF] ring-4 ring-blue-100/80'
                : 'border-slate-200/90'
            }`}
          >
            <img
              src={p.node.logo}
              alt={p.node.name}
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        );
      })}

      {/* Floating Hovered / Tapped Brand Name Only */}
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

            <div className="relative rounded-2xl inkica-glass-card px-4 py-3.5 sm:px-5 sm:py-4 max-w-xl mb-7 overflow-hidden">
              <p className="text-sm sm:text-[15.5px] text-slate-700 leading-[1.7] font-medium">
                Thiết kế hệ thống{' '}
                <span className="font-extrabold text-[#1E40FF]">
                  Flow – AI Automation – Tools App
                </span>
                , tối ưu quy trình vận hành và xây dựng giải pháp{' '}
                <span className="font-extrabold text-slate-950">
                  chuyển đổi số toàn diện
                </span>{' '}
                cho doanh nghiệp trong{' '}
                <span className="font-extrabold text-gradient-inkica">
                  thời đại AI
                </span>
                .
              </p>
            </div>

            {/* 3 Inline Compact Stats */}
            <div className="grid grid-cols-3 gap-3.5 max-w-xl mb-8">
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-[#1E40FF] leading-tight mb-1">
                  35+
                </div>
                <div className="text-[11px] font-bold text-slate-800">App, Web &amp; AI</div>
              </div>
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-slate-950 leading-tight mb-1">
                  30+
                </div>
                <div className="text-[11px] font-bold text-slate-800">Doanh Nghiệp Hợp Tác</div>
              </div>
              <div className="rounded-2xl inkica-glass-card px-4 py-3.5">
                <div className="text-lg sm:text-2xl font-black text-emerald-600 leading-tight mb-1">
                  4+ Năm
                </div>
                <div className="text-[11px] font-bold text-slate-800">Growth &amp; Engineering</div>
              </div>
            </div>

            {/* Clean Action Buttons: Strictly 2 buttons on Mobile, 3 on Desktop/Tablet */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
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
                className="hidden sm:inline-flex ql-btn-outline px-4 py-2.5 rounded-full text-xs font-bold items-center gap-1.5 cursor-pointer"
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
