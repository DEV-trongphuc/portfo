import React from 'react';
import {
  ArrowUpRight,
  Bot,
  Box,
  CheckCircle2,
  ExternalLink,
  Film,
  Printer,
  ShieldCheck,
} from 'lucide-react';
import { SectionEyebrow } from '../UI/DecorElements';
import { ECOLIFE_OFFLINE_PRINT_OOH } from '../../constants';

export interface EcoLifeShowcaseProps {
  onOpenDetail: () => void;
}

const DELIVERABLE_PILLARS = [
  {
    icon: Box,
    title: 'Website WordPress Quiet Luxury & 8 Mẫu 3D Bóc Mái',
    desc: 'Thiết kế hệ sinh thái Web đẳng cấp chuẩn EDGE & Trải nghiệm nhập vai 3D WebGL từng căn hộ A1–B5.',
  },
  {
    icon: Bot,
    title: 'Trợ Lý AI Sales & Knowledge Vault (ai.ecolifesignature.vn)',
    desc: 'Huấn luyện trọn bộ chính sách, mặt bằng & giải đáp tức thì 24/7 cho đội ngũ Sale 3 Đại lý F1.',
  },
  {
    icon: Printer,
    title: 'Trọn Bộ Ấn Phẩm Offline & OOH Thực Tế',
    desc: 'Tờ gập Accordion 7×7, Tờ rời A5 CĐT, Catalog Nội thất 16 trang, Phướn, Standee & Hoarding 36×22m.',
  },
  {
    icon: Film,
    title: 'Phim Dự Án 4K & Hệ Thống CRM Chia Số CAPI <5s',
    desc: 'Sản xuất Video truyền thông đa nền tảng kết nối thẳng CRM ZaloBot cho Tùng Long, Hợp Nhất, IHD.',
  },
];

const EcoLifeShowcase: React.FC<EcoLifeShowcaseProps> = ({ onOpenDetail }) => {
  const featuredOffline = [
    ECOLIFE_OFFLINE_PRINT_OOH[0], // Mockup 3D tờ gập
    ECOLIFE_OFFLINE_PRINT_OOH[5], // Catalog nội thất bìa
    ECOLIFE_OFFLINE_PRINT_OOH[15], // Standee 1A EDGE
    ECOLIFE_OFFLINE_PRINT_OOH[17], // Hoarding panorma
  ];

  return (
    <section
      id="ecolife"
      className="py-16 sm:py-24 relative bg-[#F2EFE9] border-b border-[#E6DEC8] overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-10">
        {/* Header Bar matching Secondary Section transition */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow
              index="05 / DỰ ÁN TIÊU ĐIỂM (SECONDARY CASE)"
              label="ECOLIFE SIGNATURE ĐÀ NẴNG • CAPITAL HOUSE"
            />
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#212529]">
              Hệ sinh thái MarTech,{' '}
              <span className="ql-grad-title">Ấn phẩm Offline, 3D &amp; Trợ lý AI.</span>
            </h2>
            <p className="text-sm sm:text-[15.5px] text-[#555B62] leading-[1.75]">
              Bản tóm tắt toàn diện các hạng mục đã nghiệm thu thực tế cùng Chủ đầu tư Capital
              House: từ tờ gập, catalog, hoarding, phim 4K đến 3D căn hộ &amp; cổng AI Portal{' '}
              <a
                href="https://ai.ecolifesignature.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#8A6016] underline decoration-[#B68D40]/50 hover:text-[#212529]"
              >
                https://ai.ecolifesignature.vn/
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              data-testid="open-ecolife-detail"
              onClick={onOpenDetail}
              className="ql-btn-gold px-6 py-3.5 text-xs sm:text-[13px] cursor-pointer"
            >
              <span>Xem Detail Đầy Đủ (Offline, Video &amp; 3D)</span>
              <ArrowUpRight size={15} />
            </button>

            <a
              href="https://ai.ecolifesignature.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="ql-btn-outline px-5 py-3.5 text-xs cursor-pointer"
            >
              <Bot size={15} className="text-[#8A6016]" />
              <span>Mở Trợ Lý AI</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Main Studio Summary Frame */}
        <div className="ql-studio-frame p-6 sm:p-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Capabilities & Proof Bar */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-[#E6DEC8]">
                <img
                  src="/assets/partners/logo_ecolife_ngang.webp"
                  alt="EcoLife Signature"
                  className="h-9 w-auto object-contain" loading="lazy" decoding="async"
                />
                <span className="text-[#E6DEC8]">|</span>
                <img
                  src="/assets/partners/logo_capital_house.webp"
                  alt="Capital House"
                  className="h-7 w-auto object-contain" loading="lazy" decoding="async"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DELIVERABLE_PILLARS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6DEC8] space-y-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E6DEC8] flex items-center justify-center text-[#8A6016]">
                        <Icon size={17} />
                      </div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#212529]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#555B62] leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-[#EAF4F0] border border-[#133E2C]/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#133E2C]">
                  <ShieldCheck size={16} />
                  <span>Đã nghiệm thu BBNT 0511/2026-CRM &amp; 0511/2026-MEDIA</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=Rbgb9B3BWfM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8A6016] hover:underline"
                >
                  <Film size={13} />
                  <span>Video YouTube Dự Án</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right Offline & 3D Preview Collage */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {featuredOffline.map((item) => (
                  <div
                    key={item.id}
                    onClick={onOpenDetail}
                    className="group relative rounded-2xl overflow-hidden border border-[#E6DEC8] bg-[#FAF8F3] cursor-pointer hover:border-[#B68D40] transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy" decoding="async"
                      />
                    </div>
                    <div className="p-2.5 bg-white border-t border-[#E6DEC8]">
                      <div className="text-[9.5px] font-bold uppercase tracking-wider text-[#8A6016]">
                        {item.categoryLabel}
                      </div>
                      <div className="text-xs font-bold text-[#212529] truncate">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={onOpenDetail}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#FAF8F3] border border-[#B68D40]/45 hover:bg-[#FCF8EE] text-[#7A5012] font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CheckCircle2 size={15} className="text-[#8A6016]" />
                <span>
                  Mở Trang Detail: Trọn Bộ 25+ Ấn Phẩm Offline, Phim YouTube, 3D &amp; Portal AI →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoLifeShowcase;
