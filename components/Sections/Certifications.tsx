import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  ShieldCheck,
} from 'lucide-react';
import { CERTIFICATIONS } from '../../constants';
import { Certification } from '../../types';
import Modal from '../UI/Modal';

const CERT_TAGS: Record<string, string[]> = {
  c1: ['Frontend Architecture', 'SPA Libraries', 'UI Engineering'],
  c2: ['Responsive UI', 'Mobile-First', 'Accessibility WCAG'],
  c4: ['JavaScript Advanced', 'Async Engine', 'Memory Optimization'],
  c5: ['JavaScript Core', 'ES6+ Syntax', 'DOM Manipulation'],
  c6: ['ReactJS Ecosystem', 'Hooks & State', 'Component Architecture'],
  c7: ['Semantic HTML5', 'Modern CSS3', 'Cross-Browser Layout'],
  c8: ['Technical SEO', 'Schema Structured Data', 'Core Web Vitals'],
  c3: ['Top 20% Percentile', 'Algorithm Optimization', 'Problem Solving'],
};

const Certifications: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1024) setCardsPerPage(3);
      else if (window.innerWidth >= 640) setCardsPerPage(2);
      else setCardsPerPage(1);
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(CERTIFICATIONS.length / cardsPerPage);

  useEffect(() => {
    if (activePage >= totalPages) {
      setActivePage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, activePage]);

  const handlePrev = useCallback(() => {
    setActivePage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setActivePage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const visibleCerts = CERTIFICATIONS.slice(
    activePage * cardsPerPage,
    activePage * cardsPerPage + cardsPerPage
  );

  return (
    <section id="certifications" className="py-10 sm:py-16 lg:py-22 relative z-10 overflow-hidden">
      <div id="achievements" className="absolute -top-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 sm:gap-6 border-b border-slate-200/80 pb-5 sm:pb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[11px] font-bold uppercase tracking-widest mb-3">
              <ShieldCheck size={14} />
              <span>Verified Credentials &amp; Mastery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35]">
              Chứng Chỉ{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                Nghề Nghiệp.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
              Hệ thống chứng chỉ chuyên môn xác thực năng lực Frontend Architecture,
              JavaScript nâng cao và Technical SEO.
            </p>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Trang trước"
                className="w-10 h-10 rounded-xl border border-slate-200 hover:border-[#1E40FF] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Trang tiếp theo"
                className="w-10 h-10 rounded-xl border border-slate-200 hover:border-[#1E40FF] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Card Carousel (with touch swipe) */}
        <div
          className="relative min-h-[340px] sm:min-h-[400px] touch-pan-y"
          onTouchStart={(e) => {
            e.currentTarget.dataset.touchX = String(e.touches[0]?.clientX ?? '');
          }}
          onTouchEnd={(e) => {
            const startX = Number(e.currentTarget.dataset.touchX);
            const endX = e.changedTouches[0]?.clientX ?? startX;
            if (!Number.isFinite(startX)) return;
            if (endX - startX < -40) handleNext();
            else if (endX - startX > 40) handlePrev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 1, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`grid gap-6 ${
                cardsPerPage === 3
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : cardsPerPage === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1'
              }`}
            >
              {visibleCerts.map((cert) => {
                const tags = CERT_TAGS[cert.id] || ['Software Engineering'];
                return (
                  <div
                    key={cert.id}
                    className="p-5 flex flex-col h-full group bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/35 rounded-3xl shadow-sm hover:shadow-[0_18px_40px_-18px_rgba(30,64,255,0.18)] transition-all"
                  >
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative bg-slate-100 border border-slate-200 cursor-zoom-in"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async"
                      />

                      <div className="absolute top-2.5 right-2.5 bg-white/95 border border-blue-200 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <BadgeCheck size={12} className="text-[#1E40FF]" />
                        <span className="text-[10px] font-bold uppercase text-[#1E40FF] tracking-wider">
                          Verified
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-slate-900/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white shadow-lg">
                          <Maximize2 size={12} className="text-[#1E40FF]" />
                          Xem Chứng Chỉ
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-[#1E40FF] flex items-center gap-1.5">
                            <Award size={13} />
                            {cert.issuer}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {cert.year}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1E40FF] transition-colors line-clamp-2 mb-3">
                          {cert.name}
                        </h3>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tags.slice(0, 2).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-50 border border-slate-200 text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[11px] font-bold text-slate-700 hover:text-[#1E40FF] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Maximize2 size={12} />
                          <span>Chi Tiết</span>
                        </button>

                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-xl bg-[#1E40FF] hover:bg-blue-700 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1.5"
                          >
                            <span>Verify ID</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setSelectedCert(cert)}
                            className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Xem Thêm</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots + Mobile/Desktop Prev & Next */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Trang trước"
              className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#1E40FF] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePage(idx)}
                  aria-label={`Trang ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === activePage ? 'w-8 bg-[#1E40FF]' : 'w-2.5 bg-slate-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Trang tiếp theo"
              className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#1E40FF] bg-white hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Trang {activePage + 1} / {totalPages} • {CERTIFICATIONS.length} Chứng Chỉ Quốc Tế
          </span>
        </div>
      </div>

      {/* Portal Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.name || 'Verified Credential'}
        className="max-w-3xl"
      >
        {selectedCert && (
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-full object-contain" loading="lazy" decoding="async"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Tổ Chức Cấp &amp; Năm
                </span>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Award size={14} className="text-[#1E40FF]" />
                  <span>{selectedCert.issuer}</span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                    <Calendar size={12} /> {selectedCert.year}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">
                  Trạng Thái Xác Thực
                </span>
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <CheckCircle2 size={14} />
                  <span>Verified Credential</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(CERT_TAGS[selectedCert.id] || ['Software Engineering']).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-[#1E40FF]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {selectedCert.link && (
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inkica-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Truy Cập Chứng Chỉ Gốc (Official ID)</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;
