import React, { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

/**
 * Counts smoothly from 0 to `target` when entering the viewport.
 */
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  target,
  suffix = '',
  durationMs = 1100,
  className,
}) => {
  const [value, setValue] = useState<number>(0);
  const hostRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el || typeof window === 'undefined') return;

    const runCount = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const start = performance.now();
      let rafId = 0;

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };
      rafId = window.requestAnimationFrame(tick);
      return () => window.cancelAnimationFrame(rafId);
    };

    if (typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }

    let cleanupRaf: (() => void) | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          cleanupRaf = runCount();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cleanupRaf?.();
    };
  }, [target, durationMs]);

  return (
    <span ref={hostRef} className={className}>
      {value}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
