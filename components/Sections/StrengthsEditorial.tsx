import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STRENGTH_PILLARS = [
  {
    id: 'ads',
    num: '01',
    tab: '01 Ads & Sách',
    title: 'Điều Hành Ads Đa Kênh & Tác Giả Sách',
    desc: 'Trực tiếp quản lý >1.2B₫ ngân sách Meta/TikTok/Google kết hợp Server-Side CAPI Cloudflare Workers, tác giả "Facebook Ads Ai Chạy Không Được".',
    metrics: [
      { v: '8.2x', l: 'ROAS Đỉnh Thực Chiến' },
      { v: '-54.8%', l: 'Giảm Chi Phí CPL' },
    ],
    image: '/assets/domation/data_v2_ads_pipeline.webp',
  },
  {
    id: 'data',
    num: '02',
    tab: '02 Data & CAPI',
    title: 'Auto Chia Data ZaloBot & Auto Meta CAPI',
    desc: 'Chia lead đều dưới 5 giây cho 3 Đại lý F1 (Tùng Long, Hợp Nhất, IHD) & Sale cá nhân. Tự động bắn tín hiệu Thiện chí / Notlead về Facebook Dataset.',
    metrics: [
      { v: '< 5 Giây', l: 'Giao Data ZaloBot' },
      { v: 'HTTP 200', l: 'Auto Sync Meta CAPI' },
    ],
    image: '/assets/domation/data_v2_capi_masked.webp',
  },
  {
    id: 'erp',
    num: '03',
    tab: '03 Tự Code ERP 5.0',
    title: 'Hệ Điều Hành DOMATION ERP 5.0 (12 Phân Hệ)',
    desc: 'Tự kiến trúc trọn bộ hệ thống quản trị hợp đồng, chấm công GPS AI Selfie, tính lương tự động, dòng tiền cọc & tồn quỹ phòng học.',
    metrics: [
      { v: '12 Phân Hệ', l: 'Vận Hành Hợp Nhất' },
      { v: 'Row-Level', l: 'Bảo Mật Dữ Liệu' },
    ],
    image: '/ERP-Product/1788856522396_2141578413905312186_2310722037673454867_637ed02e6f5c0e0560d1bcac82cf9a19.jpg',
  },
  {
    id: 'ai',
    num: '04',
    tab: '04 AI Agent & Flow',
    title: 'Trợ Lý AI Phòng Ban & 120+ Kịch Bản AutoFlow',
    desc: 'Triển khai Portal AI đọc hiểu bảng giá PDF (ai.ecolifesignature.vn) nối liền kịch bản Email, Zalo ZNS, Voucher & QR Tracking.',
    metrics: [
      { v: '24/7', l: 'AI Tư Vấn Tự Động' },
      { v: '120+', l: 'Kịch Bản AutoFlow' },
    ],
    image: '/assets/domation/auto_ai_group.webp',
  },
  {
    id: 'web',
    num: '05',
    tab: '05 Web 3D & Luxury UI',
    title: 'Website Quiet Luxury & Căn Hộ 3D WebGL',
    desc: 'Thiết kế và lập trình hệ thống Website cao cấp chuẩn EDGE kết hợp trải nghiệm nhập vai 3D bóc mái từng căn hộ cho EcoLife Signature.',
    metrics: [
      { v: '8 Mẫu 3D', l: 'Bóc Mái Tương Tác' },
      { v: '100% Sync', l: 'Gắn Thẳng CRM CAPI' },
    ],
    image: '/assets/ecolife/bocmai/bocmai_3d_b3.webp',
  },
  {
    id: 'ooh',
    num: '06',
    tab: '06 Creative & OOH',
    title: 'Media 4K, Brochure & Hoarding Công Trình',
    desc: 'Sản xuất đồng bộ phim 4K, Tờ gập 7×7, Tờ rời A5, Catalog nội thất, Phướn, Standee và Hoarding hàng rào 36×22m.',
    metrics: [
      { v: '36m × 22m', l: 'Hoarding Liên Hoàn' },
      { v: 'Full Kit', l: 'Ấn Phẩm Sales Gallery' },
    ],
    image: '/assets/ecolife/offline/to_gap_mockup_3d.webp',
  },
];

const StrengthsEditorial: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STRENGTH_PILLARS[activeIdx];

  return (
    <section
      id="strengths"
      className="py-20 sm:py-28 relative bg-white/40 border-b border-[#E2E8F0] overflow-hidden"
    >
      <div id="skills" className="max-w-[1220px] mx-auto px-6 sm:px-10 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="ql-eyebrow">CHƯƠNG 01 • NĂNG LỰC CỐT LÕI (MARKETING × APP)</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#0F172A]">
              Thực Chiến Ads &amp;{' '}
              <span className="ql-grad-title">Kỹ Nghệ Phần Mềm.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveIdx((p) => (p - 1 + STRENGTH_PILLARS.length) % STRENGTH_PILLARS.length)}
              aria-label="Trước"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] hover:border-[#D97706] text-[#475569] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setActiveIdx((p) => (p + 1) % STRENGTH_PILLARS.length)}
              aria-label="Tiếp"
              className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] hover:border-[#D97706] text-[#475569] flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Spacious Pill Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {STRENGTH_PILLARS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer ${
                idx === activeIdx ? 'ql-pill-tab-active' : 'ql-pill-tab'
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Airy Studio Card */}
        <div className="ql-studio-frame p-7 sm:p-12 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="font-display font-bold text-5xl text-[#E2E8F0] leading-none">
                {current.num}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#0F172A] leading-[1.25]">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-[1.85]">
                {current.desc}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E2E8F0]">
                {current.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-3xl ql-grad-gold">{m.v}</div>
                    <div className="text-xs font-semibold text-[#475569] mt-1">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white/40">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top" loading="lazy" decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsEditorial;
