import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BellRing,
  Code2,
  Cpu,
  ExternalLink,
  MonitorSmartphone,
  MousePointerClick,
  QrCode,
  RefreshCcw,
  Shield,
  Webhook,
} from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

/** Compact icon/logo badge items for the Zalo Mini App core stack. */
const ZALO_CORE_TECH = [
  {
    name: 'ReactJS 18',
    icon: (
      <div className="w-6 h-6 rounded-lg bg-[#E0F7FA] border border-[#06B6D4]/25 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0284C7]" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Zalo ZaUI',
    icon: (
      <span className="w-6 h-6 rounded-lg bg-[#0068FF] text-white font-black text-[10px] tracking-tighter flex items-center justify-center shrink-0 shadow-xs">
        Z
      </span>
    ),
  },
  {
    name: 'ZMP SDK',
    icon: (
      <span className="w-6 h-6 rounded-lg bg-[#1E40FF] text-white font-black text-[8.5px] tracking-tight flex items-center justify-center shrink-0 shadow-xs">
        SDK
      </span>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <span className="w-6 h-6 rounded-lg bg-[#3178C6] text-white font-black text-[9.5px] tracking-tighter flex items-center justify-center shrink-0 shadow-xs">
        TS
      </span>
    ),
  },
  {
    name: 'Zalo OA / ZNS',
    icon: (
      <div className="w-6 h-6 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-xs">
        <BellRing size={13} strokeWidth={2.3} />
      </div>
    ),
  },
  {
    name: 'CRM Webhook',
    icon: (
      <div className="w-6 h-6 rounded-lg bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-xs">
        <Webhook size={13} strokeWidth={2.3} />
      </div>
    ),
  },
];

const ZALO_FEATURES = [
  {
    id: 'zaui',
    icon: <Code2 size={18} />,
    iconClass:
      'bg-blue-50 border-blue-200/70 text-[#1E40FF] group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF]',
    hoverBorder: 'hover:border-[#1E40FF]/35',
    title: 'Kiến trúc React & ZaUI (IDEAS App)',
    desc: 'Xây dựng trên ReactJS & Zalo Mini App SDK theo chuẩn UI Native Zalo với tốc độ tải tức thì và trải nghiệm mượt mà.',
  },
  {
    id: 'loyalty',
    icon: <Shield size={18} />,
    iconClass:
      'bg-emerald-50 border-emerald-200/70 text-emerald-600 group-hover:bg-emerald-600 group-hover:border-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
    title: 'Loyalty & Tích Điểm Tự Động',
    desc: 'Xác thực tài khoản qua Zalo Phone Number không cần mật khẩu, kích hoạt voucher và theo dõi tiến độ trực tiếp.',
  },
  {
    id: 'crm-sync',
    icon: <RefreshCcw size={18} />,
    iconClass:
      'bg-sky-50 border-sky-200/70 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:border-[#0284C7]',
    hoverBorder: 'hover:border-sky-300',
    title: 'Đồng Bộ CRM & ZaloBot',
    desc: 'Đẩy hành vi & trạng thái học viên về CRM doanh nghiệp, kích hoạt nhắc lịch qua Zalo OA ZNS tự động.',
  },
];

const ZaloMiniAppShowcase: React.FC = () => {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <section
      id="zalo-mini-app"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3.5">
            <MonitorSmartphone size={13} />
            <span>Interactive Mobile Experience</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3">
            Zalo Mini App{' '}
            <span className="block sm:inline font-editorial text-gradient-inkica">
              for Business.
            </span>
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed">
            Ứng dụng tương tác tích hợp trực tiếp trong Zalo giúp học viên, khách hàng theo dõi
            lịch trình, tích điểm và đồng bộ dữ liệu về CRM tức thì.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right (Desktop): Widened Phone Frame Iframe Simulator */}
          <div className="lg:col-span-6 order-2 flex justify-center">
            <div className="relative pt-4">
              <div className="w-full max-w-[395px] sm:w-[405px] h-[620px] sm:h-[700px] bg-slate-900 rounded-[2.5rem] border-[5px] border-slate-800 overflow-hidden relative flex flex-col">
                <div className="h-6 bg-slate-900 w-full flex items-center justify-center relative z-20 shrink-0">
                  <div className="w-20 h-3 bg-slate-800 rounded-full" />
                </div>

                <div className="relative flex-grow bg-white w-full overflow-hidden">
                  <iframe
                    src="https://turniodev.github.io/zala_ideas"
                    title="IDEAS Institute Zalo Mini App"
                    loading="lazy"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>

                <div className="h-4 bg-slate-900 w-full flex items-center justify-center shrink-0">
                  <div className="w-24 h-1 bg-slate-700 rounded-full" />
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/90">
                <p className="text-[11px] font-bold flex items-center gap-1.5 text-[#1E40FF] whitespace-nowrap">
                  <MousePointerClick size={13} /> Thao tác trực tiếp
                </p>
              </div>
            </div>
          </div>

          {/* Left (Desktop): 3 Compact Technical Feature Cards */}
          <div className="lg:col-span-6 order-1 space-y-4">
            <ResponsiveSlideDeck
              items={ZALO_FEATURES}
              keyExtractor={(item) => item.id}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-1"
              gapClass="gap-3.5"
              ariaLabel="Tính năng Zalo Mini App"
              renderItem={(item) => (
                <div
                  className={`group p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white ${item.hoverBorder} hover:shadow-md transition-all h-full`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors group-hover:text-white [&_svg]:group-hover:text-white ${item.iconClass}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />

            {/* Compact Core Tech Icon & Logo Strip */}
            <div className="p-4 rounded-2xl inkica-glass-card">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1E40FF] mb-2.5">
                <Cpu size={12} />
                <span>Core Tech Stack</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ZALO_CORE_TECH.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/95 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] hover:border-[#1E40FF]/35 transition-colors"
                  >
                    {tech.icon}
                    <span className="text-[11.5px] font-bold text-slate-800 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://turniodev.github.io/zala_ideas"
                target="_blank"
                rel="noreferrer"
                className="btn-inkica-primary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <ExternalLink size={14} /> Mở Toàn Màn Hình
              </a>
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="ql-btn-outline px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
              >
                <QrCode size={14} className="text-[#1E40FF]" /> Demo Link &amp; QR
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        title="Trải Nghiệm Zalo Mini App"
        className="max-w-md"
      >
        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#1E40FF] flex items-center justify-center mx-auto">
            <QrCode size={28} />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mở trực tiếp bản Web Simulator của Zalo Mini App IDEAS trong tab mới để trải nghiệm toàn
            màn hình.
          </p>
          <a
            href="https://turniodev.github.io/zala_ideas"
            target="_blank"
            rel="noreferrer"
            className="btn-inkica-primary w-full py-3 text-xs font-bold inline-flex items-center justify-center gap-2"
          >
            <ExternalLink size={15} /> Truy cập turniodev.github.io/zala_ideas
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default ZaloMiniAppShowcase;
