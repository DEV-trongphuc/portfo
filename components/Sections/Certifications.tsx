
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '../../constants';
import { ShieldCheck, Award, ExternalLink, Plus, BadgeCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 8);

  return (
    <section id="achievements" className="py-24 relative z-10 overflow-hidden">
      {/* Remove solid background to let global background shine through */}
      
      {/* Floating SVG Decor Background */}
      <div className="absolute top-20 right-0 opacity-10 pointer-events-none">
         <motion.svg 
            width="400" height="400" viewBox="0 0 200 200"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
         >
            <path d="M100 0 L130 70 L200 100 L130 130 L100 200 L70 130 L0 100 L70 70 Z" fill="none" stroke="#EAB308" strokeWidth="1" />
         </motion.svg>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <span className="text-gold-500 font-black tracking-[0.4em] uppercase text-[10px] flex items-center justify-center gap-2">
                    <ShieldCheck size={14} /> Professional Verified
                </span>
                <h2 className="text-5xl font-black text-white mt-4">CHỨNG CHỈ QUỐC TẾ.</h2>
            </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert, index) => (
                <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: index * 0.1 
                }}
                whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="group relative h-full"
                >
                    <div className="bg-white/[0.02]  border border-white/5 rounded-2xl p-4 h-full flex flex-col relative overflow-hidden transition-all duration-500 group-hover:border-gold-500/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)]">
                        
                        {/* Certificate Image Frame */}
                        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 relative bg-black/40 border border-white/5">
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                src={cert.image} 
                                alt={cert.name} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
                            />
                            
                            {/* Overlay Badge */}
                            <div className="absolute top-2 right-2 bg-black/80  border border-gold-500/30 px-2 py-1 rounded flex items-center gap-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <BadgeCheck size={10} className="text-gold-500" />
                                <span className="text-[8px] font-black uppercase text-gold-500 tracking-wider">Verified</span>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-sm font-bold text-white leading-snug group-hover:text-gold-500 transition-colors mb-2 line-clamp-2 min-h-[2.5em]">{cert.name}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-white/5 pt-3 mt-1">
                                <Award size={14} className="text-gold-600" />
                                <span className="truncate">{cert.issuer}</span>
                            </div>
                        </div>

                        {cert.link && (
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 w-full py-2.5 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">Verify ID <ExternalLink size={10} /></span>
                            </a>
                        )}
                    </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        
        {CERTIFICATIONS.length > 8 && (
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 text-center"
            >
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors hover:scale-105 active:scale-95 duration-200"
                >
                    {showAll ? "Thu gọn" : "Xem toàn bộ"} <Plus size={14} className={`transition-transform duration-300 ${showAll ? "rotate-45" : ""}`} />
                </button>
            </motion.div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
