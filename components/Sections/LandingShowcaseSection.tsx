import React, { useState } from 'react';
import {
  ArrowUpRight,
  Calculator,
  ExternalLink,
  Globe,
  Sparkles,
  ZoomIn,
} from 'lucide-react';
import { Tilt3DCard } from '../UI/Interactive3D';
import Modal from '../UI/Modal';

// @ts-ignore
import imgKaen from '../../imgs/ke-eb.jpg';

export interface LandingShowcaseSectionProps {
  onOpenDomationPricing: () => void;
  onOpenEcoLifeModal: () => void;
}

interface LandingSiteCard {
  id: string;
  name: string;
  tag: string;
  metric: string;
  hook: string;
  url: string;
  image: string;
  isFlagship3D?: boolean;
}

const LANDING_SITES: LandingSiteCard[] = [
  {
    id: 'ecolife-3d',
    name: 'EcoLife Signature Đà Nẵng (Web + 3D)',
    tag: 'BĐS XANH EDGE • WEBGL 3D',
    metric: '8 Căn Bóc Mái 3D',
    hook: 'Website WordPress Quiet Luxury tích hợp sa bàn 8 căn hộ 3D xoay 360° trực tiếp.',
    url: 'https://ecolifesignature.vn/3d/',
    image: '/assets/ecolife/TO_GAP_2_MAT_ONLINE_WEBSITE_BO_TRI_HOP_LY.webp',
    isFlagship3D: true,
  },
  {
    id: 'ecolife-ai',
    name: 'EcoLife Signature AI Sales Portal',
    tag: 'AI PORTAL • SÀN F1',
    metric: 'Trợ Lý AI 24/7',
    hook: 'Cổng AI huấn luyện chính sách, bảng hàng & kho ấn phẩm phục vụ 3 Đại lý F1.',
    url: 'https://ai.ecolifesignature.vn/',
    image: '/assets/ecolife/FACADE_HUONG_CHINH_03.webp',
    isFlagship3D: true,
  },
  {
    id: 'nava-store',
    name: 'Nava Store & Navatek Computing',
    tag: 'E-COMMERCE • B2B TECH',
    metric: 'Core Web Vitals 98',
    hook: 'Nền tảng thương mại điện tử thiết bị điện toán tối ưu giỏ hàng & tracking hành vi.',
    url: 'https://navastore.vn/',
    image: '/assets/domation/clients/nava.webp',
  },
  {
    id: 'ideas-mba',
    name: 'Viện Quốc Tế IDEAS — MBA Thụy Sĩ',
    tag: 'EDUCATION • LEAD FUNNEL',
    metric: 'x3 Tuyển Sinh MBA',
    hook: 'Landing Page chuyển đổi cao đưa lượng học viên Thạc sĩ từ 20 lên 60 học viên/khóa.',
    url: 'https://ideas.edu.vn/mba',
    image: '/assets/domation/clients/ideasmba.webp',
  },
  {
    id: 'flora-implant',
    name: 'Nha Khoa Flora — Ngày Hội Implant',
    tag: 'DENTAL CLINIC • EVENT',
    metric: '100k / Lead Đặt Hẹn',
    hook: 'Landing Page chiến dịch trồng răng Implant tối ưu trải nghiệm mobile & đặt lịch khám.',
    url: 'https://nhakhoaflora.com/ngay-hoi-implant/',
    image: '/assets/domation/clients/flora.webp',
  },
  {
    id: 'brandson-cme',
    name: 'Brandson Academy — Nha Khoa CME',
    tag: 'MEDICAL • B2B COURSE',
    metric: '400k / Lead Bác Sĩ',
    hook: 'Phễu tuyển sinh chuyên sâu khóa Cấy ghép Nha khoa cấp chứng chỉ CME cho Bác sĩ.',
    url: 'https://brandson.vn/cay-ghep-nha-khoa-co-ban',
    image: '/assets/domation/clients/brandson.webp',
  },
  {
    id: 'ideas-portal',
    name: 'Cổng Thông Tin Viện Đào Tạo IDEAS',
    tag: 'INSTITUTIONAL PORTAL',
    metric: 'SEO Top 1 Google',
    hook: 'Hệ thống cổng thông tin học thuật & tra cứu dành cho học viên cao học quốc tế.',
    url: 'https://ideas.edu.vn/',
    image: '/assets/domation/clients/ideasedu.webp',
  },
  {
    id: 'kaen-event',
    name: 'KA-EN Japanese Dining Event',
    tag: 'FINE DINING • EVENT',
    metric: 'Full Booking Sự Kiện',
    hook: 'Landing Page đặt bàn sự kiện ẩm thực Nhật Bản cao cấp thuộc chuỗi EN Group.',
    url: 'https://ka-en.com.vn/event.html',
    image: imgKaen,
  },
];

const LandingShowcaseSection: React.FC<LandingShowcaseSectionProps> = ({
  onOpenDomationPricing,
  onOpenEcoLifeModal,
}) => {
  const [zoomSite, setZoomSite] = useState<LandingSiteCard | null>(null);

  return (
    <section
      id="landings"
      className="py-16 sm:py-24 bg-[#F2EFE9]/75 border-y border-[#E6DEC8] relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <span className="ql-eyebrow">
              <Globe size={12} className="text-[#8A6016] shrink-0" />
              <span>CHƯƠNG 04 • SECTION LANDING PAGE &amp; WEBSITE 3D CHUYỂN ĐỔI CAO</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#212529]">
              Thiết Kế Landing Page, E-Commerce &amp;{' '}
              <span className="ql-grad-gold">Không Gian WebGL 3D</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenDomationPricing}
            className="ql-btn-outline px-5 py-3 text-xs whitespace-nowrap cursor-pointer self-start lg:self-auto"
          >
            <Calculator size={14} className="text-[#8A6016] shrink-0" />
            <span>Tính Chi Phí Làm Web Tự Động (Từ 12Tr)</span>
          </button>
        </div>

        {/* 8-SITE 3D PERSPECTIVE BROWSER SHOWCASE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LANDING_SITES.map((site) => (
            <Tilt3DCard
              key={site.id}
              maxTilt={6}
              className="ql-card rounded-[22px] overflow-hidden flex flex-col justify-between bg-white group"
            >
              <div>
                {/* Browser Top Bar */}
                <div className="px-3.5 py-2 bg-[#FAF8F3] border-b border-[#E6DEC8] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#E6B8AF] shrink-0" />
                    <span className="w-2 h-2 rounded-full bg-[#F1D592] shrink-0" />
                    <span className="w-2 h-2 rounded-full bg-[#A8D0B9] shrink-0" />
                    <span className="ml-1 text-[9.5px] font-mono text-[#555B62] truncate">
                      {site.url.replace(/^https?:\/\//, '')}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setZoomSite(site)}
                    aria-label="Phóng to giao diện"
                    className="text-[#8A6016] hover:text-[#212529] cursor-pointer shrink-0"
                  >
                    <ZoomIn size={13} />
                  </button>
                </div>

                {/* Screenshot */}
                <div
                  onClick={() => setZoomSite(site)}
                  className="relative aspect-[16/10] bg-[#F2EFE9] border-b border-[#E6DEC8] overflow-hidden cursor-pointer"
                >
                  <img
                    src={site.image}
                    alt={site.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500" decoding="async"
                  />
                  <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#212529]/85 text-white text-[9.5px] font-bold whitespace-nowrap">
                    {site.metric}
                  </span>
                </div>

                {/* Concise Copy */}
                <div className="p-4 space-y-1.5">
                  <span className="block text-[9.5px] font-extrabold uppercase tracking-wider text-[#8A6016] truncate">
                    {site.tag}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#212529] line-clamp-1">
                    {site.name}
                  </h3>
                  <p className="text-xs text-[#555B62] leading-relaxed line-clamp-2">{site.hook}</p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 pb-4 pt-2.5 border-t border-[#F2EFE9] flex items-center justify-between gap-2">
                {site.isFlagship3D ? (
                  <button
                    type="button"
                    onClick={onOpenEcoLifeModal}
                    className="text-[11px] font-bold text-[#133E2C] hover:underline inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
                  >
                    <Sparkles size={11} className="shrink-0" />
                    <span>Hồ sơ dự án</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setZoomSite(site)}
                    className="text-[11px] font-semibold text-[#555B62] hover:text-[#212529] whitespace-nowrap cursor-pointer"
                  >
                    Xem ảnh lớn
                  </button>
                )}

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FCF8EE] hover:bg-[#F3E4BE] border border-[#E6DEC8] text-[10.5px] font-extrabold text-[#7A5012] whitespace-nowrap transition-colors"
                >
                  <span>Mở Web</span>
                  <ExternalLink size={11} className="shrink-0" />
                </a>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      {/* Preview Lightbox */}
      <Modal
        isOpen={!!zoomSite}
        onClose={() => setZoomSite(null)}
        title={zoomSite?.name || 'Landing Page Preview'}
        className="max-w-5xl w-[92vw]"
      >
        {zoomSite && (
          <div className="p-4 sm:p-6 bg-[#FAF8F3] space-y-4">
            <img
              src={zoomSite.image}
              alt={zoomSite.name}
              className="w-full max-h-[72vh] object-contain rounded-xl border border-[#E6DEC8] bg-white" loading="lazy" decoding="async"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#555B62]">{zoomSite.hook}</p>
              <a
                href={zoomSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ql-btn-gold px-5 py-2.5 text-xs whitespace-nowrap"
              >
                <span>Truy Cập {zoomSite.url.replace(/^https?:\/\//, '')}</span>
                <ArrowUpRight size={14} className="shrink-0" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default LandingShowcaseSection;
