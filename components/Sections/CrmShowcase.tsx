import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, LayoutDashboard, Users, Package, Clock } from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import crm1 from '../../imgs/CRM (1).jpg';
// @ts-ignore
import crm2 from '../../imgs/CRM (2).jpg';
// @ts-ignore
import crm3 from '../../imgs/CRM (3).jpg';
// @ts-ignore
import crm4 from '../../imgs/CRM (4).jpg';

const CrmShowcase: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const features = [
        {
            title: "Dashboard \"Bento Box\"",
            desc: "Trực quan, sang trọng. Cập nhật tức thời: Doanh thu, Lợi nhuận gộp, AOV và tính sẵn LN Ròng.",
            icon: <LayoutDashboard size={20} />
        },
        {
            title: "CRM \"Mini\" Siêu Mạnh Mẽ",
            desc: "Quản lý khách hàng, tự động thống kê khách VIP, xem lịch sử mua hàng chi tiết từng món.",
            icon: <Users size={20} />
        },
        {
            title: "Kiểm Soát Tồn Kho Thông Minh",
            desc: "Tự động cảnh báo hàng \"Sắp hết\" và hàng \"Sắp hết hạn\" để bạn chủ động dòng vốn.",
            icon: <Package size={20} />
        },
        {
            title: "Phân Tích \"Giờ Vàng Mua Sắm\"",
            desc: "Biết chính xác thời điểm khách chốt đơn nhiều nhất để đẩy mạnh chạy Ads hoặc tung Khuyến mãi.",
            icon: <Clock size={20} />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#02050a] z-10 border-t border-white/5">
            {/* Background Accents (Modern Tech Vibe) */}
            <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    
                    {/* Left side: Content */}
                    <div className="lg:w-[40%] space-y-8">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-6"
                            >
                                <Store size={16} />
                                <span className="text-sm font-bold tracking-widest uppercase">Management Solution</span>
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight leading-tight"
                            >
                                MINTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CRM & POS.</span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 font-light text-lg leading-relaxed max-w-xl"
                            >
                                Giải pháp quản lý bán hàng "Tinh gọn - Hiện đại - Dễ dùng" dành riêng cho các shop vừa và nhỏ. Chỉ với 1 màn hình duy nhất, bạn nắm trọn toàn bộ bức tranh tài chính và vận hành của cửa hàng.
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
                                    className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl group hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h4>
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
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(crm1)}>
                                    <img src={crm1} alt="CRM Interface 1" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(crm2)}>
                                    <img src={crm2} alt="CRM Interface 2" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(crm3)}>
                                    <img src={crm3} alt="CRM Interface 3" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group" onClick={() => setPreviewImage(crm4)}>
                                    <img src={crm4} alt="CRM Interface 4" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
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
                title="MINTH CRM Screenshot"
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

export default CrmShowcase;
