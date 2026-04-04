
import React from 'react';
import { SOCIALS } from '../../constants';
import { Send, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 relative z-10 text-white overflow-hidden border-t border-white/10">
      {/* Seamless Background continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black -z-10"></div>

      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 mb-24">
            
            <div className="lg:col-span-6">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-gold-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block"
                >
                    Get in Touch
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black mb-10 leading-tight"
                >
                LET'S BUILD <br/> THE <span className="text-gradient-gold">FUTURE.</span>
                </motion.h2>
                <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-light">
                  Sẵn sàng nâng tầm doanh nghiệp của bạn với chiến lược Marketing & Automation đỉnh cao.
                </p>
                <div className="flex gap-6">
                    {SOCIALS.map((s, i) => (
                        <motion.a 
                            key={i} 
                            href={s.url}
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 relative group"
                        >
                            {s.icon}
                            <div className="absolute inset-0 rounded-full bg-gold-500 opacity-0 group-hover:animate-ping"></div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-end">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="p-10 bg-dark-card border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden group"
                >
                     {/* Glow Border Effect */}
                     <div className="absolute inset-0 border border-gold-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <h4 className="text-2xl font-bold mb-8 text-white">Quick Contact</h4>
                    <form className="space-y-6 relative z-10">
                        <div className="border-b border-white/10 pb-4 group-focus-within:border-gold-500 transition-colors">
                            <input type="text" placeholder="Họ và tên" className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none" />
                        </div>
                        <div className="border-b border-white/10 pb-4 group-focus-within:border-gold-500 transition-colors">
                            <input type="email" placeholder="Email của bạn" className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none" />
                        </div>
                        
                        {/* Shimmer Button */}
                        <button className="w-full py-5 bg-gold-500 text-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all relative overflow-hidden group/btn">
                            <span className="relative z-10 flex items-center gap-2">Gửi yêu cầu <Send size={16} /></span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover/btn:animate-[shimmer_1s_infinite]"></div>
                        </button>
                    </form>
                </motion.div>
            </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-gold-500 text-black flex items-center justify-center font-black text-xl rounded-lg">D</div>
             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">© 2024 DOM MARKETING AGENCY.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gold-500 transition-colors group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;