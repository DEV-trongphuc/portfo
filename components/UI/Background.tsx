
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020202]">
      {/* Noise Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150 brightness-100"></div>
      
      {/* Dynamic Ambient Glows - Gold */}
      <motion.div 
        animate={{ 
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -right-[10%] w-[1000px] h-[1000px] bg-gold-500/20 rounded-full blur-[180px]"
      />
      
      {/* Dynamic Ambient Glows - Deep Blue/Purple */}
      <motion.div 
        animate={{ 
          x: [0, -250, 150, 0],
          y: [0, 200, -100, 0],
          scale: [1, 1.1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[1200px] h-[1200px] bg-blue-900/20 rounded-full blur-[200px]"
      />

      {/* Floating Sparkles - Mid Screen */}
      <motion.div 
        animate={{ 
          y: [0, -300, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px]"
      />

      {/* Global Grid Pattern - Integrated with masking for fading edges */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"></div>

      {/* Animated Micro-particles */}
      <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/40 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{
                y: ["0%", "-20%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Background;
