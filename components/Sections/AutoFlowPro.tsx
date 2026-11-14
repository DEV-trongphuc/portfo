import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  LineChart,
  MailPlus,
  Maximize2,
  MessageSquareCode,
  Sparkles,
  Zap,
} from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

import domLogo from '../../imgs/dom_logo.webp';
import auto1 from '../../imgs/automation (1).webp';
import auto2 from '../../imgs/automation (2).webp';
import auto3 from '../../imgs/automation (3).webp';
import auto4 from '../../imgs/automation (4).webp';
import auto5 from '../../imgs/automation (5).webp';
import auto6 from '../../imgs/automation (6).webp';
import auto7 from '../../imgs/automation (7).webp';
import auto8 from '../../imgs/automation (8).webp';
import aiTrain1 from '../../imgs/ai_tu_train (1).webp';
import aiTrain2 from '../../imgs/ai_tu_train (2).webp';
import aiTrain3 from '../../imgs/ai_tu_train (3).webp';

const WORKFLOW_IMAGES = [
  { src: auto4, label: 'Visual Flow Builder — Nhánh Điều Kiện' },
  { src: auto5, label: 'Kịch Bản Tự Động Đa Nhánh (IF/ELSE)' },
  { src: auto6, label: 'Kho Action & Bước Tiếp Theo Workflow' },
  { src: auto7, label: 'Thư Viện Mẫu Kịch Bản Tự Động' },
  { src: auto1, label: 'Chi Tiết Hồ Sơ & Hành Vi Khách Hàng' },
  { src: auto2, label: 'Bảng Quản Trị Đối Tượng & Phân Nhóm' },
  { src: aiTrain1, label: 'Huấn Luyện AI Tri Thức Nội Bộ' },
  { src: auto3, label: 'Chuỗi Email & Zalo ZNS Tự Động' },
  { src: auto8, label: 'Báo Cáo Chuyển Đổi Real-time' },
  { src: aiTrain2, label: 'RAG Knowledge Vault (PDF/Docs)' },
  { src: aiTrain3, label: 'Trợ Lý AI Phòng Ban' },
];

const DOMATION_FEATURES = [
  {
    icon: <Bot size={18} />,
    title: 'AI Agent Tự Động',
    desc: 'Trợ lý chăm sóc & chốt lịch 24/7 trên Zalo OA, Messenger và Website.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Visual Workflow Engine',
    desc: 'Thiết kế kịch bản rẽ nhánh IF/ELSE tự động từ hành vi khách hàng.',
  },
  {
    icon: <MailPlus size={18} />,
    title: 'Email & Zalo ZNS Engine',
    desc: 'Gửi thông báo xác nhận, tài liệu và nhắc lịch tức thì theo ngữ cảnh.',
  },
  {
    icon: <MessageSquareCode size={18} />,
    title: 'AI Script & Content Gen',
    desc: 'Sinh kịch bản phản hồi cá nhân hóa theo từng nhóm khách hàng mục tiêu.',
  },
  {
    icon: <LineChart size={18} />,
    title: 'Theo Dõi Phễu Live',
    desc: 'Đo tỷ lệ mở, lượt click và điểm chuyển đổi ngay trên giao diện trực quan.',
  },
  {
    icon: <BrainCircuit size={18} />,
    title: 'Huấn Luyện AI Riêng',
    desc: 'Nạp PDF, bảng giá và quy trình nội bộ để AI trả lời chuẩn xác theo hãng.',
  },
];

const AutoFlowPro: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="autoflow-pro"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Right (Desktop): Features & Specs */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em]">
                  <Sparkles size={13} />
                  <span>Marketing Automation Platform</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
                  <img
                    src={domLogo}
                    alt="DOMATION Logo"
                    className="w-full h-full object-contain" loading="lazy" decoding="async"
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3">
                DOMATION{' '}
                <span className="block sm:inline font-editorial text-gradient-inkica">
                  Automation Flow.
                </span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Nền tảng tự động hóa kịch bản chăm sóc đa kênh, kéo thả Workflow và AI Agent tự
                huấn luyện trên tri thức riêng của doanh nghiệp.
              </p>

              <ResponsiveSlideDeck
                items={DOMATION_FEATURES}
                keyExtractor={(feature) => feature.title}
                desktopMode="grid"
                desktopGridClass="lg:grid-cols-2"
                gapClass="gap-3"
                className="mb-5"
                ariaLabel="Tính năng DOMATION Automation Flow"
                renderItem={(feature) => (
                  <div className="group p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#1E40FF]/35 hover:shadow-md transition-all h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/70 text-[#1E40FF] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white">
                        {feature.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-[11.5px] text-slate-600 leading-relaxed line-clamp-2">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />

              <a
                href="https://domation.net"
                target="_blank"
                rel="noreferrer"
                className="btn-inkica-primary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Khám Phá Hệ Sinh Thái DOMATION</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Left (Desktop): Real Workflow Builder Screenshots */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ResponsiveSlideDeck
              items={WORKFLOW_IMAGES}
              keyExtractor={(item) => item.label}
              desktopMode="slider"
              desktopPerPage={4}
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              ariaLabel="Giao diện DOMATION Automation Flow"
              renderItem={(item, idx) => (
                <button
                  type="button"
                  onClick={() => setPreviewImage(item.src)}
                  className="group relative w-full text-left rounded-2xl overflow-hidden bg-slate-50/70 border border-slate-200/90 hover:border-[#1E40FF]/45 shadow-sm hover:shadow-xl transition-all cursor-pointer p-2 h-full"
                >
                  <div className="relative rounded-xl overflow-hidden bg-white aspect-[16/10]">
                    <img
                      src={item.src}
                      alt={item.label}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/95 border border-slate-200 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 size={13} />
                    </span>
                  </div>
                  <div className="px-2 pt-2.5 pb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#1E40FF] transition-colors truncate">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              )}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        title="DOMATION Automation & AI Preview"
        className="max-w-5xl"
      >
        {previewImage && (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-2xl p-2 border border-slate-200">
            <img
              src={previewImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[75vh] object-contain rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default AutoFlowPro;
