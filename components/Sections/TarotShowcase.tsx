import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Users, LayoutDashboard, Cpu, Image as ImageIcon, ExternalLink } from 'lucide-react';
// @ts-ignore
import tr1 from '../../imgs/tr1.jpg';
// @ts-ignore
import tr2 from '../../imgs/tr2.jpg';
// @ts-ignore
import cmt1 from '../../imgs/CMT1.jpg';
// @ts-ignore
import cmt2 from '../../imgs/CMT2.jpg';
// @ts-ignore
import cmt3 from '../../imgs/CMT3.jpg';
// @ts-ignore
import cmt4 from '../../imgs/CMT4.jpg';
import Modal from '../UI/Modal';

const TarotShowcase: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const highlights = [
        { title: "SEO AI Automation", desc: "Hơn 600 bài viết SEO content đa chủ đề được generate 100% bằng AI.", icon: <Cpu size={20} /> },
        { title: "App-like Experience", desc: "Phá vỡ giới hạn thiết kế website thông thường, mang lại trải nghiệm như một Native App thực thụ.", icon: <LayoutDashboard size={20} /> },
        { title: "Custom Artworks", desc: "Bộ bài Tarot được tự thiết kế độc quyền, mang đậm phong cách cá nhân.", icon: <ImageIcon size={20} /> },
        { title: "1000+ Users in Week 1", desc: "Đạt mốc 1000 người dùng ngay trong tuần đầu tiên ra mắt với phản hồi cực kỳ tích cực.", icon: <Users size={20} /> },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0A0A] z-10">
            {/* Mystic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-[#0a0a0a] to-black opacity-100 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full -[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full -[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-8"
                    >
                        <Sparkles size={16} />
                        <span className="text-sm font-bold tracking-widest uppercase">Personal Project Highlights</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight"
                    >
                        MYSTERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">TAROT.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left side: Images */}
                    <div className="lg:col-span-7 relative h-[500px] md:h-[700px] flex justify-center items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="absolute top-0 right-0 md:right-10 w-[85%] md:w-[80%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(147,51,234,0.15)] z-10 cursor-pointer hover:z-30 hover:scale-105 transition-transform"
                            onClick={() => setPreviewImage(tr1)}
                        >
                            <img src={tr1} alt="Tarot App Screen 1" className="w-full h-auto object-cover" />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute bottom-0 left-0 md:left-10 w-[85%] md:w-[80%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] z-20 cursor-pointer hover:z-30 hover:scale-105 transition-transform"
                            onClick={() => setPreviewImage(tr2)}
                        >
                            <img src={tr2} alt="Tarot App Screen 2" className="w-full h-auto object-cover" />
                        </motion.div>
                    </div>

                    {/* Right side: Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-3xl font-black text-white mb-4">Trải nghiệm tâm linh kỷ nguyên số</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Không chỉ là một website xem bài bình thường, Mystery Tarot được xây dựng để mang lại trải nghiệm hoàn hảo như một ứng dụng Native, mượt mà trên từng điểm chạm.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {highlights.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 border border-white/5 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-6"
                        >
                            <a 
                                href="https://www.mystery-tarot.net/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.5)] transition-all hover:-translate-y-1"
                            >
                                Trải nghiệm Tarot ngay
                                <ExternalLink size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Feedback Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-black text-white uppercase tracking-widest">Đánh giá từ Cộng đồng</h3>
                    </div>

                    {/* Rating Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
                        {/* Left Card: Average Rating */}
                        <div className="bg-[#0a0216]/80  border border-purple-500/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.1)]">
                            <h4 className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-4 text-[10px]">ĐIỂM TRUNG BÌNH</h4>
                            <div className="text-6xl font-black text-gold-500 mb-4">5.0</div>
                            <div className="flex gap-2 text-gold-500 mb-2">
                                <Star fill="currentColor" size={24} />
                                <Star fill="currentColor" size={24} />
                                <Star fill="currentColor" size={24} />
                                <Star fill="currentColor" size={24} />
                                <Star fill="currentColor" size={24} />
                            </div>
                            <div className="text-gray-500 text-xs italic tracking-widest mt-1">274 đánh giá</div>
                        </div>

                        {/* Right Card: Rating Distribution */}
                        <div className="bg-[#0a0216]/80  border border-purple-500/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(147,51,234,0.1)]">
                            <h4 className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-6 text-[10px]">PHÂN BỔ ĐÁNH GIÁ</h4>
                            <div className="space-y-4">
                                {[
                                    { stars: 5, count: 269, percent: 98 },
                                    { stars: 4, count: 3, percent: 1 },
                                    { stars: 3, count: 0, percent: 0 },
                                    { stars: 2, count: 0, percent: 0 },
                                    { stars: 1, count: 2, percent: 1 },
                                ].map(row => (
                                    <div key={row.stars} className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 text-gold-500 font-bold text-sm w-10">
                                            {row.stars} <Star fill="currentColor" size={14} />
                                        </div>
                                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-gold-500 rounded-full" style={{ width: `${row.percent}%` }}></div>
                                        </div>
                                        <div className="w-8 text-right text-gray-500 text-xs font-mono">{row.count}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        <div 
                            className="rounded-3xl flex items-center overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500/50 transition-colors shadow-xl"
                            onClick={() => setPreviewImage(cmt1)}
                        >
                            <img src={cmt1} alt="Community Feedback 1" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        <div 
                            className="rounded-3xl flex items-center overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500/50 transition-colors shadow-xl"
                            onClick={() => setPreviewImage(cmt2)}
                        >
                            <img src={cmt2} alt="Community Feedback 2" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        <div 
                            className="rounded-3xl flex items-center overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500/50 transition-colors shadow-xl"
                            onClick={() => setPreviewImage(cmt3)}
                        >
                            <img src={cmt3} alt="Community Feedback 3" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                        <div 
                            className="rounded-3xl flex items-center overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500/50 transition-colors shadow-xl"
                            onClick={() => setPreviewImage(cmt4)}
                        >
                            <img src={cmt4} alt="Community Feedback 4" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Global Image Previewer */}
            <Modal
                isOpen={!!previewImage}
                onClose={() => setPreviewImage(null)}
                title="Tarot Reference"
                className="max-w-5xl w-[90vw] max-h-[90vh]"
            >
                {previewImage && (
                    <div className="flex justify-center items-center h-full w-full bg-black/50 p-4">
                        <img
                            src={previewImage}
                            alt="Preview Fullscreen"
                            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default TarotShowcase;
