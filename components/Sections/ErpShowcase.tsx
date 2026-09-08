import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Sparkles,
  MapPin,
  Camera,
  CalendarCheck,
  FileSpreadsheet,
  TrendingUp,
  CreditCard,
  Briefcase,
  Layers,
  Lock,
  Compass,
  ArrowRight
} from 'lucide-react';
import Modal from '../UI/Modal';
import { ERP_GALLERY, ERP_MODULES, ErpGalleryItem } from '../../constants';

const CATEGORIES = [
  'Tất Cả',
  'Vận hành & Lead',
  'CRM & Khách hàng',
  'Nhân sự & Chấm công',
  'Lương & Tài chính',
  'Hệ thống & Cài đặt'
] as const;

const ErpShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tất Cả');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(2); // Default to Executive Dashboard
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const filteredGallery = activeCategory === 'Tất Cả'
    ? ERP_GALLERY
    : ERP_GALLERY.filter(item => item.category === activeCategory);

  const currentItem = filteredGallery[activeImageIndex] || filteredGallery[0] || ERP_GALLERY[0];

  const handlePrev = () => {
    setActiveImageIndex(prev => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const handleNext = () => {
    setActiveImageIndex(prev => (prev + 1) % filteredGallery.length);
  };

  return (
    <section id="erp" className="py-24 relative overflow-hidden bg-[#070512]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-red-600/10 via-purple-600/10 to-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-12 border-b border-purple-900/30">
          <div className="space-y-4 max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Building2 size={13} className="text-red-400" />
              <span>Enterprise ERP Solution</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Hệ Thống <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">ERP Doanh Nghiệp</span> Toàn Diện
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light text-justify">
              Nền tảng hoạch định nguồn lực và tự động hóa vận hành 100% dành cho doanh nghiệp SME & Enterprise. 
              Tích hợp trọn vẹn 11 phân hệ: Tiếp nhận Lead một cửa, Phân bổ data tự động 5 cổng với van chống ôm (SLA 2m), 
              Quản trị nhân sự & Chấm công định vị GPS kèm AI Selfie, Bảng tính lương Payroll tự động và đồng bộ ngược Meta CAPI.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <a
              href="https://domation.net/erp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:via-rose-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(225,29,72,0.35)] hover:shadow-[0_0_30px_rgba(225,29,72,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Xem Trực Tuyến</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* INTERACTIVE GALLERY */}
        <div className="mt-12 bg-[#0c081e] border border-purple-900/40 rounded-3xl p-4 sm:p-8 shadow-2xl space-y-6">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveImageIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-md'
                    : 'bg-[#150f33] text-slate-400 hover:text-white hover:bg-[#1f164d] border border-purple-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Main Screenshot Viewport */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-purple-900/50 bg-[#140f2f] shadow-inner group">
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="w-full h-full object-cover select-none"
            />

            {/* Hover Zoom Overlay */}
            <div
              onClick={() => setZoomImage(currentItem.src)}
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10"
            >
              <span className="px-4 py-2 bg-[#0f0b24]/90 border border-purple-500/40 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-2">
                <Maximize2 size={14} /> Phóng To Ảnh HD
              </span>
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 bg-[#0f0b24]/80 hover:bg-[#0f0b24] border border-purple-900/50 rounded-full shadow-lg text-white transition-all z-20 backdrop-blur-md"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 bg-[#0f0b24]/80 hover:bg-[#0f0b24] border border-purple-900/50 rounded-full shadow-lg text-white transition-all z-20 backdrop-blur-md"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            {/* Top Indicator */}
            <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[11px] font-bold text-slate-300 z-20">
              {activeImageIndex + 1} / {filteredGallery.length}
            </div>
          </div>

          {/* Screenshot Caption & Tag */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 bg-[#140e32] border border-purple-900/30 rounded-2xl text-left">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 bg-red-950/70 border border-red-500/30 px-2 py-0.5 rounded">
                  {currentItem.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {currentItem.category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {currentItem.description}
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] font-medium rounded-full">
                ✨ {currentItem.highlight}
              </span>
            </div>
          </div>

          {/* Thumbnails Scroll Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filteredGallery.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-24 sm:w-28 aspect-video rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                  activeImageIndex === idx
                    ? 'border-red-500 scale-105 shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                    : 'border-purple-900/30 hover:border-purple-400/60 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INNOVATION HIGHLIGHT BENTO */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-gradient-to-br from-[#150d2e] to-[#0c081e] border border-red-900/40 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center">
              <Camera size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">Chấm Công GPS & Selfie AI</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light text-justify">
              Xác thực tọa độ vệ tinh GPS bán kính văn phòng chuẩn xác từng mét. Nhân sự vào ca bắt buộc chụp ảnh selfie, AI nhận diện khuôn mặt chống gian lận chấm công hộ và giả mạo vị trí.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-red-400">
              <MapPin size={13} />
              <span>Chống Fake GPS & Thay Ca Gian Lận</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#150d2e] to-[#0c081e] border border-purple-900/40 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
              <FileSpreadsheet size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">Bảng Tính Lương Tự Động (Payroll)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light text-justify">
              Tự động tổng hợp ngày công, phụ cấp, OT, hoa hồng deal và trừ tiền đi trễ. Tự động tính thuế TNCN theo biểu lũy tiến và trích nộp BHXH, xuất phiếu lương PDF cá nhân hóa ký số trực tuyến.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-purple-400">
              <CreditCard size={13} />
              <span>Chuẩn Xác 100% Thuế & BHXH</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#150d2e] to-[#0c081e] border border-rose-900/40 rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold text-white">Chia Lead 5 Cổng & Van Chống Ôm</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light text-justify">
              Lead đổ về được bóc tách chống trùng lặp theo Person vs Lead. Thuật toán Round-Robin phân bổ theo năng lực, áp dụng cơ chế Backpressure thu hồi sau 2 phút nếu Sale không tương tác.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-rose-400">
              <Clock size={13} />
              <span>SLA Xử Lý Lead &lt; 2 Phút</span>
            </div>
          </div>
        </div>

        {/* 11 CORE ENTERPRISE MODULES */}
        <div className="mt-20 space-y-8 text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full">
              Enterprise Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
              11 Phân Hệ Nghiệp Vụ Chuẩn Enterprise
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Hệ sinh thái phân hệ độc lập nhưng đồng bộ dữ liệu thời gian thực trên toàn bộ vòng đời kinh doanh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ERP_MODULES.map((mod, i) => (
              <div
                key={i}
                className="bg-[#0c081e] border border-purple-900/30 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                    {mod.num}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 bg-[#161033] px-2.5 py-0.5 rounded border border-purple-900/40">
                    {mod.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                  {mod.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light text-justify">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOTTOM BANNER */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-purple-950/40 to-slate-950/40 border border-red-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Sẵn Sàng Số Hóa & Tự Động Hóa Doanh Nghiệp Của Bạn?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Hệ thống ERP linh hoạt cấu hình theo từng mô hình: Giáo dục đào tạo, Bất động sản, Dịch vụ chuỗi và Bán lẻ. Không hardcode, triển khai nhanh và bảo mật tuyệt đối.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://domation.net/erp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:via-rose-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center gap-2 transition-all duration-300"
            >
              <span>Trải Nghiệm Live Demo ERP</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <Modal
        isOpen={Boolean(zoomImage)}
        onClose={() => setZoomImage(null)}
        title="Giao Diện Thực Tế Hệ Thống ERP"
        className="max-w-6xl"
      >
        {zoomImage && (
          <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
            <img
              src={zoomImage}
              alt="ERP HD Preview"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ErpShowcase;
