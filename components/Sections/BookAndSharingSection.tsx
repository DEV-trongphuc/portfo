import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Gift,
  Maximize2,
  PlayCircle,
  Sparkles,
  Star,
} from 'lucide-react';
import { Tilt3DCard } from '../UI/Interactive3D';
import StudioDrawerModal from '../UI/StudioDrawerModal';

// Local bundled book pages & PDF
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
import micrositePdf from '../../pdf/microsite game_compressed.pdf';

const BOOK_PDF_URL =
  'https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing';

const BOOK_PAGES = [
  { src: bookCover, label: 'Bìa Sách Chính Thức — Ấn Bản 2026' },
  { src: bookPage60, label: 'Trang 60 — Bản Đồ Tư Duy Phễu & Tối Ưu CPM' },
  { src: bookPage71, label: 'Trang 71 — Ma Trận Giá Thầu & Tín Hiệu Máy Học' },
  { src: bookPage107, label: 'Trang 107 — Chiến Thuật Scale Ngân Sách Bền Vững' },
  { src: bookPage109, label: 'Trang 109 — Kết Hợp API & Đo Lường ROAS Thật' },
];

const SHEETS = [
  { front: bookCover, back: bookPage60 },
  { front: bookPage71, back: bookPage107 },
  { front: bookPage109, back: 'END_SCREEN' as const },
];

const BookAndSharingSection: React.FC = () => {
  const [flippedIdx, setFlippedIdx] = useState(-1);
  const [modalMode, setModalMode] = useState<'book' | 'pdf' | 'video' | null>(null);
  const [readerPageIdx, setReaderPageIdx] = useState(0);

  const nextFlip = () => {
    setFlippedIdx((prev) => (prev < SHEETS.length - 1 ? prev + 1 : -1));
  };

  const prevFlip = () => {
    setFlippedIdx((prev) => (prev >= 0 ? prev - 1 : -1));
  };

  const flipLabel =
    flippedIdx === -1
      ? 'Bìa Trước (Bấm vào sách để lật)'
      : flippedIdx === SHEETS.length - 1
      ? 'Trang Cuối • Tải PDF Đầy Đủ'
      : `Đang mở Trang Mẫu ${flippedIdx * 2 + 1} – ${flippedIdx * 2 + 2}`;

  return (
    <section id="book-sharing" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <span className="ql-eyebrow">
              <BookOpen size={12} className="text-[#B45309] shrink-0" />
              <span>CHƯƠNG 05 • TÁC GIẢ SÁCH &amp; CHIA SẺ TRI THỨC CỘNG ĐỒNG</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A]">
              Sách Thực Chiến{' '}
              <span className="ql-grad-gold">“Facebook Ads – AI Chạy Không Được”</span> &amp; Quà Tặng
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] bg-[#FFFBEB] border border-[#E2E8F0] px-4 py-2 rounded-full self-start lg:self-auto whitespace-nowrap">
            <div className="flex items-center gap-0.5 text-[#D97706]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <span>5.0 ★ • 500+ Độc Giả • Chia Sẻ Miễn Phí</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* LEFT 7 COLS: INTERACTIVE 3D FLIPPING BOOK STAGE */}
          <div className="lg:col-span-7 ql-studio-frame p-6 sm:p-8 bg-white flex flex-col justify-between relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
              {/* Interactive 3D Book Pedestal */}
              <div className="md:col-span-6 flex flex-col items-center justify-center py-4">
                <div
                  className="relative w-[210px] sm:w-[230px] h-[300px] sm:h-[325px] select-none transition-transform duration-700"
                  style={{
                    perspective: '1300px',
                    transform:
                      flippedIdx >= 0 && flippedIdx < SHEETS.length - 1
                        ? 'translateX(48px)'
                        : 'translateX(0px)',
                  }}
                >
                  {/* Soft Floor Shadow */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[190px] h-6 rounded-full bg-[#0F172A]/15 blur-md pointer-events-none"
                  />

                  <div
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {SHEETS.map((sheet, index) => {
                      const isFlipped = index <= flippedIdx;
                      const rotY = isFlipped ? -178 : -12;
                      const zIndex = isFlipped ? index + 1 : SHEETS.length - index + 1;

                      return (
                        <motion.div
                          key={index}
                          animate={{ rotateY: rotY }}
                          transition={{
                            duration: 0.85,
                            type: 'spring',
                            stiffness: 70,
                            damping: 16,
                          }}
                          style={{
                            zIndex,
                            transformStyle: 'preserve-3d',
                          }}
                          onClick={nextFlip}
                          title="Bấm để lật trang 3D"
                          className="absolute inset-0 w-full h-full origin-left cursor-pointer"
                        >
                          {/* Front of Sheet */}
                          <div
                            style={{ backfaceVisibility: 'hidden' }}
                            className="absolute inset-0 w-full h-full rounded-r-2xl bg-white border border-[#D8CBB0] shadow-[16px_18px_36px_-12px_rgba(33,37,41,0.28)] overflow-hidden"
                          >
                            <img
                              src={sheet.front}
                              alt="Facebook Ads Book Page"
                              className="w-full h-full object-cover" loading="lazy" decoding="async"
                            />
                            {/* Book Spine Crease */}
                            <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                          </div>

                          {/* Back of Sheet */}
                          <div
                            style={{
                              backfaceVisibility: 'hidden',
                              transform: 'rotateY(180deg)',
                            }}
                            className="absolute inset-0 w-full h-full rounded-l-2xl bg-[#FFFFFF] border border-[#D8CBB0] shadow-[-12px_16px_32px_-12px_rgba(33,37,41,0.22)] overflow-hidden flex items-center justify-center"
                          >
                            {sheet.back === 'END_SCREEN' ? (
                              <div className="p-5 text-center space-y-3">
                                <Sparkles size={22} className="text-[#B45309] mx-auto" />
                                <h4 className="font-display text-base font-bold text-[#0F172A]">
                                  Tải Trọn Bộ Sách PDF
                                </h4>
                                <p className="text-[11px] text-[#475569] leading-relaxed">
                                  Đọc đầy đủ toàn bộ các chương tư duy Bidding &amp; Scale ngân sách.
                                </p>
                                <a
                                  href={BOOK_PDF_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="ql-btn-gold px-4 py-2 text-[11px] whitespace-nowrap"
                                >
                                  <span>Tải Full PDF</span>
                                  <ArrowUpRight size={12} className="shrink-0" />
                                </a>
                              </div>
                            ) : (
                              <img
                                src={sheet.back}
                                alt="Facebook Ads Sample Page"
                                className="w-full h-full object-cover" loading="lazy" decoding="async"
                              />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* 3D Flip Controls */}
                <div className="mt-6 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={prevFlip}
                    disabled={flippedIdx === -1}
                    className="w-8 h-8 rounded-full bg-white/40 hover:bg-[#FFFBEB] disabled:opacity-40 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] cursor-pointer"
                    aria-label="Trang trước"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <span className="text-[11px] font-bold text-[#B45309] whitespace-nowrap">
                    {flipLabel}
                  </span>
                  <button
                    type="button"
                    onClick={nextFlip}
                    className="w-8 h-8 rounded-full bg-white/40 hover:bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] cursor-pointer"
                    aria-label="Lật trang tiếp"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Book Core Value & Actions (Concise, Zero Wall of Text) */}
              <div className="md:col-span-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFFBEB] border border-[#E2E8F0] text-[10px] font-extrabold uppercase tracking-wider text-[#B45309]">
                  TÁC GIẢ: HUỲNH TRỌNG PHỨC (TURNIO)
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Đúc Kết 5 Năm Thực Chiến Thoát Ma Trận Giá Thầu
                </h3>

                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                  Thuật toán AI của nền tảng sẽ đốt ngân sách nếu thiếu phễu bán hàng và tín hiệu dữ
                  liệu chuẩn. Cuốn sách chia sẻ trọn vẹn tư duy Bidding &amp; CAPI thực tế.
                </p>

                <div className="space-y-2 pt-1">
                  {[
                    'Bản đồ thiết lập phễu tối ưu CPM & chất lượng Lead',
                    'Kết hợp Meta CAPI đo lường ROAS thời gian thực',
                    'Chiến thuật nhân bản & tăng ngân sách bền vững',
                  ].map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                      <CheckCircle2 size={14} className="text-[#0F5132] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <a
                    href={BOOK_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ql-btn-gold h-11 px-4 text-xs whitespace-nowrap"
                  >
                    <Download size={14} className="shrink-0" />
                    <span>Tải PDF Miễn Phí</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setReaderPageIdx(0);
                      setModalMode('book');
                    }}
                    className="ql-btn-outline h-11 px-4 text-xs whitespace-nowrap cursor-pointer"
                  >
                    <Maximize2 size={13} className="text-[#B45309] shrink-0" />
                    <span>Đọc Thử Cỡ Lớn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: COMMUNITY GIFTS, TEMPLATES & REPORTS */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {/* Gift 1: Free Google Sites No-Code Theme */}
            <Tilt3DCard
              maxTilt={5}
              className="ql-card rounded-[22px] p-5 bg-white flex items-start justify-between gap-4"
            >
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFFBEB] border border-[#E2E8F0] text-[9.5px] font-extrabold text-[#B45309] uppercase">
                    MÓN QUÀ NHỎ • FREE TEMPLATE
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#0F172A]">
                  Chia Sẻ Google Sites Theme Miễn Phí
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Bộ giao diện mẫu giúp bất kỳ ai cũng tự tạo được Website thông tin chuyên nghiệp
                  mà không cần biết lập trình.
                </p>
                <div className="pt-1.5">
                  <a
                    href="https://sites.google.com/view/turnio-theme/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#92400E] hover:underline whitespace-nowrap"
                  >
                    <Gift size={13} className="shrink-0" />
                    <span>Nhận Template Miễn Phí</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </div>
              </div>
            </Tilt3DCard>

            {/* Gift 2: Waterbomb 2025 Campaign Report PDF */}
            <Tilt3DCard
              maxTilt={5}
              onClick={() => setModalMode('pdf')}
              className="ql-card rounded-[22px] p-5 bg-white flex items-start justify-between gap-4 cursor-pointer"
            >
              <div className="space-y-1.5 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[9.5px] font-extrabold text-[#0F5132] uppercase">
                  CASE REPORT PDF • GAMIFICATION
                </span>
                <h4 className="font-display text-lg font-bold text-[#0F172A]">
                  Tài Liệu Micro-site Minigame Waterbomb
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Báo cáo cấu trúc triển khai Minigame sự kiện âm nhạc thu hút tương tác &amp; dữ liệu
                  người dùng thật.
                </p>
                <div className="pt-1.5 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F5132] whitespace-nowrap">
                    <FileText size={13} className="shrink-0" />
                    <span>Đọc PDF Ngay Trên Trang →</span>
                  </span>
                </div>
              </div>
            </Tilt3DCard>

            {/* Gift 3: @turnio.dev 10.5K+ & Meta API Video */}
            <Tilt3DCard
              maxTilt={5}
              onClick={() => setModalMode('video')}
              className="ql-card rounded-[22px] p-5 bg-white flex items-start justify-between gap-4 cursor-pointer"
            >
              <div className="space-y-1.5 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFFBEB] border border-[#E2E8F0] text-[9.5px] font-extrabold text-[#B45309] uppercase">
                  10.5K+ FOLLOWERS • VIDEO GUIDE
                </span>
                <h4 className="font-display text-lg font-bold text-[#0F172A]">
                  Chia Sẻ Automation, Apps Script &amp; Meta API
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Chuỗi video hướng dẫn kết nối dữ liệu quảng cáo tự động &amp; xây dựng hệ thống
                  vận hành không code thừa.
                </p>
                <div className="pt-1.5 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#92400E] whitespace-nowrap">
                    <PlayCircle size={14} className="shrink-0" />
                    <span>Xem Video Hướng Dẫn</span>
                  </span>
                  <a
                    href="https://www.tiktok.com/@turnio.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#475569] hover:text-[#0F172A] whitespace-nowrap"
                  >
                    <span>TikTok @turnio.dev</span>
                    <ExternalLink size={11} className="shrink-0" />
                  </a>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>

      {/* STUDIO MODAL FOR FULL BOOK PREVIEW / PDF / VIDEO */}
      <StudioDrawerModal
        isOpen={modalMode !== null}
        onClose={() => setModalMode(null)}
        badge={
          modalMode === 'book'
            ? 'SÁCH FACEBOOK ADS — HUỲNH TRỌNG PHỨC'
            : modalMode === 'pdf'
            ? 'GAMIFICATION CAMPAIGN REPORT'
            : 'VIDEO CHIA SẺ KỸ THUẬT'
        }
        title={
          modalMode === 'book'
            ? 'Đọc Thử Các Trang Tiêu Biểu — Facebook Ads AI Chạy Không Được'
            : modalMode === 'pdf'
            ? 'Waterbomb 2025 Micro-site & Minigame Report (PDF)'
            : 'Hướng Dẫn Hệ Thống Báo Cáo Meta Ads Realtime & API'
        }
        liveUrl={modalMode === 'book' ? BOOK_PDF_URL : modalMode === 'pdf' ? micrositePdf : undefined}
        liveLabel={modalMode === 'book' ? 'Tải Full PDF' : 'Mở File PDF'}
        maxWidthClass="max-w-5xl"
      >
        {modalMode === 'book' && (
          <div className="p-5 sm:p-8 space-y-5 bg-white/40">
            <div className="relative bg-white rounded-2xl border border-[#E2E8F0] p-4 flex items-center justify-center min-h-[62vh]">
              <img
                src={BOOK_PAGES[readerPageIdx].src}
                alt={BOOK_PAGES[readerPageIdx].label}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md" loading="lazy" decoding="async"
              />
              <button
                type="button"
                onClick={() =>
                  setReaderPageIdx((p) => (p - 1 + BOOK_PAGES.length) % BOOK_PAGES.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center cursor-pointer shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setReaderPageIdx((p) => (p + 1) % BOOK_PAGES.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center cursor-pointer shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                {BOOK_PAGES[readerPageIdx].label} ({readerPageIdx + 1}/{BOOK_PAGES.length})
              </span>
              <div className="flex gap-2">
                {BOOK_PAGES.map((pg, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReaderPageIdx(i)}
                    className={`w-11 h-14 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      readerPageIdx === i ? 'border-[#D97706]' : 'border-[#E2E8F0] opacity-60'
                    }`}
                  >
                    <img src={pg.src} alt={pg.label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {modalMode === 'pdf' && (
          <div className="h-[78vh] w-full bg-white">
            <iframe
              src={micrositePdf}
              title="Waterbomb 2025 Campaign Report PDF"
              className="w-full h-full border-0"
            />
          </div>
        )}

        {modalMode === 'video' && (
          <div className="p-5 sm:p-8 bg-white/40">
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#E2E8F0] bg-black shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/fvIHSrpsAlI?autoplay=1"
                title="Meta Ads Realtime Report & API Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </StudioDrawerModal>
    </section>
  );
};

export default BookAndSharingSection;
