import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Box,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Sparkles,
} from 'lucide-react';
import {
  OUTSOURCE_HIGHLIGHTS,
  SHORT_CAMPAIGNS,
  ECOLIFE_3D_UNITS,
} from '../../constants';
import { OutsourceHighlight } from '../../types';
import { Tilt3DCard, DepthLayer } from '../UI/Interactive3D';
import StudioDrawerModal from '../UI/StudioDrawerModal';

export interface CaseStudiesSectionProps {
  onOpenEcoLifeModal: () => void;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenEcoLifeModal }) => {
  const [caseTab, setCaseTab] = useState<'long' | 'short'>('long');
  const [selectedCase, setSelectedCase] = useState<OutsourceHighlight | null>(null);

  const activeList = caseTab === 'long' ? OUTSOURCE_HIGHLIGHTS : SHORT_CAMPAIGNS;

  return (
    <section
      id="cases"
      className="py-16 sm:py-24 bg-white/65 backdrop-blur-sm border-y border-[#E2E8F0] relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* PART 1: FLAGSHIP MASTERPIECE — ECOLIFE SIGNATURE × CAPITAL HOUSE */}
        <div id="ecolife">
          <div className="mb-8 space-y-2.5">
            <span className="ql-eyebrow">
              <Sparkles size={12} className="text-amber-600 shrink-0" />
              <span>CHƯƠNG 04 • DỰ ÁN TRỌNG ĐIỂM &amp; CASE STUDIES THỰC CHIẾN</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
              Từ Đại Dự Án BĐS Xanh EDGE Đến{' '}
              <span className="ql-grad-gold">Các Chiến Dịch Chuyển Đổi Thực Tế</span>
            </h2>
          </div>

          <Tilt3DCard
            maxTilt={4}
            className="ql-studio-frame p-6 sm:p-9 bg-white/95 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Concise Executive Summary */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 whitespace-nowrap">
                    CHỦ ĐẦU TƯ CAPITAL HOUSE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-extrabold uppercase tracking-wider text-amber-900 whitespace-nowrap">
                    2 BBNT 0511/2026
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-[30px] font-extrabold text-slate-950 leading-[1.24]">
                  EcoLife Signature Đà&nbsp;Nẵng — Kiến Trúc MarTech, 3D &amp; 25 Ấn Phẩm OOH
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trực tiếp thiết kế &amp; nghiệm thu trọn gói Website Quiet Luxury, 8 căn
                  bóc mái WebGL 3D, Trợ lý AI Portal, Phim 4K, 25 ấn phẩm In ấn / Hoarding công trình
                  và hệ thống Auto Chia Data 3 Đại lý F1 (&lt;5s) bắn ngược Meta CAPI.
                </p>

                {/* 4 Clean KPI Pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Website + 8 Căn Bóc Mái 3D',
                    'AI Sales Portal Cho 3 Sàn F1',
                    '25 Ấn Phẩm Tờ Gập, Catalog & OOH',
                    'Auto Chia Số ZaloBot & Meta CAPI',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-900"
                    >
                      <CheckCircle2 size={13} className="text-emerald-700 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Uniform Max-2 Action CTAs (Never staggers onto orphan row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    data-testid="open-ecolife-detail"
                    onClick={onOpenEcoLifeModal}
                    className="ql-btn-gold h-11 px-4 text-xs whitespace-nowrap cursor-pointer"
                  >
                    <FileCheck2 size={14} className="shrink-0" />
                    <span>Mở Hồ Sơ 3D &amp; 25 Ấn Phẩm</span>
                    <ArrowRight size={13} className="shrink-0" />
                  </button>

                  <a
                    href="https://ai.ecolifesignature.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ql-btn-outline h-11 px-4 text-xs whitespace-nowrap"
                  >
                    <Bot size={14} className="text-amber-600 shrink-0" />
                    <span>Trợ Lý AI Portal</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </div>
              </div>

              {/* Right 3D Visual Stage (4K Video + 3D Unit Previews) */}
              <div className="lg:col-span-6 space-y-3">
                <DepthLayer z={20}>
                  <div
                    onClick={onOpenEcoLifeModal}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-[#0F5132] border border-[#E2E8F0] shadow-lg cursor-pointer group"
                  >
                    <video
                      src="/assets/ecolife/hero_facade_4k.mp4"
                      poster="/assets/ecolife/FACADE_HUONG_CHINH_03.webp"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end justify-between p-4">
                      <div>
                        <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#FDE68A] block">
                          4K ARCHITECTURAL FILM &amp; WEBGL 3D
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          Bấm để xem Phim YouTube, 8 Căn 3D &amp; Bộ Hoarding 36m
                        </span>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#0F172A] text-[11px] font-extrabold whitespace-nowrap">
                        Xem Chi Tiết ↗
                      </span>
                    </div>
                  </div>
                </DepthLayer>

                {/* Mini 4-Unit 3D Strip */}
                <div className="grid grid-cols-4 gap-2.5">
                  {ECOLIFE_3D_UNITS.slice(0, 4).map((u) => (
                    <button
                      key={u.code}
                      type="button"
                      onClick={onOpenEcoLifeModal}
                      className="rounded-xl overflow-hidden border border-[#E2E8F0] hover:border-[#D97706] bg-white/40 p-1.5 text-center transition-all cursor-pointer group"
                    >
                      <img
                        src={u.image}
                        alt={u.code}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-contain group-hover:scale-105 transition-transform"
                      />
                      <span className="block text-[10px] font-bold text-[#0F172A] mt-1 whitespace-nowrap">
                        {u.code} • {u.area}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </div>

        {/* PART 2: 8 VERIFIED GROWTH CASE STUDIES (METRIC-FIRST, MODAL DETAIL) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <BarChart3 size={18} className="text-[#B45309] shrink-0" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                8 Case Studies Tăng Trưởng Đã Kiểm Định (Bấm Xem Phân Tích)
              </h3>
            </div>

            {/* Clean Toggle */}
            <div className="inline-flex p-1 rounded-full bg-white border border-[#E2E8F0] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setCaseTab('long')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  caseTab === 'long' ? 'ql-pill-tab-active' : 'text-[#475569]'
                }`}
              >
                Dự Án Dài Hạn (4)
              </button>
              <button
                type="button"
                onClick={() => setCaseTab('short')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  caseTab === 'short' ? 'ql-pill-tab-active' : 'text-[#475569]'
                }`}
              >
                Chiến Dịch Ngắn &amp; Event (4)
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={caseTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {activeList.map((item, idx) => (
                <Tilt3DCard
                  key={item.company + idx}
                  maxTilt={5.5}
                  onClick={() => setSelectedCase(item)}
                  className="ql-card rounded-[22px] p-5 bg-white flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* Brand Header */}
                    <div className="flex items-center gap-3">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-11 h-11 rounded-xl object-contain bg-white/40 border border-[#E2E8F0] p-1 shrink-0"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center font-display font-bold text-sm text-[#B45309] shrink-0">
                          {item.company.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="font-display text-lg font-bold text-[#0F172A] truncate group-hover:text-[#B45309] transition-colors">
                          {item.company}
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          {item.tags.map((tg) => (
                            <span
                              key={tg}
                              className="text-[9px] font-extrabold uppercase tracking-wider text-[#B45309] bg-[#FFFBEB] px-2 py-0.5 rounded-full"
                            >
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 3 Clean KPI Rows (Zero Text Cramming) */}
                    <div className="rounded-xl bg-white/40 border border-[#E2E8F0] p-3.5 space-y-2">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[10px] font-bold uppercase text-[#475569]">
                          Kết quả
                        </span>
                        <span className="font-extrabold text-[#0F5132] whitespace-nowrap">
                          {item.result}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs border-t border-[#E2E8F0] pt-2">
                        <span className="text-[10px] font-bold uppercase text-[#475569]">
                          Hiệu suất
                        </span>
                        <span className="font-bold text-[#0F172A] whitespace-nowrap">
                          {item.cost}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs border-t border-[#E2E8F0] pt-2">
                        <span className="text-[10px] font-bold uppercase text-[#475569]">
                          Tác động
                        </span>
                        <span className="font-bold text-[#B45309] whitespace-nowrap">
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#92400E] group-hover:underline whitespace-nowrap">
                      Đọc câu chuyện triển khai →
                    </span>
                    {item.link && (
                      <ArrowUpRight size={14} className="text-[#B45309] shrink-0" />
                    )}
                  </div>
                </Tilt3DCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CASE STUDY STORY MODAL */}
      <StudioDrawerModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        badge={selectedCase?.tags.join(' • ')}
        title={selectedCase ? `Case Study: ${selectedCase.company}` : ''}
        liveUrl={selectedCase?.link}
        liveLabel="Xem Trang Chiến Dịch"
        maxWidthClass="max-w-3xl"
      >
        {selectedCase && (
          <div className="p-6 sm:p-8 space-y-6 bg-white/40">
            <div className="grid grid-cols-3 gap-3.5">
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 text-center">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#475569] mb-1">
                  IMPACT
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-[#B45309]">
                  {selectedCase.impact}
                </span>
              </div>
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 text-center">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#475569] mb-1">
                  EFFICIENCY
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">
                  {selectedCase.cost}
                </span>
              </div>
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 text-center">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#475569] mb-1">
                  RESULT
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-[#0F5132]">
                  {selectedCase.result}
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#B45309]">
                BÀI TOÁN &amp; GIẢI PHÁP THỰC THI
              </span>
              <div
                className="text-sm text-[#0F172A] leading-relaxed space-y-2"
                dangerouslySetInnerHTML={{ __html: selectedCase.description }}
              />
            </div>
          </div>
        )}
      </StudioDrawerModal>
    </section>
  );
};

export default CaseStudiesSection;
