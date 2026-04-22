import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Zap, LineChart, MailPlus, MessageSquareCode, BrainCircuit, ExternalLink } from 'lucide-react';
import Modal from '../UI/Modal';
import MobileSlider from '../UI/MobileSlider';

// @ts-ignore
import auto1 from '../../imgs/automation (1).jpg';
// @ts-ignore
import auto2 from '../../imgs/automation (2).jpg';
// @ts-ignore
import auto3 from '../../imgs/automation (3).jpg';
// @ts-ignore
import auto4 from '../../imgs/automation (4).jpg';
// @ts-ignore
import auto5 from '../../imgs/automation (5).jpg';
// @ts-ignore
import auto6 from '../../imgs/automation (6).jpg';
// @ts-ignore
import auto7 from '../../imgs/automation (7).jpg';
// @ts-ignore
import auto8 from '../../imgs/automation (8).jpg';
// @ts-ignore
import aiTrain1 from '../../imgs/ai_tu_train (1).jpg';
// @ts-ignore
import aiTrain2 from '../../imgs/ai_tu_train (2).jpg';
// @ts-ignore
import aiTrain3 from '../../imgs/ai_tu_train (3).jpg';

const AutoFlowPro: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const features = [
        {
            title: "Đồng bộ Trợ lý AI",
            desc: "Tự động đồng bộ tương tác trên Web, Messenger, Zalo",
            icon: <Bot size={24} />
        },
        {
            title: "Automation Flow",
            desc: "Tự động hóa quy trình chăm sóc đa kênh liền mạch",
            icon: <Zap size={24} />
        },
        {
            title: "Kéo thả Email",
            desc: "Ứng dụng thiết kế Email Marketing kéo thả trực quan",
            icon: <MailPlus size={24} />
        },
        {
            title: "Training Chatbot",
            desc: "Huấn luyện AI Chatbot chuyên biệt cho từng doanh nghiệp",
            icon: <MessageSquareCode size={24} />
        },
        {
            title: "Phân tích 360°",
            desc: "Connect CRM phân tích theo dõi hành trình khách hàng",
            icon: <LineChart size={24} />
        },
        {
            title: "AI Knowledge Base",
            desc: "Hệ thống AI học từ cơ sở kiến thức riêng của doanh nghiệp",
            icon: <BrainCircuit size={24} />
        }
    ];

    const images = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, aiTrain1, aiTrain2, aiTrain3];

    return (
        <section className="py-24 relative overflow-hidden z-10">
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
                        <span className="text-[10px] font-black uppercase tracking-widest">Project Thực Tế - Tự Phát Triển</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black mb-4 text-white uppercase tracking-tight flex items-center justify-center gap-4"
                    >
                        <img src="https://automation.ideas.edu.vn/imgs/ICON.png" alt="DOMATION Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-2xl" />
                        <span>DOMA<span className="text-gradient-gold">TION.</span></span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl font-light"
                    >
                        Nền tảng tự động hóa marketing thông minh, giúp doanh nghiệp tăng trưởng vượt bậc
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                        href="https://domation.net/"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold-500/50 text-gold-500 text-[11px] font-black uppercase tracking-widest hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 group"
                    >
                        Khám phá DOMATION
                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </motion.a>
                </div>

                {/* Compact Feature Grid */}
                <MobileSlider desktopGridClasses="md:grid-cols-3 lg:grid-cols-3 gap-3 mb-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.07 * idx }}
                            className="bg-[#0a0a0a]/80 border border-white/5 rounded-2xl p-4 group hover:border-gold-500/30 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-white/5 text-gold-500 p-2 rounded-xl group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-gold-500 transition-colors leading-tight">{feature.title}</h3>
                                    <p className="text-xs text-gray-500 font-light leading-snug line-clamp-2">{feature.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </MobileSlider>

                {/* Image Gallery */}
                <div className="mt-20">
                    <MobileSlider desktopGridClasses="md:grid-cols-4 gap-4">
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
                                <img src={img} alt={`Automation Example ${idx + 1}`} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </MobileSlider>
                </div>
            </div>

            {/* Global Image Previewer */}
            <Modal
                isOpen={!!previewImage}
                onClose={() => setPreviewImage(null)}
                title="System Interface Preview"
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

export default AutoFlowPro;
