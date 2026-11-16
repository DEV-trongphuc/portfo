import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, LayoutDashboard, Maximize2, Package, Receipt, Users } from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const CRM_SCREENS = [
  { src: '/assets/minth/minth_products_ml.webp', title: 'Danh mục Sản phẩm & Quy đổi ml' },
  { src: '/assets/minth/minth_inventory_batch.webp', title: 'Kho Lô: Giá vốn, Giá bán & Tồn Chai / ml' },
  { src: '/assets/minth/minth_dashboard.webp', title: 'Tổng quan P&L & Cơ cấu Nguyên chai / Chiết' },
  { src: '/assets/minth/minth_orders.webp', title: 'Quản lý Đơn hàng POS & Thanh toán' },
  { src: '/assets/minth/minth_crm_customers.webp', title: 'CRM Phân hạng VIP / Loyal & Lịch sử Lô' },
  { src: '/assets/minth/minth_expense_loss.webp', title: 'Báo cáo Chi phí & Hao hụt Tester theo ml' },
];

const CRM_FEATURES = [
  {
    icon: <Droplets size={18} />,
    title: 'Sản phẩm & Quy đổi Chiết ml',
    desc: 'Khai báo đơn vị nhập (Chai, Set, Hộp, Tuýp) và định mức quy đổi (1 Chai = 100ml / 30ml) trước khi nhập lô.',
  },
  {
    icon: <Package size={18} />,
    title: 'Kho Lô, Giá vốn & Giá bán',
    desc: 'Quản lý từng mã lô (MINTH-*), nhập đơn giá hoặc tổng giá trị lô, theo dõi song song tồn Chai nguyên và ml còn lại.',
  },
  {
    icon: <Receipt size={18} />,
    title: 'POS Nguyên Chai & Chiết lẻ',
    desc: 'Tự tính giá vốn theo ml (import_price / ml_per_unit), gợi ý giá bán lẻ và đồng bộ khách hàng từ CRM sang POS.',
  },
  {
    icon: <Users size={18} />,
    title: 'CRM Phân hạng & Hao hụt ml',
    desc: 'Tự động xếp hạng New / Loyal / VIP, ghi nhận xuất kho Tester/Quà tặng theo ml và hạch toán Lợi nhuận ròng.',
  },
];

const CrmShowcase: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="crm-showcase"
      className="py-10 sm:py-16 lg:py-20 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
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
                <span>MINTH Perfume ERP &amp; Decant POS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3.5">
                Quản lý sản phẩm, lô hàng &amp;{' '}
                <span className="block sm:inline font-editorial text-gradient-inkica">
                  chiết nước hoa ml.
                </span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hệ thống quản trị bán lẻ chuyên biệt cho <strong className="text-slate-800">MINTH Store</strong>:
                quy đổi Chai sang ml chiết, kiểm soát giá vốn – giá bán từng lô, trừ kho bán lẻ / hàng
                Tester và báo cáo lợi nhuận ròng theo thời gian thực.
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
        title="MINTH Store • Perfume POS & Batch Inventory"
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

export default CrmShowcase;
