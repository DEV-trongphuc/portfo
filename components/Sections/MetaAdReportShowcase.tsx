import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, TrendingUp, Cpu, Activity, Database, BrainCircuit } from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import dom_rp1 from '../../imgs/dom_rp (1).jpg';
// @ts-ignore
import dom_rp2 from '../../imgs/dom_rp (2).jpg';
// @ts-ignore
import dom_rp3 from '../../imgs/dom_rp (3).jpg';
// @ts-ignore
import dom_rp4 from '../../imgs/dom_rp (4).jpg';
// @ts-ignore
import dom_rp5 from '../../imgs/dom_rp (5).jpg';
// @ts-ignore
import dom_rp6 from '../../imgs/dom_rp (6).jpg';

const MetaAdReportShowcase: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const features = [
        {
            title: "Realtime Tracking",
            desc: "Cập nhật chỉ số chiến dịch quảng cáo theo thời gian thực",
            icon: <Activity size={24} />
        },
        {
            title: "AI Phân Tích",
            desc: "Tích hợp AI dự báo, đánh giá hiệu quả và đề xuất tối ưu Ads",
            icon: <BrainCircuit size={24} />
        },
        {
            title: "Báo Cáo Trực Quan",
            desc: "Hệ thống Dashboard biểu đồ hiển thị ROI, CPA, ROAS rõ ràng",
            icon: <BarChart3 size={24} />
        },
        {
            title: "Dự Đoán Xu Hướng",
            desc: "Học máy (Machine Learning) dự báo xu hướng chi phí và chuyển đổi",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Đồng Bộ API",
            desc: "Kết nối trực tiếp Meta Ads API đảm bảo dữ liệu chính xác 100%",
            icon: <Database size={24} />
        },
        {
            title: "Tự Động Hóa Quản Trị",
            desc: "Ngắt/Bật Ads tự động dựa trên quy tắc thông minh, chống lãng phí",
            icon: <Cpu size={24} />
        }
    ];

    const images = [dom_rp1, dom_rp2, dom_rp3, dom_rp4, dom_rp5, dom_rp6];

    return (
        <section className="py-24 relative overflow-hidden z-10 w-full">
            {/* Background Decor aligned with the global app background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 mb-6"
                    >
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Sản Phẩm Khách Hàng</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black mb-4 text-white uppercase tracking-tight"
                    >
                        Meta Ad <span className="text-gradient-gold">Realtime Report.</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl font-light"
                    >
                        Hệ thống báo cáo hiệu suất Meta Ads tích hợp AI phân tích dữ liệu chuyên sâu, hỗ trợ ra quyết định Scale hay Vít ngân sách
                    </motion.p>
                </div>

                {/* Compact Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="bg-[#0a0a0a]/80  border border-white/5 rounded-3xl p-6 group hover:border-gold-500/30 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-white/5 text-gold-500 p-3 rounded-2xl group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * idx }}
                            className="rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-300 group"
                            onClick={() => setPreviewImage(img)}
                        >
                            <img src={img} alt={`Meta Ad Report Example ${idx + 1}`} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global Image Previewer */}
            <Modal
                isOpen={!!previewImage}
                onClose={() => setPreviewImage(null)}
                title="Meta Ad Tracking & Analytics Preview"
                className="max-w-6xl w-[90vw] max-h-[90vh]"
            >
                {previewImage && (
                    <div className="flex justify-center items-center h-full w-full bg-black/50 p-4">
                        <img
                            src={previewImage}
                            alt="Preview Fullscreen"
                            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default MetaAdReportShowcase;
