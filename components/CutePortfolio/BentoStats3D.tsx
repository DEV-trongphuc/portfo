import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';

interface StatCardProps {
  label: string;
  value: string;
  suffix: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, suffix, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse inside the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Tilt calculations (maximum 6 degrees tilt for high-end subtle feeling)
    const tiltY = ((mouseX / width) - 0.5) * 6;
    const tiltX = ((mouseY / height) - 0.5) * -6;

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
      className="group relative bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] overflow-hidden select-none hover:shadow-md hover:border-purple-500/50 transition-colors cursor-pointer"
    >
      {/* 3D Depth Card Spotlight Effect (Subtle purple) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 180px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(147, 51, 234, 0.15), transparent 70%)`
        }}
      />

      {/* Content wrapper with transformZ to push it forward in 3D */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-4" style={{ transform: 'translateZ(20px)' }}>
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">
          {label}
        </span>
        
        <div>
          <span className="text-4xl md:text-5.5xl font-black text-white leading-none tracking-tight">
            {value}
          </span>
          <span className="text-xl text-slate-400 font-bold ml-1">
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
