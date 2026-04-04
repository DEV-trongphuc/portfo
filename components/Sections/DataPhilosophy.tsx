
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Database, Zap, Activity } from 'lucide-react';

const DataPhilosophy: React.FC = () => {
  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
           <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
             <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
           </pattern>
           <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content: Typography */}
            <div>
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                 >
                    <div className="p-2 bg-gold-500/10 rounded-lg">
                        <Activity size={18} className="text-gold-500" />
                    </div>
                    <span className="text-gold-500 text-xs font-black uppercase tracking-[0.3em]">Data Driven Mindset</span>
                 </motion.div>
                 
                 {/* FONT SIZE CHANGED HERE: Decreased to text-4xl md:text-5xl */}
                 <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-8"
                 >
                    SỐ LIỆU <br/> 
                    <span className="text-transparent bg-clip-text text-gradient-gold">KHÔNG BIẾT NÓI DỐI.</span>
                 </motion.h2>
                 
                 <p className="text-xl text-gray-400 leading-relaxed font-light mb-10 border-l-4 border-gold-500 pl-6">
                    Chúng tôi không chạy quảng cáo bằng cảm tính. Chúng tôi xây dựng <span className="text-white font-bold">hệ thống đo lường thời gian thực</span> để tối ưu từng đồng chi phí của bạn.
                 </p>

                 <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 mt-1">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Minh Bạch Tuyệt Đối</h4>
                            <p className="text-sm text-gray-500 mt-1">Truy xuất dữ liệu trực tiếp từ API Platform, không qua chỉnh sửa.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="p-3 bg-green-500/10 rounded-full text-green-500 mt-1">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Scale Up An Toàn</h4>
                            <p className="text-sm text-gray-500 mt-1">Chỉ tăng ngân sách khi ROAS vượt ngưỡng KPI cam kết.</p>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Right Content: Futuristic HUD */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                {/* Main Dashboard Card */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-[10px] font-mono text-gray-500">LIVE_DASHBOARD_V2.0</span>
                        </div>
                        <div className="flex items-center gap-2 text-gold-500 bg-gold-500/10 px-3 py-1 rounded text-[10px] font-bold uppercase animate-pulse">
                            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div> Live
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Total Spend</p>
                            <p className="text-2xl font-black text-white">$12,450</p>
                            <div className="w-full h-1 bg-gray-800 mt-3 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1.5 }} className="h-full bg-yellow-600"></motion.div>
                            </div>
                        </div>
                        <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">ROAS</p>
                            <p className="text-2xl font-black text-gold-500">4.85x</p>
                             <div className="w-full h-1 bg-gray-800 mt-3 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1.5 }} className="h-full bg-gold-500"></motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Graph Area */}
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 relative h-48 flex items-end justify-between gap-2">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                        </div>
                        
                        {/* Bars */}
                        {[35, 50, 45, 70, 60, 85, 95].map((h, i) => (
                             <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
                                className="w-full bg-gradient-to-t from-yellow-700 to-gold-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity relative group"
                             >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}
                                </div>
                             </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 bg-dark-card border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                    <div className="p-2 bg-gold-500/20 rounded-full text-gold-500"><Zap size={16} /></div>
                    <div>
                        <p className="text-[9px] text-gray-500 uppercase font-bold">Conv. Rate</p>
                        <p className="text-lg font-black text-white">+12.5%</p>
                    </div>
                </motion.div>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataPhilosophy;
