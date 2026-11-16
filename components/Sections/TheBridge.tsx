import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  FolderKanban,
  Globe,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Table2,
  Webhook,
} from 'lucide-react';

const HIGHLIGHT_PILLARS = [
  {
    num: '01',
    eyebrow: 'CHẤT LƯỢNG ĐẦU VÀO',
    decor: '/imgs/enterprise/decor-funnel-orb.png',
    title: 'AI Đánh Giá Trước Khi Giao Lead',
    desc: 'Tự động chấm điểm độ nóng (Hot / Warm), chặn SĐT ảo, spam form và lọc trùng 90 ngày trước khi đẩy tới tay Sale — kèm tóm tắt AI ngay trong tin báo Zalo.',
  },
  {
    num: '02',
    eyebrow: 'CÔNG BẰNG ĐỘI SALE',
    decor: '/imgs/enterprise/decor-shield-node.png',
    title: 'Cơ Chế Bù Data Lỗi 1-Đổi-1',
    desc: 'Sale gặp số sai, thuê bao hoặc nhầm đối tượng chỉ cần báo lỗi 1 chạm trên Zalo / Cổng Sale. Quản lý duyệt minh bạch là hệ thống tự động cộng trả +1 lượt bù ưu tiên.',
  },
  {
    num: '03',
    eyebrow: 'CHỦ ĐỘNG DỮ LIỆU',
    decor: '/imgs/enterprise/decor-torus-ring.png',
    title: 'Cổng Sale Cá Nhân & Đồng Bộ 2 Chiều',
    desc: 'Mỗi Sale có giỏ khách tự khai thác riêng (0 quota, miễn thu hồi), xuất file CSV tiếng Việt 1 chạm và đồng bộ 2 chiều qua Google Sheets & REST API.',
  },
];

const HUB_FEATURES = [
  {
    badge: 'AI LEAD SCORING',
    icon: Sparkles,
    title: 'AI Đánh Giá Trước Khi Giao',
    desc: 'Chấm điểm nhu cầu, lọc SĐT rác & trùng 90 ngày trước khi phân bổ để Sale chỉ gọi khách chất lượng thật.',
  },
  {
    badge: 'BÙ DATA 1-ĐỔI-1',
    icon: RefreshCw,
    title: 'Hoàn Lượt Khi Nhận Số Lỗi',
    desc: 'Sale báo số sai / thuê bao 1 chạm trên Zalo; duyệt là tự động cộng trả +1 lượt bù ưu tiên ở vòng kế tiếp.',
  },
  {
    badge: 'CỔNG SALE RIÊNG',
    icon: FolderKanban,
    title: 'Giỏ Khách Cá Nhân 0 Quota',
    desc: 'Tự nhập hoặc import danh sách khách riêng không qua vòng chia chung, bật/tắt ca trực Online linh hoạt.',
  },
  {
    badge: 'ĐỒNG BỘ 2 CHIỀU',
    icon: Table2,
    title: 'Google Sheets, API & Meta CAPI',
    desc: 'Đồng bộ real-time 2 chiều với Google Sheets từng Sale và gửi tín hiệu chuyển đổi ngược tối ưu Meta Ads.',
  },
];

const AUTODATA_CONNECTORS = [
  { name: 'Website', icon: <Globe className="w-3.5 h-3.5 text-[#1E40FF]" /> },
  { name: 'ZaloBot', icon: <Bot className="w-3.5 h-3.5 text-[#0068FF]" /> },
  {
    name: 'Email SES',
    icon: (
      <img
        src="/assets/brands/gmail-logo.webp"
        alt="Email SES"
        className="w-3.5 h-3.5 object-contain"
        loading="lazy"
      />
    ),
  },
  { name: 'Meta CAPI', icon: <ShieldCheck className="w-3.5 h-3.5 text-[#0866FF]" /> },
  { name: 'Sheets', icon: <Table2 className="w-3.5 h-3.5 text-emerald-600" /> },
  { name: 'Webhook API', icon: <Webhook className="w-3.5 h-3.5 text-cyan-600" /> },
];

const TheBridge: React.FC = () => {
  const goToAutoData = () => {
    window.history.pushState({}, '', '/data');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-22 relative z-10 overflow-hidden">
      <div className="mx-auto px-4 sm:px-8 max-w-[1440px] space-y-8">
        {/* Unified DOMATION Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 1, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="ql-eyebrow mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E40FF] shrink-0" />
              <span>DOMATION AUTO DATA • GIỮ LEAD LUÔN NÓNG</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.28] tracking-tight"
            >
              Phân Bổ Ngay Khi Khách Vừa Quan Tâm —{' '}
              <span className="text-gradient-inkica">Không Để Lead Bị Nguội</span>
            </motion.h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Chấm dứt cảnh mỗi ngày Marketing mới gom file chia data. Hệ thống chấm điểm AI và giao thẳng cho Sale chăm sóc qua Zalo tức thì.
          </p>
        </div>

        {/* Before / After Comparison in Swiss Hairline Glass Card */}
        <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/75 overflow-hidden">
          <div className="p-6 sm:p-7 bg-slate-100/95 space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 border border-rose-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-700">
              Cách chia cũ • Lead bị nguội
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-700">
              Mỗi ngày Marketing mới tổng hợp &amp; chia data 1 lần
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Khách để lại SĐT buổi sáng nhưng chiều hoặc hôm sau Sale mới gọi → khách đã nguội nhu cầu, quên nội dung tư vấn hoặc chốt sang đối thủ phản hồi nhanh hơn.
            </p>
          </div>

          <div className="p-6 sm:p-7 bg-gradient-to-r from-[#F4F8FF]/90 to-white space-y-2 relative">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1E40FF]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                DOMATION Auto Data • Giữ Lead luôn nóng
              </div>
              <img
                src="/imgs/enterprise/decor-crystal-prism.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-8 h-8 object-contain drop-shadow-[0_8px_14px_rgba(30,64,255,0.2)] hidden sm:block"
              />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Khách vừa gửi form là phân bổ cho Sale gọi ngay tức thì
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tự động chọn đúng Sale đang Online, gửi thông báo Zalo tức thì để Sale liên hệ ngay khi khách còn đang cầm điện thoại — tạo cảm giác phục vụ tức thì.
            </p>
          </div>
        </div>

        {/* 3-Column Swiss Hairline Highlights with 3D Floating Decors (Matching DomationHome) */}
        <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-xs grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/75 overflow-hidden">
          {HIGHLIGHT_PILLARS.map((item) => (
            <div key={item.num} className="p-7 sm:p-8 flex flex-col justify-between gap-4 hover:bg-slate-50/55 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-bold font-mono text-[#1E40FF] flex items-center justify-center">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40FF]">
                      {item.eyebrow}
                    </span>
                  </div>
                  <img
                    src={item.decor}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-10 h-10 object-contain drop-shadow-[0_10px_18px_rgba(30,64,255,0.18)] shrink-0"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Hub Showcase Card + Bottom 6-Connector Strip (Matching DomationHome Orchestrator) */}
        <div className="rounded-[28px] bg-white/85 backdrop-blur-2xl border border-slate-200/80 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.07)] p-6 sm:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Visual Card */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/75 bg-[#F4F8FF]">
                <img
                  src="/imgs/enterprise/sol-data-capi.webp"
                  alt="Trung tâm điều phối và bảo vệ chất lượng Lead DOMATION Auto Data"
                  loading="lazy"
                  className="w-full h-56 sm:h-60 object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E40FF]">
                    AUTO DATA ENGINE • MIỄN PHÍ 1 THÁNG ĐẦU
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lọc trùng 90 ngày, AI chấm điểm trước khi giao, bù data lỗi 1-đổi-1 và đồng bộ hai chiều Google Sheets, REST API &amp; Meta CAPI.
                </p>
              </div>
              <button
                type="button"
                onClick={goToAutoData}
                className="btn-inkica-primary rounded-full px-6 py-3 text-xs sm:text-sm cursor-pointer whitespace-nowrap"
              >
                <span>Khám phá DOMATION /data</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Right 2x2 Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HUB_FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.badge}
                    className="rounded-2xl bg-slate-50/75 hover:bg-white border border-slate-200/75 p-5 transition-colors flex flex-col justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-[#1E40FF] flex items-center justify-center shadow-2xs shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/70 whitespace-nowrap">
                        {feat.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Connector Strip (6 Auto Data Connectors) */}
          <div className="mt-8 pt-6 border-t border-slate-200/75 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div className="shrink-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-800">
                PLATFORM, GOOGLE SHEETS &amp; REST API ĐỒNG BỘ 2 CHIỀU
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Kết nối hai chiều thời gian thực với hệ sinh thái marketing &amp; bán hàng sẵn có.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full xl:max-w-[760px]">
              {AUTODATA_CONNECTORS.map((conn) => (
                <div
                  key={conn.name}
                  className="rounded-xl bg-slate-50/85 border border-slate-200/75 px-3 py-2 flex items-center gap-2 text-xs font-semibold text-slate-700"
                >
                  <span className="shrink-0">{conn.icon}</span>
                  <span className="truncate">{conn.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBridge;
