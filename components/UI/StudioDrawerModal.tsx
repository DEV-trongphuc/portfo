import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export interface StudioDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  badge?: string;
  title: string;
  liveUrl?: string;
  liveLabel?: string;
  maxWidthClass?: string;
  children: React.ReactNode;
}

/**
 * INKICA Light Studio Drawer Modal rendered via React Portal above Sticky Navbar.
 */
export const StudioDrawerModal: React.FC<StudioDrawerModalProps> = ({
  isOpen,
  onClose,
  badge,
  title,
  liveUrl,
  liveLabel = 'Mở Bản Live',
  maxWidthClass = 'max-w-[1280px]',
  children,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/60 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 w-full ${maxWidthClass} max-h-[92vh] flex flex-col rounded-3xl bg-[#F8F9FA] border border-slate-200 shadow-[0_32px_90px_-20px_rgba(15,23,42,0.35)] overflow-hidden`}
          >
            {/* Header Bar */}
            <div className="shrink-0 flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-white border-b border-slate-200">
              <div className="min-w-0">
                {badge && (
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700 mb-0.5">
                    {badge}
                  </span>
                )}
                <h3 className="font-display text-base sm:text-xl font-bold text-slate-950 truncate">
                  {title}
                </h3>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-inkica-primary px-4 py-2 text-xs whitespace-nowrap"
                  >
                    <span>{liveLabel}</span>
                    <ExternalLink size={13} className="shrink-0" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Đóng cửa sổ"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 flex items-center justify-center text-slate-800 transition-colors cursor-pointer shrink-0"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default StudioDrawerModal;
