import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Building2, Layers, Linkedin, Sparkles } from 'lucide-react';
import { PARTNERS } from '../../constants/partners';
import domLogo from '../../imgs/dom_logo.webp';
import AnimatedNumber from '../UI/AnimatedNumber';

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

const InteractiveBrandSphere: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDraggingUI, setIsDraggingUI] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 540) : 520
  );

  const visibleNodes = useMemo(
    () => (compact ? SPHERE_NODES.slice(0, 16) : SPHERE_NODES),
    [compact]
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
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isCompactViewport = compact || containerWidth < 460;
  const nodePad = isCompactViewport ? 64 : 72;
  const maxR = isCompactViewport ? 112 : 205;
  const minR = isCompactViewport ? 98 : 116;
  const radius = Math.min(maxR, Math.max(minR, Math.floor((containerWidth - nodePad) / 2)));
  const outerRingPx = Math.round(radius * 2);
  const innerRingPx = Math.round(radius * 1.38);

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
    const count = visibleNodes.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return visibleNodes.map((_, i) => {
      const y = 1 - (i / Math.max(1, count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
      };
    });
  }, [visibleNodes]);

  // Mutates 3D node transforms directly via refs so 60fps rotation triggers zero React re-renders
  const applySphereTransforms = useCallback(() => {
    const { yaw, pitch } = rotRef.current;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const cosP = Math.cos(pitch);
    const sinP = Math.sin(pitch);
    const hover = hoveredRef.current;
    const hoverScale = isCompactViewport ? 1.15 : 1.28;

    for (let idx = 0; idx < basePoints.length; idx++) {
      const nodeEl = nodeRefs.current[idx];
      if (!nodeEl) continue;
      const pt = basePoints[idx];
      const x1 = pt.x * cosY - pt.z * sinY;
      const z1 = pt.x * sinY + pt.z * cosY;
      const y2 = pt.y * cosP - z1 * sinP;
      const z2 = pt.y * sinP + z1 * cosP;

      const depth = (z2 + 1) / 2;
      const scale = isCompactViewport ? 0.62 + depth * 0.36 : 0.62 + depth * 0.48;
      const opacity = 0.48 + depth * 0.52;
      const isHovered = hover === idx;

      nodeEl.style.transform = `translate3d(${(x1 * radius).toFixed(1)}px, ${(y2 * radius).toFixed(1)}px, 0) scale(${
        isHovered ? hoverScale : scale.toFixed(3)
      })`;
      nodeEl.style.opacity = isHovered ? '1' : opacity.toFixed(3);
      nodeEl.style.zIndex = String(isHovered ? 200 : Math.round(depth * 100));
    }
  }, [basePoints, isCompactViewport, radius]);

  useLayoutEffect(() => {
    applySphereTransforms();
  }, [applySphereTransforms, hoveredIdx]);

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
      applySphereTransforms();
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
  }, [applySphereTransforms]);

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

  const hoveredItem = hoveredIdx !== null ? visibleNodes[hoveredIdx] : null;

  return (
    <div
      ref={containerRef}
      data-testid="interactive-brand-sphere"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={handlePointerLeave}
      style={{ touchAction: isCompactViewport ? 'pan-y' : 'none' }}
      className={`relative w-full h-[268px] sm:h-[470px] flex items-center justify-center select-none ${
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

      {/* Lightweight Core Energy Aura (zero multi-layer blur overhead on mobile) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(30,64,255,0.08)_48%,transparent_72%)] flex items-center justify-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-sky-300/45 flex items-center justify-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-sky-200/80 via-blue-300/55 to-indigo-200/50 ring-4 ring-sky-100/50 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white/95" />
            </div>
          </div>
        </div>
      </div>

      {/* Logo-only 3D Orbiting Nodes — solid white surface for 60fps mobile compositing */}
      {visibleNodes.map((node, idx) => {
        const isHovered = hoveredIdx === idx;
        return (
          <div
            key={`${node.name}-${idx}`}
            ref={(nodeEl) => {
              nodeRefs.current[idx] = nodeEl;
            }}
            onMouseEnter={() => {
              if (!dragRef.current.active) setHoveredIdx(idx);
            }}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => {
              if (dragRef.current.totalMoved < 6) {
                setHoveredIdx((prev) => (prev === idx ? null : idx));
              }
            }}
            aria-label={node.name}
            className={`will-change-transform absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border p-1.5 sm:p-2 flex items-center justify-center shadow-xs transition-shadow select-none ${
              isHovered
                ? 'border-[#1E40FF] ring-4 ring-blue-100/80'
                : 'border-slate-200/90'
            }`}
          >
            <img
              src={node.logo}
              alt={node.name}
              draggable={false}
              decoding="async"
              width={56}
              height={56}
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
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const fullText = 'TURNIO.';
  const [text, setText] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? fullText : ''
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setText(fullText);
      return;
    }
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
      className="relative pt-20 pb-10 sm:pt-30 sm:pb-18 overflow-hidden border-b border-slate-200/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Crisp Identity & 1-Row Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="animate-float-gentle inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 mb-3.5 sm:mb-6">
              <Sparkles size={12} className="text-[#1E40FF]" />
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E40FF]">
                Fullstack Developer - AI Automation
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.15] text-slate-950 mb-3.5 sm:mb-6">
              Hello, I&apos;m <span className="text-[#1E40FF]">{text || 'TURNIO.'}</span>
            </h1>

            <div className="relative rounded-2xl inkica-glass-card px-4 py-3 sm:px-5 sm:py-4 max-w-xl mb-4 sm:mb-7 overflow-hidden">
              <p className="text-[13px] sm:text-[15.5px] text-slate-700 leading-[1.65] font-medium">
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

            {/* Mobile Single-Instance Brand Sphere: Curated 16 nodes with pan-y scroll safety */}
            {!isDesktop && (
              <div className="my-3 lg:hidden">
                <InteractiveBrandSphere compact />
              </div>
            )}

            {/* 3 Inline Compact Stats — clean non-cramped alignment on 360px+ */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-xl mb-4 sm:mb-7">
              <div className="rounded-xl sm:rounded-2xl inkica-glass-card p-2.5 sm:px-4 sm:py-3.5">
                <div className="text-base sm:text-2xl font-black text-[#1E40FF] leading-tight mb-0.5 sm:mb-1 tabular-nums">
                  <AnimatedNumber target={35} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                  App, Web &amp; AI
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl inkica-glass-card p-2.5 sm:px-4 sm:py-3.5">
                <div className="text-base sm:text-2xl font-black text-slate-950 leading-tight mb-0.5 sm:mb-1 tabular-nums">
                  <AnimatedNumber target={38} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                  Doanh Nghiệp
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl inkica-glass-card p-2.5 sm:px-4 sm:py-3.5">
                <div className="text-base sm:text-2xl font-black text-emerald-600 leading-tight mb-0.5 sm:mb-1 tabular-nums">
                  <AnimatedNumber target={4} suffix="+ Năm" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                  Engineering
                </div>
              </div>
            </div>

            {/* Dedicated Mobile 2-Button Quick CTA Grid */}
            <div className="grid grid-cols-2 gap-2 sm:hidden pt-1">
              <button
                type="button"
                onClick={() => onJumpSection('inkica-pod')}
                className="btn-inkica-primary justify-center h-10 px-3 text-[11px] font-bold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Box size={13} className="shrink-0" />
                <span>Hệ Sinh Thái AI</span>
              </button>

              <button
                type="button"
                onClick={onOpenEcoLifeModal}
                className="ql-btn-outline justify-center h-10 px-3 rounded-xl text-[11px] font-bold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Building2 size={13} className="text-[#1E40FF] shrink-0" />
                <span>Case EcoLife 3D</span>
              </button>
            </div>

            {/* Desktop / Tablet Action Buttons */}
            <div className="hidden sm:flex sm:flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onJumpSection('inkica-pod')}
                className="btn-inkica-primary justify-center px-5 py-2.5 text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Box size={13} className="shrink-0" />
                <span>Khám Phá Hệ Sinh Thái</span>
                <ArrowRight size={12} className="shrink-0" />
              </button>

              <button
                type="button"
                onClick={onOpenEcoLifeModal}
                className="ql-btn-outline justify-center px-4 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Building2 size={13} className="text-[#1E40FF] shrink-0" />
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

          {/* Right Column: Desktop Single-Instance Interactive 3D Rotating Brand Sphere */}
          {isDesktop && (
            <div className="hidden lg:block lg:col-span-6">
              <InteractiveBrandSphere />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
