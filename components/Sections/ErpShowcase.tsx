import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  Layers,
  Maximize2,
  MessageSquare,
  Server,
  ShieldCheck,
  Smile,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ERP_16_EXTRA, ERP_GALLERY, ERP_MODULES, ErpGalleryItem } from '../../constants';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';
import logoIdeas from '../../imgs/logo_ideas.webp';
import partnerRichland from '../../imgs/partner_richland.webp';

const ALL_ERP_SCREENS: ErpGalleryItem[] = [...ERP_GALLERY, ERP_16_EXTRA];

const CATEGORIES = [
  'Tất cả',
  'Vận hành & Lead',
  'CRM & Khách hàng',
  'Nhân sự & Chấm công',
  'Lương & Tài chính',
  'Hệ thống & Cài đặt',
];

const ErpShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [zoomItem, setZoomItem] = useState<ErpGalleryItem | null>(null);
  const [showModules, setShowModules] = useState<boolean>(false);

  const filteredScreens = useMemo(() => {
    if (selectedCategory === 'Tất cả') return ALL_ERP_SCREENS;
    return ALL_ERP_SCREENS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const currentItem = filteredScreens[activeIndex] || filteredScreens[0];

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredScreens.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredScreens.length) % filteredScreens.length);
  };

  // Support Next / Prev gallery navigation directly inside the Zoom Lightbox Modal
  const zoomIdx = zoomItem ? ALL_ERP_SCREENS.findIndex((s) => s.id === zoomItem.id) : -1;
  const handleZoomStep = (delta: number) => {
    if (zoomIdx < 0) return;
    const nextIdx = (zoomIdx + delta + ALL_ERP_SCREENS.length) % ALL_ERP_SCREENS.length;
    setZoomItem(ALL_ERP_SCREENS[nextIdx]);
  };

  useEffect(() => {
    if (!zoomItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleZoomStep(1);
      else if (e.key === 'ArrowLeft') handleZoomStep(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomIdx, zoomItem]);

  return (
    <section
      id="erp-showcase"
      className="py-24 lg:py-32 relative z-10 border-y border-slate-200/80"
    >
      <div className="mx-auto px-4 sm:px-8 max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 1, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[11px] font-bold uppercase tracking-widest mb-4"
            >
              <Server size={13} />
              <span>Enterprise Architecture • Tự Code 100%</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35]"
            >
              DOMATION{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                ERP 5.0 System.
              </span>
            </motion.h2>

            <p className="text-slate-600 text-base max-w-2xl mt-3 leading-relaxed">
              Kiến trúc 12 phân hệ quản trị doanh nghiệp khép kín: Lead Một Cửa, Giỏ hàng dự án,
              Chấm công GPS + AI Selfie, Payroll xuất PDF &amp; Meta CAPI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowModules((v) => !v)}
              className="ql-btn-outline px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <Layers size={14} className="text-[#1E40FF]" />
              <span>{showModules ? 'Ẩn Kiến Trúc 11 Phân Hệ' : 'Xem Kiến Trúc 11 Phân Hệ'}</span>
            </button>
          </div>
        </div>

        {/* Client Deployment Strip: IDEAS & RichLandVn */}
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="mb-10 p-5 md:p-6 rounded-3xl bg-white/95 border border-blue-200/70 shadow-[0_14px_38px_-20px_rgba(30,64,255,0.2)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1E40FF] to-[#0284C7] text-white flex items-center justify-center shadow-sm shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
                Đã Triển Khai Production Thực Tế Cho
              </div>
              <div className="text-sm font-bold text-slate-900">
                Hệ sinh thái Doanh nghiệp &amp; Đối tác Triển khai
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <a
              href="https://ideas.edu.vn/mba"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-[#1E40FF]/35 transition-all group"
            >
              <div className="h-9 px-2 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://ideas.edu.vn/wp-content/uploads/2026/06/Logo_IDEAS_Slg-optimized.webp"
                  alt="Viện Quản Trị & Kinh Doanh IDEAS"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = logoIdeas;
                  }}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors">
                  IDEAS Institute
                </div>
                <div className="text-[11px] text-slate-500">ERP Đào Tạo MBA &amp; Vận Hành</div>
              </div>
            </a>

            <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="h-9 px-2 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={partnerRichland}
                  alt="RichLandVn"
                  className="h-6 w-auto object-contain" loading="lazy" decoding="async"
                />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Building2 size={12} className="text-[#1E40FF]" />
                  <span>RichLandVn</span>
                </div>
                <div className="text-[11px] text-slate-500">Hệ Thống ERP &amp; Quản Lý Lead</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional Expandable 11 Modules Matrix */}
        {showModules && (
          <div className="mb-10">
            <ResponsiveSlideDeck
              items={ERP_MODULES}
              keyExtractor={(m) => String(m.num)}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-3"
              gapClass="gap-4"
              ariaLabel="11 phân hệ DOMATION ERP"
              renderItem={(m) => (
                <div className="p-5 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/35 transition-all h-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#1E40FF]">
                      MODULE {m.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E40FF] border border-blue-200/70">
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              )}
            />
          </div>
        )}

        {/* Category Filter Tabs (Hidden on Mobile, visible on Tablet/Desktop) */}
        <div className="hidden sm:flex sm:flex-wrap items-center justify-center gap-2 py-2 px-1 mb-6">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'Tất cả'
                ? ALL_ERP_SCREENS.length
                : ALL_ERP_SCREENS.filter((s) => s.category === cat).length;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  active ? 'ql-pill-tab-active' : 'ql-pill-tab'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Main Interactive Gallery Stage */}
        <div className="grid lg:grid-cols-12 gap-8 items-start bg-white/95 border border-slate-200/90 rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_22px_54px_-24px_rgba(15,23,42,0.12)]">
          {/* Right (Desktop): Details & Screen Switcher */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[11px] font-bold uppercase tracking-wider">
                  {currentItem.tag}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredScreens.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-3">
                {currentItem.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {currentItem.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                <CheckCircle2 size={15} />
                <span>{currentItem.highlight}</span>
              </div>
            </div>

            {/* Thumbnail List (Desktop Only - clean SlideDot + Prev/Next on Mobile/Tablet) */}
            <div className="hidden lg:block">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Chọn nhanh phân hệ ({filteredScreens.length})
              </div>
              <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
                {filteredScreens.map((screen, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      title={screen.title}
                      className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#1E40FF] ring-2 ring-blue-500/20 scale-[1.02]'
                          : 'border-slate-200 opacity-75 hover:opacity-100 hover:border-blue-300'
                      }`}
                    >
                      <img
                        src={screen.src}
                        alt={screen.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controls + Windowed SlideDots */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] transition-colors cursor-pointer"
                  aria-label="Màn hình trước"
                >
                  <ChevronLeft size={17} />
                </button>
                <div className="flex items-center gap-1.5 px-1">
                  {Array.from(
                    { length: Math.min(filteredScreens.length, 6) },
                    (_, offset) => {
                      const start =
                        filteredScreens.length <= 6
                          ? 0
                          : Math.max(0, Math.min(activeIndex - 3, filteredScreens.length - 6));
                      const idx = start + offset;
                      return (
                        <button
                          key={filteredScreens[idx].id}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Chọn màn hình ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === activeIndex
                              ? 'w-6 bg-[#1E40FF]'
                              : 'w-2 bg-slate-300 hover:bg-blue-300'
                          }`}
                        />
                      );
                    }
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1E40FF] transition-colors cursor-pointer"
                  aria-label="Màn hình tiếp theo"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setZoomItem(currentItem)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1E40FF] hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Phóng to HD</span>
              </button>
            </div>
          </div>

          {/* Left (Desktop): Browser Preview */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              onClick={() => setZoomItem(currentItem)}
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
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner cursor-zoom-in touch-pan-y"
            >
              <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  erp.domation.net • {currentItem.id}
                </span>
                <span className="text-[11px] font-bold text-[#1E40FF] flex items-center gap-1">
                  <Maximize2 size={12} /> HD
                </span>
              </div>

              <div className="relative aspect-[16/10] bg-white overflow-hidden">
                <img
                  key={currentItem.src}
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="w-full h-full object-contain bg-slate-50 transition-transform duration-500 group-hover:scale-[1.015]" loading="lazy" decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2 BREAKTHROUGH ERP MODULES: SI IDEAS WORKCHAT (11 AI AGENTS) & WORKCHAT ENTERPRISE */}
        <div className="mt-10 pt-10 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-2">
                <Sparkles size={12} />
                <span>2 Tính Năng Đột Phá Mới • MYERP Enterprise</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                SI IDEAS WorkChat —{' '}
                <span className="font-editorial text-gradient-inkica">
                  11 Siêu Agent AI &amp; Gắn Kết Dữ Liệu ERP.
                </span>
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Real-time MySQL Ground Truth • Training Realtime RAG • Thẻ ERP 1 Chạm
            </span>
          </div>

          <ResponsiveSlideDeck
            items={[
              {
                id: 'workchat-11-agents',
                render: () => (
                  <div className="inkica-glass-card rounded-3xl p-5 flex flex-col justify-between gap-4 h-full">
                    <div>
                      <div
                        onClick={() =>
                          setZoomItem({
                            id: 'si-workchat-11',
                            src: '/assets/erp/workchat_11_agents.webp',
                            title: 'SI IDEAS WorkChat — Trung Tâm Điều Hành 11 Siêu Agent AI Trên 1 Màn Hình',
                            tag: '11 MULTI-AGENT AI',
                            category: 'Hệ thống & Cài đặt',
                            description:
                              'Kết nối trực tiếp CSDL MySQL thời gian thực, Training Realtime RAG và hiển thị Bảng Markdown + Thẻ ERP 1 chạm ngay trong khung chat.',
                            highlight: 'Direct MySQL + 11 AI Agents',
                          })
                        }
                        className="group relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 cursor-zoom-in"
                      >
                        <img
                          src="/assets/erp/workchat_11_agents.webp"
                          alt="SI IDEAS WorkChat 11 Agent AI"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        
                        />
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-200 text-[11px] font-bold text-slate-800 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={11} /> Phóng to
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
                          <Bot size={13} /> Feature 01 • Super Intelligent Multi-Agent
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10.5px] font-bold">
                          Real-time MySQL Ground Truth
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-extrabold text-slate-950 mb-3 leading-snug">
                        SI IDEAS WorkChat: 11 Siêu Agent AI Trên 1 Màn Hình
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Database size={13} className="text-[#1E40FF]" /> Kết Nối MySQL Trực Tiếp
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Truy vấn 360° hồ sơ, công nợ, đặt cọc, PO/SO &amp; hợp đồng bằng tiếng Việt tức thì.
                          </p>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Bot size={13} className="text-[#1E40FF]" /> 11 Agent Phối Hợp Đa Nhiệm
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Chỉ Huy, CRM 360, Kế Toán, Học Vụ, Pháp Lý, Kho &amp; Tài Sản, Nhân Sự...
                          </p>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Brain size={13} className="text-[#1E40FF]" /> Training Realtime RAG
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Học liên tục từ quy chế, hồ sơ và biểu mẫu mới nhất cho câu trả lời chuẩn xác.
                          </p>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Zap size={13} className="text-[#1E40FF]" /> Thẻ Điều Khiển ERP 1 Chạm
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Hiển thị Bảng Markdown sắc nét &amp; mở Drawer chi tiết ngay trong khung chat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'workchat-enterprise',
                render: () => (
                  <div className="inkica-glass-card rounded-3xl p-5 flex flex-col justify-between gap-4 h-full">
                    <div>
                      <div
                        onClick={() =>
                          setZoomItem({
                            id: 'ideas-workchat-enterprise',
                            src: '/assets/erp/workchat_enterprise.webp',
                            title: 'IDEAS WorkChat Enterprise — Gắn Kết Dữ Liệu ERP Trên Bàn Làm Việc MYERP',
                            tag: 'ERP ENTERPRISE CHAT',
                            category: 'Hệ thống & Cài đặt',
                            description:
                              'Đính kèm trực tiếp Khách hàng, Thẻ công việc & Phê duyệt phiếu đề xuất ngay trong luồng chat cùng bộ Sticker Mascot IDEAS.',
                            highlight: 'CRM + Task + Approval in Chat',
                          })
                        }
                        className="group relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 cursor-zoom-in"
                      >
                        <img
                          src="/assets/erp/workchat_enterprise.webp"
                          alt="IDEAS WorkChat Enterprise"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        
                        />
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-200 text-[11px] font-bold text-slate-800 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={11} /> Phóng to
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
                          <MessageSquare size={13} /> Feature 02 • Enterprise Workspace Chat
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[10.5px] font-bold">
                          Zero Context Switching
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-extrabold text-slate-950 mb-3 leading-snug">
                        IDEAS WorkChat Enterprise: Gắn Kết Dữ Liệu ERP Trong Luồng Chat
                      </h4>

                      <div className="space-y-2.5">
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Layers size={13} className="text-[#1E40FF]" /> Gắn Kết Khách Hàng, Công Việc &amp; Phê Duyệt 1 Chạm
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Đính kèm trực tiếp hồ sơ Khách hàng, Thẻ công việc và Phiếu đề xuất thanh toán để duyệt ngay trong cuộc hội thoại phòng ban.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50/75 border border-slate-200/80">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                            <Smile size={13} className="text-[#1E40FF]" /> Bộ Sticker Mascot Văn Hóa Doanh Nghiệp
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            Bộ sưu tập nhãn dán Mascot độc quyền giúp giao tiếp vận hành hàng ngày trên MYERP trở nên gần gũi, năng động và gắn kết đội ngũ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            keyExtractor={(mod) => mod.id}
            desktopMode="grid"
            desktopGridClass="lg:grid-cols-2"
            gapClass="gap-6"
            ariaLabel="Phân hệ SI IDEAS WorkChat"
            renderItem={(mod) => mod.render()}
          />
        </div>
      </div>

      {/* Portal Lightbox Modal with Prev/Next Gallery Navigation */}
      <Modal
        isOpen={!!zoomItem}
        onClose={() => setZoomItem(null)}
        title={zoomItem?.title || 'DOMATION ERP 5.0 Preview'}
        className="max-w-5xl"
      >
        {zoomItem && (
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <img
                src={zoomItem.src}
                alt={zoomItem.title}
                className="w-full max-h-[70vh] object-contain mx-auto" loading="lazy" decoding="async"
              />
              {zoomIdx >= 0 && (
                <>
                  <button
                    type="button"
                    aria-label="Ảnh trước"
                    onClick={() => handleZoomStep(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-slate-200 hover:border-[#1E40FF] text-slate-700 hover:text-[#1E40FF] flex items-center justify-center shadow-md cursor-pointer"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    type="button"
                    aria-label="Ảnh tiếp theo"
                    onClick={() => handleZoomStep(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-slate-200 hover:border-[#1E40FF] text-slate-700 hover:text-[#1E40FF] flex items-center justify-center shadow-md cursor-pointer"
                  >
                    <ChevronRight size={17} />
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-600">{zoomItem.description}</p>
              <div className="flex items-center gap-2 shrink-0">
                {zoomIdx >= 0 && (
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {String(zoomIdx + 1).padStart(2, '0')} / {ALL_ERP_SCREENS.length}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1E40FF] text-xs font-bold border border-blue-200/80">
                  {zoomItem.highlight}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ErpShowcase;
