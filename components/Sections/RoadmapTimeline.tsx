import React, { useState } from 'react';
import { Briefcase, Award, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { SectionEyebrow } from '../UI/DecorElements';
import SlideDot from '../UI/SlideDot';

const STAGES = [
  {
    num: '01',
    period: '2020 — 2022',
    badge: 'NỀN TẢNG GROWTH & ADS',
    title: 'Growth Specialist & Performance Executor',
    org: 'IELTS Fighter • Tân Á Đại Thành • Thương Mại & Dịch Vụ',
    desc: 'Trực tiếp thực chiến tối ưu hàng trăm chiến dịch Meta, TikTok & Google Ads. Xây dựng tư duy Funnel Tracking, chuẩn hóa Creative Hook & Hold Rate và giảm CPL vượt 40%.',
    highlights: ['ROAS 5.1x–5.2x Ngành Thời Trang & FMCG', '2.53% CTR Tối ưu Kênh Thương Mại'],
  },
  {
    num: '02',
    period: '2023 — 2024',
    badge: 'TÍCH HỢP MARTECH & DATA',
    title: 'MarTech Architect & Server-Side Tracking Lead',
    org: 'Hệ Thống Giáo Dục IDEAS MBA • E-Commerce & Chuỗi F&B',
    desc: 'Vượt giới hạn Pixel trình duyệt bằng Server-Side CAPI trên Cloudflare Workers. Xuất bản sách "Facebook Ads Ai Chạy Không Được" và xây nền móng phần mềm CRM/AutoFlow đầu tiên.',
    highlights: ['Cloudflare Workers Server-Side CAPI', 'Vượt Đứt Gãy Đo Lường iOS 14+'],
  },
  {
    num: '03',
    period: '2025 — 2026',
    badge: 'CHỦ TỊCH & KIẾN TRÚC SƯ HỆ THỐNG',
    title: 'Founder & CEO DOMATION • MarTech Lead EcoLife Signature',
    org: 'DOMATION Suite (ERP 5.0 + CRM CAPI) • Tập Đoàn Capital House',
    desc: 'Phát triển trọn bộ DOMATION ERP 5.0 (12 phân hệ), CRM Auto Chia Data ZaloBot <5s cho 3 Đại lý F1 (Tùng Long, Hợp Nhất, IHD) & Auto Bắn Meta CAPI HTTP 200; triển khai Website Quiet Luxury + WebGL 3D + AI Portal cho EcoLife Signature.',
    highlights: ['Nghiệm Thu BBNT 0511/2026 Capital House', '8.2x ROAS Đỉnh & <5s Chia Data 3 Sàn F1'],
  },
  {
    num: '04',
    period: '2026 — TƯƠNG LAI',
    badge: 'SAAS AI ECOSYSTEM BUILDER',
    title: 'Multi-Agent AI & SaaS B2B Tự Động Hóa Toàn Ngành',
    org: 'DOMATION AI Platform • Đóng Gói Chuẩn Bất Động Sản & Giáo Dục',
    desc: 'Nhân rộng nền tảng DOMATION thành hệ điều hành tăng trưởng đóng gói sẵn AI Pre-screener, Auto CAPI Feedback Loop, Web 3D & ERP cho các Chủ đầu tư và Tập đoàn Việt Nam.',
    highlights: ['Multi-Agent AI Chăm Sóc & Chấm Lead', 'Hệ Sinh Thái Khép Kín From Ad To Cashflow'],
  },
];

const OVERVIEW_BULLETS = [
  'Trực tiếp điều phối >1.2B₫ ngân sách quảng cáo đa kênh',
  'Tự kiến trúc toàn bộ ERP 5.0, CRM Chia Data & AI Agent',
  'Nghiệm thu thực tế tại Capital House, IDEAS MBA & 24+ Brands',
  'Kết nối chặt chẽ Performance Marketing & Software Engineering',
];

const RoadmapTimeline: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(2);

  return (
    <section
      id="roadmap"
      className="py-16 sm:py-24 relative bg-white/40 border-b border-[#E2E8F0] overflow-hidden"
    >
      <div id="experience" className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <SectionEyebrow
              index="CHƯƠNG 06 • HÀNH TRÌNH PHÁT TRIỂN"
              label="KINH NGHIỆM & TẦM NHÌN SAAS 2026+"
            />
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#0F172A]">
              Hành trình 6+ năm &amp;{' '}
              <span className="ql-grad-title">Định hướng Kiến tạo SaaS.</span>
            </h2>
          </div>

          <SlideDot
            total={STAGES.length}
            current={selectedStage}
            onSelect={setSelectedStage}
            ariaLabel="Chọn giai đoạn phát triển"
          />
        </div>

        {/* WordPress #ch07-privilege Asymmetric Grid: Left Gold Bordered Overview + Right 01-04 Stacked Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Sticky Executive Summary Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="h-full rounded-[26px] bg-white border-2 border-[#D97706]/45 p-7 sm:p-8 shadow-[0_22px_52px_-20px_rgba(138,96,22,0.16)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center text-[#B45309]">
                  <Briefcase size={22} />
                </div>

                <div>
                  <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#B45309]">
                    FOUNDER PROFILE SUMMARY
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] mt-1">
                    Không Chỉ Chạy Ads. Xây Cả Hệ Thống Đằng Sau.
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-[1.75]">
                  Mỗi điểm nghẽn thực tế trên chiến trường Marketing đều được chuyển hóa thành tính
                  năng phần mềm cụ thể giúp doanh nghiệp bứt phá doanh số bền vững.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0]">
                  {OVERVIEW_BULLETS.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-[#0F172A]">
                      <CheckCircle2 size={14} className="text-[#D97706] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 border border-[#E2E8F0] flex items-center gap-3">
                <Award size={20} className="text-[#B45309] shrink-0" />
                <div className="text-xs leading-snug">
                  <div className="font-bold text-[#0F172A]">8.2x Peak ROAS • 0% Data Leak</div>
                  <div className="text-[#475569]">Kỷ lục thực chiến được chứng minh bằng dữ liệu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stacked 01 / 02 / 03 / 04 Cards (8 cols - exact #ch07-privilege stack) */}
          <div className="lg:col-span-8 space-y-4">
            {STAGES.map((stage, idx) => {
              const isSelected = idx === selectedStage;
              return (
                <div
                  key={stage.num}
                  onClick={() => setSelectedStage(idx)}
                  className={`rounded-[22px] p-5 sm:p-6 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D97706] shadow-[0_18px_40px_-18px_rgba(143,100,20,0.22)]'
                      : 'bg-white/85 border-[#E2E8F0] hover:border-[#D97706]/60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    {/* Big Editorial Numeral Badge */}
                    <div className="flex items-center justify-between sm:block shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-2xl transition-colors ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#B45309] via-[#B88728] to-[#F59E0B] text-white'
                            : 'bg-white/40 border border-[#E2E8F0] text-[#B45309]'
                        }`}
                      >
                        {stage.num}
                      </div>
                      <span className="sm:hidden text-xs font-bold text-[#B45309]">{stage.period}</span>
                    </div>

                    <div className="flex-grow space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#B45309] flex items-center gap-1.5">
                          <Sparkles size={11} />
                          {stage.badge}
                        </span>
                        <span className="hidden sm:inline-block px-3 py-0.5 rounded-full bg-white/40 border border-[#E2E8F0] text-[11px] font-bold text-[#0F172A]">
                          {stage.period}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg sm:text-xl text-[#0F172A]">
                        {stage.title}
                      </h4>
                      <div className="text-xs font-semibold text-[#0F5132]">{stage.org}</div>

                      <p className="text-xs sm:text-[13.5px] text-[#475569] leading-relaxed">
                        {stage.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {stage.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFBEB] border border-[#E2E8F0] text-[10.5px] font-bold text-[#92400E]"
                          >
                            <TrendingUp size={11} />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
