
import React from 'react';
import { motion } from 'framer-motion';
import { OUTSOURCE_HIGHLIGHTS } from '../../constants';
import { Target, AlertCircle, Quote } from 'lucide-react'; 
import { OutsourceHighlight } from '../../types'; 

const OutsourceHighlights: React.FC = () => {
  return (
    <section id="outsource" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
             <div className="max-w-2xl">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-gold-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block"
                >
                    Proven Performance
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">KẾT QUẢ <br/> THỰC CHIẾN.</h2>
             </div>
             <p className="text-gray-500 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6 italic">
                 "Dữ liệu là sự thật duy nhất. Dưới đây là những chiến dịch thực tế tôi đã trực tiếp vận hành và tối ưu."
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {OUTSOURCE_HIGHLIGHTS.map((item: OutsourceHighlight, i) => {
                const isFailure = item.status === 'failure';
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className={`group relative flex flex-col rounded-[2.5rem] overflow-hidden border ${isFailure ? 'border-red-500/10' : 'border-white/5'} hover:border-white/20 transition-all duration-500 bg-[#080808]/50  min-h-[580px]`}
                    >
                        {/* Status Icon Background */}
                        <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            {isFailure ? <AlertCircle size={200} /> : <Target size={200} />}
                        </div>

                        <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                            {/* Header Section */}
                            <div className="mb-10">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest rounded-full group-hover:text-gold-500 group-hover:border-gold-500/30 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className={`text-4xl md:text-6xl font-black text-white mb-3 leading-none transition-colors duration-300 ${isFailure ? 'group-hover:text-red-400' : 'group-hover:text-gold-500'}`}>
                                    {item.company}
                                </h3>
                                
                                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${isFailure ? 'text-red-500' : 'text-blue-500'}`}>
                                    {isFailure ? <AlertCircle size={14} /> : <Target size={14} />} 
                                    <span>Campaign {isFailure ? 'Deep Analysis' : 'Success Story'}</span>
                                </div>
                            </div>

                            {/* Performance Metrics Grid */}
                            <div className="grid grid-cols-3 gap-6 bg-white/[0.03]  border border-white/5 rounded-3xl p-8 mb-8 group-hover:bg-white/[0.05] transition-colors">
                                <div className="space-y-1">
                                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Impact</p>
                                    <p className="text-base font-black text-white leading-tight">{item.impact}</p>
                                </div>
                                <div className="space-y-1 border-l border-white/10 pl-6">
                                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Efficiency</p>
                                    <p className="text-base font-black text-gray-400">{item.cost}</p>
                                </div>
                                <div className="space-y-1 border-l border-white/10 pl-6">
                                    <p className={`text-[9px] ${isFailure ? 'text-red-500' : 'text-gold-500'} uppercase font-black tracking-widest`}>Result</p>
                                    <p className={`text-2xl font-black ${isFailure ? 'text-red-500' : 'text-gold-500'}`}>{item.result}</p>
                                </div>
                            </div>

                            {/* Logos Section (If Any) */}
                            {item.logos && item.logos.length > 0 && (
                                <div className="mb-10 flex flex-wrap gap-4">
                                    {item.logos.map((logo, idx) => (
                                        logo.link ? (
                                            <a href={logo.link} target="_blank" rel="noopener noreferrer" key={idx} className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-white/10 opacity-60 hover:opacity-100 hover:scale-110 hover:border-gold-500/50 transition-all cursor-pointer shadow-xl bg-[#080808]">
                                                <img src={logo.src} alt="Brand Logo" className="w-full h-full object-cover p-1 rounded-full" />
                                            </a>
                                        ) : (
                                            <div key={idx} className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-white/10 opacity-60 hover:opacity-100 hover:scale-110 hover:border-gold-500/50 transition-all cursor-pointer shadow-xl bg-[#080808]">
                                                <img src={logo.src} alt="Brand Logo" className="w-full h-full object-cover p-1 rounded-full" />
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}

                            {/* Detailed Description Section - MOVED TO BOTTOM */}
                            <div className="mt-auto relative">
                                <div className="absolute -top-6 left-0 w-12 h-[2px] bg-gold-500/30"></div>
                                <div className="flex gap-4">
                                    <Quote size={24} className="text-gold-500/20 flex-shrink-0 mt-1" />
                                    <div 
                                        className="text-gray-400 text-sm leading-relaxed font-light text-justify"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Animated Bottom Progress Bar */}
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${isFailure ? 'from-red-600 to-red-400' : 'from-gold-600 to-gold-400'} w-0 group-hover:w-full transition-all duration-700`}></div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default OutsourceHighlights;
