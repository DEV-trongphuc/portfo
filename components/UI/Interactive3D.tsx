import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
} from 'framer-motion';

export interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  onClick?: () => void;
  testId?: string;
}

/**
 * Smooth 60fps 3D Perspective Card with Champagne Gold Specular Glare
 */
export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  glareOpacity = 0.16,
  onClick,
  testId,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.6 });

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(smoothY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div style={{ perspective: '1200px' }} className="h-full">
      <motion.div
        ref={ref}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileTap={onClick ? { scale: 0.99 } : undefined}
        className={`relative h-full transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Dynamic Champagne Specular Light */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-20 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
          }}
        >
          <motion.div
            className="absolute w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              left: glareX,
              top: glareY,
              background: `radial-gradient(circle, rgba(217, 178, 98, ${glareOpacity}) 0%, rgba(255, 255, 255, 0.08) 45%, transparent 72%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Floating 3D Layer inside a Tilt3DCard
 */
export const DepthLayer: React.FC<{
  children: React.ReactNode;
  z?: number;
  className?: string;
}> = ({ children, z = 22, className = '' }) => (
  <div
    style={{ transform: `translateZ(${z}px)`, transformStyle: 'preserve-3d' }}
    className={className}
  >
    {children}
  </div>
);

/**
 * Animated Viewport Number Counter
 */
export const AnimatedMetric: React.FC<{
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}> = ({ target, decimals = 0, prefix = '', suffix = '', className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1100;
    let rafId = 0;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * target);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setVal(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export interface StoryChapterItem {
  id: string;
  num: string;
  label: string;
}

export const STORY_CHAPTERS: StoryChapterItem[] = [
  { id: 'hero', num: '01', label: 'Kiến Trúc Tổng Quan' },
  { id: 'flow-story', num: '02', label: 'Flow Vận Hành & CAPI' },
  { id: 'apps', num: '03', label: 'Hệ Sinh Thái 12+ Apps' },
  { id: 'landings', num: '04', label: 'Landing Page & 3D Web' },
  { id: 'book-sharing', num: '05', label: 'Chia Sẻ Sách & Quà Tặng' },
  { id: 'cases', num: '06', label: 'Dự Án & Case Studies' },
  { id: 'roadmap', num: '07', label: 'Hành Trình & Chứng Chỉ' },
  { id: 'partners', num: '08', label: 'Đối Tác Chiến Lược' },
];

/**
 * Top Champagne Laser Progress + Right-Edge Chapter Storytelling Rail
 */
export const ScrollStoryRail: React.FC<{
  activeChapter: string;
  onJump: (id: string) => void;
}> = ({ activeChapter, onJump }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });

  return (
    <>
      {/* Top 2.5px Champagne Gold Laser Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[90] pointer-events-none bg-gradient-to-r from-[#8A6016] via-[#D4A849] to-[#133E2C]"
      />

      {/* Right-Edge Storytelling Chapter Navigator (Desktop XL) */}
      <aside
        aria-label="Story Chapters"
        className="hidden 2xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5 bg-white/85 backdrop-blur-md border border-[#E6DEC8] rounded-full py-3.5 px-2 shadow-[0_14px_34px_-14px_rgba(33,37,41,0.12)]"
      >
        {STORY_CHAPTERS.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => onJump(ch.id)}
              className="group relative flex items-center justify-center w-7 h-7 rounded-full transition-all cursor-pointer"
              title={`${ch.num} • ${ch.label}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 h-6 bg-gradient-to-br from-[#8F6414] to-[#D4A849] text-white text-[9px] font-extrabold flex items-center justify-center shadow-sm'
                    : 'w-2 h-2 bg-[#D6CCB8] group-hover:w-3 group-hover:h-3 group-hover:bg-[#B68D40]'
                }`}
              >
                {isActive ? ch.num : ''}
              </span>

              {/* Tooltip */}
              <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute right-10 px-3 py-1.5 rounded-full bg-[#212529] text-white text-[10.5px] font-semibold whitespace-nowrap shadow-lg">
                <span className="text-[#D9B262] font-bold mr-1.5">{ch.num}</span>
                {ch.label}
              </span>
            </button>
          );
        })}
      </aside>
    </>
  );
};
