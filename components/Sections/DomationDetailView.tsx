import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  ZoomIn,
  Calculator,
  Bot,
  BarChart3,
  Globe,
  PlayCircle,
} from 'lucide-react';
import { SectionEyebrow } from '../UI/DecorElements';
import Modal from '../UI/Modal';
import {
  DOMATION_V2_CAPI_SHOWCASE,
  ERP_GALLERY,
  ERP_16_EXTRA,
  DOMATION_AUTO_FEATURES,
  DOMATION_CRM_IMAGES,
  DOMATION_META_REPORT_IMAGES,
  DOMATION_ALL_MODULES,
  DOMATION_CLIENT_SITES,
  DOMATION_SAAS_PLANS,
  DOMATION_WEB_MODULES,
  DOMATION_WEB_ADDONS,
  F1_AGENCY_PARTNERS,
} from '../../constants';

export interface DomationDetailViewProps {
  onBack: () => void;
  onOpenEcoLife?: () => void;
}

type StudioProductTab = 'data-capi' | 'erp' | 'autoflow' | 'meta-report' | 'crm';

const LIVE_PORTALS = [
  { name: 'DOMATION ERP 5.0', url: 'https://domation.net/erp', tag: '12 Phân hệ' },
  { name: 'DOMATION CRM 4.0', url: 'https://crm-domation.vercel.app/', tag: 'Chia số <5s' },
  { name: 'Auto Data Portal', url: 'https://ideas-data.vercel.app/demo', tag: 'Demo Thực Tế' },
  { name: 'Meta Ad Report', url: 'https://meta.domation.net', tag: 'CAPI & ROAS' },
  { name: 'AutoFlow & AI', url: 'https://automation.ideas.edu.vn/', tag: '120+ Kịch bản' },
];

const ERP_FILTER_TABS = [
  { id: 'all', label: 'Tất Cả (16)' },
  { id: 'Vận hành & Lead', label: 'Vận Hành & Lead' },
  { id: 'CRM & Khách hàng', label: 'CRM & Khách Hàng' },
  { id: 'Nhân sự & Chấm công', label: 'GPS AI & Chấm Công' },
  { id: 'Lương & Tài chính', label: 'Lương & Tài Chính' },
  { id: 'Hệ thống & Cài đặt', label: 'Hệ Thống & Bảo Mật' },
];

const CHIA_DATA_LEGACY_SCREENS = [
  { src: '/assets/domation/chia_data_1.webp', title: 'Cơ Chế Phân Bổ Lead 5-Port Round-Robin', desc: 'Cân bằng nguồn khách hàng theo khung giờ và tỷ lệ chia của từng đơn vị.' },
  { src: '/assets/domation/chia_data_14.webp', title: 'Xử Lý Trùng Số & Cảnh Báo Ticket Lỗi', desc: 'Chặn lead trùng trong vòng 6 tháng và lưu vết xử lý bù lead công bằng.' },
  { src: '/assets/domation/chia_data_18.webp', title: 'Webhook Kết Nối Đa Nguồn Instant Form', desc: 'Tự động bắt dữ liệu từ Meta Ads, TikTok Form, Ladipage và Website.' },
  { src: '/assets/domation/chia_data_21.webp', title: 'Thông Báo ZaloBot Tức Thì Cho Sale', desc: 'Sale nhận thông tin khách hàng ngay trên điện thoại trong vòng dưới 5 giây.' },
];

const formatVnd = (n: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);

const DomationDetailView: React.FC<DomationDetailViewProps> = ({ onBack, onOpenEcoLife }) => {
  const [v2Idx, setV2Idx] = useState(0);
  const [studioTab, setStudioTab] = useState<StudioProductTab>('erp');
  const [erpCat, setErpCat] = useState<string>('all');
  const [studioSlideIdx, setStudioSlideIdx] = useState(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['sales', 'crmErp']);
  const [zoomMedia, setZoomMedia] = useState<{ src: string; title: string; desc?: string } | null>(
    null
  );

  const allErpSlides = useMemo(() => [...ERP_GALLERY, ERP_16_EXTRA], []);
  const filteredErp = useMemo(() => {
    if (erpCat === 'all') return allErpSlides;
    return allErpSlides.filter((item) => item.category === erpCat);
  }, [erpCat, allErpSlides]);

  const studioSlides = useMemo(() => {
    if (studioTab === 'data-capi') {
      return [
        ...DOMATION_V2_CAPI_SHOWCASE.map((s) => ({
          src: s.image,
          title: s.title,
          desc: s.subtitle,
          badge: s.badge,
        })),
        ...CHIA_DATA_LEGACY_SCREENS.map((c, idx) => ({
          src: c.src,
          title: c.title,
          desc: c.desc,
          badge: `V1 ENGINE #${idx + 1}`,
        })),
      ];
    }
    if (studioTab === 'erp') {
      return filteredErp.map((e, i) => ({
        src: e.src,
        title: e.title,
        desc: e.description,
        badge: `ERP #${String(i + 1).padStart(2, '0')}`,
      }));
    }
    if (studioTab === 'autoflow') {
      return DOMATION_AUTO_FEATURES.map((a) => ({
        src: a.src,
        title: a.title,
        desc: a.desc,
        badge: a.tab,
      }));
    }
    if (studioTab === 'meta-report') {
      return [
        ...DOMATION_META_REPORT_IMAGES.map((m, i) => ({
          src: m.src,
          title: m.title,
          desc: 'Dashboard Meta Ads Graph API kết nối dữ liệu doanh thu CRM thực tế.',
          badge: `REPORT #${i + 1}`,
        })),
        {
          src: '/assets/domation/data_v2_capi_masked.webp',
          title: 'Nhật Ký Tín Hiệu Meta Conversion API (2026)',
          desc: 'Tự động gửi Qualified / Notlead / Booked HTTP 200 (đã che SĐT bảo mật).',
          badge: 'CAPI SYNC',
        },
      ];
    }
    return DOMATION_CRM_IMAGES.map((c, i) => ({
      src: c.src,
      title: c.title,
      desc: 'Quản lý Pipeline khách hàng, ZaloBot, giỏ hàng và KPI chốt đơn đội ngũ.',
      badge: `CRM #${String(i + 1).padStart(2, '0')}`,
    }));
  }, [studioTab, filteredErp]);

  const safeStudioIdx = Math.min(studioSlideIdx, Math.max(0, studioSlides.length - 1));
  const currentStudioSlide = studioSlides[safeStudioIdx];

  const baseWebTotal = useMemo(
    () => DOMATION_WEB_MODULES.reduce((acc, m) => acc + m.price, 0),
    []
  );
  const addonsTotal = useMemo(
    () =>
      DOMATION_WEB_ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce(
        (acc, a) => acc + a.price,
        0
      ),
    [selectedAddons]
  );
  const estimatedWebTotal = baseWebTotal + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentV2 = DOMATION_V2_CAPI_SHOWCASE[v2Idx] || DOMATION_V2_CAPI_SHOWCASE[0];

  return (
    <div className="bg-transparent text-[#0F172A]">
      {/* Drawer Action Sub-bar (non-sticky so StudioDrawerModal top bar remains clean) */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-5 sm:px-8 rounded-t-2xl">
        <div className="max-w-[1260px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-xs font-bold text-[#0F172A] transition-colors cursor-pointer whitespace-nowrap"
          >
            <ArrowLeft size={14} className="text-[#1E40FF]" />
            <span>Quay Lại Hồ Sơ Founder</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {LIVE_PORTALS.slice(0, 3).map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-[11px] font-bold text-[#1D4ED8] whitespace-nowrap"
              >
                <span>{p.name}</span>
                <ExternalLink size={11} />
              </a>
            ))}
            {onOpenEcoLife && (
              <button
                type="button"
                onClick={onOpenEcoLife}
                className="ql-btn-gold h-9 px-4 text-xs cursor-pointer whitespace-nowrap"
              >
                <span>Case Study EcoLife</span>
                <ArrowUpRight size={13} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO SPLIT (#ch01-awakening Quiet Luxury Style) */}
      <section className="py-12 sm:py-18 border-b border-[#E2E8F0] bg-white/40">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionEyebrow
                index="DOMATION SUITE 2026"
                label="SAAS • ERP 5.0 • AUTO DATA & CAPI"
              />
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#0F172A] leading-[1.2]">
                Hệ Điều Hành Tăng Trưởng{' '}
                <span className="ql-grad-title">DOMATION Enterprise Ecosystem.</span>
              </h1>
              <p className="text-sm sm:text-[15.5px] text-[#475569] leading-[1.75]">
                Hợp nhất trọn bộ từ <strong className="text-[#0F172A]">Auto Chia Data Đại Lý ZaloBot</strong>,{' '}
                <strong className="text-[#0F172A]">Auto Bắn Meta Conversion API</strong>,{' '}
                <strong className="text-[#0F172A]">ERP 5.0 (12 Phân Hệ)</strong>,{' '}
                <strong className="text-[#0F172A]">AutoFlow &amp; AI Agent</strong> đến{' '}
                <strong className="text-[#0F172A]">Thiết Kế Web Quiet Luxury</strong> trên một kiến
                trúc dữ liệu thống nhất.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {LIVE_PORTALS.map((portal) => (
                  <a
                    key={portal.name}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] hover:border-[#2563EB] text-xs font-bold text-[#0F172A] shadow-xs transition-all"
                  >
                    <span>{portal.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#1E40FF]">
                      {portal.tag}
                    </span>
                    <ExternalLink size={12} className="text-[#2563EB]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="ql-studio-frame p-4 bg-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2E8F0]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E40FF]">
                    BẢN NÂNG CẤP MỚI NHẤT 2026 • REAL PRODUCTION
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAF4F0] text-[#0F5132] text-[10px] font-bold">
                    ZaloBot &amp; CAPI HTTP 200
                  </span>
                </div>
                <div
                  onClick={() =>
                    setZoomMedia({
                      src: currentV2.image,
                      title: currentV2.title,
                      desc: currentV2.subtitle,
                    })
                  }
                  className="rounded-2xl overflow-hidden border border-[#E2E8F0] cursor-zoom-in"
                >
                  <img
                    src={currentV2.image}
                    alt={currentV2.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {DOMATION_V2_CAPI_SHOWCASE.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setV2Idx(idx)}
                      className={`px-2.5 py-2 rounded-xl text-[11px] font-bold cursor-pointer truncate ${
                        idx === v2Idx ? 'ql-pill-tab-active' : 'ql-pill-tab'
                      }`}
                    >
                      0{idx + 1}. {item.id === 'capi-log' ? 'Auto Meta CAPI' : item.id === 'overview' ? 'Auto Chia Data' : item.id === 'ads-pipeline' ? 'Hiệu suất Ads' : 'Đối soát 3 Sàn'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 2026 AUTO DATA ROUTING & AUTO META CAPI DEEP DIVE */}
      <section className="py-16 sm:py-20 bg-white/65 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <SectionEyebrow
              index="BẢN CẬP NHẬT 2026"
              label="AUTO GIAO DATA ZALOBOT & AUTO META CAPI"
            />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A]">
              Chia Số Đại Lý &amp; Sale Cá Nhân Qua ZaloBot —{' '}
              <span className="ql-grad-title">Tự Động Bắn CAPI Thiện Chí / Notlead Về Meta.</span>
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Thay vì chỉ đếm lượt điền Form ảo, hệ thống kết nối thẳng luồng đánh giá của 3 Đại lý
              F1 (<strong>Tùng Long, Hợp Nhất, IHD</strong>) để phản hồi ngược chất lượng từng
              khách hàng về Facebook Dataset (hình ảnh nhật ký CAPI đã che mờ bảo mật toàn bộ SĐT).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DOMATION_V2_CAPI_SHOWCASE.map((screen) => (
              <div
                key={screen.id}
                className="ql-card rounded-[24px] p-5 sm:p-6 bg-white flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#1E40FF]">
                      {screen.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setZoomMedia({
                          src: screen.image,
                          title: screen.title,
                          desc: screen.subtitle,
                        })
                      }
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4ED8] hover:underline cursor-pointer"
                    >
                      <ZoomIn size={13} /> Phóng to
                    </button>
                  </div>

                  <div
                    onClick={() =>
                      setZoomMedia({
                        src: screen.image,
                        title: screen.title,
                        desc: screen.subtitle,
                      })
                    }
                    className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white/40 cursor-zoom-in aspect-[16/9]"
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F172A]">
                    {screen.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    {screen.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] space-y-1.5">
                  {screen.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#0F172A]">
                      <CheckCircle2 size={13} className="text-[#2563EB] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Live F1 Agencies Wired Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {F1_AGENCY_PARTNERS.map((ag) => (
              <div
                key={ag.id}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-white/40 border border-[#E2E8F0] p-2 flex items-center justify-center shrink-0">
                  <img src={ag.logo} alt={ag.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                    {ag.routeMetric}
                  </div>
                  <div className="font-display font-bold text-sm text-[#0F172A] truncate">
                    {ag.name}
                  </div>
                  <div className="text-[11px] text-[#475569] line-clamp-1">{ag.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE PRODUCT STUDIO (ERP 16, AutoFlow, Meta Report + Video, CRM) */}
      <section className="py-16 sm:py-20 bg-white/40 border-b border-[#E2E8F0]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <SectionEyebrow
                index="PRODUCT STUDIO"
                label="KHÁM PHÁ GIAO DIỆN THỰC TẾ TỪNG PHÂN HỆ"
              />
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A]">
                Trình Diễn 5 Bộ Sản Phẩm Chủ Lực DOMATION
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'erp', label: '01 ERP 5.0 (16 Ảnh)' },
                { id: 'autoflow', label: '02 AutoFlow & AI (9)' },
                { id: 'meta-report', label: '03 Meta Ad Report' },
                { id: 'crm', label: '04 CRM 4.0 (10)' },
                { id: 'data-capi', label: '05 Data Routing V1+V2' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setStudioTab(t.id as StudioProductTab);
                    setStudioSlideIdx(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer ${
                    studioTab === t.id ? 'ql-pill-tab-active' : 'ql-pill-tab'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-filter if ERP active */}
          {studioTab === 'erp' && (
            <div className="flex flex-wrap gap-2">
              {ERP_FILTER_TABS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setErpCat(f.id);
                    setStudioSlideIdx(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold cursor-pointer ${
                    erpCat === f.id
                      ? 'bg-[#1E40FF] text-white'
                      : 'bg-white border border-[#E2E8F0] text-[#475569]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {/* Main Frame + Right Thumbnail Rail */}
          <div className="ql-studio-frame p-5 sm:p-8 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-4">
                {currentStudioSlide && (
                  <>
                    <div
                      onClick={() =>
                        setZoomMedia({
                          src: currentStudioSlide.src,
                          title: currentStudioSlide.title,
                          desc: currentStudioSlide.desc,
                        })
                      }
                      className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white/40 aspect-[16/9] cursor-zoom-in relative"
                    >
                      <img
                        src={currentStudioSlide.src}
                        alt={currentStudioSlide.title}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 border border-[#E2E8F0] text-[11px] font-bold text-[#1E40FF] flex items-center gap-1">
                        <ZoomIn size={13} /> Phóng to
                      </span>
                    </div>
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#1E40FF]">
                        {currentStudioSlide.badge}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#0F172A] mt-0.5">
                        {currentStudioSlide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1">
                        {currentStudioSlide.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="lg:col-span-4 space-y-2.5 max-h-[470px] overflow-y-auto pr-1">
                {studioSlides.map((sl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setStudioSlideIdx(idx)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      idx === safeStudioIdx
                        ? 'bg-[#EFF6FF] border-[#2563EB]'
                        : 'bg-white/40 border-[#E2E8F0] hover:border-[#2563EB]/60'
                    }`}
                  >
                    <div className="w-20 h-14 rounded-lg overflow-hidden bg-white border border-[#E2E8F0] shrink-0">
                      <img src={sl.src} alt={sl.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9.5px] font-bold uppercase text-[#1E40FF]">
                        {String(idx + 1).padStart(2, '0')} • {sl.badge}
                      </div>
                      <div className="text-xs font-bold text-[#0F172A] line-clamp-2">{sl.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Meta Ad Report Tutorial Video Strip (from MetaAdReport.tsx) */}
            {studioTab === 'meta-report' && (
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5 space-y-2">
                  <span className="ql-eyebrow">
                    <PlayCircle size={12} /> VIDEO HƯỚNG DẪN META AD REPORT
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#0F172A]">
                    Demo Vận Hành Báo Cáo Quảng Cáo &amp; Đồng Bộ CAPI
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Hướng dẫn kết nối tài khoản Meta Ads, xem phễu chỉ số realtime và đọc nhật ký
                    gửi sự kiện từ hệ thống DOMATION Meta Report.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] aspect-video bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/fvIHSrpsAlI"
                      title="DOMATION Meta Ad Report Guide"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: 18 MODULES MATRIX */}
      <section className="py-16 sm:py-20 bg-white/65 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <SectionEyebrow index="18 MODULES" label="TOÀN BỘ TÍNH NĂNG DOMATION" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A]">
              Kiến Trúc 18 Module Khép Kín Trong Một Hệ Sinh Thái
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOMATION_ALL_MODULES.map((mod, idx) => (
              <div key={mod.id} className="ql-card rounded-2xl p-5 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-[#2563EB]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#E2E8F0] text-[10px] font-bold uppercase text-[#1E40FF]">
                    {mod.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-[#0F172A]">{mod.name}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: 6 CLIENT WEBSITES + SAAS PRICING + INTERACTIVE WEB ESTIMATOR */}
      <section className="py-16 sm:py-24 bg-white/40">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-16">
          {/* Client Websites */}
          <div className="space-y-6">
            <div className="space-y-2">
              <SectionEyebrow index="WEB PRODUCTION" label="CÁC DỰ ÁN WEBSITE ĐÃ TRIỂN KHAI" />
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A]">
                Thiết Kế Website &amp; Landing Page Cao Cấp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DOMATION_CLIENT_SITES.map((site) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/9] overflow-hidden bg-white/40 border-b border-[#E2E8F0]">
                      <img
                        src={site.img}
                        alt={site.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                        {site.tag}
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#0F172A] group-hover:text-[#1E40FF] transition-colors flex items-center justify-between">
                        <span>{site.name}</span>
                        <ExternalLink size={14} className="shrink-0" />
                      </h3>
                      <p className="text-xs text-[#475569] leading-relaxed">{site.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SaaS Pricing Tiers */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <SectionEyebrow index="SAAS PRICING" label="BẢNG GIÁ GÓI TRIỂN KHAI DOMATION" />
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A]">
                  Chi Phí Phần Mềm Minh Bạch Theo Quy Mô
                </h2>
              </div>

              <div className="inline-flex p-1 rounded-full bg-white border border-[#E2E8F0] self-start">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer ${
                    billingCycle === 'monthly' ? 'ql-btn-gold' : 'text-[#475569]'
                  }`}
                >
                  Theo Tháng
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer ${
                    billingCycle === 'yearly' ? 'ql-btn-gold' : 'text-[#475569]'
                  }`}
                >
                  Theo Năm (-15%)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {DOMATION_SAAS_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[26px] p-7 bg-white border flex flex-col justify-between space-y-6 ${
                    plan.popular
                      ? 'border-2 border-[#2563EB] shadow-[0_24px_54px_-20px_rgba(30,64,255,0.24)]'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#1E40FF]">
                        {plan.badge}
                      </span>
                      {plan.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#1E40FF] text-[10px] font-bold">
                          Recommended
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">{plan.name}</h3>
                    <div className="font-display font-bold text-3xl ql-grad-gold">
                      {billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{plan.desc}</p>
                    <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                      {plan.features.map((ft, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#0F172A]">
                          <CheckCircle2 size={14} className="text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="mailto:turniodev@gmail.com"
                    className={`w-full py-3 rounded-full text-xs font-bold text-center ${
                      plan.popular ? 'ql-btn-gold' : 'ql-btn-outline'
                    }`}
                  >
                    Tư Vấn Triển Khai {plan.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Website Design Cost Estimator (from WebDesignPricing.tsx) */}
          <div className="ql-studio-frame p-6 sm:p-10 bg-white space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
              <div className="space-y-1">
                <SectionEyebrow
                  index="DỰ TOÁN WEBSITE & MARTECH"
                  label="GÓI TIÊU CHUẨN 12.000.000₫ + TÙY CHỌN MỞ RỘNG"
                />
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A]">
                  Công Cụ Tính Nhanh Chi Phí Thiết Kế Web &amp; Tích Hợp CRM
                </h3>
              </div>
              <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#2563EB]/45 text-right shrink-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF] flex items-center justify-end gap-1.5">
                  <Calculator size={13} /> TỔNG DỰ TOÁN HIỆN TẠI
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl ql-grad-gold mt-0.5">
                  {formatVnd(estimatedWebTotal)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Standard Base Modules (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#1E40FF] uppercase tracking-wider">
                  <span>Hạng mục Tiêu chuẩn (Bao gồm)</span>
                  <span>{formatVnd(baseWebTotal)}</span>
                </div>
                <div className="rounded-2xl bg-white/40 border border-[#E2E8F0] divide-y divide-[#E2E8F0]">
                  {DOMATION_WEB_MODULES.map((m) => (
                    <div key={m.id} className="px-4 py-3 flex items-center justify-between gap-3 text-xs">
                      <span className="font-medium text-[#0F172A] flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#0F5132] shrink-0" />
                        {m.name}
                      </span>
                      <span className="font-bold text-[#1E40FF] shrink-0">{formatVnd(m.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Add-ons (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-bold text-[#1E40FF] uppercase tracking-wider">
                  Chọn thêm Module Nâng Cao (Chạm để bật/tắt vào dự toán)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOMATION_WEB_ADDONS.map((addon) => {
                    const checked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          checked
                            ? 'bg-[#EFF6FF] border-[#2563EB] shadow-xs'
                            : 'bg-white border-[#E2E8F0] hover:border-[#2563EB]/60'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="font-bold text-xs text-[#0F172A]">{addon.name}</span>
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                              checked
                                ? 'bg-[#1E40FF] text-white'
                                : 'bg-white/40 border border-[#E2E8F0] text-transparent'
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                        <div className="text-[11px] text-[#475569] mb-2">{addon.desc}</div>
                        <div className="text-xs font-bold text-[#1E40FF]">
                          + {formatVnd(addon.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Zoom Modal */}
      <Modal
        isOpen={!!zoomMedia}
        onClose={() => setZoomMedia(null)}
        title={zoomMedia?.title || 'Chi Tiết DOMATION'}
        className="max-w-5xl"
      >
        {zoomMedia && (
          <div className="p-5 space-y-4">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden">
              <img
                src={zoomMedia.src}
                alt={zoomMedia.title}
                className="w-full h-auto max-h-[72vh] object-contain"
              />
            </div>
            {zoomMedia.desc && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{zoomMedia.desc}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DomationDetailView;
