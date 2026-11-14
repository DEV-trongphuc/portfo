import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Maximize2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Modal from '../UI/Modal';

import domRp1 from '../../imgs/dom_rp_1.webp';
import domRp2 from '../../imgs/dom_rp_2.webp';
import domRp3 from '../../imgs/dom_rp_3.webp';
import domRp4 from '../../imgs/dom_rp_4.webp';
import domRp5 from '../../imgs/dom_rp_5.webp';
import domRp6 from '../../imgs/dom_rp_6.webp';

const REPORT_IMAGES = [
  { src: domRp1, title: 'Tổng quan Chi phí, ROAS & CPA' },
  { src: domRp2, title: 'Hook Rate & Hold Rate Video' },
  { src: domRp3, title: 'Đối soát Doanh thu Ads & CRM' },
  { src: domRp4, title: 'Phân tích Độ bão hòa Creative' },
  { src: domRp5, title: 'Ma trận Scale Ngân sách Adset' },
  { src: domRp6, title: 'Nhật ký Đồng bộ CAPI & Dataset' },
];

const REPORT_FEATURES = [
  {
    icon: <Activity size={18} />,
    title: 'Quét Dữ Liệu Tự Động',
    desc: 'Đồng bộ chi phí, CPM, CTR & CPA trực tiếp từ Facebook Marketing API theo giờ.',
  },
  {
    icon: <BrainCircuit size={18} />,
    title: 'AI Đọc Chỉ Số & Cảnh Báo',
    desc: 'Phát hiện nhóm quảng cáo tăng giá hoặc giảm tỷ lệ chuyển đổi để đề xuất hành động.',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Báo Cáo Khách Hàng 1-Click',
    desc: 'Minh bạch ngân sách và hiệu quả từng chiến dịch trên link dashboard riêng.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Đối Soát ROAS Thực Tế',
    desc: 'Gắn chi phí Ads với dữ liệu Lead thiện chí & Booking trả về từ CRM.',
  },
  {
    icon: <Database size={18} />,
    title: 'Lưu Trữ Lịch Sử Dài Hạn',
    desc: 'Giữ toàn bộ lịch sử creative thắng để so sánh theo mùa vụ & ngành hàng.',
  },
  {
    icon: <Cpu size={18} />,
    title: 'Đa Tài Khoản & Pixel',
    desc: 'Quản lý tập trung hàng chục BM & tài khoản quảng cáo trên một màn hình.',
  },
];

const MetaAdReportShowcase: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? REPORT_IMAGES : REPORT_IMAGES.slice(0, 4);

  return (
    <section
      id="meta-ad-report"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Clean 2x2 Gallery */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {visibleImages.map((img, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setPreviewImage(img.src)}
                  className="group relative text-left rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#1E40FF]/45 shadow-sm hover:shadow-xl transition-all cursor-pointer p-2"
                >
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-[16/10]">
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/95 border border-slate-200 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 size={13} />
                    </span>
                  </div>
                  <div className="px-2 pt-2.5 pb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#1E40FF] transition-colors truncate">
                      {img.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">0{idx + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-start">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#1E40FF]/40 text-xs font-bold text-slate-700 hover:text-[#1E40FF] transition-all cursor-pointer"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={14} /> Thu gọn bớt báo cáo
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} /> Xem đủ 6 màn hình Meta Insights
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Header + Compact Features */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-4">
                <Sparkles size={13} />
                <span>Performance Analytics</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3">
                Báo cáo Realtime{' '}
                <span className="font-editorial text-gradient-inkica">Meta Ad Insights.</span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Hệ thống tự động kéo dữ liệu quảng cáo từ Meta API, phân tích chất lượng tệp và
                đối chiếu thẳng với Lead thiện chí từ CRM.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {REPORT_FEATURES.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1E40FF]/35 hover:shadow-md transition-all"
                  >
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
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        title="Meta Ad Insights Report Preview"
        className="max-w-5xl"
      >
        {previewImage && (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-2xl p-2 border border-slate-200">
            <img
              src={previewImage}
              alt="Fullscreen Report Preview"
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default MetaAdReportShowcase;
