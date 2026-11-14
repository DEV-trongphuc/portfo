import { useEffect, useState } from 'react';

/**
 * Dynamically tracks whichever section ID in `sectionIds` occupies the upper
 * viewport focus band (~35% height). Queries the DOM on scroll/resize/mutation
 * so React.lazy sections that mount after initial load are always tracked accurately.
 */
export function useActiveSection(sectionIds: string[], defaultId: string): [string, (id: string) => void] {
  const [activeId, setActiveId] = useState<string>(defaultId);

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return;

    let rafId = 0;

    const computeActive = () => {
      rafId = 0;
      if (window.scrollY < 120 && sectionIds.includes('hero')) {
        setActiveId('hero');
        return;
      }

      const probeY = window.innerHeight * 0.35;
      let candidate = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Prefer any section whose top has crossed above probeY
        if (rect.top <= probeY) {
          candidate = id;
        }
      }

      setActiveId((prev) => (prev === candidate ? prev : candidate));
    };

    const scheduleCompute = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener('scroll', scheduleCompute, { passive: true });
    window.addEventListener('resize', scheduleCompute, { passive: true });

    // Re-evaluate as React.lazy sections hydrate into the DOM
    const observer =
      typeof MutationObserver !== 'undefined'
        ? new MutationObserver(scheduleCompute)
        : null;
    observer?.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleCompute);
      window.removeEventListener('resize', scheduleCompute);
      observer?.disconnect();
    };
  }, [sectionIds.join('|')]);

  return [activeId, setActiveId];
}
