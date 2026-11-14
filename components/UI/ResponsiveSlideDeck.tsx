import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ResponsiveSlideDeckProps<T> {
  items: readonly T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  /**
   * 'grid'   = native CSS grid on Desktop (>=1024px), SlideDeck with Prev/Next/Dots on Mobile (1/slide) & Tablet (2/slide).
   * 'slider' = SlideDeck with Prev/Next/Dots across ALL viewports (Desktop uses desktopPerPage inside desktopGridClass).
   */
  desktopMode?: 'grid' | 'slider';
  desktopGridClass?: string;
  desktopPerPage?: number;
  tabletPerPage?: number;
  mobilePerPage?: number;
  gapClass?: string;
  ariaLabel?: string;
  className?: string;
  /** Change this value (e.g., filter key) to jump back to page 0 cleanly */
  resetKey?: string | number;
}

type ViewportBucket = 'mobile' | 'tablet' | 'desktop';

function getBucket(width: number): ViewportBucket {
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function ResponsiveSlideDeck<T>({
  items,
  renderItem,
  keyExtractor,
  desktopMode = 'grid',
  desktopGridClass = 'lg:grid-cols-2',
  desktopPerPage = 4,
  tabletPerPage = 2,
  mobilePerPage = 1,
  gapClass = 'gap-3.5',
  ariaLabel = 'Trình chiếu nội dung',
  className = '',
  resetKey,
}: ResponsiveSlideDeckProps<T>) {
  const [bucket, setBucket] = useState<ViewportBucket>(() =>
    typeof window !== 'undefined' ? getBucket(window.innerWidth) : 'desktop'
  );
  const [page, setPage] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sync = () => setBucket(getBucket(window.innerWidth));
    sync();
    window.addEventListener('resize', sync, { passive: true });
    return () => window.removeEventListener('resize', sync);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [resetKey]);

  const useSlider = desktopMode === 'slider' || bucket !== 'desktop';
  const perPage =
    bucket === 'mobile'
      ? mobilePerPage
      : bucket === 'tablet'
      ? tabletPerPage
      : desktopPerPage;

  const pages = useMemo(() => {
    const safePerPage = Math.max(1, perPage);
    const out: Array<Array<{ item: T; globalIndex: number }>> = [];
    for (let i = 0; i < items.length; i += safePerPage) {
      out.push(
        items.slice(i, i + safePerPage).map((item, offset) => ({
          item,
          globalIndex: i + offset,
        }))
      );
    }
    return out;
  }, [items, perPage]);

  const totalPages = Math.max(1, pages.length);

  useEffect(() => {
    if (page >= totalPages) {
      setPage(Math.max(0, totalPages - 1));
    }
  }, [page, totalPages]);

  if (!useSlider) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${desktopGridClass} ${gapClass} ${className}`}>
        {items.map((item, idx) => (
          <React.Fragment key={keyExtractor(item, idx)}>
            {renderItem(item, idx)}
          </React.Fragment>
        ))}
      </div>
    );
  }

  const goPrev = () => setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const goNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || totalPages <= 1) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  // Compute responsive inner grid columns matching items per slide
  const slideGridColsClass =
    bucket === 'mobile'
      ? mobilePerPage === 2
        ? 'grid-cols-2'
        : 'grid-cols-1'
      : bucket === 'tablet'
      ? tabletPerPage === 1
        ? 'grid-cols-1'
        : 'grid-cols-2'
      : desktopPerPage === 1
      ? 'grid-cols-1'
      : desktopPerPage === 3
      ? 'grid-cols-3'
      : desktopPerPage >= 4 && !desktopGridClass.includes('lg:grid-cols-2') && !desktopGridClass.includes('grid-cols-2')
      ? desktopGridClass
      : 'grid-cols-2';

  // Keep dot count compact on narrow screens when arrays are large (e.g., 14 screenshots -> window of 6 dots + counter)
  const MAX_VISIBLE_DOTS = 6;
  const dotWindowStart =
    totalPages <= MAX_VISIBLE_DOTS
      ? 0
      : Math.max(0, Math.min(page - Math.floor(MAX_VISIBLE_DOTS / 2), totalPages - MAX_VISIBLE_DOTS));
  const dotIndices = Array.from(
    { length: Math.min(totalPages, MAX_VISIBLE_DOTS) },
    (_, offset) => dotWindowStart + offset
  );

  return (
    <div className={`w-full ${className}`} aria-roledescription="carousel" aria-label={ariaLabel}>
      <div
        className="overflow-hidden w-full touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translate3d(-${page * 100}%, 0, 0)` }}
        >
          {pages.map((group, pIdx) => (
            <div key={pIdx} className="w-full shrink-0 px-0.5">
              <div className={`grid ${slideGridColsClass} ${gapClass} h-full`}>
                {group.map(({ item, globalIndex }) => (
                  <React.Fragment key={keyExtractor(item, globalIndex)}>
                    {renderItem(item, globalIndex)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Trang trước"
            className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[#1E40FF] text-slate-700 hover:text-[#1E40FF] flex items-center justify-center shadow-xs transition-colors cursor-pointer shrink-0"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs">
            {dotIndices.map((idx) => {
              const active = idx === page;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPage(idx)}
                  aria-label={`Chuyển đến trang ${idx + 1}`}
                  aria-current={active ? 'true' : undefined}
                  className="p-0.5 cursor-pointer flex items-center justify-center"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      active
                        ? 'w-5 bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9]'
                        : 'w-2 bg-slate-300 hover:bg-blue-300'
                    }`}
                  />
                </button>
              );
            })}
            {totalPages > MAX_VISIBLE_DOTS && (
              <span className="ml-1.5 pl-1.5 border-l border-slate-200 text-[10.5px] font-mono font-bold text-slate-500 tabular-nums">
                {String(page + 1).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Trang tiếp theo"
            className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[#1E40FF] text-slate-700 hover:text-[#1E40FF] flex items-center justify-center shadow-xs transition-colors cursor-pointer shrink-0"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ResponsiveSlideDeck;
