import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutDashboard, Maximize2, Package, Store, Users } from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

import crm1 from '../../imgs/CRM (1).webp';
import crm2 from '../../imgs/CRM (2).webp';
import crm3 from '../../imgs/CRM (3).webp';
import crm4 from '../../imgs/CRM (4).webp';

const CRM_SCREENS = [
  { src: crm1, title: 'Tổng quan Doanh thu & Phễu Lead' },
  { src: crm2, title: 'Quản trị Khách hàng & Lịch hẹn' },
  { src: crm3, title: 'Hệ thống Bán hàng & Đơn hàng POS' },
  { src: crm4, title: 'Báo cáo Chi nhánh Thời gian thực' },
];

const CRM_FEATURES = [
  {
    icon: <Store size={18} />,
    title: 'Đa chi nhánh & Nhượng quyền',
    desc: 'Phân quyền chặt chẽ từng cửa hàng, đại lý và báo cáo doanh số hợp nhất.',
  },
  {
    icon: <Users size={18} />,
    title: 'CRM Phân hạng Khách hàng',
    desc: 'Theo dõi lịch sử mua hàng, thói quen tiêu dùng và tự động chăm sóc.',
  },
  {
    icon: <Package size={18} />,
    title: 'Kho hàng & Định mức Tồn',
    desc: 'Cảnh báo tồn kho tối thiểu, kiểm soát nhập – xuất – chuyển kho tự động.',
  },
  {
    icon: <Clock size={18} />,
    title: 'Báo cáo Thời gian thực',
    desc: 'Cập nhật tức thì doanh thu, lợi nhuận gộp và hiệu suất nhân sự theo giờ.',
  },
];

const CrmShowcase: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="crm-showcase"
      className="py-16 sm:py-20 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Title + 2x2 Compact Bento */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-4">
                <LayoutDashboard size={13} />
                <span>Enterprise Growth Suite</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3.5">
                Tất cả dữ liệu &amp; khách hàng trên{' '}
                <span className="block sm:inline font-editorial text-gradient-inkica">
                  một hệ thống.
                </span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Bộ giải pháp CRM &amp; POS quản trị đa chi nhánh tập trung Lead, lịch sử chăm sóc,
                tồn kho và doanh thu theo thời gian thực.
              </p>

              <ResponsiveSlideDeck
                items={CRM_FEATURES}
                keyExtractor={(item) => item.title}
                desktopMode="grid"
                desktopGridClass="lg:grid-cols-2"
                gapClass="gap-3"
                ariaLabel="Tính năng CRM & POS"
                renderItem={(item) => (
                  <div className="group p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#1E40FF]/35 hover:shadow-md transition-all h-full">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/70 text-[#1E40FF] flex items-center justify-center mb-2.5 transition-colors group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              />
            </motion.div>
          </div>

          {/* Right Column: Clean Visual Showcase Slider */}
          <div className="lg:col-span-7">
            <ResponsiveSlideDeck
              items={CRM_SCREENS}
              keyExtractor={(screen) => screen.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              ariaLabel="Giao diện CRM & POS"
              renderItem={(screen, idx) => (
                <button
                  type="button"
                  onClick={() => setPreviewImage(screen.src)}
                  className="group relative w-full text-left rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#1E40FF]/45 shadow-sm hover:shadow-xl transition-all cursor-pointer p-2 h-full"
                >
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-[16/10]">
                    <img
                      src={screen.src}
                      alt={screen.title}
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
                      {screen.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">0{idx + 1}</span>
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
        title="CRM & POS Enterprise Interface"
        className="max-w-5xl"
      >
        {previewImage && (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-2xl p-2 border border-slate-200">
            <img
              src={previewImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default CrmShowcase;
