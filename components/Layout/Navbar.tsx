
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_LOGO } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      setIsOpen(false);
      const yOffset = -80; // Navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Kỹ Năng', href: '#skills' },
    { name: 'Dự Án', href: '#projects' },
    { name: 'Outsource', href: '#outsource' },
    { name: 'DOM Agency', href: '#dom-agency' },
    { name: 'Kinh Nghiệm', href: '#experience' },
  ];

  return (
    <nav 
        className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
            ${scrolled 
                ? 'bg-black/80  border-white/10 py-4 shadow-lg' 
                : 'bg-transparent border-transparent py-6'
            }
        `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Image Logo */}
        <a href="#" onClick={(e) => scrollToSection(e, '#root')} className="block shrink-0">
          <img 
            src={BRAND_LOGO} 
            alt="DOM Logo" 
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert hover:brightness-100 transition-all duration-300" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 py-2.5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-gold-500 transition-colors ml-4"
          >
            Liên Hệ
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-t border-white/10 overflow-hidden  h-screen"
          >
            <div className="flex flex-col p-8 gap-8 items-center justify-center h-full pb-32">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  className="text-white font-black text-2xl uppercase tracking-widest hover:text-gold-500"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
