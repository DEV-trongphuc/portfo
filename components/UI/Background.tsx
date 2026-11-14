import React from 'react';

/**
 * INKICA Fluent Brand Bloom Backdrop
 * Uses original Windows 11 Fluent liquid-glass waves in Cyan (#06B6D4),
 * Sky (#0EA5E9), and Royal Sapphire (#1E40FF) over pure light canvas #F8F9FA.
 * Hardware-composited (transform-gpu), zero continuous canvas loops for 60fps performance.
 */
const Background: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#F8F9FA]"
    >
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/images/landing/fluent-brand-ambient-bg.webp" type="image/webp" />
        <img
          src="/images/landing/fluent-brand-ambient-bg.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-35 transform-gpu transition-opacity duration-300"
        />
      </picture>

      {/* Soft Frosted Mist Veil for high contrast slate ink headings */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      {/* Delicate radial light bloom (CSS gradient instead of heavy blur on Mobile for 60fps scroll) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_35%,rgba(255,255,255,0.22)_20%,rgba(255,255,255,0.52)_70%,rgba(255,255,255,0.88)_100%)] pointer-events-none" />

      {/* Subtle Ambient Light Leaks matching INKICA signature cyan/sky (GPU blur only on desktop) */}
      <div className="hidden md:block absolute -top-24 left-1/3 w-[720px] h-[520px] bg-gradient-to-b from-cyan-300/15 via-sky-200/10 to-transparent rounded-full blur-[96px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 -left-20 w-[480px] h-[600px] bg-gradient-to-tr from-blue-300/10 via-sky-200/5 to-transparent rounded-full blur-[96px] pointer-events-none" />
    </div>
  );
};

export default Background;
