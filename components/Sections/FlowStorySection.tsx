import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  ZoomIn,
} from 'lucide-react';
import { DOMATION_V2_CAPI_SHOWCASE } from '../../constants';
import { Tilt3DCard, DepthLayer } from '../UI/Interactive3D';
import Modal from '../UI/Modal';

export interface FlowStorySectionProps {
  onOpenDomationModal: () => void;
}

const CHAOS_PAINS = [
  {
    step: 'LỖ HỔNG 01',
    title: 'Rò Rỉ 35% Lead Do Chia Tay Thủ Công',
    metric: 'Chờ 30–120 phút',
    desc: 'Khách điền form xong phải đợi Admin xuất file Excel chia tay, nguội hoàn toàn nhu cầu mua.',
  },
  {
    step: 'LỖ HỔNG 02',
    title: 'Tranh Cãi Số Trùng & Không Công Bằng',
    metric: 'Mất đoàn kết Sàn/Sale',
    desc: 'Không lọc trùng đa kênh 6 tháng; không có cơ chế bù ticket tự động khi gặp thuê bao / sai số.',
  },
  {
    step: 'LỖ HỔNG 03',
    title: 'Thuật Toán Ads Mù Dữ Liệu Chốt Thật',
    metric: 'Đốt tiền vào tệp rác',
    desc: 'Facebook chỉ tối ưu lượt điền form rẻ mà không biết ai là khách Thiện chí hay Notlead.',
  },
  {
    step: 'LỖ HỔNG 04',
    title: 'Vận Hành Rời Rạc 5–6 Phần Mềm',
    metric: 'Tốn 20h báo cáo/tuần',
    desc: 'Marketing, Sale, Kế toán, Nhân sự dùng công cụ tách biệt; CEO không có số liệu ROAS thực.',
  },
];

const TURNIO_FLOW_STEPS = [
  {
    step: 'BƯỚC 01',
    title: 'Thu Phễu Đa Kênh',
    metric: 'Meta • Web 3D • QR',
    desc: 'Bắt mọi lead từ Instant Form, Landing Page 3D, Zalo Mini App & QR Offline tức thì.',
  },
  {
    step: 'BƯỚC 02',
    title: 'Lọc Trùng & ZaloBot',
    metric: '< 5 Giây Chia Vòng',
    desc: 'Chặn trùng 6 tháng, chia công bằng cho 3 Đại lý F1 / Sale cá nhân & bù ticket tự động.',
  },
  {
    step: 'BƯỚC 03',
    title: 'AI & AutoFlow Chăm',
    metric: '24/7 Đa Nhánh',
    desc: 'Trợ lý AI RAG tư vấn bảng giá chuẩn xác, kết hợp kịch bản Email / ZNS bám đuổi tự động.',
  },
  {
    step: 'BƯỚC 04',
    title: 'CRM & ERP 5.0 Chốt',
    metric: '12 Phân Hệ Khép Kín',
    desc: 'Quản lý nhiệt độ khách, giỏ hàng, cọc, chấm công GPS AI Selfie & tính lương PDF tự động.',
  },
  {
    step: 'BƯỚC 05',
    title: 'Auto Bắn Meta CAPI',
    metric: 'HTTP 200 Dataset',
    desc: 'Sale chấm Thiện chí / Booking / Notlead → bắn ngược CAPI dạy AI Meta tìm đúng người mua thật.',
  },
];

const CAPI_SIM_EVENTS = [
  {
    id: 'qualified',
    saleAction: '✓ Sale chấm: Khách Thiện Chí',
    metaEvent: 'Lead / QualifiedLead',
    status: 'HTTP 200 OK',
    effect: 'Tăng phân phối vào tệp khách có tài chính thật',
    tone: 'bg-[#ECFDF5] text-[#0F5132] border-[#A7F3D0]',
  },
  {
    id: 'booked',
    saleAction: '📅 Sale chấm: Đã Hẹn Gặp / Cọc',
    metaEvent: 'Schedule / Purchase',
    status: 'HTTP 200 OK',
    effect: 'Tối ưu giá trị chuyển đổi ROAS cao nhất',
    tone: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
  },
  {
    id: 'notlead',
    saleAction: '✕ Sale chấm: Sai Số / Không Nhu Cầu',
    metaEvent: 'DisqualifiedLead (Notlead)',
    status: 'HTTP 200 OK',
    effect: 'Loại trừ tệp rác & tự động hoàn bù Ticket cho Sàn',
    tone: 'bg-[#FDF2F2] text-[#9B2C2C] border-[#F2C6C6]',
  },
];

const FlowStorySection: React.FC<FlowStorySectionProps> = ({ onOpenDomationModal }) => {
  const [flowMode, setFlowMode] = useState<'after' | 'before'>('after');
  const [activeV2Idx, setActiveV2Idx] = useState(1); // Default show Masked CAPI or Overview
  const [simEventIdx, setSimEventIdx] = useState(0);
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  const curScreen = DOMATION_V2_CAPI_SHOWCASE[activeV2Idx] || DOMATION_V2_CAPI_SHOWCASE[0];
  const curSim = CAPI_SIM_EVENTS[simEventIdx];

  return (
    <section
      id="flow-story"
      className="py-16 sm:py-24 bg-white/65 backdrop-blur-sm border-y border-[#E2E8F0] relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER + BEFORE/AFTER INTERACTIVE SWITCH */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <span className="ql-eyebrow">
              <Zap size={12} className="text-[#B45309] shrink-0" />
              <span>CHƯƠNG 02 • KIẾN TRÚC FLOW &amp; TỐI ƯU VẬN HÀNH</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A]">
              Từ Rời Rạc Thủ Công Sang{' '}
              <span className="ql-grad-gold">Hệ Sinh Thái Tự Động Khép Kín</span>
            </h2>
          </div>

          {/* Interactive Story Toggle */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setFlowMode('before')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                flowMode === 'before'
                  ? 'bg-[#9B2C2C] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              1. Vận Hành Cũ (Đứt Gãy)
            </button>
            <button
              type="button"
              onClick={() => setFlowMode('after')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                flowMode === 'after'
                  ? 'ql-pill-tab-active'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              2. Kiến Trúc Flow TURNIO
            </button>
          </div>
        </div>

        {/* PART A: VISUAL ARCHITECTURE COMPARISON (ZERO WALL OF TEXT) */}
        <AnimatePresence mode="wait">
          {flowMode === 'before' ? (
            <motion.div
              key="before"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {CHAOS_PAINS.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FFFDFB] border border-[#EBCACA] p-5 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold tracking-wider text-[#9B2C2C] uppercase">
                        {p.step}
                      </span>
                      <AlertTriangle size={15} className="text-[#9B2C2C] shrink-0" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F4E3E3]">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#FDF2F2] text-[10.5px] font-bold text-[#9B2C2C]">
                      Hệ quả: {p.metric}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-12 relative"
            >
              {TURNIO_FLOW_STEPS.map((s, idx) => (
                <Tilt3DCard
                  key={idx}
                  maxTilt={5}
                  className="rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#D97706] p-5 flex flex-col justify-between shadow-[0_12px_30px_-16px_rgba(33,37,41,0.08)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#B45309]">
                        {s.step}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#FFFBEB] border border-[#E2E8F0] flex items-center justify-center text-[10px] font-extrabold text-[#B45309]">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-base sm:text-[17px] font-bold text-[#0F172A] mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[10.5px] font-extrabold text-[#0F5132] whitespace-nowrap">
                      {s.metric}
                    </span>
                    {idx < 4 && <ArrowRight size={13} className="text-[#D97706] shrink-0" />}
                  </div>
                </Tilt3DCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PART B: 2026 LIVE ENGINE STUDIO (AUTO CHIA DATA ZALOBOT & AUTO META CAPI) */}
        <div className="ql-studio-frame p-5 sm:p-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
            {/* Left Controls: 4 Real Screens + Interactive CAPI Signal Simulator */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0F5132] mb-1.5">
                  <ShieldCheck size={13} className="shrink-0" />
                  <span>PRODUCTION 2026 • ĐÃ VẬN HÀNH THỰC TẾ</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Auto Chia Data Sàn F1 &amp; Bắn Ngược Meta CAPI
                </h3>
              </div>

              {/* 4 Screen Selector Cards (Compact, Zero Clutter) */}
              <div className="space-y-2">
                {DOMATION_V2_CAPI_SHOWCASE.map((item, idx) => {
                  const active = idx === activeV2Idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveV2Idx(idx)}
                      className={`w-full text-left px-4 py-3 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        active
                          ? 'bg-[#FFFBEB] border-[#D97706] shadow-sm'
                          : 'bg-white/40 hover:bg-white border-[#E2E8F0]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="block text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#B45309]">
                          {item.badge}
                        </span>
                        <span className="block text-xs sm:text-[13px] font-bold text-[#0F172A] truncate mt-0.5">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className={`shrink-0 transition-transform ${
                          active ? 'text-[#B45309] translate-x-0.5' : 'text-[#A09886]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Interactive Live CAPI Webhook Trigger Simulator */}
              <div className="rounded-2xl bg-white/40 border border-[#E2E8F0] p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#475569]">
                    Mô Phỏng Sale Chấm Trạng Thái → Meta CAPI:
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0F5132]">
                    {curSim.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {CAPI_SIM_EVENTS.map((ev, i) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => {
                        setSimEventIdx(i);
                        setActiveV2Idx(1);
                      }}
                      className={`px-3 py-1.5 rounded-full text-[10.5px] font-bold border transition-all whitespace-nowrap cursor-pointer ${
                        simEventIdx === i
                          ? ev.tone + ' shadow-sm'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-[#D97706]'
                      }`}
                    >
                      {ev.saleAction}
                    </button>
                  ))}
                </div>

                <div className="rounded-xl bg-white border border-[#E2E8F0] px-3.5 py-2.5 text-[11px] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <span className="font-mono font-bold text-[#0F172A]">
                    Event: <span className="text-[#B45309]">{curSim.metaEvent}</span>
                  </span>
                  <span className="text-[#475569] font-medium">{curSim.effect}</span>
                </div>
              </div>

              {/* Open Full DOMATION Suite & Pricing Modal */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenDomationModal}
                  className="ql-btn-gold px-5 py-3 text-xs whitespace-nowrap cursor-pointer"
                >
                  <Layers size={14} className="shrink-0" />
                  <span>Mở Chi Tiết 18 Phân Hệ &amp; Bảng Giá</span>
                </button>

                <a
                  href="https://ideas-data.vercel.app/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ql-btn-outline px-4 py-3 text-xs whitespace-nowrap"
                >
                  <Database size={14} className="text-[#B45309] shrink-0" />
                  <span>Demo Chia Data</span>
                </a>
              </div>
            </div>

            {/* Right 3D Production Screenshot Stage */}
            <div className="lg:col-span-7">
              <Tilt3DCard
                maxTilt={5.5}
                onClick={() => setZoomImg({ src: curScreen.image, title: curScreen.title })}
                className="rounded-2xl bg-white/40 border border-[#E2E8F0] p-2.5 sm:p-3.5 cursor-pointer group"
              >
                {/* Browser Top Chrome */}
                <div className="flex items-center justify-between px-2 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E6B8AF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F1D592]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A8D0B9]" />
                    <span className="ml-2 text-[10px] font-mono text-[#475569] truncate">
                      portal.domation.net • {curScreen.id}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#B45309] whitespace-nowrap">
                    <ZoomIn size={12} className="shrink-0" />
                    <span>Phóng to HD</span>
                  </span>
                </div>

                <DepthLayer z={18}>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white border border-[#E2E8F0]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={curScreen.image}
                        src={curScreen.image}
                        alt={curScreen.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                      />
                    </AnimatePresence>
                  </div>
                </DepthLayer>

                {/* Concise 3-Pill Takeaway Strip */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {curScreen.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-medium text-[#0F172A]"
                    >
                      <CheckCircle2 size={12} className="text-[#0F5132] shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </Tilt3DCard>
            </div>
          </div>
        </div>
      </div>

      {/* HD Lightbox */}
      <Modal
        isOpen={!!zoomImg}
        onClose={() => setZoomImg(null)}
        title={zoomImg?.title || 'DOMATION Data & CAPI'}
        className="max-w-6xl w-[94vw]"
      >
        {zoomImg && (
          <div className="p-3 sm:p-5 bg-white/40 flex items-center justify-center">
            <img
              src={zoomImg.src}
              alt={zoomImg.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-[#E2E8F0]" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default FlowStorySection;
