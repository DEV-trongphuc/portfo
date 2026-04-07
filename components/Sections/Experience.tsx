
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative z-10">
      {/* Seamless Transition: Using transparent background instead of solid colors */}
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-white/5 pb-8">
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-2"
                >
                    <div className="w-8 h-[2px] bg-gold-500"></div>
                    <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Professional Journey</span>
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-white mt-3">WORK EXPERIENCE.</h2>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-xs font-mono text-gray-500 mb-1">CURRENT STATUS</p>
                <div className="flex items-center justify-end gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white font-bold">Open to Collaboration</span>
                </div>
            </div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent transform md:-translate-x-1/2"></div>

          {EXPERIENCES.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center justify-between md:justify-normal mb-20 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Timeline Node */}
                    <div className="absolute left-[14px] md:left-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-white/10 ring-1 ring-gold-500 flex items-center justify-center z-10 transform -translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    <div className="hidden md:block w-1/2"></div>

                    <div className={`w-[calc(100%-80px)] md:w-[45%] ml-auto md:ml-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="relative bg-white/[0.02]  border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] hover:border-gold-500/20 transition-all duration-300 group">
                            <div className="absolute -top-4 right-8 bg-black/60  border border-white/10 px-4 py-1 rounded-full">
                                <span className="text-[10px] font-bold text-gold-500 font-mono">{item.period}</span>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-gold-500 transition-colors">
                                    {item.role}
                                </h3>
                                <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">
                                    <Building2 size={12} />
                                    {item.company}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 font-light">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
