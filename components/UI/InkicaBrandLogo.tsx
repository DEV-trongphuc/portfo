import React, { useId } from 'react';

interface InkicaBrandLogoProps {
  compact?: boolean;
  darkText?: boolean;
  className?: string;
}

export const InkicaBrandLogo: React.FC<InkicaBrandLogoProps> = ({
  compact = false,
  darkText = false,
  className = '',
}) => {
  const gradId = useId();

  return (
    <div className={`inline-flex items-center gap-1.5 sm:gap-2.5 shrink-0 whitespace-nowrap ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 48"
          width={compact ? 22 : 28}
          height={compact ? 27 : 34}
          fill="none"
          className={`${compact ? 'w-5 h-6' : 'w-7 h-8 sm:w-8 sm:h-9'} shrink-0`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          <path d="M20 1 L22.5 5.5 L27 7.5 L22.5 9.5 L20 14 L17.5 9.5 L13 7.5 L17.5 5.5 Z" fill="#F59E0B" />
          <path d="M20 15C26 25 31 30 31 36A11 11 0 1 1 9 36C9 30 14 25 20 15Z" fill="#00F0FF" />
          <path d="M20 15C26 25 31 30 31 36A11 11 0 1 1 9 36C9 30 14 25 20 15Z" fill={`url(#${gradId})`} />
          <ellipse
            cx="16"
            cy="33"
            rx="3"
            ry="4.5"
            fill="#FFFFFF"
            fillOpacity="0.45"
            transform="rotate(-20 16 33)"
          />
        </svg>
      </div>
      <span
        className={`font-extrabold tracking-tight leading-none lowercase shrink-0 whitespace-nowrap ${
          darkText ? 'text-white' : 'text-slate-900'
        } ${compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'}`}
        style={{ fontFamily: "'Sora', 'Plus Jakarta Sans', 'Montserrat', sans-serif" }}
      >
        inkica
      </span>
    </div>
  );
};
