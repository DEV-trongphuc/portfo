import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Gamepad2,
  Maximize2,
  Quote,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { OUTSOURCE_HIGHLIGHTS, SHORT_CAMPAIGNS } from '../../constants';
import { OutsourceHighlight } from '../../types';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

import gameBlindbag from '../../imgs/game_blindbag.webp';
import gameWheelKnowledge from '../../imgs/game_wheel_knowledge.webp';
import gameSpaWheel from '../../imgs/game_spa_wheel.webp';
import micrositePdf from '../../pdf/microsite game_compressed.pdf';

const ALL_CAMPAIGNS: (OutsourceHighlight & { campaignType: 'long' | 'short' })[] = [
  ...OUTSOURCE_HIGHLIGHTS.map((c) => ({ ...c, campaignType: 'long' as const })),
  ...SHORT_CAMPAIGNS.map((c) => ({ ...c, campaignType: 'short' as const })),
];

const MICRO_MINIGAMES = [
  {
    id: 'blindbag',
    title: 'Unboxing Blind Bag',
    tag: 'Zalo Tết 2024',
    image: gameBlindbag,
  },
  {
    id: 'wheel-knowledge',
    title: 'Wheel of Knowledge',
    tag: 'Quiz Lucky Wheel',
    image: gameWheelKnowledge,
  },
  {
    id: 'spa-wheel',
    title: 'Trangpap Spa Wheel',
    tag: 'Spa Mini-Web',
    image: gameSpaWheel,
  },
];

const OutsourceHighlights: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<OutsourceHighlight | null>(null);
  const [filter, setFilter] = useState<'all' | 'long' | 'short'>('all');
  const [activeGameImage, setActiveGameImage] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const visibleCampaigns =
    filter === 'all'
      ? ALL_CAMPAIGNS
      : ALL_CAMPAIGNS.filter((c) => c.campaignType === filter);

  return (
    <section
      id="outsource"
      className="py-10 sm:py-16 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Compact Header + Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-2.5">
              <Target size={13} />
              <span>Performance • Thương Hiệu &amp; Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.3]">
              Digital{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                Thực Chiến.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-full border border-slate-200/90 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#1E40FF] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả ({ALL_CAMPAIGNS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('long')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'long'
                  ? 'bg-[#1E40FF] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dài hạn ({OUTSOURCE_HIGHLIGHTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('short')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === 'short'
                  ? 'bg-[#1E40FF] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ngắn hạn ({SHORT_CAMPAIGNS.length})
            </button>
          </div>
        </div>

        {/* Paginated Campaigns Deck (1/mobile, 2/tablet, 4x2 grid desktop) */}
        <ResponsiveSlideDeck
          items={visibleCampaigns}
          keyExtractor={(item, idx) => `${item.company}-${idx}`}
          resetKey={filter}
          desktopMode="grid"
          desktopGridClass="lg:grid-cols-4"
          gapClass="gap-3.5"
          className="mb-8"
          ariaLabel="Danh sách chiến dịch triển khai"
          renderItem={(item) => (
            <button
              type="button"
              onClick={() => setSelectedCampaign(item)}
              className="group w-full text-left bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF]/45 hover:shadow-lg transition-all p-4 flex flex-col justify-between cursor-pointer h-full"
            >
              <div>
                {/* Logo + Tags */}
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    {item.logo ? (
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={item.logo}
                          alt={item.company}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E40FF] text-xs font-bold shrink-0">
                        {item.company.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors truncate">
                        {item.company}
                      </h3>
                      <span className="text-[10px] font-semibold text-slate-500 block truncate">
                        {item.tags.slice(0, 2).join(' • ')}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-400 group-hover:text-[#1E40FF] shrink-0 transition-colors"
                  />
                </div>

                {/* Single Crisp Result Pill Bar */}
                <div className="rounded-xl bg-slate-50/90 border border-slate-200/75 px-2.5 py-2 mb-2 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[9.5px] uppercase tracking-wider font-bold text-slate-400">
                      Kết quả
                    </div>
                    <div className="text-sm font-black text-[#1E40FF] leading-tight">
                      {item.result}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9.5px] uppercase tracking-wider font-bold text-slate-400">
                      Hiệu suất
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight truncate max-w-[115px]">
                      {item.cost}
                    </div>
                  </div>
                </div>

                <p className="text-[11.5px] text-slate-600 leading-relaxed line-clamp-2">
                  {item.description.replace(/<br\s*\/?>/gi, ' ')}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-bold text-[#1E40FF]">
                <span className="truncate">{item.impact}</span>
                <span className="shrink-0 group-hover:translate-x-0.5 transition-transform">
                  Chi tiết →
                </span>
              </div>
            </button>
          )}
        />

        {/* FLAGSHIP HORIZONTAL COMPACT CARD: WATERBOMB 2025 + TINY MINIGAMES */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-4 sm:p-5">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            {/* Waterbomb 2025 Primary Horizontal Spotlight */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1E40FF] to-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                <Gamepad2 size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[10px] font-extrabold uppercase tracking-wider">
                    <Sparkles size={10} /> Flagship Event Game
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">
                    Interaction Microsite • Event Activation
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  Waterbomb 2025 Interactive Event Game &amp; Activation Microsite
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                  Thiết kế trải nghiệm tương tác sự kiện quy mô lớn kết hợp gamification giữ chân
                  người chơi, đổi quà &amp; đồng bộ thu Lead thực chiến.
                </p>
              </div>

              <a
                href={micrositePdf}
                target="_blank"
                rel="noreferrer"
                className="btn-inkica-primary px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 shrink-0 self-start sm:self-center"
              >
                <FileText size={14} />
                <span>Mở Case Study Waterbomb 2025 (PDF)</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Tiny Micro-Cards for the 3 Secondary Minigames ("3 cái này nhỏ lại") */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 xl:border-l xl:border-slate-200 xl:pl-4 shrink-0">
              {MICRO_MINIGAMES.map((game) => (
                <button
                  type="button"
                  key={game.id}
                  onClick={() => setActiveGameImage({ title: game.title, image: game.image })}
                  className="group flex items-center gap-2 bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-[#1E40FF]/40 rounded-xl p-1.5 pr-2.5 transition-all cursor-pointer"
                >
                  <div className="w-10 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 shrink-0 relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      loading="lazy"
                      className="w-full h-full object-cover" decoding="async"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-[11px] font-bold text-slate-800 group-hover:text-[#1E40FF] truncate max-w-[110px]">
                      {game.title}
                    </div>
                    <div className="text-[9.5px] font-semibold text-slate-500 flex items-center gap-1">
                      <Maximize2 size={9} /> {game.tag}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Detail Modal */}
      <Modal
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        title="Case Study • Chi Tiết Triển Khai"
        className="max-w-2xl"
      >
        {selectedCampaign && (
          <div className="space-y-4">
            {/* Hero Identity Header Card (no duplicate modal title) */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-3.5">
              <div className="flex items-center gap-3.5 min-w-0">
                {selectedCampaign.logo ? (
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={selectedCampaign.logo}
                      alt={selectedCampaign.company}
                      className="max-w-full max-h-full w-auto h-auto object-contain" loading="lazy" decoding="async"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#1E40FF] flex items-center justify-center text-lg font-black shrink-0">
                    {selectedCampaign.company.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 truncate">
                    {selectedCampaign.company}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedCampaign.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#1E40FF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive 3-Metric Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/80 shadow-xs">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#1E40FF]/80 mb-1">
                  Kết quả đạt được
                </div>
                <div className="text-lg font-black text-[#1E40FF] leading-tight">
                  {selectedCampaign.result}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                  Ngân sách / HQ
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  {selectedCampaign.cost}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                  Tác động kinh doanh
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  {selectedCampaign.impact}
                </div>
              </div>
            </div>

            {/* Clean Formatted Narrative Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#1E40FF] flex items-center justify-center shrink-0 mt-0.5">
                <Quote size={15} />
              </div>
              <div className="space-y-1.5 min-w-0">
                {selectedCampaign.description
                  .split(/<br\s*\/?>/gi)
                  .map((line) => line.replace(/<[^>]*>/g, '').trim())
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {selectedCampaign.logos && selectedCampaign.logos.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {selectedCampaign.logos.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.link}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 px-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1E40FF] flex items-center justify-center shadow-xs transition-colors"
                  >
                    <img src={l.src} alt="Brand logo" className="h-5 w-auto object-contain" loading="lazy" decoding="async" />
                  </a>
                ))}
              </div>
            )}

            {selectedCampaign.link && (
              <div className="pt-1 flex justify-end">
                <a
                  href={selectedCampaign.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-inkica-primary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
                >
                  <span>Mở Landing Page Thực Tế</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Micro Minigame Preview Modal */}
      <Modal
        isOpen={!!activeGameImage}
        onClose={() => setActiveGameImage(null)}
        title={activeGameImage?.title || 'Minigame Preview'}
        className="max-w-3xl"
      >
        {activeGameImage && (
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2">
            <img
              src={activeGameImage.image}
              alt={activeGameImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default OutsourceHighlights;
