
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Zap, 
  LayoutTemplate, 
  BarChart3, 
  GitBranch, 
  Smartphone,
  Repeat,
  Code2
} from 'lucide-react';

const TechBento: React.FC = () => {
  const logos = [
      { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
      { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/white' },
      { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  ];

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
        {/* --- DECOR: CIRCUIT BOARD PATTERN --- */}
        <div className="absolute inset-0 pointer-events-none -z-10">
            {/* Tech Grid Pattern */}
            <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10 10h80v80h-80z" fill="none" stroke="white" />
                    <path d="M50 10v30 M10 50h30 M90 50h-30 M50 90v-30" stroke="white" />
                    <circle cx="50" cy="50" r="3" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
            
            {/* Moving Data Packets (Simulated lines) */}
            <motion.div 
                className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"
                animate={{ x: [-1000, 1000] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
             <motion.div 
                className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-20"
                animate={{ x: [1000, -1000] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 "
            >
              <Cpu size={14} className="text-gold-500" />
              <span className="text-gray-300 font-bold tracking-[0.2em] uppercase text-[10px]">Fullstack Capabilities</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tight">
                TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gold-500">ECOSYSTEM.</span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 max-w-2xl font-light mx-auto">
                Một hệ sinh thái khép kín nơi <span className="text-blue-400 font-bold">Engineering Logic</span> vận hành <span className="text-gold-500 font-bold">Marketing Growth</span>.
            </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto md:h-[600px]">
            
            {/* COLUMN 1: ENGINEERING (BLUE THEME) */}
            <div className="flex flex-col gap-6 h-full">
                {/* Card 1.1: Frontend */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
                >
                    <div className="absolute top-0 right-0 p-3 bg-blue-500/10 rounded-bl-2xl">
                        <LayoutTemplate size={20} className="text-blue-500" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full  group-hover:bg-blue-600/30 transition-all"></div>
                    
                    <h3 className="text-2xl font-black text-white mb-2">Interface <br/> Engineering</h3>
                    <p className="text-sm text-gray-400 mb-8">Pixel-perfect UI/UX với tốc độ phản hồi dưới 100ms.</p>
                    
                    {/* LOGO GRID */}
                    <div className="flex flex-wrap gap-4 items-center">
                        {logos.map((logo) => (
                            <div key={logo.name} className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-help group/logo" title={logo.name}>
                                <img src={logo.url} alt={logo.name} className="w-6 h-6 object-contain opacity-70 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Card 1.2: Zalo Ecosystem */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="h-1/3 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-400/50 transition-colors flex flex-col justify-center"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400">
                            <Smartphone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Zalo Mini App</h4>
                            <p className="text-xs text-gray-500">Tiếp cận 74tr người dùng</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* COLUMN 2: THE CORE (HYBRID) */}
            <div className="flex flex-col gap-6 h-full">
                {/* CENTRAL PROCESSOR */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex-[2] bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group shadow-2xl"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-gold-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <div className="relative mb-8">
                             {/* Orbit Rings */}
                             <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                             <div className="absolute -inset-4 border border-gold-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                             
                             {/* Central Icon */}
                             <div className="w-20 h-20 bg-white/5  border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <GitBranch size={32} className="text-white" />
                             </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">THE HYBRID CORE</h3>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                            Điểm giao thoa nơi <span className="text-blue-400 font-bold">Dữ liệu thô</span> được xử lý thành <span className="text-gold-500 font-bold">Doanh thu thực</span> thông qua các tầng Middleware tự động hóa.
                        </p>
                    </div>

                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                </motion.div>

                {/* Automation Strip */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:border-white/30 transition-colors"
                >
                    <div>
                        <h4 className="font-black text-white text-xl">Automation Flow</h4>
                        <div className="flex gap-2 mt-2">
                             <span className="w-2 h-2 rounded-full bg-red-500"></span>
                             <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                             <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                    </div>
                    <Repeat size={32} className="text-gray-600 group-hover:text-white group-hover:rotate-180 transition-all duration-700" />
                </motion.div>
            </div>

            {/* COLUMN 3: GROWTH (GOLD THEME) */}
            <div className="flex flex-col gap-6 h-full">
                {/* Card 3.1: Data Intelligence */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="h-1/3 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-gold-500/50 transition-colors flex flex-col justify-center"
                >
                     <div className="absolute top-0 right-0 p-3 bg-gold-500/10 rounded-bl-2xl">
                        <Database size={20} className="text-gold-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Server-side Data</h4>
                        <p className="text-xs text-gray-500 mt-1">GTM Server • CAPI • BigQuery</p>
                    </div>
                </motion.div>

                {/* Card 3.2: Performance Marketing */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-gold-500/50 transition-colors"
                >
                    <div className="absolute top-0 right-0 p-3 bg-gold-500/10 rounded-bl-2xl">
                        <Zap size={20} className="text-gold-500" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold-600/20 rounded-full  group-hover:bg-gold-600/30 transition-all"></div>
                    
                    <h3 className="text-2xl font-black text-white mb-2">Growth <br/> Hacking</h3>
                    <p className="text-sm text-gray-400 mb-6">Tối ưu hóa chỉ số ROAS dựa trên dữ liệu realtime.</p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                            <span>Meta Ads API</span>
                            <span className="text-gold-500">Connected</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-gold-500"></div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mt-2">
                            <span>Google Ads Script</span>
                            <span className="text-gold-500">Active</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[65%] bg-gold-500"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-12 flex justify-center opacity-30">
            <div className="flex gap-12">
                <Code2 size={16} className="text-blue-500" />
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent self-center"></div>
                <BarChart3 size={16} className="text-gold-500" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechBento;
