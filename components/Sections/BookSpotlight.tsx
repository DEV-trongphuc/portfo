import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Info,
  Share2,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

// @ts-ignore
import bookCover from '../../imgs/book_cover.webp';
// @ts-ignore
import bookPage71 from '../../imgs/book_page_71.webp';
// @ts-ignore
import bookPage60 from '../../imgs/book_page_60.webp';
// @ts-ignore
import bookPage109 from '../../imgs/book_page_109.webp';
// @ts-ignore
import bookPage107 from '../../imgs/book_page_107.webp';
// @ts-ignore
import domLogo from '../../imgs/dom_logo.webp';

const RAW_PAGES = [bookCover, bookPage71, bookPage60, bookPage109, bookPage107];

const SHEETS = [
  { front: RAW_PAGES[0], back: RAW_PAGES[1] },
  { front: RAW_PAGES[2], back: RAW_PAGES[3] },
  { front: RAW_PAGES[4], back: 'END_SCREEN' },
];

const PDF_URL =
  'https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing';

const GradientTypewriter = ({ text, className }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(timer);
      }, 80);
      return () => clearInterval(timer);
    }
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <span className="animate-pulse text-[#1E40FF] ml-1">|</span>
    </span>
  );
};

const BookSpotlight: React.FC = () => {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(-1);

  useEffect(() => {
    if (!isReaderOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetReader();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isReaderOpen]);

  const handleNext = () => {
    if (flippedIndex < SHEETS.length - 1) {
      setFlippedIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (flippedIndex >= 0) {
      setFlippedIndex((prev) => prev - 1);
    }
  };

  const resetReader = () => {
    setIsReaderOpen(false);
    setTimeout(() => {
      setFlippedIndex(-1);
    }, 350);
  };

  const getContainerOffset = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return '0%';
    if (flippedIndex === -1) return '-25%';
    if (flippedIndex === SHEETS.length - 1) return '25%';
    return '0%';
  };

  return (
    <section id="book-spotlight" className="py-24 lg:py-32 relative overflow-hidden z-10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Left on desktop: Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-[#1E40FF] text-[11px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Award size={14} /> Author • 154-Page Playbook
            </motion.div>

            <motion.h2
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35] mb-4"
            >
              Facebook Ads{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                <GradientTypewriter text="AI Chạy Không Được." />
              </span>
            </motion.h2>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <span className="text-slate-900 font-extrabold text-base">5.0</span>
              <span className="text-slate-500 text-sm">/ 500+ Readers</span>
            </div>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Không chỉ là sách, đây là{' '}
              <span className="text-slate-900 font-bold">Bản đồ tư duy</span> giúp bạn thoát khỏi
              ma trận giá thầu. Đúc kết hơn 5 năm thực chiến tìm ra công thức Scale ngân sách bền
              vững.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setIsReaderOpen(true)}
                className="btn-inkica-primary px-8 py-4 text-xs font-black uppercase tracking-widest inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Read Preview 3D <BookOpen size={16} />
              </button>

              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ql-btn-outline px-8 py-4 text-xs font-extrabold uppercase tracking-widest inline-flex items-center justify-center gap-2.5"
              >
                Tải Full PDF <FileText size={16} />
              </a>
            </div>
          </div>

          {/* Right on desktop: 3D Book Mockup */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative perspective-1000 mt-4 lg:mt-0">
            <motion.div
              initial={{ rotateY: -22, rotateX: 8, y: -12 }}
              whileHover={{ rotateY: -10, rotateX: 4, scale: 1.04, y: -20 }}
              animate={{ y: [-12, -22, -12] }}
              transition={{
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.7, type: 'spring', stiffness: 100 },
              }}
              className="relative z-10 cursor-pointer group"
              onClick={() => setIsReaderOpen(true)}
            >
              <div className="relative w-[280px] sm:w-[320px] md:w-[370px] aspect-[1/1.4] rounded-r-2xl shadow-[24px_24px_60px_rgba(30,64,255,0.25)] border-l-[12px] border-slate-900 bg-slate-900">
                <img
                  src={RAW_PAGES[0]}
                  alt="Facebook Ads Digital Book Cover"
                  className="w-full h-full object-cover rounded-r-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent rounded-r-2xl pointer-events-none"></div>
                <div className="absolute inset-0 border border-slate-900/10 rounded-r-2xl group-hover:border-[#1E40FF]/50 transition-colors"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 border border-blue-200 text-[#1E40FF] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Click to Read
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-2 md:right-8 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-200 shadow-md flex items-center gap-2 pointer-events-none"
            >
              <div className="p-1 bg-[#1E40FF] rounded-full text-white">
                <Sparkles size={12} />
              </div>
              <span className="text-[11px] font-bold text-slate-900">Edition 2026</span>
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="hidden sm:flex absolute bottom-12 left-0 md:left-4 z-20 bg-white/95 backdrop-blur-md pl-2 pr-4 py-2 rounded-full border border-slate-200 shadow-md items-center gap-3 pointer-events-none"
            >
              <img
                src="https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/turnio_dev.png"
                onError={(e) => {
                  e.currentTarget.src = domLogo;
                }}
                alt="Huỳnh Trọng Phúc"
                className="w-8 h-8 rounded-full border border-[#1E40FF] object-cover"
              />
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                  Author
                </p>
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  Huỳnh Trọng Phúc
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive 3D Reader Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isReaderOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center overflow-hidden p-4"
              >
                <div className="absolute inset-0" onClick={resetReader}></div>

                <div className="relative w-full h-full flex items-center justify-center flex-col pointer-events-none">
                  <motion.div
                    className="relative w-[90vw] md:w-[800px] aspect-[2/1.4] perspective-1500 pointer-events-auto"
                    animate={{ x: getContainerOffset() }}
                    transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <motion.button
                      type="button"
                      onClick={resetReader}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="Đóng trình đọc sách"
                      className="absolute -top-5 -right-2 md:-right-10 md:-top-4 p-3 bg-white text-slate-800 border border-slate-200 hover:bg-blue-50 hover:text-[#1E40FF] rounded-full shadow-lg transition-all z-[200] cursor-pointer"
                    >
                      <X size={20} />
                    </motion.button>

                    <div className="relative w-full h-full flex justify-center items-center preserve-3d">
                      {SHEETS.map((sheet, index) => {
                        const zIndex = flippedIndex >= index ? index : SHEETS.length - index;
                        return (
                          <motion.div
                            key={index}
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: flippedIndex >= index ? -180 : 0 }}
                            transition={{
                              duration: 1.3,
                              type: 'spring',
                              stiffness: 35,
                              damping: 15,
                              mass: 1.3,
                            }}
                            className="absolute w-1/2 h-full right-0 origin-left preserve-3d cursor-pointer"
                            style={{ zIndex }}
                            onClick={() => (flippedIndex >= index ? handlePrev() : handleNext())}
                          >
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden bg-white border border-slate-200 rounded-r-xl overflow-hidden shadow-2xl">
                              <img
                                src={sheet.front}
                                alt={`Front ${index}`}
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-900/15 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Back */}
                            <div
                              className="absolute inset-0 backface-hidden bg-white border border-slate-200 rounded-l-xl overflow-hidden shadow-2xl"
                              style={{ transform: 'rotateY(180deg)' }}
                            >
                              {sheet.back === 'END_SCREEN' ? (
                                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50/70 flex flex-col items-center justify-center p-6 md:p-8 text-center">
                                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5 text-[#1E40FF]">
                                    <FileText size={32} />
                                  </div>
                                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                                    YOUR JOURNEY <br /> STARTS HERE.
                                  </h3>
                                  <p className="text-slate-600 text-xs mb-6 max-w-[220px]">
                                    Trọn bộ tài liệu 154 trang thực chiến Facebook Ads &amp; Scaling.
                                  </p>
                                  <div className="space-y-2.5 w-full max-w-[220px]">
                                    <a
                                      href={PDF_URL}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn-inkica-primary w-full py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
                                    >
                                      <FileText size={15} /> Read Full PDF
                                    </a>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        navigator.clipboard?.writeText(PDF_URL);
                                      }}
                                      className="ql-btn-outline w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                      <Share2 size={14} /> Copy PDF Link
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <img
                                    src={sheet.back}
                                    alt={`Back ${index}`}
                                    className="w-full h-full object-contain"
                                  />
                                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-900/15 to-transparent pointer-events-none"></div>
                                </>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Controls */}
                  <div className="mt-7 flex gap-6 z-[150] pointer-events-auto bg-white/95 px-6 py-2.5 rounded-full border border-slate-200 shadow-lg">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={flippedIndex < 0}
                      className={`p-2 rounded-full transition-colors ${
                        flippedIndex < 0
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'text-slate-800 hover:bg-blue-50 hover:text-[#1E40FF] cursor-pointer'
                      }`}
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <div className="flex items-center text-slate-600 text-xs font-mono uppercase tracking-widest gap-2">
                      <Info size={14} className="text-[#1E40FF]" />
                      <span>
                        {flippedIndex < 0
                          ? 'Cover View'
                          : flippedIndex === SHEETS.length - 1
                          ? 'Full Access'
                          : 'Reading Mode'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={flippedIndex >= SHEETS.length - 1}
                      className={`p-2 rounded-full transition-colors ${
                        flippedIndex >= SHEETS.length - 1
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'text-slate-800 hover:bg-blue-50 hover:text-[#1E40FF] cursor-pointer'
                      }`}
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      <style>{`
        .perspective-1500 { perspective: 1500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
};

export default BookSpotlight;
