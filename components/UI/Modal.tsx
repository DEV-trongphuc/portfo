
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className = "" }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative bg-[#0f0b24] border border-purple-900/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] w-full ${className} flex flex-col`}
          >
            <div className="flex items-center justify-between p-5 border-b border-purple-900/30 bg-[#030014]/50 backdrop-blur-sm z-10">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">{title}</h3>
                <button 
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-[#161033] text-slate-400 hover:text-slate-200 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>
            
            <div className="overflow-y-auto p-0 custom-scrollbar flex-grow bg-[#030014]">
                {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
