import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Video, Award, BarChartHorizontal, CheckCircle2 } from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import lms1 from '../../imgs/lms (1).jpg';
// @ts-ignore
import lms2 from '../../imgs/lms (2).jpg';
// @ts-ignore
import lms3 from '../../imgs/lms (3).jpg';
// @ts-ignore
import lms4 from '../../imgs/lms (4).jpg';

const LmsShowcase: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const features = [
        {
            title: "Hệ thống Bài giảng Video",
            desc: "Streaming mượt mà, phân loại Course rõ ràng, giao diện thân thiện với mọi thiết bị.",
            icon: <Video size={20} />
        },
        {
            title: "Trắc nghiệm & Chấm điểm tự động",
            desc: "Đa dạng dạng câu hỏi, tính giờ và trả kết quả tức thời sau bài test.",
            icon: <CheckCircle2 size={20} />
        },
        {
            title: "Cấp Chứng chỉ Điện tử",
            desc: "Tự động cấp chứng chỉ PDF chuẩn khi hoàn thành khóa học đạt điểm yêu cầu.",
            icon: <Award size={20} />
        },
        {
            title: "Theo dõi Tiến độ Học tập",
            desc: "Học viên nắm rõ %. hoàn thành bài học, admin tracking được chi tiết mọi user.",
            icon: <BarChartHorizontal size={20} />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0502] z-10 border-t border-white/5">
            {/* Background Accents (Edu-Tech Vibe) */}
            <div className="absolute inset-0 bg-orange-900/5 pointer-events-none"></div>
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full -[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full -[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    
                    {/* Left side: Content */}
                    <div className="lg:w-[40%] space-y-8">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-6"
                            >
                                <GraduationCap size={16} />
                                <span className="text-sm font-bold tracking-widest uppercase">Edu-Tech Solution</span>
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight leading-tight"
                            >
                                LMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">E-LEARNING.</span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 font-light text-lg leading-relaxed max-w-xl"
                            >
                                Nền tảng quản lý học tập (LMS) hoàn chỉnh. Sở hữu toàn bộ các tính năng cốt lõi của một hệ thống giáo dục trực tuyến chuyên nghiệp nhất, đáp ứng việc học tập với quy mô lớn.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl group hover:border-orange-500/30 hover:bg-orange-500/5 transition-all"
                                >
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Image Collage */}
                    <div className="lg:w-[60%] w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 pt-8"
                            >
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(lms1)}>
                                    <img src={lms1} alt="LMS Interface 1" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(lms2)}>
                                    <img src={lms2} alt="LMS Interface 2" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-amber-500/50 hover:shadow-amber-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(lms3)}>
                                    <img src={lms3} alt="LMS Interface 3" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-amber-500/50 hover:shadow-amber-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(lms4)}>
                                    <img src={lms4} alt="LMS Interface 4" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Fullscreen Image Preview */}
            <Modal
                isOpen={!!previewImage}
                onClose={() => setPreviewImage(null)}
                title="LMS Screenshot"
                className="max-w-6xl w-[90vw] max-h-[90vh]"
            >
                {previewImage && (
                    <div className="flex justify-center items-center h-full w-full bg-black/50 p-4">
                        <img
                            src={previewImage}
                            alt="Fullscreen Preview"
                            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                )}
            </Modal>

        </section>
    );
};

export default LmsShowcase;
