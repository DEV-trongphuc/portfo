import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  Cpu, 
  Activity, 
  Database, 
  BrainCircuit, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import dom_rp1 from '../../imgs/dom_rp (1).webp';
// @ts-ignore
import dom_rp2 from '../../imgs/dom_rp (2).webp';
// @ts-ignore
import dom_rp3 from '../../imgs/dom_rp (3).webp';
// @ts-ignore
import dom_rp4 from '../../imgs/dom_rp (4).webp';
// @ts-ignore
import dom_rp5 from '../../imgs/dom_rp (5).webp';
// @ts-ignore
import dom_rp6 from '../../imgs/dom_rp (6).webp';

const MetaAdReportShowcase: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const images = [dom_rp1, dom_rp2, dom_rp3, dom_rp4, dom_rp5, dom_rp6];

    const features = [
        {
            title: "Realtime Tracking",
            desc: "Quét dữ liệu Ads Manager & hiển thị báo cáo cập nhật liên tục.",
            icon: <Activity size={18} />
        },
        {
            title: "Looker Studio Integration",
            desc: "Đồng bộ báo cáo trực quan sinh động phục vụ báo cáo họp bàn.",
            icon: <BarChart3 size={18} />
        },
        {
            title: "Đề xuất Tối ưu AI",
            desc: "AI phân tích chỉ số CTR, CPC, CPM để gợi ý tăng giảm ngân sách.",
            icon: <BrainCircuit size={18} />
        },
        {
            title: "Cảnh báo Bất Thường",
            desc: "Phát hiện ngay khi Ads lỗi, CPM tăng đột biến hoặc hết tiền.",
            icon: <TrendingUp size={18} />
        },
        {
            title: "Import / Export Data",
            desc: "Trích xuất báo cáo Excel, PDF nhanh chóng gửi cho khách hàng.",
            icon: <Database size={18} />
        },
        {
            title: "Phân Tích Đa Kênh",
            desc: "Kết nối dữ liệu Meta với Analytics để đánh giá phễu chuyển đổi.",
            icon: <Cpu size={18} />
        }
    ];

    const handleNext = () => {
        setActiveIdx(prev => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIdx(prev => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-10 w-full text-left">
            <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-6 md:space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-3 md:space-y-4 max-w-3xl">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                            Ads Performance Solution
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">DOMATION Meta Ad Realtime Report</h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                            Hệ thống báo cáo hiệu suất Meta Ads tích hợp AI phân tích dữ liệu chuyên sâu, hỗ trợ ra quyết định Scale hay Vít ngân sách.
                        </p>
                    </div>
                    <div className="shrink-0 pt-1 md:pt-2">
                        <a 
                            href="https://domation.net/meta-report" 
                            target="_blank" 
                            rel="noreferrer"
                            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Dùng Thử Ngay <ExternalLink size={11} />
                        </a>
                    </div>
                </div>

                {/* Slideshow Gallery with Overlay Navigation */}
                <div className="flex flex-col items-center w-full">
                    {/* Image Container with Overlay Controls */}
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl bg-[#161033]">
                        <div className="absolute inset-0">
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={activeIdx}
                                    src={images[activeIdx]} 
                                    alt={`Meta Ad Report Screenshot ${activeIdx + 1}`} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="w-full h-full object-cover" 
                                />
                            </AnimatePresence>
                        </div>
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => setPreviewImage(images[activeIdx])}>
                            <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                        </div>

                        {/* Glassmorphic Overlay Navigation Buttons */}
                        <button 
                            onClick={handlePrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
                        </button>

                        <button 
                            onClick={handleNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                            aria-label="Next image"
                        >
                            <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                        </button>
                    </div>

                    {/* Index Indicator */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-2.5">
                        Image {activeIdx + 1} of {images.length}
                    </span>

                    {/* Thumbnails list (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full max-w-4xl justify-center gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                        {images.map((img, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                                    activeIdx === idx ? 'border-purple-500 scale-105 shadow-sm' : 'border-purple-900/40 hover:border-purple-500/50'
                                }`}
                            >
                                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 md:pt-4">
                    {features.map((feat, i) => (
                        <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-4 md:p-5 hover:border-purple-500/50 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                                {feat.icon}
                            </div>
                            <h4 className="text-xs sm:text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                            <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Previewer Modal */}
            <Modal
                isOpen={!!previewImage}
                onClose={() => setPreviewImage(null)}
                title="Meta Ad Tracking & Analytics Preview"
                className="max-w-6xl w-[90vw] max-h-[90vh]"
            >
                {previewImage && (
                    <div className="flex items-center gap-4 justify-center h-full w-full bg-slate-950/20 p-4 relative">
                        {/* Prev Button inside Zoom Modal */}
                        {images.includes(previewImage) && (
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const curIdx = images.indexOf(previewImage);
                                    const prevIdx = (curIdx - 1 + images.length) % images.length;
                                    setPreviewImage(images[prevIdx]);
                                }}
                                className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0 z-10"
                            >
                                <ChevronLeft size={22} />
                            </button>
                        )}

                        <div className="relative max-w-4xl max-h-[80vh] flex items-center justify-center flex-1">
                            <img
                                src={previewImage}
                                alt="Preview Fullscreen"
                                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                            />
                        </div>

                        {/* Next Button inside Zoom Modal */}
                        {images.includes(previewImage) && (
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const curIdx = images.indexOf(previewImage);
                                    const nextIdx = (curIdx + 1) % images.length;
                                    setPreviewImage(images[nextIdx]);
                                }}
                                className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0 z-10"
                            >
                                <ChevronRight size={22} />
                            </button>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MetaAdReportShowcase;
