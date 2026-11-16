import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  CreditCard,
  Maximize2,
  QrCode,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Modal from '../UI/Modal';

const FLORA_SCREENS = [
  {
    src: '/assets/flora/flora_admin_dashboard.webp',
    badge: 'Admin Console',
    title: 'Trung Tâm Quản Trị KOL, Đơn Hàng & Đối Soát Flora',
  },
  {
    src: '/assets/flora/flora_checkout_qr.webp',
    badge: 'VietQR ACB',
    title: 'Cổng Đặt Gói Care Plus / White Up & VietQR Tự Động',
  },
  {
    src: '/assets/flora/flora_settlement.webp',
    badge: 'Quyết toán HIPAA',
    title: 'Phiếu Quyết Toán & Lịch Sử Chi Trả Hoa Hồng (Mã FT Ngân Hàng)',
  },
  {
    src: '/assets/flora/flora_withdraw_modal.webp',
    badge: 'Rút tiền 24/7',
    title: 'Modal Gửi Lệnh Rút Hoa Hồng Về Tài Khoản Chính Chủ',
  },
];

const FLORA_PILLARS = [
  {
    icon: <Users size={17} />,
    title: 'Partner Portal 0-Login',
    desc: 'Mỗi KOL/Bác sĩ có đường dẫn Secret Hash Token riêng, xem click & đơn realtime không cần mật khẩu.',
  },
  {
    icon: <QrCode size={17} />,
    title: 'VietQR ACB Webhook',
    desc: 'Sinh cú pháp FLORA <MÃ_KOL> <SĐT> <MÃ_ĐƠN> chống thất lạc đơn & đối soát ngân hàng tự động.',
  },
  {
    icon: <ShieldCheck size={17} />,
    title: 'Bảo Mật Y Khoa HIPAA',
    desc: 'Che số điện thoại khách hàng trên Portal đối tác; chỉ cộng hoa hồng khả dụng khi đơn đã thanh toán.',
  },
  {
    icon: <CreditCard size={17} />,
    title: 'Chi Trả Napas & Zalo OA',
    desc: 'Đối tác gửi lệnh rút từ 100.000₫, kèm mã FT đối soát & thông báo chúc mừng tự động qua Zalo OA.',
  },
];

const FloraAffiliateShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomScreen, setZoomScreen] = useState<(typeof FLORA_SCREENS)[0] | null>(null);
  const activeScreen = FLORA_SCREENS[activeIdx];

  return (
    <section
      id="flora-affiliate"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Narrative & 4 Pillars */}
          <motion.div
            initial={{ opacity: 1, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-5 space-y-5"
          >
            <div>
              <div className="ql-eyebrow mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#1E40FF] shrink-0" />
                <span>HỆ THỐNG Y KHOA • AFFILIATE KOL &amp; VIETQR</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-950 leading-[1.32] mb-2.5">
                Flora Affiliate &amp;{' '}
                <span className="font-editorial text-gradient-inkica">
                  E-Voucher Engine.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hệ thống quản lý mạng lưới KOL, Bác sĩ liên kết &amp; E-Voucher độc quyền cho Hệ Thống Nha Khoa Flora: tự động sinh VietQR ACB mang mã REF, đối soát Webhook tức thì và bảo mật y khoa HIPAA.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FLORA_PILLARS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/40 p-3.5 rounded-2xl shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E40FF] flex items-center justify-center mb-2 group-hover:bg-[#1E40FF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-emerald-700">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1">
                <CheckCircle2 size={13} />
                Hoa hồng 10% chỉ tính đơn Paid
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40FF] px-3 py-1">
                100% Không thất lạc mã REF
              </span>
            </div>
          </motion.div>

          {/* Right: Interactive Screen Viewer + Thumbnails */}
          <div className="lg:col-span-7 space-y-3">
            <button
              type="button"
              onClick={() => setZoomScreen(activeScreen)}
              className="group relative w-full text-left rounded-3xl overflow-hidden bg-white/95 border border-slate-200/90 hover:border-[#1E40FF]/45 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.12)] transition-all cursor-pointer p-2.5"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={activeScreen.src}
                  alt={activeScreen.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1 text-[11px] font-bold text-[#1E40FF] shadow-xs">
                  {activeScreen.badge}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/85 text-white px-3 py-1 text-[11px] font-semibold inline-flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>Phóng to</span>
                </span>
              </div>
              <div className="px-2 pt-2.5 pb-1 flex items-center justify-between gap-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {activeScreen.title}
                </div>
                <span className="text-[11px] font-mono text-slate-400 shrink-0">
                  {activeIdx + 1} / {FLORA_SCREENS.length}
                </span>
              </div>
            </button>

            <div className="grid grid-cols-4 gap-2">
              {FLORA_SCREENS.map((sc, idx) => (
                <button
                  key={sc.src}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-xl overflow-hidden border-2 p-1 bg-white transition-all cursor-pointer text-left ${
                    activeIdx === idx
                      ? 'border-[#1E40FF] shadow-sm'
                      : 'border-slate-200/80 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={sc.src}
                      alt={sc.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-[10px] font-semibold text-slate-700 truncate mt-1 px-0.5">
                    {sc.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Modal
        isOpen={!!zoomScreen}
        onClose={() => setZoomScreen(null)}
        title={zoomScreen?.title || 'Flora Affiliate & E-Voucher Engine'}
        className="max-w-5xl"
      >
        {zoomScreen && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <img
              src={zoomScreen.src}
              alt={zoomScreen.title}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default FloraAffiliateShowcase;
