import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '../../utils/scrollSpy';

const DOCK_CHAPTERS = [
  { id: 'hero', label: 'Trang Chủ' },
  { id: 'experience', label: 'Kinh Nghiệm' },
  { id: 'inkica-pod', label: 'INKICA AI' },
  { id: 'real-estate', label: 'EcoLife 3D' },
  { id: 'domation-data', label: 'Chia Data 4s' },
  { id: 'erp-showcase', label: 'ERP 5.0' },
  { id: 'zalo-mini-app', label: 'Zalo Mini App' },
  { id: 'skills-mastery', label: 'Hệ Kỹ Năng' },
  { id: 'certifications', label: 'Chứng Chỉ' },
  { id: 'partners', label: 'Đối Tác' },
];

const CHAPTER_IDS = DOCK_CHAPTERS.map((c) => c.id);

interface SectionQuickDockProps {
  onNavigate: (id: string) => void;
}

/** Right-edge chapter quick navigator visible on wide desktop screens (2xl+). */
const SectionQuickDock: React.FC<SectionQuickDockProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useActiveSection(CHAPTER_IDS, 'hero');

  return (
    <aside
      aria-label="Điều hướng nhanh các phần"
      className="hidden 2xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 py-2.5 px-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_32px_-12px_rgba(30,64,255,0.16)]"
    >
      {DOCK_CHAPTERS.map((chapter) => {
        const isActive = activeId === chapter.id;
        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => {
              setActiveId(chapter.id);
              onNavigate(chapter.id);
            }}
            aria-label={chapter.label}
            className="group relative flex items-center justify-center w-5 h-5 cursor-pointer"
          >
            <span className="pointer-events-none absolute right-7 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10.5px] font-bold whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
              {chapter.label}
            </span>
            <motion.span
              animate={{
                scale: isActive ? 1.25 : 1,
                backgroundColor: isActive ? '#1E40FF' : '#CBD5E1',
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              className={`block rounded-full ${
                isActive ? 'w-2.5 h-2.5 ring-4 ring-blue-100' : 'w-1.5 h-1.5 group-hover:bg-blue-400'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};

export default SectionQuickDock;
