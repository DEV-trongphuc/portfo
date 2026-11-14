import React, { useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface SlideDotProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
  className?: string;
  ariaLabel?: string;
  labels?: string[];
}

export const SlideDot: React.FC<SlideDotProps> = ({
  total,
  current,
  onSelect,
  className = '',
  ariaLabel = 'Slide navigation',
  labels,
}) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (total <= 1) return;
      let nextIndex = index;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (current + 1) % total;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (current - 1 + total) % total;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = total - 1;
      } else {
        return;
      }
      onSelect(nextIndex);
      const targetBtn = buttonRefs.current[nextIndex];
      if (targetBtn) targetBtn.focus();
    },
    [current, total, onSelect]
  );

  if (total <= 1) return null;

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      data-testid="slidedot-container"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6DEC8] shadow-xs ${className}`}
    >
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === current;
        const label = labels?.[idx] || `Slide ${idx + 1}`;
        return (
          <button
            key={idx}
            ref={(el) => {
              buttonRefs.current[idx] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={label}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
          >
            {isActive ? (
              <motion.span
                layoutId={shouldReduceMotion ? undefined : 'activeSlideDot'}
                className="block w-6 h-2 rounded-full bg-gradient-to-r from-[#8F6414] via-[#B88728] to-[#D4A849]"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            ) : (
              <span className="block w-2 h-2 rounded-full bg-[#D8CEB6] hover:bg-[#B68D40] transition-colors" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SlideDot;
