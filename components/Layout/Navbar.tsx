import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <div className="container mx-auto px-6 h-12 flex items-center justify-center md:justify-center relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 uppercase tracking-wider group"
            >
              {link.name}
            </a>
          ))}
          <div className="w-[1px] h-6 bg-white/20 mx-2"></div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/turnio-dev/"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-gold-500 transition-colors"
          >
            Liên Hệ
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden absolute right-6 text-white" onClick={() => setIsOpen(!isOpen)}>
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
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="https://www.linkedin.com/in/turnio-dev/"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-8 py-4 bg-gold-500 text-black font-black text-xl uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Liên Hệ
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
