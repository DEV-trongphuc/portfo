
import React from 'react';
import { motion } from 'framer-motion';
import { BRIDGE_CARDS } from '../../constants';

const TheBridge: React.FC = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Remove individual gradients to let global background shine through */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-gold-500 font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
                >
                    The Hybrid Logic
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-white leading-[1.25] mb-12"
                >
                    KẾT NỐI <br/> 
                    <span className="text-gradient-gold">EVERYTHING - AUTOMATION.</span>
                </motion.h2>
                
                <div className="space-y-8">
                    {BRIDGE_CARDS.map((card, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ 
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: i * 0.15 
                          }}
                          className="flex gap-8 group p-4 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/[0.03]  border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-gold-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{card.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Coding Terminal */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="relative perspective-2000"
            >
                <div className="bg-black/40  rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group">
                    <div className="bg-white/[0.02] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                             turnio_lead_processor.js
                        </div>
                    </div>
                    <div className="p-8 font-mono text-sm leading-relaxed overflow-hidden">
                        <div className="text-blue-400">const <span className="text-white">syncLeads</span> = <span className="text-purple-400">async</span> () =&gt; &#123;</div>
                        <div className="pl-4 text-gray-600">// Fetching Meta Conversion API</div>
                        <div className="pl-4"><span className="text-blue-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-green-400">'meta_graph_api'</span>);</div>
                        <div className="pl-4"><span className="text-blue-400">const</span> leads = <span className="text-purple-400">await</span> response.json();</div>
                        <div className="pl-4 mt-2 text-gray-600">// Logic Automation & CRM Sync</div>
                        <div className="pl-4">leads.<span className="text-yellow-400">filter</span>(l =&gt; l.quality === <span className="text-green-400">'HOT'</span>).<span className="text-yellow-400">map</span>(lead =&gt; &#123;</div>
                        <div className="pl-8 text-blue-400">DOM_AGENCY.<span className="text-white">pushToCRM</span>(lead, <span className="text-green-400">'MISA_PRO'</span>);</div>
                        <div className="pl-4">&#125;);</div>
                        <div className="text-blue-400">&#125;;</div>
                        
                        <motion.div 
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-2 h-5 bg-gold-500 ml-1 translate-y-1"
                        ></motion.div>
                    </div>
                </div>

                {/* Floating Stats over Terminal */}
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-10 -right-10 bg-black/60  p-6 rounded-3xl border border-gold-500/20 shadow-2xl"
                >
                    <div className="text-gold-500 font-black text-3xl mb-1">0.8s</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sync Latency</div>
                </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheBridge;
