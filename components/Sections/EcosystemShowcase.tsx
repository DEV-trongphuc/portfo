import React, { useState } from 'react';
import {
  ArrowUpRight,
  ZoomIn,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Database,
} from 'lucide-react';
import { SectionEyebrow } from '../UI/DecorElements';
import SlideDot from '../UI/SlideDot';
import Modal from '../UI/Modal';
import {
  DOMATION_V2_CAPI_SHOWCASE,
  ERP_GALLERY,
  ERP_16_EXTRA,
  DOMATION_AUTO_FEATURES,
  DOMATION_CRM_IMAGES,
  DOMATION_META_REPORT_IMAGES,
  DOMATION_CLIENT_SITES,
  DOMATION_ALL_MODULES,
} from '../../constants';

export interface EcosystemShowcaseProps {
  onOpenDomation?: () => void;
}

interface GallerySlide {
  src: string;
  title: string;
  desc: string;
  badge?: string;
}

const TABS: {
  id: string;
  tabLabel: string;
  eyebrow: string;
  heading: string;
  summary: string;
  slides: GallerySlide[];
}[] = [
  {
    id: 'data-capi',
    tabLabel: '01 AUTO CHIA DATA & CAPI 2026',
    eyebrow: 'BẢN CẬP NHẬT 2026 • ZALOBOT & CONVERSION API',
    heading: 'Auto Chia Data 3 Đại Lý F1 (ZaloBot) & Auto Bắn Meta CAPI',
    summary:
      'Thu nhận lead tức thì từ Meta Form & Website, lọc trùng 6 tháng, chia đều qua ZaloBot <5 giây cho Tùng Long, Hợp Nhất, IHD & Sale cá nhân. Tự động bắn Conversion API (Lead/Qualified, Schedule/Booked, DisqualifiedLead/Notlead) về Facebook Dataset khi Sale đánh giá.',
    slides: DOMATION_V2_CAPI_SHOWCASE.map((s) => ({
      src: s.image,
      title: s.title,
      desc: s.subtitle,
      badge: s.badge,
    })),
  },
  {
    id: 'erp',
    tabLabel: '02 DOMATION ERP 5.0',
    eyebrow: '12 PHÂN HỆ TỰ CODE • 16 SCREENSHOTS',
    heading: 'Hệ Thống Quản Trị Doanh Nghiệp Đa Cơ Sở Toàn Diện',
    summary:
      'Kiến trúc cho doanh nghiệp giáo dục, bất động sản & chuỗi dịch vụ: chấm công GPS AI Selfie, tính lương tự động, quản lý hợp đồng, dòng tiền cọc & vận hành phòng học Real-Time.',
    slides: [...ERP_GALLERY, ERP_16_EXTRA].map((g, i) => ({
      src: g.src,
      title: g.title,
      desc: g.description,
      badge: `ERP #${String(i + 1).padStart(2, '0')}`,
    })),
  },
  {
    id: 'meta-report',
    tabLabel: '03 META AD REPORT',
    eyebrow: 'META GRAPH API • CRM RECONCILIATION',
    heading: 'Đối Chiếu Chi Phí Quảng Cáo Với Chất Lượng Sale Real-Time',
    summary:
      'Kết nối thẳng Meta Ads API & dữ liệu đánh giá thực tế của đội Sale để phát hiện Adset đốt tiền, theo dõi tỷ lệ Notlead / Thiện chí và tối ưu ngân sách.',
    slides: DOMATION_META_REPORT_IMAGES.map((m, i) => ({
      src: m.src,
      title: m.title,
      desc: 'Bảng điều khiển đo lường Spend, CPL thực, Hook Rate và trạng thái đồng bộ Dataset Conversion API.',
      badge: `META #${String(i + 1).padStart(2, '0')}`,
    })),
  },
  {
    id: 'autoflow',
    tabLabel: '04 AUTOFLOW & AI AGENT',
    eyebrow: 'VISUAL FLOW & RAG CHATBOT 24/7',
    heading: 'Trợ Lý AI Phòng Ban, Email Builder, ZNS & Web Tracking',
    summary:
      'Xây dựng kịch bản tự động đa nhánh kết hợp AI Agent đọc hiểu PDF bảng giá, phát hành Voucher Hub & đo lường QR Code từ OOH.',
    slides: DOMATION_AUTO_FEATURES.map((a, i) => ({
      src: a.src,
      title: a.title,
      desc: a.desc,
      badge: a.tab,
    })),
  },
  {
    id: 'crm',
    tabLabel: '05 CRM CHỐT ĐƠN 4.0',
    eyebrow: 'PIPELINE & ZNS BOOKING',
    heading: 'Quản Lý Khách Hàng 360 Độ, Giỏ Hàng & Lịch Hẹn',
    summary:
      'Theo dõi lịch sử tương tác đa kênh từ lúc nhấp quảng cáo cho tới lúc đặt cọc, ký hợp đồng và tự động gửi thông báo nhắc lịch qua ZaloBot.',
    slides: DOMATION_CRM_IMAGES.map((c, i) => ({
      src: c.src,
      title: c.title,
      desc: 'Giao diện CRM trực quan cho cấp Quản lý sàn & Sale cá nhân theo sát từng cơ hội chuyển đổi.',
      badge: `CRM #${String(i + 1).padStart(2, '0')}`,
    })),
  },
  {
    id: 'web',
    tabLabel: '06 WEB & 3D LUXURY',
    eyebrow: 'QUIET LUXURY • NEXTJS • WORDPRESS',
    heading: 'Hệ Sinh Thái Website Thương Hiệu & Portal Bất Động Sản',
    summary:
      'Thiết kế và lập trình trọn gói website EcoLife Signature (WordPress + 3D + AI Portal), Nava Store, MBA Quốc tế, Brandson & Flora.',
    slides: DOMATION_CLIENT_SITES.map((w) => ({
      src: w.img,
      title: w.name,
      desc: w.desc,
      badge: w.tag,
    })),
  },
];

const EcosystemShowcase: React.FC<EcosystemShowcaseProps> = ({ onOpenDomation }) => {
  const [tabIdx, setTabIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [zoomSlide, setZoomSlide] = useState<GallerySlide | null>(null);

  const currentTab = TABS[tabIdx];
  const slides = currentTab.slides;
  const safeSlideIdx = Math.min(slideIdx, Math.max(0, slides.length - 1));
  const currentSlide = slides[safeSlideIdx];

  const handleTabChange = (idx: number) => {
    setTabIdx(idx);
    setSlideIdx(0);
  };

  return (
    <section
      id="cockpit"
      className="py-16 sm:py-24 relative bg-[#F2EFE9] border-b border-[#E6DEC8] overflow-hidden"
    >
      <div id="outsource" className="sr-only" aria-hidden="true" />
      <div id="dom-agency" className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-10">
        {/* Header + Direct Link to Full /domation Page */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow
              index="03 / HỆ SINH THÁI DOMATION"
              label="SẢN PHẨM & NỀN TẢNG TỰ XÂY DỰNG"
            />
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#212529]">
              Hệ sinh thái phần mềm &amp;{' '}
              <span className="ql-grad-title">công nghệ tăng trưởng thực chiến.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <button
              type="button"
              onClick={onOpenDomation}
              className="ql-btn-gold px-6 py-3 text-xs sm:text-[13px] cursor-pointer"
            >
              <Layers size={15} />
              <span>Xem Trang Chi Tiết DOMATION</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Single-Row WordPress Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {TABS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => handleTabChange(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer ${
                idx === tabIdx ? 'ql-pill-tab-active' : 'ql-pill-tab'
              }`}
            >
              {t.tabLabel}
            </button>
          ))}
        </div>

        {/* WordPress #ch06-residences Studio Frame: Info Top + Main Canvas + Right Numbered Rail */}
        <div className="ql-studio-frame p-5 sm:p-8 bg-white">
          {/* Top Bar inside Studio Frame */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E6DEC8]">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#8A6016]">
                <Database size={13} />
                <span>{currentTab.eyebrow}</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#212529]">
                {currentTab.heading}
              </h3>
              <p className="text-xs sm:text-sm text-[#555B62] leading-relaxed">{currentTab.summary}</p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <SlideDot
                total={Math.min(slides.length, 8)}
                current={safeSlideIdx % Math.min(slides.length, 8)}
                onSelect={setSlideIdx}
                ariaLabel="Ảnh hệ thống"
              />
              <button
                type="button"
                onClick={onOpenDomation}
                className="ql-btn-outline px-4 py-2 text-xs cursor-pointer"
              >
                <span>Bảng Giá &amp; Demo</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Main Studio Viewport + Right Thumbnail Rail (exact #ch06-residences archetype) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Main Image Viewer (9 cols) */}
            <div className="lg:col-span-9 flex flex-col justify-between rounded-2xl bg-[#FAF8F3] border border-[#E6DEC8] overflow-hidden">
              <div
                onClick={() => currentSlide && setZoomSlide(currentSlide)}
                className="relative aspect-[16/9] w-full bg-[#FAF8F3] cursor-zoom-in group overflow-hidden"
              >
                {currentSlide && (
                  <img
                    src={currentSlide.src}
                    alt={currentSlide.title}
                    className="w-full h-full object-contain bg-[#FAF8F3] transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                )}
                <button
                  type="button"
                  aria-label="Phóng to ảnh"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/95 border border-[#E6DEC8] text-[11px] font-bold text-[#8A6016] flex items-center gap-1.5 shadow-sm"
                >
                  <ZoomIn size={13} />
                  <span>Phóng to</span>
                </button>
                <div className="hidden sm:flex items-center gap-2 absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#212529]/80 text-white text-[11px] font-semibold backdrop-blur-sm">
                  <span>
                    {safeSlideIdx + 1} / {slides.length}
                  </span>
                  <span>• Chạm vào ảnh để xem rõ chi tiết</span>
                </div>
              </div>

              {currentSlide && (
                <div className="px-5 py-4 bg-white border-t border-[#E6DEC8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A6016]">
                      {currentSlide.badge}
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg text-[#212529]">
                      {currentSlide.title}
                    </div>
                    <div className="text-xs text-[#555B62] mt-0.5">{currentSlide.desc}</div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4F0] text-[#133E2C] text-[11px] font-bold">
                      <ShieldCheck size={13} />
                      Real Production UI
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Numbered Thumbnail Rail (3 cols - exact WordPress 01/02/03/04 look) */}
            <div className="lg:col-span-3 flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto lg:max-h-[480px] pr-1">
              {slides.map((sl, idx) => {
                const isSel = idx === safeSlideIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSlideIdx(idx)}
                    className={`group shrink-0 w-44 lg:w-full rounded-xl p-1.5 border text-left transition-all cursor-pointer ${
                      isSel
                        ? 'bg-[#FCF8EE] border-[#B68D40] shadow-xs'
                        : 'bg-[#FAF8F3] border-[#E6DEC8] hover:border-[#B68D40]/60'
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white">
                      <img
                        src={sl.src}
                        alt={sl.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <span
                        className={`absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isSel
                            ? 'bg-[#8A6016] text-white'
                            : 'bg-[#212529]/75 text-white'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="px-1.5 pt-1.5 pb-0.5 text-[11px] font-bold text-[#212529] line-clamp-1">
                      {sl.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 18 Integrated Module Strip + Full Page CTA */}
        <div className="rounded-[24px] bg-white border border-[#E6DEC8] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#8A6016]">
                18 PHÂN HỆ LÕI TÍCH HỢP TRONG DOMATION SUITE
              </span>
              <h4 className="font-display font-bold text-lg text-[#212529]">
                Toàn Bộ Tài Nguyên, Pricing &amp; Case Demo Tại Trang Chuyên Biệt DOMATION
              </h4>
            </div>
            <button
              type="button"
              onClick={onOpenDomation}
              className="ql-btn-gold px-5 py-2.5 text-xs shrink-0 cursor-pointer"
            >
              <span>Mở Toàn Bộ Trang DOMATION (/domation)</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {DOMATION_ALL_MODULES.map((m) => (
              <span
                key={m.id}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6DEC8] text-[11px] font-semibold text-[#212529]"
              >
                <CheckCircle2 size={12} className="text-[#B68D40]" />
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <Modal
        isOpen={!!zoomSlide}
        onClose={() => setZoomSlide(null)}
        title={zoomSlide?.title || 'Chi Tiết Giao Diện DOMATION'}
        className="max-w-5xl"
      >
        {zoomSlide && (
          <div className="p-5 sm:p-7 space-y-4">
            <div className="rounded-2xl bg-white border border-[#E6DEC8] overflow-hidden">
              <img
                src={zoomSlide.src}
                alt={zoomSlide.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#555B62] leading-relaxed">{zoomSlide.desc}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default EcosystemShowcase;
