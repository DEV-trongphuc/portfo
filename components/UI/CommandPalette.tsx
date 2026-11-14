import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Box,
  Briefcase,
  Building2,
  Copy,
  Cpu,
  Database,
  Handshake,
  Home,
  Layers,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { copyWithToast } from '../../utils/toast';

interface CommandItem {
  id: string;
  label: string;
  group: 'Điều hướng' | 'Hồ sơ chi tiết' | 'Liên hệ nhanh';
  keywords: string;
  icon: React.ReactNode;
  run: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenEcoLife: () => void;
  onOpenDomation: () => void;
}

/** Fast keyboard-driven Quick Jump & Contact Command Palette (Ctrl/Cmd + K). */
const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEcoLife,
  onOpenDomation,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const items = useMemo<CommandItem[]>(
    () => [
      {
        id: 'hero',
        label: 'Trang Chủ • Hello TURNIO',
        group: 'Điều hướng',
        keywords: 'home hero turnio 35+ app web',
        icon: <Home size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('hero'),
      },
      {
        id: 'experience',
        label: 'Hành Trình Kinh Nghiệm Thực Chiến',
        group: 'Điều hướng',
        keywords: 'kinh nghiem experience timeline capital house ideas inkica',
        icon: <Briefcase size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('experience'),
      },
      {
        id: 'inkica',
        label: 'INKICA AI Studio • Prepress & 3D POD',
        group: 'Điều hướng',
        keywords: 'inkica ai pod sam3 3d garment mockup',
        icon: <Box size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('inkica-pod'),
      },
      {
        id: 'ecolife',
        label: 'EcoLife 3D × Capital House',
        group: 'Điều hướng',
        keywords: 'ecolife signature webgl 3d da nang bat dong san',
        icon: <Building2 size={15} className="text-emerald-600" />,
        run: () => onNavigate('real-estate'),
      },
      {
        id: 'data',
        label: 'Chia Data Đa Đại Lý & Meta CAPI (4s)',
        group: 'Điều hướng',
        keywords: 'domation chia data meta capi webhook zalobot',
        icon: <Sparkles size={15} className="text-[#0284C7]" />,
        run: () => onNavigate('domation-data'),
      },
      {
        id: 'erp',
        label: 'DOMATION ERP 5.0 System (12 Phân Hệ)',
        group: 'Điều hướng',
        keywords: 'erp myerp cham cong gps payroll workchat',
        icon: <Database size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('erp-showcase'),
      },
      {
        id: 'zalo',
        label: 'Zalo Mini App for Business',
        group: 'Điều hướng',
        keywords: 'zalo mini app zaui zmp sdk ideas loyalty',
        icon: <Smartphone size={15} className="text-[#0068FF]" />,
        run: () => onNavigate('zalo-mini-app'),
      },
      {
        id: 'book',
        label: 'Sách: Facebook Ads AI Chạy Không Được',
        group: 'Điều hướng',
        keywords: 'sach book facebook ads tac gia 154 trang',
        icon: <BookOpen size={15} className="text-amber-600" />,
        run: () => onNavigate('book-spotlight'),
      },
      {
        id: 'skills',
        label: 'Bản Đồ Kỹ Năng Dev, Antigravity AI & Marketing',
        group: 'Điều hướng',
        keywords: 'skills antigravity agy mcp rag seo video design dev',
        icon: <Cpu size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('skills-mastery'),
      },
      {
        id: 'certs',
        label: 'Chứng Chỉ Nghề Nghiệp (FreeCodeCamp • F8)',
        group: 'Điều hướng',
        keywords: 'chung chi certifications freecodecamp f8 reactjs',
        icon: <Award size={15} className="text-amber-600" />,
        run: () => onNavigate('certifications'),
      },
      {
        id: 'partners',
        label: 'Đối Tác & Hệ Sinh Thái Đồng Hành',
        group: 'Điều hướng',
        keywords: 'doi tac partners richland ideas phuc loc tho',
        icon: <Handshake size={15} className="text-[#1E40FF]" />,
        run: () => onNavigate('partners'),
      },
      {
        id: 'drawer-ecolife',
        label: 'Mở Hồ Sơ Chi Tiết EcoLife 3D',
        group: 'Hồ sơ chi tiết',
        keywords: 'case study ecolife modal detail',
        icon: <Building2 size={15} className="text-[#1E40FF]" />,
        run: onOpenEcoLife,
      },
      {
        id: 'drawer-domation',
        label: 'Mở Kiến Trúc DOMATION Ecosystem',
        group: 'Hồ sơ chi tiết',
        keywords: 'domation architecture flow autoflow crm modal',
        icon: <Layers size={15} className="text-[#1E40FF]" />,
        run: onOpenDomation,
      },
      {
        id: 'copy-email',
        label: 'Sao chép Email (turniodev@gmail.com)',
        group: 'Liên hệ nhanh',
        keywords: 'copy email mail lien he contact',
        icon: <Copy size={15} className="text-emerald-600" />,
        run: () => void copyWithToast('turniodev@gmail.com', 'Email'),
      },
      {
        id: 'copy-zalo',
        label: 'Sao chép SĐT Zalo (0378.859.736)',
        group: 'Liên hệ nhanh',
        keywords: 'copy zalo phone sdt 0378859736',
        icon: <MessageCircle size={15} className="text-[#0068FF]" />,
        run: () => void copyWithToast('0378859736', 'Zalo'),
      },
    ],
    [onNavigate, onOpenEcoLife, onOpenDomation]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.label.toLowerCase().includes(q) || item.keywords.includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].run();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200/80">
              <Search size={17} className="text-[#1E40FF] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm nhanh dự án, kỹ năng, chứng chỉ hoặc liên hệ..."
                className="w-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng tìm kiếm"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  Không tìm thấy kết quả phù hợp cho &ldquo;{query}&rdquo;.
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const active = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => {
                        item.run();
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        active
                          ? 'bg-blue-50 text-[#1E40FF]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                          {item.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold truncate">{item.label}</span>
                          <span className="block text-[10px] text-slate-400 font-semibold">
                            {item.group}
                          </span>
                        </span>
                      </span>
                      <ArrowRight
                        size={13}
                        className={`shrink-0 transition-opacity ${
                          active ? 'opacity-100 text-[#1E40FF]' : 'opacity-30'
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-[10.5px] text-slate-500 font-medium">
              <span>↑↓ chọn • Enter di chuyển</span>
              <span>ESC đóng</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
