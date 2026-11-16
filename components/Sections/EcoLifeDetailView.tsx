import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Box,
  Building2,
  ExternalLink,
  Layers,
  Maximize2,
  Play,
  Radio,
  Sparkles,
} from 'lucide-react';
import {
  ECOLIFE_3D_UNITS,
  ECOLIFE_OFFLINE_PRINT_OOH,
  F1_AGENCY_PARTNERS,
  OfflinePrintCategory,
} from '../../constants';
import Modal from '../UI/Modal';

interface EcoLifeDetailViewProps {
  onBack: () => void;
  onOpenDomation?: () => void;
}

type BundleTab = '3d-units' | 'mb-ai' | Exclude<OfflinePrintCategory, 'all'>;

const BUNDLE_TABS: { key: BundleTab; label: string }[] = [
  { key: '3d-units', label: '8 Căn Hộ Web 3D Live' },
  { key: 'mb-ai', label: 'Mặt Bằng (MB) & Trợ Lý AI' },
  { key: 'togap-toroi', label: 'Bộ Tờ Gập 7×7 & Tờ Rời' },
  { key: 'catalog-noithat', label: 'Bộ Catalog & Brochure' },
  { key: 'phuon-standee', label: 'Bộ Phướn & Standee' },
  { key: 'hoarding', label: 'Bộ Hoarding Công Trường 36m' },
];

const ECOLIFE_MB_AI_ITEMS = [
  {
    id: 'mb-tret',
    title: 'Mặt Bằng Tầng Trệt & Chỉ Căn Theo MB',
    spec: 'Định vị trực quan từng mã căn trên mặt bằng tổng thể',
    image: '/assets/ecolife/1_MAT_BANG_TANG_TRET_NET_CHUAN.webp',
  },
  {
    id: 'mb-mai',
    title: 'Mặt Bằng Tầng Mái & Khung CAD',
    spec: 'Bố cục kỹ thuật & tiện ích trên cao chuẩn IFC EDGE',
    image: '/assets/ecolife/2_MAT_BANG_TANG_MAI_BO_KHUNG_CAD.webp',
  },
  {
    id: 'ai-canho',
    title: 'Trợ Lý AI Tư Vấn Căn Hộ 3D & 5 Ngân Hàng',
    spec: 'ai.ecolifesignature.vn • Tính dòng tiền & chọn căn theo nhu cầu',
    image: '/assets/ecolife/10_VU_KHI_TU_VAN_06_MAU_CAN_HO_3D_VA_5_NGAN_HANG.webp',
  },
  {
    id: 'ai-edge',
    title: 'Trợ Lý AI & Bộ Tư Vấn Chứng Chỉ Xanh EDGE',
    spec: '25 tiện ích chữa lành & giải đáp 24/7 cho Sale F1',
    image: '/assets/ecolife/09_VU_KHI_TU_VAN_CHUNG_CHI_XANH_EDGE_VA_25_TIEN_ICH.webp',
  },
  {
    id: 'ai-portal',
    title: 'AI Sales Portal & 4 Học Phần Đào Tạo Sale',
    spec: 'Đồng bộ kịch bản tư vấn cho Tùng Long • Hợp Nhất • IHD',
    image: '/assets/ecolife/01_BIA_TONG_QUAN_4_HOC_PHAN_DAO_TAO_SALE.webp',
  },
  {
    id: 'edge-sgs',
    title: 'Chứng Chỉ Xanh Quốc Tế EDGE (SGS)',
    spec: 'Tài liệu pháp lý xanh tích hợp sẵn trong Trợ Lý AI',
    image: '/assets/ecolife/11_CHUNG_CHI_XANH_QUOC_TE_EDGE_SGS_FULL.webp',
  },
];

export const EcoLifeDetailView: React.FC<EcoLifeDetailViewProps> = ({
  onBack,
  onOpenDomation,
}) => {
  const [activeTab, setActiveTab] = useState<BundleTab>('3d-units');
  const [videoMode, setVideoMode] = useState<'3d' | 'project'>('3d');
  const [zoomItem, setZoomItem] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const filteredOffline = ECOLIFE_OFFLINE_PRINT_OOH.filter((i) => i.category === activeTab);

  return (
    <div className="bg-[#F8F9FA] text-[#0F172A]">
      {/* SECTION 1: CONCISE HERO + 3D VIDEO PREVIEW */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-[#1E40FF] text-xs font-bold text-slate-800 hover:text-[#1E40FF] transition-all cursor-pointer"
            >
              <ArrowLeft size={14} /> Đóng hồ sơ
            </button>

            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5">
              <img
                src="/assets/partners/logo_capital_house.webp"
                alt="Capital House"
                className="h-4 w-auto object-contain" loading="lazy" decoding="async"
              />
              <span className="text-slate-300">×</span>
              <img
                src="/assets/partners/logo_ecolife_ngang.webp"
                alt="EcoLife Signature"
                className="h-4 w-auto object-contain" loading="lazy" decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
            {/* Concise Left Pitch */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.14em]">
                <Building2 size={12} />
                <span>Capital House • Flagship Client Case Study</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-[1.35]">
                EcoLife Signature:{' '}
                <span className="font-editorial text-gradient-inkica">
                  3D Web, AI Portal &amp; CRM CAPI.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Triển khai trọn gói Website WordPress, sa bàn 3D nhập vai &amp; chỉ căn theo Mặt Bằng (MB),
                Trợ lý AI Portal (
                <a
                  href="https://ai.ecolifesignature.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1E40FF] font-bold hover:underline"
                >
                  ai.ecolifesignature.vn
                </a>
                ), trọn bộ in ấn Offline/OOH và hệ thống <strong>Auto Data Routing &amp; Cải thiện Meta CAPI</strong> chia
                số 3 Sàn F1 (Tùng Long • Hợp Nhất • IHD).
              </p>

              {/* Compact Portal Action Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://ai.ecolifesignature.vn/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 hover:border-[#1E40FF] transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#1E40FF] text-white flex items-center justify-center shrink-0">
                      <Bot size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-extrabold text-slate-900 truncate">
                        Trợ lý AI Sales Portal
                      </div>
                      <div className="text-[10.5px] text-[#1E40FF] truncate">
                        ai.ecolifesignature.vn
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-[#1E40FF] shrink-0" />
                </a>

                <a
                  href="https://ecolifesignature.vn/3d/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1E40FF] transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E40FF] flex items-center justify-center shrink-0">
                      <Box size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-extrabold text-slate-900 truncate">
                        Web 3D Bóc Mái
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate">
                        ecolifesignature.vn/3d
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 shrink-0" />
                </a>
              </div>

              {onOpenDomation && (
                <button
                  type="button"
                  onClick={onOpenDomation}
                  className="btn-inkica-secondary px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles size={13} /> Xem kiến trúc CRM &amp; CAPI (DOMATION Studio)
                </button>
              )}
            </div>

            {/* Right: Video Preview Stage */}
            <div className="lg:col-span-6 space-y-2.5">
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg aspect-video">
                {videoMode === '3d' ? (
                  <video
                    key="drawer-video-3d"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/assets/ecolife/FACADE_HUONG_CHINH_03.webp"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/ecolife/ecolife_3d_preview.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    key="drawer-video-project"
                    src="https://www.youtube.com/embed/To3VGqPfwY8?rel=0"
                    title="Phim dự án EcoLife Signature"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setVideoMode('3d')}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 transition-all cursor-pointer ${
                      videoMode === '3d'
                        ? 'bg-[#1E40FF] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Play size={11} /> Clip 3D Nhập Vai Căn Hộ
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoMode('project')}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                      videoMode === 'project'
                        ? 'bg-[#1E40FF] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Phim dự án
                  </button>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">
                  3 Đại lý F1: {F1_AGENCY_PARTNERS.map((a) => a.shortName.split(' ')[0]).join(' • ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: 4-PILLAR DELIVERED SYSTEMS FOR CAPITAL HOUSE */}
      <section className="py-7 sm:py-9 bg-slate-50/90 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#1E40FF]">
                Toàn Cảnh Hệ Sinh Thái Đã Triển Khai
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                4 Trụ Cột Hệ Thống Bàn Giao Cho Chủ Đầu Tư Capital House
              </h3>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-auto">
              Nghiệm thu BBNT 0511/2026-CRM &amp; MEDIA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <a
              href="https://ecolifesignature.vn/3d"
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF] hover:shadow-md transition-all p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E40FF] flex items-center justify-center">
                    <Box size={16} />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">01 • WEB 3D</span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] mb-1">
                  Web 3D Bóc Mái &amp; Căn Hộ 360°
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Three.js 360° nhập vai chuẩn bàn giao &amp; 8 mẫu bóc mái A1–B6.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#1E40FF] inline-flex items-center gap-1">
                <span className="truncate">ecolifesignature.vn/3d</span>
                <ExternalLink size={11} className="shrink-0" />
              </div>
            </a>

            <a
              href="https://ai.ecolifesignature.vn/"
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF] hover:shadow-md transition-all p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Bot size={16} />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">02 • AI PORTAL</span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] mb-1">
                  Trợ Lý AI Sales Portal 24/7
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Tra cứu mặt bằng, căn hộ, chứng chỉ xanh EDGE (SGS) &amp; gói vay 5 ngân hàng.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#1E40FF] inline-flex items-center gap-1">
                <span className="truncate">ai.ecolifesignature.vn</span>
                <ExternalLink size={11} className="shrink-0" />
              </div>
            </a>

            <a
              href="https://ecolifesignature.vn/data"
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF] hover:shadow-md transition-all p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
                    <Radio size={16} />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">03 • CRM &amp; CAPI</span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] mb-1">
                  Auto Data Routing &amp; Meta CAPI
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Chia xoay vòng dưới 5s qua ZaloBot cho 3 Sàn F1 (Tùng Long • Hợp Nhất • IHD) &amp; bắn CAPI HTTP 200.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#1E40FF] inline-flex items-center gap-1">
                <span className="truncate">ecolifesignature.vn/data</span>
                <ExternalLink size={11} className="shrink-0" />
              </div>
            </a>

            <a
              href="https://ecolifesignature.vn/"
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF] hover:shadow-md transition-all p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Layers size={16} />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">04 • WEB &amp; CHATBOT</span>
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] mb-1">
                  Website, Chỉ Căn MB &amp; Chatbot Khách Hàng
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Website chính thức, chỉ căn theo Mặt Bằng (MB), Chatbot tư vấn khách hàng 24/7, Phim 3D &amp; 25+ ấn phẩm OOH.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-bold text-[#1E40FF] inline-flex items-center gap-1">
                <span className="truncate">ecolifesignature.vn</span>
                <ExternalLink size={11} className="shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: GROUPED ASSETS BY SET ("GÔM LẠI THÀNH BỘ KO XÉ LẺ") */}
      <section className="py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-[#1E40FF]" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
                Trọn Bộ Tài Liệu &amp; 3D Đã Bàn Giao Theo Từng Bộ
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Click ảnh để phóng to chi tiết
            </span>
          </div>

          {/* Centered Category Bundle Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {BUNDLE_TABS.map((t) => {
              const active = activeTab === t.key;
              return (
                <button
                  type="button"
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#1E40FF] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-[#1E40FF]/40'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Compact Grouped Visual Grid */}
          {activeTab === '3d-units' ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ECOLIFE_3D_UNITS.map((unit) => (
                <div
                  key={unit.code}
                  className="group text-left bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF] hover:shadow-md transition-all p-2.5 flex flex-col justify-between"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setZoomItem({
                          src: unit.image,
                          title: `${unit.code} • ${unit.area}`,
                          subtitle: `${unit.spec} — ${unit.highlight}`,
                        })
                      }
                      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-2.5 cursor-pointer block"
                    >
                      <img
                        src={unit.image}
                        alt={`Bóc mái 3D ${unit.code} ${unit.area}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#1E40FF] text-[10px] font-bold shadow-xs">
                        <Box size={10} /> 3D Bóc Mái
                      </span>
                    </button>
                    <div className="px-0.5">
                      <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] mb-0.5">
                        {unit.code} • {unit.area}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 mb-1">{unit.spec}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-2">{unit.highlight}</div>
                    </div>
                  </div>
                  <a
                    href={unit.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 pt-2 px-0.5 border-t border-slate-100 text-[11px] font-bold text-[#1E40FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>ecolifesignature.vn/3d</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          ) : activeTab === 'mb-ai' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {ECOLIFE_MB_AI_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    setZoomItem({
                      src: item.image,
                      title: item.title,
                      subtitle: item.spec,
                    })
                  }
                  className="group text-left bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF]/45 hover:shadow-md transition-all p-2.5 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#1E40FF] line-clamp-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{item.spec}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filteredOffline.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() =>
                    setZoomItem({
                      src: item.image,
                      title: item.title,
                      subtitle: item.spec,
                    })
                  }
                  className="group text-left bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF]/45 hover:shadow-md transition-all p-2.5 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" decoding="async"
                    />
                    <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-md bg-white/95 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={11} className="text-slate-700" />
                    </span>
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#1E40FF] line-clamp-1">
                    {item.title}
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">{item.spec}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!zoomItem}
        onClose={() => setZoomItem(null)}
        title={zoomItem?.title || 'Chi Tiết EcoLife Signature'}
        className="max-w-5xl"
      >
        {zoomItem && (
          <div className="p-4 sm:p-5 space-y-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center">
              <img
                src={zoomItem.src}
                alt={zoomItem.title}
                className="w-full h-auto max-h-[75vh] object-contain" loading="lazy" decoding="async"
              />
            </div>
            {zoomItem.subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 text-center">{zoomItem.subtitle}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EcoLifeDetailView;
