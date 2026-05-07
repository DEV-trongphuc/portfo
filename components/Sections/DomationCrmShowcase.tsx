import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  History,
  Kanban,
  Box,
  CreditCard,
  LifeBuoy,
  ShieldCheck,
  Database,
  Key,
  Save,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Sparkles
} from 'lucide-react';
import Modal from '../UI/Modal';

// Import CRMS images 1-4 and CRM images 5-18
// @ts-ignore
import crms1 from '../../imgs/CRMS (1).jpg';
// @ts-ignore
import crms2 from '../../imgs/CRMS (2).jpg';
// @ts-ignore
import crms3 from '../../imgs/CRMS (3).jpg';
// @ts-ignore
import crms4 from '../../imgs/CRMS (4).jpg';
// @ts-ignore
import crm5 from '../../imgs/CRM (5).jpg';
// @ts-ignore
import crm6 from '../../imgs/CRM (6).jpg';
// @ts-ignore
import crm7 from '../../imgs/CRM (7).jpg';
// @ts-ignore
import crm8 from '../../imgs/CRM (8).jpg';
// @ts-ignore
import crm9 from '../../imgs/CRM (9).jpg';
// @ts-ignore
import crm10 from '../../imgs/CRM (10).jpg';
// @ts-ignore
import crm11 from '../../imgs/CRM (11).jpg';
// @ts-ignore
import crm12 from '../../imgs/CRM (12).jpg';
// @ts-ignore
import crm13 from '../../imgs/CRM (13).jpg';
// @ts-ignore
import crm14 from '../../imgs/CRM (14).jpg';
// @ts-ignore
import crm15 from '../../imgs/CRM (15).jpg';
// @ts-ignore
import crm16 from '../../imgs/CRM (16).jpg';
// @ts-ignore
import crm17 from '../../imgs/CRM (17).jpg';
// @ts-ignore
import crm18 from '../../imgs/CRM (18).jpg';

const ALL_IMAGES = [
  crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9,
  crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18
];

const DomationCrmShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const coreFeatures = [
    {
      title: "Quản Lý Khách Hàng Tập Trung",
      desc: "Lưu trữ toàn bộ thông tin liên hệ, lịch sử giao dịch và phân loại khách hàng (VIP, Tiềm năng, Mới) một cách khoa học.",
      icon: <Users className="text-blue-400" />
    },
    {
      title: "Nhật Ký Tương Tác Thông Minh",
      desc: "Tự động ghi lại lịch sử gọi điện, nội dung họp và trao đổi email. Nhân sự mới có thể tiếp nhận khách hàng cũ ngay lập tức.",
      icon: <History className="text-purple-400" />
    },
    {
      title: "Quản Lý Phễu Bán Hàng",
      desc: "Theo dõi tiến độ từng hợp đồng (Deals) từ lúc mới tiếp cận đến khi chốt đơn. Dự báo doanh thu chính xác theo tuần/tháng.",
      icon: <Kanban className="text-emerald-400" />
    },
    {
      title: "Kiểm Soát Kho & Sản Phẩm",
      desc: "Quản lý danh mục sản phẩm, tồn kho theo lô và lịch sử nhập xuất hàng, giúp doanh nghiệp luôn chủ động nguồn cung.",
      icon: <Box className="text-orange-400" />
    },
    {
      title: "Quản Lý Tài Chính Tinh Gọn",
      desc: "Theo dõi doanh thu qua hóa đơn, kiểm soát chi phí vận hành và tính toán lợi nhuận gộp trực tiếp trên hệ thống.",
      icon: <CreditCard className="text-rose-400" />
    },
    {
      title: "Chăm Sóc Khách Hàng",
      desc: "Tiếp nhận và xử lý các phản hồi, khiếu nại (Tickets) theo quy trình bài bản, nâng cao sự hài lòng và lòng trung thành.",
      icon: <LifeBuoy className="text-cyan-400" />
    }
  ];

  const securityPoints = [
    {
      title: "Chủ Động Hoàn Toàn",
      desc: "Doanh nghiệp sở hữu toàn bộ cơ sở dữ liệu trên hạ tầng riêng, không lo ngại rò rỉ thông tin cho bên thứ ba.",
      icon: <Database size={20} />
    },
    {
      title: "Truy Cập An Toàn",
      desc: "Hệ thống xác thực bằng Token (JWT), đảm bảo mọi truy cập đều được mã hóa và kiểm soát chặt chẽ.",
      icon: <Key size={20} />
    },
    {
      title: "Sao Lưu Dễ Dàng",
      desc: "Chủ động thực hiện sao lưu (Backup) định kỳ để bảo vệ dữ liệu trước mọi sự cố kỹ thuật.",
      icon: <Save size={20} />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030303] border-t border-white/5" id="domation-crm">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030303] bg-blue-500 flex items-center justify-center text-[10px] font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-blue-400 uppercase tracking-[0.3em] text-xs font-black">Centralized CRM Solution</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tighter"
            >
              DOMATION CRM<br />
              <span className="text-gradient-gold italic">SMARTER GROW.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light mb-10"
            >
              Tạm biệt Excel và các phương thức quản lý thủ công rời rạc.
              Hệ thống <span className="text-white font-bold border-b-2 border-gold-500/30">Minth CRM</span> cung cấp bộ công cụ tối ưu để doanh nghiệp SME vận hành như một tập đoàn lớn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://crm-domation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-gold-400 transition-all flex items-center gap-2 group"
              >
                DÙNG THỬ NGAY
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-8 py-4 glass-card rounded-2xl flex items-center gap-2 text-white/70">
                <Sparkles size={18} className="text-gold-400" />
                <span className="text-sm font-medium">Full AI Integration</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-gold-500 rounded-[2.5rem] blur opacity-20 animate-pulse" />
              <div className="relative glass-card p-3 rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl">
                <img
                  src={crms4}
                  alt="Main CRM Dashboard"
                  className="w-full h-auto rounded-[1.8rem] shadow-inner cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                  onClick={() => setActiveImage(0)}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-pill px-6 py-4 rounded-2xl flex items-center gap-4 animate-float">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Customers</div>
                  <div className="text-xl font-black text-white leading-none">12,600+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {coreFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="glass-card p-10 rounded-[2.5rem] group hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Multi-Image Showcase */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black text-white mb-3">HỆ SINH THÁI TÍNH NĂNG</h3>
              <p className="text-gray-500">Tối ưu hóa mọi điểm chạm với khách hàng, từ lúc là Leads tiềm năng đến khi trở thành khách hàng trung thành.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Analytics</div>
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Inventory</div>
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Sales</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => setActiveImage(1)}
            >
              <img src={crms2} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-gold-400 font-black text-sm uppercase tracking-widest mb-2">Detailed View</span>
                <h4 className="text-white text-2xl font-black">Sales Pipeline Management</h4>
              </div>
            </motion.div>

            <div className="col-span-2 grid grid-cols-2 gap-4">
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(2)}
              >
                <img src={crms3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(3)}
              >
                <img src={crms4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>

            <div className="col-span-2 grid grid-cols-4 gap-4">
              {ALL_IMAGES.slice(4, 8).map((img, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveImage(idx + 4)}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 cursor-pointer group"
                >
                  <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="relative glass-card p-12 rounded-[3rem] border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white leading-tight">PRIVATE CLOUD</h3>
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mt-1">Enterprise Security Standards</div>
                </div>
              </div>

              <div className="space-y-10">
                {securityPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Database size={12} />
              Your Data, Your Ownership
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
            >
              Hạ Tầng Riêng Biệt.<br />
              <span className="text-gradient-gold">Bảo Mật Tuyệt Đối.</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-12 leading-relaxed font-light"
            >
              Không còn nỗi lo rò rỉ dữ liệu khách hàng cho bên thứ ba. DOMATION CRM cho phép doanh nghiệp tự triển khai trên máy chủ riêng, nắm quyền kiểm soát 100% cơ sở dữ liệu và hệ thống xác thực.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Maximize2 size={80} />
              </div>
              <h4 className="text-white font-bold mb-4">Bạn đã sẵn sàng chuyển đổi số?</h4>
              <a
                href="https://crm-domation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gold-400 font-black group"
              >
                TRUY CẬP DEMO NGAY
                <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <Modal
        isOpen={activeImage !== null}
        onClose={() => setActiveImage(null)}
        title="Domation CRM Gallery"
        className="max-w-6xl w-[95vw]"
      >
        <div className="p-6 bg-[#050505]">
          <div className="grid grid-cols-1 gap-8">
            {ALL_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src={img} alt={`CRM Detail ${idx + 1}`} className="w-full h-auto" />
                <div className="p-4 bg-black/40 backdrop-blur-md border-t border-white/5 text-gray-400 text-xs text-center uppercase tracking-widest">
                  Screenshot Module {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default DomationCrmShowcase;
