import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Bot,
  Network,
  ShieldCheck,
  Users,
  BarChart3,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import Modal from '../UI/Modal';

const DOMATION_DATA_IMAGES = {
  hero: 'https://domation.net/CHIA%20DATA/chia_data%20(8).png',
  routing: 'https://domation.net/CHIA%20DATA/chia_data%20(18).png',
  zalo: 'https://domation.net/CHIA%20DATA/chia_data%20(16).png',
  gallery: [
    'https://domation.net/CHIA%20DATA/chia_data%20(14).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(15).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(9).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(20).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(21).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(22).png',
    'https://domation.net/CHIA%20DATA/chia_data%20(6).png'
  ]
};

const DomationDataShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const features = [
    {
      title: "Đồng Bộ Realtime Không Trễ",
      desc: "Dữ liệu từ Landing Page, Facebook Ads, Zalo Form hay Google Sheets đổ thẳng về hệ thống ngay lập tức để xử lý tức thì.",
      icon: <Zap className="text-fuchsia-400" />
    },
    {
      title: "Zalo Bot & Email Cảnh Báo",
      desc: "Tự động gửi thông tin chi tiết của Lead qua Zalo Bot riêng của tư vấn viên và gửi cảnh báo qua Email cho quản lý.",
      icon: <Bot className="text-indigo-400" />
    },
    {
      title: "Phân Phối Round-Robin & Routing",
      desc: "Phân chia Data công bằng cho các Sale theo cơ chế xoay vòng, hoặc tự động định tuyến dựa trên nguồn khách, UTM Campaign.",
      icon: <Network className="text-purple-400" />
    },
    {
      title: "Báo Lỗi & Đền Bù Số Tự Động",
      desc: "Sale báo cáo số trùng, sai số trực tiếp. Admin chỉ cần duyệt, hệ thống sẽ tự động chia bù data mới trong lượt sau.",
      icon: <ShieldCheck className="text-emerald-400" />
    },
    {
      title: "Nhận Diện Trạng Thái Nghỉ Phép",
      desc: "Tự động nhận biết trạng thái trực tuyến/nghỉ phép của Sale để tạm ngưng chia số, đảm bảo data không bị tồn đọng, nguội đi.",
      icon: <Users className="text-amber-400" />
    },
    {
      title: "Zalo Bot Báo Cáo Cuối Ngày",
      desc: "Zalo Bot tự động gửi báo cáo tổng kết chi tiết hiệu suất: Số lượng data nhận, tỷ lệ xử lý, tỷ lệ báo lỗi của từng Sale.",
      icon: <BarChart3 className="text-rose-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030303] border-t border-white/5" id="domation-data">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Main Content Info */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} className="text-purple-400 animate-pulse" />
                Data Routing Solution
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.05] tracking-tighter"
            >
              DOMATION DATA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 italic">AUTOMATIC ROUTING.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl font-light mb-10"
            >
              Giải pháp tối ưu hóa việc phân chia và điều phối luồng Data tự động. Giúp đội ngũ Sale nắm bắt 
              <span className="text-white font-semibold"> "Thời Điểm Vàng" </span> 
              để tiếp cận khách hàng ngay khi nhu cầu phát sinh, loại bỏ hoàn toàn việc phân chia thủ công rời rạc.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://ideas-data.vercel.app/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black rounded-2xl hover:opacity-90 transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                XEM DEMO LIVE
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-6 py-4 glass-card rounded-2xl flex items-center gap-2 text-white/70">
                <Clock size={18} className="text-fuchsia-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="text-xs font-bold uppercase tracking-wider">Real-time Notification</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group cursor-pointer"
              onClick={() => setActiveImage(DOMATION_DATA_IMAGES.hero)}
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass-card p-3 rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 rounded-[1.8rem]">
                  <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 flex items-center gap-2 text-white font-bold text-sm">
                    <Maximize2 size={16} /> Phóng to hình ảnh
                  </div>
                </div>
                <img
                  src={DOMATION_DATA_IMAGES.hero}
                  alt="DOMATION DATA Hero"
                  className="w-full h-auto rounded-[1.8rem] shadow-inner transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="glass-card p-8 rounded-[2rem] group hover:bg-white/[0.03] hover:border-purple-500/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                {React.cloneElement(feature.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light flex-grow">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Multi-Image and Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 size={12} />
              Báo cáo & Đền bù tự động
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Phân Phối Thông Minh,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Minh Bạch & Công Bằng.</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed font-light">
              Mọi dữ liệu khách hàng đều được xử lý chính xác theo cấu hình vòng chia số. Sale thoải mái phản hồi thông tin rác, trùng số mà không sợ thiệt thòi nhờ chính sách tự động bù data.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-bold text-emerald-400">1</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Cân bằng tải Round-Robin</h4>
                  <p className="text-gray-500 text-sm">Hệ thống xoay vòng chia đều cho các Sale đang trong ca làm việc thực tế.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-bold text-emerald-400">2</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Đền bù số chuẩn chỉ</h4>
                  <p className="text-gray-500 text-sm">Sau khi được quản lý duyệt báo cáo lỗi (sai số, trùng), hệ thống tự động cộng bù data trong lượt tiếp theo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer" onClick={() => setActiveImage(DOMATION_DATA_IMAGES.routing)}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] blur opacity-20 group-hover:opacity-35 transition-opacity" />
            <div className="relative glass-card p-2 rounded-[2rem] overflow-hidden border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 rounded-[1.8rem]">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 text-white font-bold text-xs">
                  <Maximize2 size={14} /> Xem sơ đồ phân bổ
                </div>
              </div>
              <img
                src={DOMATION_DATA_IMAGES.routing}
                alt="Sơ đồ định tuyến"
                className="w-full h-auto rounded-[1.8rem] object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Gallery Screenshots */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black text-white mb-3">GIAO DIỆN HỆ THỐNG</h3>
              <p className="text-gray-500">Chi tiết bảng điều khiển định tuyến data, quản lý danh sách Sale và cấu hình đền bù.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Routing</div>
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Automation</div>
              <div className="px-5 py-2 glass-pill text-xs font-bold text-gray-400 uppercase tracking-widest">Realtime</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <motion.div
              className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer aspect-[4/3] md:aspect-auto"
              onClick={() => setActiveImage(DOMATION_DATA_IMAGES.zalo)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-8 z-10">
                <span className="text-fuchsia-400 font-black text-xs uppercase tracking-widest mb-2">Zalo Notification Bot</span>
                <h4 className="text-white text-xl md:text-2xl font-black">Thông báo data tức thì về Zalo cá nhân</h4>
              </div>
              <img 
                src={DOMATION_DATA_IMAGES.zalo} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Zalo Notification Bot"
              />
            </motion.div>

            {DOMATION_DATA_IMAGES.gallery.slice(0, 4).map((img, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveImage(img)}
                className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/5 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <Maximize2 size={16} className="text-white" />
                </div>
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-all duration-75 group-hover:scale-105" 
                  alt={`Screenshot ${idx + 1}`}
                />
              </motion.div>
            ))}

            <div className="col-span-2 grid grid-cols-2 gap-4">
              {DOMATION_DATA_IMAGES.gallery.slice(4, 6).map((img, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                  <img 
                    src={img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                    alt={`Screenshot ${idx + 5}`}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Screenshot Modal */}
      <Modal
        isOpen={activeImage !== null}
        onClose={() => setActiveImage(null)}
        title="Domation Data Routing Gallery"
        className="max-w-6xl w-[95vw]"
      >
        <div className="p-4 bg-[#050505] flex justify-center items-center">
          {activeImage && (
            <img 
              src={activeImage} 
              alt="Detail Preview" 
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
          )}
        </div>
      </Modal>

    </section>
  );
};

export default DomationDataShowcase;
