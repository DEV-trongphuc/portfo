
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DOM_PROJECTS } from '../../constants';
import { ExternalLink, Terminal, Code2, Zap, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import micrositePdf from '../../pdf/microsite game_compressed.pdf';

const DomMarketing: React.FC = () => {
    const [isGamePdfOpen, setIsGamePdfOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    return (
        <section id="dom-agency" className="pt-32 pb-40 relative z-10">
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Established 2025</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                            DOM <br /><span className="text-gradient-gold">MARKETING.</span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-8 max-w-lg font-light leading-relaxed">
                            Định vị là <span className="text-white font-bold">MarTech Agency</span> tiên phong, chuyên cung cấp các giải pháp phần mềm tùy chỉnh để giải quyết các bài toán Marketing phức tạp.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 w-full"
                    >
                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-3xl group hover:border-gold-500/20 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                                    <img
                                        src="https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/turnio_dev.png"
                                        alt="Director"
                                        className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-gold-500 text-black p-1 rounded-full border-2 border-black">
                                        <CheckCircle2 size={12} strokeWidth={4} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-1">Huynh Trong Phuc</h4>
                                    <p className="text-gold-500 text-[10px] font-black uppercase tracking-widest">CEO / Founder</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {DOM_PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden hover:border-gold-500/20 transition-all"
                        >
                            <div className="h-80 relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent"></div>
                            </div>
                            <div className="p-10 -mt-24 relative z-10">
                                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-gold-500 transition-colors">{project.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-8 max-w-md">{project.desc}</p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setPreviewImage(project.image)}
                                        className="px-6 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-gold-500 transition-all"
                                    >
                                        Preview Tool
                                    </button>
                                    <button className="p-3 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"><ExternalLink size={18} /></button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 p-[1px] rounded-3xl bg-gradient-to-r from-gold-500/20 to-blue-500/20"
                >
                    <div className="bg-[#050505]/80 backdrop-blur-xl p-8 rounded-[23px] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="text-gold-500 p-3 bg-gold-500/10 rounded-full">
                                <Zap size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Minigame Micro-sites</h4>
                                <p className="text-sm text-gray-500 mt-1">Waterbomb 2025, Unboxing Tet, Wheel of Knowledge...</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsGamePdfOpen(true)}
                            className="px-8 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 text-[10px] font-black uppercase tracking-widest"
                        >
                            <FileText size={16} /> View Case Study PDF
                        </button>
                    </div>
                </motion.div>

                {/* Landing Page & Personal Projects Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-8 p-[1px] rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                >
                    <div className="bg-[#050505]/80 backdrop-blur-xl p-8 rounded-[23px] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="text-blue-500 p-3 bg-blue-500/10 rounded-full">
                                <Terminal size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Landing Pages & Dự Án Cá Nhân</h4>
                                <p className="text-sm text-gray-500 mt-1">High-converting Landing Pages & Web Applications</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 xl:justify-end">
                            <a href="https://ka-en.com.vn/event.html" target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                KA-EN Event
                            </a>
                            <a href="https://ideas.edu.vn/mba" target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                IDEAS MBA
                            </a>
                            <a href="https://ideas.edu.vn/mscai" target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                IDEAS MScAI
                            </a>
                            <a href="https://www.mystery-tarot.net/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-purple-600 border border-purple-500 rounded-full hover:bg-purple-500 text-white transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                                <Sparkles size={14} /> Tarot Huyền Bí
                            </a>
                        </div>
                    </div>
                </motion.div>

                <Modal isOpen={isGamePdfOpen} onClose={() => setIsGamePdfOpen(false)} title="Minigame Case Studies" className="max-w-6xl w-[95vw] h-[95vh] p-0 overflow-hidden">
                    <div className="bg-[#050505] w-full h-full">
                        <iframe 
                            src={micrositePdf} 
                            className="w-full h-full border-0" 
                            title="Water Boom 2025 Case Study PDF"
                        />
                    </div>
                </Modal>

                {/* Image Preview Modal */}
                <Modal
                    isOpen={!!previewImage}
                    onClose={() => setPreviewImage(null)}
                    title="Tool Preview"
                    className="max-w-6xl w-[90vw] max-h-[90vh]"
                >
                    {previewImage && (
                        <div className="flex justify-center items-center h-full w-full bg-black/50 p-4">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                            />
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};

export default DomMarketing;
