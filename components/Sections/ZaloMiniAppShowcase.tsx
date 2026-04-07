
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, QrCode, ExternalLink, Code2, Shield, MousePointerClick, ArrowLeft, RefreshCcw } from 'lucide-react';

const ZaloMiniAppShowcase: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black opacity-0"></div> {/* Hidden gradient to show global bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-10"></div>

      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full -[150px] pointer-events-none"></div>

      {/* Floating Decor */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="10" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="85" r="3" fill="white" />
        </svg>
      </div>

      {/* Container widened */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="text-center mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6"
            >
                <MonitorSmartphone size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Zalo Ecosystem Expert</span>
            </motion.div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Zalo Logo Added Here */}
                <motion.img 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" 
                    alt="Zalo Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg"
                />
                <h2 className="text-5xl md:text-7xl font-black text-white">MINI APPS.</h2>
            </div>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light mb-8">
                Biến 74 triệu người dùng Zalo thành khách hàng của bạn. 
                <span className="text-white block font-medium mt-2">Custom-coded with React & TypeScript.</span>
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Live Phone Demo - Direct View */}
            <div className="relative flex flex-col items-center justify-center">
                
                {/* Animated Arrow */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -right-4 md:-right-20 top-1/4 z-30 flex items-center gap-3 pointer-events-none hidden lg:flex"
                >
                     <motion.div 
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2"
                     >
                        <ArrowLeft size={32} className="text-gold-500" />
                        <div className="glass-card px-4 py-2 rounded-xl border-gold-500/30">
                            <span className="text-gold-500 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <MousePointerClick size={14} /> Click to Interact
                            </span>
                        </div>
                     </motion.div>
                </motion.div>

                {/* The Phone Frame - Widened width, reduced height */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 w-[350px] md:w-[440px] h-[600px] md:h-[750px] bg-black border-[10px] border-[#1a1a1a] rounded-[3.5rem] shadow-[0_0_60px_-15px_rgba(255,255,255,0.1)] ring-4 ring-white/5 overflow-hidden"
                >
                     {/* Dynamic Island */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-30 flex justify-center items-center pointer-events-none">
                        <div className="w-16 h-2 bg-[#111] rounded-full"></div>
                     </div>

                     {/* Live Iframe */}
                     <iframe 
                        src="https://turniodev.github.io/zala_ideas" 
                        title="Zalo Mini App Demo"
                        className="w-full h-full bg-white border-0"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                     />
                     
                     {/* Glossy Overlay */}
                     <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-20"></div>
                </motion.div>

                {/* Reflection/Shadow under phone */}
                <div className="w-[300px] h-10 bg-black/50  rounded-[100%] mt-[-20px] z-10"></div>
            </div>

            {/* Features List */}
            <div className="space-y-12">
                 <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                            <Code2 size={28} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white">React & TypeScript</h3>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Tech Core</p>
                        </div>
                    </div>
                    <p className="text-gray-400 pl-[84px] text-lg font-light leading-relaxed">
                        Không dùng nền tảng kéo thả (No-code). Tôi code tay 100% để đảm bảo <span className="text-white font-bold">tốc độ tải dưới 1s</span> và khả năng tùy biến giao diện vô hạn theo Brand Guideline.
                    </p>
                 </div>

                 <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-green-600/10 rounded-2xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors border border-green-500/20">
                            <Shield size={28} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white">Loyalty System</h3>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Automation</p>
                        </div>
                    </div>
                    <p className="text-gray-400 pl-[84px] text-lg font-light leading-relaxed">
                        Hệ thống tự động thăng hạng thành viên (Silver, Gold, Diamond). Tích hợp <span className="text-white font-bold">QR Code định danh</span> để tích điểm tại quầy trong 3 giây.
                    </p>
                 </div>
                 
                 <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-purple-600/10 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors border border-purple-500/20">
                            <RefreshCcw size={28} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white">Data Synchronization</h3>
                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Ecosystem</p>
                        </div>
                    </div>
                    <p className="text-gray-400 pl-[84px] text-lg font-light leading-relaxed">
                        Các chức năng tích điểm, lên hạng tự động đồng bộ với Zalo app của người dùng một cách liền mạch.
                    </p>
                 </div>

                 <div className="pl-[84px] pt-4 flex flex-wrap gap-4">
                     <a 
                        href="https://turniodev.github.io/zala_ideas" 
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all rounded-full hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                     >
                         <ExternalLink size={16} /> Open Fullscreen
                     </a>
                     <button className="px-8 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all rounded-full flex items-center gap-2">
                         <QrCode size={16} /> Scan QR
                     </button>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ZaloMiniAppShowcase;
