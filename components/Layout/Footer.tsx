
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
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full -[200px]"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
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
              LET'S BUILD <br /> THE <span className="text-gradient-gold">FUTURE.</span>
            </motion.h2>
            <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-light">
              Sẵn sàng nâng tầm doanh nghiệp của bạn với chiến lược Marketing & Automation đỉnh cao.
            </p>
            <div className="flex gap-6 justify-center">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
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

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gold-500 text-black flex items-center justify-center font-black text-xl rounded-lg">D</div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">© 2026 DOM MARKETING AGENCY.</p>
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