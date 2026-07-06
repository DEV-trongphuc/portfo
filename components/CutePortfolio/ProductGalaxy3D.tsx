import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface BrandNode {
  id: string;
  name: string;
  logoUrl: string;
}

const BRANDS: BrandNode[] = [
  { id: 'domation', name: 'DOMATION', logoUrl: 'https://crm-domation.vercel.app/LOGO.jpg' },
  { id: 'phucloctho', name: 'Phúc Lộc Thọ', logoUrl: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(5).jpg' },
  { id: 'haagendazs', name: 'Haagen Dazs', logoUrl: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(3).jpg' },
  { id: 'runningbean', name: 'The Running Bean', logoUrl: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(6).jpg' },
  { id: 'estasaigon', name: 'Esta Saigon', logoUrl: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(14).jpg' },
  { id: 'ideas', name: 'IDEAS Institute', logoUrl: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(10).jpg' },
  { id: 'navastore', name: 'Navastore', logoUrl: 'https://bizweb.dktcdn.net/100/543/817/themes/1000289/assets/logo.png?1775454528082' },
  { id: 'flora', name: 'Nha khoa Flora', logoUrl: 'https://nhakhoaflora.com/wp-content/uploads/2022/05/cropped-LOGO-FLORA1-3-192x192.png' }
];

const ProductGalaxy3D: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  
  // Adjusted radii to prevent widescreen clipping while maintaining full spacing
  const [dimensions, setDimensions] = useState({ rx: 420, ry: 100 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ rx: 140, ry: 40 });
      } else if (window.innerWidth < 1200) {
        setDimensions({ rx: 320, ry: 80 });
      } else {
        setDimensions({ rx: 420, ry: 100 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotation in background when not dragging
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.15) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStart;
    setRotation(prev => (prev + delta * 0.15) % 360);
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStart;
    setRotation(prev => (prev + delta * 0.15) % 360);
    setDragStart(e.touches[0].clientX);
  };

  return (
    <div className="w-full flex flex-col items-center select-none pt-6 pb-12">
      {/* 3D Orbit Visualization Stage (Removed overflow-hidden to prevent cropping) */}
      <div 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="w-full h-[calc(100vh-200px)] min-h-[550px] relative flex items-center justify-center cursor-grab active:cursor-grabbing bg-purple-950/5 rounded-2xl"
      >
        {/* Soft decorative space glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-2xl overflow-hidden">
          <div className="w-[300px] h-[300px] bg-indigo-950/20 rounded-full blur-[80px] opacity-40" />
        </div>

        {/* Orbit Grid Rings */}
        <div 
          className="absolute rounded-full border border-purple-900/15 [transform:rotateX(75deg)] pointer-events-none z-0" 
          style={{ width: `${dimensions.rx * 2}px`, height: `${dimensions.ry * 2}px` }}
        />
        <div 
          className="absolute rounded-full border border-purple-900/15 [transform:rotateX(75deg)] pointer-events-none z-0" 
          style={{ width: `${dimensions.rx * 1.5}px`, height: `${dimensions.ry * 1.5}px` }}
        />

        {/* Central Core: Turnio DEV */}
        <motion.div 
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute z-10 w-36 h-36 rounded-2xl bg-[#0f0b24] border border-purple-900/40 shadow-[0_15px_40px_rgba(15,23,42,0.06)] flex flex-col items-center justify-center p-4 text-center select-none"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center shadow-lg border border-purple-900/40 mb-2">
            <Sparkles size={22} className="text-white animate-spin-slow" />
          </div>
          <span className="text-[11px] text-white uppercase font-black tracking-wider leading-none">Turnio DEV</span>
          <span className="text-[9px] text-slate-400 font-bold mt-1.5">CORE HUB</span>
        </motion.div>

        {/* Orbiting Planets */}
        {BRANDS.map((brand, index) => {
          // Calculate polar coordinates
          const angleRad = ((index * (360 / BRANDS.length) + rotation) * Math.PI) / 180;
          
          // Coordinate position mapping based on responsive radii
          const x = dimensions.rx * Math.cos(angleRad);
          const y = dimensions.ry * Math.sin(angleRad);
          
          // Z depth coefficient
          const zIndex = Math.round(100 + 100 * Math.sin(angleRad)); // larger when in front
          const scale = 0.85 + 0.3 * (zIndex / 200); // scale based on depth
          const opacity = 0.6 + 0.4 * (zIndex / 200);

          return (
            <motion.div
              key={brand.id}
              style={{
                x,
                y,
                zIndex,
                scale,
                opacity
              }}
              className="absolute flex flex-col items-center group pointer-events-none"
            >
              {/* White background circle with padding, shadow and contain style */}
              <div 
                className="w-16 h-16 rounded-full p-1.5 flex items-center justify-center shadow-md transition-all duration-300 border border-purple-900/40 bg-[#0f0b24] group-hover:scale-110 group-hover:border-purple-500/50"
              >
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="w-full h-full object-contain rounded-full" 
                />
              </div>
              <div className="mt-2 bg-[#0f0b24]/95 backdrop-blur-md px-3 py-1 rounded-full border border-purple-900/40 shadow-sm transition-all duration-300">
                <span className="text-[10px] font-bold text-slate-200 tracking-wider block whitespace-nowrap uppercase">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGalaxy3D;
