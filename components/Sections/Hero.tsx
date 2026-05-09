import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../../constants';
import { MoveRight, Zap, PlayCircle, MousePointer2, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "TURNIO.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor - Animated Paths */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          d="M-100 200 Q 400 50, 900 300 T 1600 100"
          fill="none"
          stroke="#EAB308"
          strokeWidth="1"
        />
        <motion.circle
          animate={{ x: [0, 1600], y: [200, 100] }}
          transition={{ duration: 10, repeat: Infinity }}
          r="2" fill="#EAB308"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass-card border-gold-500/20">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500">Huynh Trong Phuc • Portfolio 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight text-white mb-8">
              HELLO! I'M <br />
              <span className="text-gradient-gold cursor-blink">{text}</span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Hợp nhất <span className="text-white font-bold">Marketing Performance</span> và <span className="text-white font-bold">Automation Logic</span> để kiến tạo những hệ thống kinh doanh vượt trội.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <a href="https://domation.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group relative px-6 lg:px-8 py-3 bg-[#0a0a0a] border border-white/10 rounded-full hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 flex items-center justify-center gap-4 overflow-hidden backdrop-blur-md">
                <div className="relative z-10 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] transition-shadow">
                  <img src="https://domation.net/imgs/ICON.png" alt="DOMATION" className="w-7 h-7 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="relative z-10 font-black uppercase text-xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] to-[#E52E71]">
                  DOMATION
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>

              <a href="https://www.tiktok.com/@turnio.dev" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 lg:px-10 py-5 glass-card text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <svg viewBox="0 0 448 512" width="18" height="18" fill="currentColor" className="text-gold-500 shrink-0">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
                Tiktok 10k followers
              </a>

              <a href="https://www.linkedin.com/in/turnio-dev/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 lg:px-10 py-5 glass-card text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <Linkedin size={18} className="text-blue-500 shrink-0" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Interactive Abstract Element instead of Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-2/5 flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Orbital Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-gold-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>

              {/* Central "Core" */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 glass-card rounded-3xl rotate-12 flex items-center justify-center animate-pulse-glow shadow-[0_0_50px_rgba(234,179,8,0.2)]">
                  <Zap size={60} className="text-gold-500" />
                </div>
              </div>

              {/* Data Points - Floating Icons */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 p-4 glass-card rounded-2xl">
                <div className="text-[10px] font-bold text-blue-400">FB_ADS_API</div>
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 p-4 glass-card rounded-2xl">
                <div className="text-[10px] font-bold text-green-400">CRM_HOOK</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;