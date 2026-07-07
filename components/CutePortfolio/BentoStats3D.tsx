import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';

interface StatCardProps {
  label: string;
  value: string;
  suffix: string;
  index: number;
}

const colorSchemes = [
  { // TikTok Coding Subs - Index 0
    spotlight: 'rgba(249, 115, 22, 0.25)',
    textGradient: 'from-orange-400 via-amber-300 to-yellow-200',
    borderHover: 'group-hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]',
    badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  },
  { // Monthly Budget - Index 1
    spotlight: 'rgba(6, 182, 212, 0.25)',
    textGradient: 'from-cyan-400 via-teal-300 to-emerald-200',
    borderHover: 'group-hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  { // ROAS Average - Index 2
    spotlight: 'rgba(16, 185, 129, 0.25)',
    textGradient: 'from-emerald-400 via-green-300 to-yellow-200',
    borderHover: 'group-hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  { // Leads Generated - Index 3
    spotlight: 'rgba(217, 70, 239, 0.25)',
    textGradient: 'from-fuchsia-400 via-purple-300 to-pink-200',
    borderHover: 'group-hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]',
    badgeBg: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20'
  }
];

const StatCard: React.FC<StatCardProps> = ({ label, value, suffix, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-ignore
        (navigator.msMaxTouchPoints > 0)
      );
    };
    checkTouch();
  }, []);

  const scheme = colorSchemes[index % colorSchemes.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse inside the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Tilt calculations (maximum 8 degrees tilt for high-end subtle feeling)
    const tiltY = ((mouseX / width) - 0.5) * 8;
    const tiltX = ((mouseY / height) - 0.5) * -8;

    setRotateX(tiltX);
    setRotateY(tiltY);
    setSpotlightPos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.4s ease-out'
      }}
      className={`group relative bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] overflow-hidden select-none transition-all duration-300 cursor-pointer ${scheme.borderHover}`}
    >
      {/* 3D Depth Card Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 200px at ${spotlightPos.x}px ${spotlightPos.y}px, ${scheme.spotlight}, transparent 70%)`
        }}
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />

      {/* Content wrapper with transformZ to push it forward in 3D */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-4" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">
            {label}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider border ${scheme.badgeBg}`}>
            Live Stat
          </span>
        </div>
        
        <div>
          <span className={`text-4xl md:text-5.5xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${scheme.textGradient}`}>
            {value}
          </span>
          <span className={`text-xl font-bold ml-1 text-transparent bg-clip-text bg-gradient-to-r ${scheme.textGradient}`}>
            {suffix}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const BentoStats3D: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {STATS.map((stat, i) => (
        <StatCard
          key={i}
          label={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          index={i}
        />
      ))}
    </div>
  );
};

export default BentoStats3D;
