import React from 'react';

export interface CornerCrosshairProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const CornerCrosshair: React.FC<CornerCrosshairProps> = ({
  position = 'all',
  className = '',
  size = 'sm',
  color = 'text-amber-500/45',
}) => {
  const sizeMap = { sm: 'text-[10px]', md: 'text-xs', lg: 'text-sm' };
  const base = `decor-crosshair absolute font-mono font-light leading-none select-none pointer-events-none z-10 ${sizeMap[size]} ${color} ${className}`;

  if (position === 'all') {
    return (
      <>
        <span data-decor="crosshair" className={`${base} top-3 left-3`} aria-hidden="true">+</span>
        <span data-decor="crosshair" className={`${base} top-3 right-3`} aria-hidden="true">+</span>
        <span data-decor="crosshair" className={`${base} bottom-3 left-3`} aria-hidden="true">+</span>
        <span data-decor="crosshair" className={`${base} bottom-3 right-3`} aria-hidden="true">+</span>
      </>
    );
  }

  const posMap = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'bottom-right': 'bottom-3 right-3',
  }[position];

  return (
    <span data-decor="crosshair" className={`${base} ${posMap}`} aria-hidden="true">+</span>
  );
};

export interface HairlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  withCrosshairs?: boolean;
  hoverGlow?: boolean;
  variant?: 'obsidian' | 'card' | 'ghost';
}

export const HairlineCard: React.FC<HairlineCardProps> = ({
  children,
  className = '',
  withCrosshairs = false,
  hoverGlow = true,
  variant = 'card',
  ...props
}) => {
  const variantBg = {
    obsidian: 'bg-white/95 backdrop-blur-xl border border-slate-200/90',
    card: 'bg-white/92 backdrop-blur-xl border border-slate-200/90',
    ghost: 'bg-slate-50/90 backdrop-blur-lg border border-slate-200/80',
  }[variant];

  const glow = hoverGlow
    ? 'hover:border-amber-400/60 hover:shadow-[0_22px_50px_-18px_rgba(180,83,9,0.14)]'
    : '';

  return (
    <div
      className={`relative rounded-3xl transition-all duration-300 overflow-hidden ${glow} ${variantBg} ${className}`}
      {...props}
    >
      {withCrosshairs && <CornerCrosshair position="all" />}
      {children}
    </div>
  );
};

export interface LuxuryBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'emerald' | 'subtle';
}

export const LuxuryBadge: React.FC<LuxuryBadgeProps> = ({
  children,
  icon,
  className = '',
  variant = 'gold',
}) => {
  const variantStyles = {
    gold: 'border-amber-200 bg-amber-50 text-amber-900 shadow-xs',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    subtle: 'border-slate-200 bg-white text-slate-600',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[11px] font-bold tracking-wider uppercase whitespace-nowrap ${variantStyles} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
};

export interface GradientDividerProps {
  className?: string;
  withCenterAccent?: boolean;
}

export const GradientDivider: React.FC<GradientDividerProps> = ({
  className = '',
  withCenterAccent = true,
}) => {
  return (
    <div className={`relative w-full py-5 flex items-center justify-center ${className}`}>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      {withCenterAccent && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 bg-[#F8F9FA]">
          <span className="w-1.5 h-1.5 rotate-45 border border-amber-500/60" />
          <span className="w-2 h-2 rotate-45 bg-amber-600" />
          <span className="w-1.5 h-1.5 rotate-45 border border-amber-500/60" />
        </div>
      )}
    </div>
  );
};

export const AmbientGlow: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
  color?: 'gold' | 'blue' | 'purple' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = () => null;

export const SectionEyebrow: React.FC<{
  index: string;
  label?: string;
  className?: string;
  centered?: boolean;
}> = ({ index, label = '', className = '', centered = false }) => (
  <div className={`inline-flex flex-wrap items-center gap-2.5 ${centered ? 'justify-center' : ''} ${className}`}>
    <span className="ql-eyebrow whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
      {index}
    </span>
    {label && (
      <>
        <span className="w-5 h-[1px] bg-slate-300 hidden sm:inline-block" />
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-600 whitespace-nowrap">
          {label}
        </span>
      </>
    )}
  </div>
);

export const WatermarkArc: React.FC<{ position?: 'top-right' | 'bottom-left'; className?: string }> = () => null;
export const WatermarkTitle: React.FC<{ text: string; className?: string }> = () => null;
