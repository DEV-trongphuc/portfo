import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  MonitorSmartphone, 
  BookOpen, 
  BarChart3, 
  Bot, 
  Layers, 
  Award, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Star,
  Users,
  Grid,
  Menu,
  X,
  Compass,
  ArrowRight,
  RefreshCw,
  Globe,
  Server,
  Zap,
  ShieldCheck,
  Key,
  Save,
  CheckCircle,
  HelpCircle,
  GraduationCap,
  Play,
  Heart,
  Terminal,
  FileCode,
  SlidersHorizontal
} from 'lucide-react';
import { 
  STATS, 
  TECH_GRID, 
  BRIDGE_CARDS, 
  OUTSOURCE_HIGHLIGHTS, 
  EXPERIENCES, 
  CERTIFICATIONS,
  PROJECTS, // Original 8 developer projects
  PARTNERS,
  BRAND_LOGO
} from '../../constants';
import DomiBot from './DomiBot';
import ProductGalaxy3D from './ProductGalaxy3D';
import BentoStats3D from './BentoStats3D';
import TechLab from './TechLab';

// @ts-ignore
import micrositePdf from '../../pdf/microsite game_compressed.pdf';

// Import images
// @ts-ignore
import tr1 from '../../imgs/tr1.jpg';
// @ts-ignore
import tr2 from '../../imgs/tr2.jpg';
// @ts-ignore
import cmt1 from '../../imgs/CMT1.jpg';
// @ts-ignore
import cmt2 from '../../imgs/CMT2.jpg';
// @ts-ignore
import cmt3 from '../../imgs/CMT3.jpg';
// @ts-ignore
import cmt4 from '../../imgs/CMT4.jpg';
// @ts-ignore
import crms1 from '../../imgs/CRMS (1).jpg';
// @ts-ignore
import crms2 from '../../imgs/CRMS (2).jpg';
// @ts-ignore
import crms3 from '../../imgs/CRMS (3).jpg';
// @ts-ignore
import crms4 from '../../imgs/CRMS (4).jpg';
// @ts-ignore
import lms1 from '../../imgs/lms (1).jpg';
// @ts-ignore
import lms2 from '../../imgs/lms (2).jpg';
// @ts-ignore
import lms3 from '../../imgs/lms (3).jpg';
// @ts-ignore
import lms4 from '../../imgs/lms (4).jpg';
// @ts-ignore
import auto1 from '../../imgs/automation (1).jpg';
// @ts-ignore
import auto2 from '../../imgs/automation (2).jpg';
// Import extra CRM screenshots for full showcase
// @ts-ignore
import crm1 from '../../imgs/CRM (1).jpg';
// @ts-ignore
import crm2 from '../../imgs/CRM (2).jpg';
// @ts-ignore
import crm3 from '../../imgs/CRM (3).jpg';
// @ts-ignore
import crm4 from '../../imgs/CRM (4).jpg';
// @ts-ignore
import crm5 from '../../imgs/CRM (5).jpg';
// @ts-ignore
import crm6 from '../../imgs/CRM (6).jpg';
// @ts-ignore
import crm7 from '../../imgs/CRM (7).jpg';
// @ts-ignore
import crm8 from '../../imgs/CRM (8).jpg';

import MetaAdReportShowcase from './MetaAdReportShowcase';
import AutoFlowPro from './AutoFlowPro';

interface CutePortfolioProps {
  onToggleClassic: () => void;
}

const RAW_PAGES = [
  'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/B%E1%BA%A3n%20%20(14.5%20x%2020.5%20cm).png', // Cover
  'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/71.png',
  'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/60.png',
  'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/109.png',
  'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/107.png'
];

const SHEETS = [
  { front: RAW_PAGES[0], back: RAW_PAGES[1] },
  { front: RAW_PAGES[2], back: RAW_PAGES[3] },
  { front: RAW_PAGES[4], back: 'END_SCREEN' },
];

const CutePortfolio: React.FC<CutePortfolioProps> = ({ onToggleClassic }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isGamePdfOpen, setIsGamePdfOpen] = useState(false);
  
  // Book simulator states
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewList, setPreviewList] = useState<string[]>([]);

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewList.length > 1 && previewImage) {
      const curIdx = previewList.indexOf(previewImage);
      const prevIdx = (curIdx - 1 + previewList.length) % previewList.length;
      setPreviewImage(previewList[prevIdx]);
    }
  };

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewList.length > 1 && previewImage) {
      const curIdx = previewList.indexOf(previewImage);
      const nextIdx = (curIdx + 1) % previewList.length;
      setPreviewImage(previewList[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!previewImage || previewList.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        const curIdx = previewList.indexOf(previewImage);
        const prevIdx = (curIdx - 1 + previewList.length) % previewList.length;
        setPreviewImage(previewList[prevIdx]);
      } else if (e.key === 'ArrowRight') {
        const curIdx = previewList.indexOf(previewImage);
        const nextIdx = (curIdx + 1) % previewList.length;
        setPreviewImage(previewList[nextIdx]);
      } else if (e.key === 'Escape') {
        setPreviewImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, previewList]);

  // Expanded gallery states
  const [activeCrmImg, setActiveCrmImg] = useState(crms1);
  const [activeMinthImg, setActiveMinthImg] = useState(crm1);
  const [activeLmsImg, setActiveLmsImg] = useState(lms1);
  const [activeDataImg, setActiveDataImg] = useState('https://domation.net/CHIA DATA/chia_data (6).png');

  const CHIA_DATA_IMAGES = [
    'https://domation.net/CHIA DATA/chia_data (6).png',
    'https://domation.net/CHIA DATA/chia_data (8).png',
    'https://domation.net/CHIA DATA/chia_data (9).png',
    'https://domation.net/CHIA DATA/chia_data (14).png',
    'https://domation.net/CHIA DATA/chia_data (15).png',
    'https://domation.net/CHIA DATA/chia_data (16).png',
    'https://domation.net/CHIA DATA/chia_data (17).png',
    'https://domation.net/CHIA DATA/chia_data (18).png',
    'https://domation.net/CHIA DATA/chia_data (19).png',
    'https://domation.net/CHIA DATA/chia_data (20).png',
    'https://domation.net/CHIA DATA/chia_data (21).png',
    'https://domation.net/CHIA DATA/chia_data (22).png'
  ];

  // Projects filter state (for the 8 dev projects)
  const [projFilter, setProjFilter] = useState<'all' | 'Dev' | 'Marketing'>('all');

  const handleNextPage = () => {
    if (flippedIndex < SHEETS.length - 1) setFlippedIndex(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (flippedIndex >= 0) setFlippedIndex(prev => prev - 1);
  };

  const handleNavigateFromBot = (tab: string) => {
    const validTabs = ['dashboard', 'galaxy', 'saas', 'martech', 'meta-report', 'automation', 'zalo', 'tarot', 'book', 'landings', 'outsource', 'partners', 'certifications'];
    if (validTabs.includes(tab)) {
      setActiveTab(tab);
      setMobileMenuOpen(false);
      setChatOpen(false);
    }
  };

  const menuItems = [
    { id: 'dashboard', name: 'Overview', icon: <Grid size={16} /> },
    { id: 'galaxy', name: '3D Orbit', icon: <Compass size={16} /> },
    { id: 'saas', name: 'SaaS Apps', icon: <Database size={16} /> },
    { id: 'martech', name: 'Data Flow', icon: <Server size={16} /> },
    { id: 'meta-report', name: 'Ads Report', icon: <BarChart3 size={16} /> },
    { id: 'automation', name: 'Automation', icon: <Zap size={16} /> },
    { id: 'landings', name: 'Landings', icon: <Globe size={16} /> },
    { id: 'zalo', name: 'Zalo App', icon: <MonitorSmartphone size={16} /> },
    { id: 'tarot', name: 'Tarot App', icon: <Sparkles size={16} /> },
    { id: 'book', name: 'Ads Book', icon: <BookOpen size={16} /> },
    { id: 'outsource', name: 'Case Study', icon: <BarChart3 size={16} /> },
    { id: 'partners', name: 'Partners', icon: <Users size={16} /> },
    { id: 'certifications', name: 'Credentials', icon: <Award size={16} /> },
  ];

  // Filter projects list
  const filteredProjects = PROJECTS.filter(p => {
    if (projFilter === 'all') return true;
    return p.category === projFilter;
  });

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans flex flex-col xl:flex-row relative overflow-hidden">
      
      {/* Dynamic Cyber Grid & Soft Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDelay: '3s' }} />

      {/* MOBILE HEADER */}
      <div className="xl:hidden flex items-center justify-between px-6 py-4 bg-[#0f0b24]/90 border-b border-purple-900/40 backdrop-blur-md sticky top-0 z-40 w-full shadow-sm">
        <div className="flex items-center gap-3">
          <img src={BRAND_LOGO} alt="DOM LOGO" className="w-8 h-8 object-contain" />
          <span className="font-black text-sm tracking-wider text-white">DOMARKETING</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleClassic} 
            className="px-4 py-2 border border-purple-900/40 hover:border-slate-400 hover:text-white rounded-full text-[10px] font-black uppercase tracking-wider transition-all"
          >
            Classic
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0f0b24] border-b border-purple-900/40 w-full z-30 absolute top-[69px] left-0 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                    activeTab === item.id 
                      ? 'bg-[#0f0b24] text-white' 
                      : 'text-slate-400 hover:bg-[#030014]'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SLIM LEFT SIDEBAR (DESKTOP) - REDUCED WIDTH TO 260PX */}
      <aside className="hidden xl:flex w-[260px] bg-[#0f0b24]/70 border-r border-purple-900/30 backdrop-blur-xl flex-col p-6 justify-between sticky top-0 h-screen z-20 shrink-0 shadow-sm">
        <div className="flex flex-col gap-6">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-[#161033] flex items-center justify-center shadow-md border border-purple-900/30">
              <img src={BRAND_LOGO} alt="DOM LOGO" className="w-5 h-5 object-contain filter invert brightness-200" />
            </div>
            <div>
              <h1 className="text-xs font-black tracking-widest text-white uppercase leading-none">DOMARKETING</h1>
              <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">AI Cockpit v2</span>
            </div>
          </div>

          {/* Navigation Menu (Sized up, spaced out, scrollbar hidden) */}
          <nav 
            className="flex flex-col gap-1.5 overflow-y-auto max-h-[65vh]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              // Clone icon with size 18
              const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                    isActive 
                      ? 'bg-[#0f0b24] text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-[#161033]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200 transition-colors'}>
                      {resizedIcon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-white/80' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={onToggleClassic}
            className="w-full py-2.5 border border-purple-900/40 hover:border-purple-900/40 hover:bg-[#030014] rounded-full text-slate-300 hover:text-white font-black text-[9px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
          >
            <RefreshCw size={10} className="animate-spin-slow" /> Classic View
          </button>
          
          <div className="flex items-center justify-between bg-[#030014] border border-purple-900/40 p-3 rounded-2xl">
            <a 
              href="https://domation.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2.5 min-w-0 hover:opacity-85 transition-opacity cursor-pointer group"
            >
              <img 
                src="https://crm-domation.vercel.app/LOGO.jpg" 
                alt="DOMATION" 
                className="w-8 h-8 rounded-lg object-cover border border-purple-900/40 group-hover:border-slate-400 transition-colors" 
              />
              <div className="min-w-0">
                <p className="text-[10px] font-black text-white group-hover:text-white transition-colors truncate leading-none">DOMATION</p>
                <span className="text-[7.5px] text-slate-400 font-black uppercase tracking-wider block mt-1">Automation Hub</span>
              </div>
            </a>
            {/* Social profiles icons */}
            <div className="flex items-center gap-2 border-l border-purple-900/40 pl-3">
              <a 
                href="https://www.linkedin.com/in/turnio-dev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn"
                className="p-1 hover:bg-[#161033] rounded-md transition-colors"
              >
                <svg className="w-4 h-4 text-slate-400 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@turnio.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="TikTok"
                className="p-1 hover:bg-[#161033] rounded-md transition-colors"
              >
                <svg className="w-4 h-4 text-slate-400 hover:text-rose-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.12 1.12 1.09 2.63 1.62 4.17 1.68v3.86c-1.77-.07-3.48-.73-4.78-1.95v7.6c.03 1.71-.43 3.4-1.39 4.79-.97 1.39-2.42 2.37-4.06 2.73-1.63.36-3.34.19-4.88-.47-1.54-.66-2.78-1.85-3.52-3.37-.76-1.51-.95-3.26-.53-4.89.41-1.63 1.39-3.05 2.75-4.01 1.37-.96 3.03-1.39 4.69-1.2 1.65.18 3.19.98 4.24 2.27V.02z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* CENTRAL MAIN WORKSPACE PANEL - SPANS WIDESCREEN WIDTH WITH PB-32 FOR BOTTOM SPACING */}
      <main className="flex-1 px-4 md:px-10 pt-8 pb-32 relative z-10 overflow-y-auto max-h-screen">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            
            {/* OVERVIEW DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-10 w-full">
                
                {/* HERO: 3D Dark Bento Glassmorphic Grid (Redesigned with Slate/Charcoal to moderate purple usage) */}
                <div className="relative bg-[#0f172a] border border-purple-900/40 rounded-2xl p-8 md:p-12 text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[380px]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
                  <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full border border-purple-900/40/40 [transform:rotateX(60deg)_rotateY(10deg)] pointer-events-none z-0 hidden lg:block" />
                  <div className="absolute -right-10 -bottom-10 w-[350px] h-[350px] rounded-full border border-purple-900/40/30 [transform:rotateX(60deg)_rotateY(10deg)] pointer-events-none z-0 hidden lg:block" />
                  <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-slate-300/10 rounded-full blur-[80px] pointer-events-none z-0" />
                  <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-slate-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

                  <div className="flex-1 space-y-6 relative z-10 max-w-2xl">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 bg-[#161033] border border-purple-900/40 px-4 py-1.5 rounded-full inline-block">
                       MARTECH & FULLSTACK COCKPIT
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                      HUỲNH TRỌNG PHỤC
                    </h2>
                    <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed text-justify">
                      Chuyển đổi số toàn diện cho doanh nghiệp vừa và nhỏ.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4">
                      <button 
                        onClick={() => setActiveTab('galaxy')} 
                        className="px-6 py-3.5 bg-[#0f0b24] text-white hover:bg-[#161033] font-black text-xs tracking-widest uppercase rounded-full shadow-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
                      >
                        Explore 3D Galaxy <ArrowRight size={14} />
                      </button>
                      <a 
                        href="https://domation.net/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3.5 bg-[#0f0b24]/10 border border-white/20 hover:bg-[#0f0b24]/20 text-white font-black text-xs tracking-widest uppercase rounded-full flex items-center gap-2 transition-all"
                      >
                        Visit domation.net <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-96 h-80 relative items-center justify-center z-10 shrink-0">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-72 h-72 rounded-full border border-dashed border-purple-900/30/20"
                    />
                    {[
                      { icon: <Database size={16} />, label: 'CRM Sync', angle: 0 },
                      { icon: <MonitorSmartphone size={16} />, label: 'Zalo SDK', angle: 72 },
                      { icon: <Zap size={16} />, label: 'n8n Flow', angle: 144 },
                      { icon: <Cpu size={16} />, label: 'Apps Script', angle: 216 },
                      { icon: <Bot size={16} />, label: 'AI Agent', angle: 288 },
                    ].map((node, idx) => {
                      const radius = 144;
                      const angleRad = (node.angle * Math.PI) / 180;
                      const x = radius * Math.cos(angleRad);
                      const y = radius * Math.sin(angleRad);

                      return (
                        <motion.div
                          key={idx}
                          style={{ x, y }}
                          animate={{ rotate: -360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                          className="absolute w-12 h-12 bg-[#0f0b24]/10 border border-white/20 rounded-full flex flex-col items-center justify-center text-slate-300 shadow-lg cursor-pointer hover:bg-[#0f0b24] hover:text-white hover:border-white transition-colors group"
                        >
                          {node.icon}
                          <span className="absolute top-14 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-purple-900/40 text-[8px] font-black uppercase text-white scale-0 group-hover:scale-100 transition-transform whitespace-nowrap">
                            {node.label}
                          </span>
                        </motion.div>
                      );
                    })}

                    <div className="w-24 h-24 rounded-full bg-slate-800 border border-purple-900/30 flex flex-col items-center justify-center p-3 text-center shadow-2xl backdrop-blur-xl animate-pulse">
                      <Sparkles size={28} className="text-slate-300 mb-1" />
                      <span className="text-[8px] font-black tracking-widest text-white">DOM ENGINE</span>
                    </div>
                  </div>
                </div>

                {/* 3D Bento stats */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Key Performance Metrics</h3>
                  <BentoStats3D />
                </div>

                {/* The Bridge Flow */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">The Core Pipeline</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {BRIDGE_CARDS.map((card, i) => (
                      <div key={i} className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 shadow-sm relative group hover:border-purple-900/40 transition-all hover:-translate-y-0.5">
                        <div className="w-12 h-12 rounded-2xl bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-6">
                          {card.icon}
                        </div>
                        <span className="absolute top-8 right-8 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                          {card.step}
                        </span>
                        <h4 className="text-lg font-black text-white mb-3 relative z-10">{card.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bento Tech Grid */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Tech Stack & MarTech</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {TECH_GRID.map((tech, i) => (
                      <div key={i} className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
                        <div className="p-2.5 bg-[#030014] border border-purple-900/30 rounded-xl shrink-0 text-slate-300">
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-slate-200 leading-none">{tech.title}</h4>
                          <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest mt-1.5 block">{tech.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3D ORBIT GALAXY */}
            {activeTab === 'galaxy' && (
              <div className="space-y-6 w-full">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">PRODUCT GALAXY 3D</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Xoay để khám phá hệ sinh thái sản phẩm công nghệ và marketing.</p>
                </div>
                <ProductGalaxy3D />
              </div>
            )}

            {activeTab === 'saas' && (
              <div className="space-y-10 w-full">
                {/* DOMATION CRM CARD */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-4 max-w-3xl text-left">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40 inline-block">
                        Enterprise CRM
                      </span>
                      <h3 className="text-3xl font-black text-white">DOMATION CRM</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                        Hệ thống quản lý quan hệ khách hàng (CRM) chuyên sâu dành cho doanh nghiệp SME. Hỗ trợ quản lý dữ liệu phễu khách hàng khép kín, phân bổ số tự động, quản lý kho sản phẩm, tài chính hóa đơn và Ticket CSKH.
                      </p>
                    </div>
                    <div className="shrink-0 pt-2">
                      <a 
                        href="https://domation.net/crm" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md flex items-center gap-2"
                      >
                        Dùng Thử Ngay <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (DOMATION CRM) */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full max-w-4xl justify-center">
                      {/* Prev Button */}
                      <button 
                        onClick={() => {
                          const crmList = [crms1, crms2, crms3, crms4];
                          const curIdx = crmList.indexOf(activeCrmImg);
                          const prevIdx = (curIdx - 1 + crmList.length) % crmList.length;
                          setActiveCrmImg(crmList[prevIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      {/* Image Container */}
                      <div className="flex-1 aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl relative group bg-[#161033]">
                        <div className="absolute inset-0">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeCrmImg}
                              src={activeCrmImg} 
                              alt="DOMATION CRM" 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="w-full h-full object-cover" 
                            />
                          </AnimatePresence>
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeCrmImg); setPreviewList([crms1, crms2, crms3, crms4]); }}>
                          <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button 
                        onClick={() => {
                          const crmList = [crms1, crms2, crms3, crms4];
                          const curIdx = crmList.indexOf(activeCrmImg);
                          const nextIdx = (curIdx + 1) % crmList.length;
                          setActiveCrmImg(crmList[nextIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                    {/* Index Indicator */}
                    <span className="text-xs text-slate-400 font-bold mt-3">
                      Image {[crms1, crms2, crms3, crms4].indexOf(activeCrmImg) + 1} of 4
                    </span>
                    {/* CRM Thumbnail Gallery Selector */}
                    <div className="w-full max-w-4xl flex gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[crms1, crms2, crms3, crms4].map((img, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveCrmImg(img)}
                          className={`w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                            activeCrmImg === img ? 'border-purple-900/40 scale-105 shadow-sm' : 'border-purple-900/40 hover:border-slate-400'
                          }`}
                        >
                          <img src={img} alt={`CRM Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 pt-4">
                    {[
                      { title: "Quản Lý Khách Hàng", desc: "Lưu trữ toàn bộ thông tin liên hệ, phân loại VIP/Mới khoa học.", icon: <Users size={18} /> },
                      { title: "Phễu Bán Hàng", desc: "Theo dõi tiến độ Deals, dự báo doanh thu thực tế.", icon: <Compass size={18} /> },
                      { title: "Kiểm Soát Tồn Kho", desc: "Quản lý tồn kho theo lô, cảnh báo hàng sắp hết.", icon: <Database size={18} /> },
                      { title: "Tài Chính Hóa Đơn", desc: "Tính hóa đơn, doanh thu và biên lợi nhuận gộp.", icon: <Layers size={18} /> },
                      { title: "Hỗ Trợ Kỹ Thuật", desc: "Tiếp nhận và xử lý tickets phản hồi của khách hàng.", icon: <Layers size={18} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MINTH CRM & POS CARD */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-4 max-w-3xl text-left">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40 inline-block">
                        SME Retail ERP
                      </span>
                      <h3 className="text-3xl font-black text-white">MINTH CRM & POS</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                        Giải pháp quản lý bán hàng "Tinh gọn - Hiện đại - Dễ dùng" dành riêng cho các shop vừa và nhỏ. Chỉ với 1 màn hình duy nhất, bạn nắm trọn toàn bộ bức tranh tài chính và vận hành của cửa hàng.
                      </p>
                    </div>
                    <div className="shrink-0 pt-2">
                      <span className="px-5 py-2.5 bg-[#161033] border border-purple-900/40 text-slate-400 font-bold text-xs uppercase tracking-widest rounded-full">
                        Retail POS System
                      </span>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (MINTH CRM & POS) */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full max-w-4xl justify-center">
                      {/* Prev Button */}
                      <button 
                        onClick={() => {
                          const minthList = [crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8];
                          const curIdx = minthList.indexOf(activeMinthImg);
                          const prevIdx = (curIdx - 1 + minthList.length) % minthList.length;
                          setActiveMinthImg(minthList[prevIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      {/* Image Container */}
                      <div className="flex-1 aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl relative group bg-[#161033]">
                        <div className="absolute inset-0">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeMinthImg}
                              src={activeMinthImg} 
                              alt="MINTH CRM & POS" 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="w-full h-full object-cover" 
                            />
                          </AnimatePresence>
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeMinthImg); setPreviewList([crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8]); }}>
                          <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button 
                        onClick={() => {
                          const minthList = [crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8];
                          const curIdx = minthList.indexOf(activeMinthImg);
                          const nextIdx = (curIdx + 1) % minthList.length;
                          setActiveMinthImg(minthList[nextIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                    {/* Index Indicator */}
                    <span className="text-xs text-slate-400 font-bold mt-3">
                      Image {[crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8].indexOf(activeMinthImg) + 1} of 8
                    </span>
                    {/* CRM Thumbnail Gallery Selector */}
                    <div className="w-full max-w-4xl flex gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8].map((img, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveMinthImg(img)}
                          className={`w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                            activeMinthImg === img ? 'border-purple-900/40 scale-105 shadow-sm' : 'border-purple-900/40 hover:border-slate-400'
                          }`}
                        >
                          <img src={img} alt={`Minth Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {[
                      { title: "Bento Dashboard", desc: "Cập nhật tức thời doanh thu, lợi nhuận gộp, AOV và tính sẵn LN ròng.", icon: <Layers size={18} /> },
                      { title: "CRM \"Mini\" Siêu Nhẹ", desc: "Quản lý khách hàng, tự động thống kê khách VIP và xem lịch sử mua hàng.", icon: <Users size={18} /> },
                      { title: "Cảnh Báo Tồn Kho", desc: "Tự động cảnh báo hàng Sắp hết và Sắp hết hạn để tối ưu dòng vốn.", icon: <Database size={18} /> },
                      { title: "Giờ Vàng Mua Sắm", desc: "Phân tích thời điểm khách chốt đơn nhiều nhất để chạy Ads hoặc khuyến mãi.", icon: <Compass size={18} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LMS E-LEARNING */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                  <div className="space-y-4 max-w-3xl">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40 inline-block">
                      Edu-Tech Solution
                    </span>
                    <h3 className="text-3xl font-black text-white">LMS E-LEARNING Platform</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      Nền tảng quản lý học tập (LMS) hoàn chỉnh. Sở hữu toàn bộ các tính năng cốt lõi của một hệ thống giáo dục trực tuyến chuyên nghiệp nhất, đáp ứng quy mô học viên lớn.
                    </p>
                  </div>

                  {/* Widescreen Slideshow Gallery (LMS) */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full max-w-4xl justify-center">
                      {/* Prev Button */}
                      <button 
                        onClick={() => {
                          const lmsList = [lms1, lms2, lms3, lms4];
                          const curIdx = lmsList.indexOf(activeLmsImg);
                          const prevIdx = (curIdx - 1 + lmsList.length) % lmsList.length;
                          setActiveLmsImg(lmsList[prevIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      {/* Image Container */}
                      <div className="flex-1 aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl relative group bg-[#161033]">
                        <div className="absolute inset-0">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeLmsImg}
                              src={activeLmsImg} 
                              alt="LMS Platform" 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="w-full h-full object-cover" 
                            />
                          </AnimatePresence>
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeLmsImg); setPreviewList([lms1, lms2, lms3, lms4]); }}>
                          <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button 
                        onClick={() => {
                          const lmsList = [lms1, lms2, lms3, lms4];
                          const curIdx = lmsList.indexOf(activeLmsImg);
                          const nextIdx = (curIdx + 1) % lmsList.length;
                          setActiveLmsImg(lmsList[nextIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                    {/* Index Indicator */}
                    <span className="text-xs text-slate-400 font-bold mt-3">
                      Image {[lms1, lms2, lms3, lms4].indexOf(activeLmsImg) + 1} of 4
                    </span>
                    {/* LMS Thumbnail Gallery Selector */}
                    <div className="w-full max-w-4xl flex gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[lms1, lms2, lms3, lms4].map((img, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveLmsImg(img)}
                          className={`w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                            activeLmsImg === img ? 'border-purple-900/40 scale-105 shadow-sm' : 'border-purple-900/40 hover:border-slate-400'
                          }`}
                        >
                          <img src={img} alt={`LMS Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 pt-4">
                    {[
                      { title: "Bài Giảng Video", desc: "Streaming mượt mà, Course phân loại khoa học.", icon: <GraduationCap size={18} /> },
                      { title: "Trắc Nghiệm Tự Động", desc: "Tính giờ câu hỏi, trả kết quả kiểm tra tức thì.", icon: <CheckCircle size={18} /> },
                      { title: "Cấp Certs PDF", desc: "Tự động xuất chứng chỉ PDF khi đạt yêu cầu.", icon: <Award size={18} /> },
                      { title: "Tracking Tiến Độ", desc: "Theo dõi % hoàn thành khóa học của từng user.", icon: <BarChart3 size={18} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'martech' && (
              <div className="space-y-10 w-full">
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-4 max-w-3xl text-left">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40 inline-block">
                        Data Routing Solution
                      </span>
                      <h3 className="text-3xl font-black text-white">DOMATION Data Routing (Chia Data)</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                        Hệ thống chuyển dữ liệu tự động thời gian thực từ Landing Page, Facebook Ads, Zalo Form về CRM nội bộ. Phân chia Data xoay vòng Round-Robin cho các Sale, nhận diện nghỉ phép, tự động báo lỗi và đền bù số qua Zalo Bot.
                      </p>
                    </div>
                    <div className="shrink-0 pt-2">
                      <a 
                        href="https://domation.net/data" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md flex items-center gap-2"
                      >
                        Dùng Thử Ngay <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (Data Routing) */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full max-w-4xl justify-center">
                      {/* Prev Button */}
                      <button 
                        onClick={() => {
                          const curIdx = CHIA_DATA_IMAGES.indexOf(activeDataImg);
                          const prevIdx = (curIdx - 1 + CHIA_DATA_IMAGES.length) % CHIA_DATA_IMAGES.length;
                          setActiveDataImg(CHIA_DATA_IMAGES[prevIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      {/* Image Container */}
                      <div className="flex-1 aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl relative group bg-[#161033]">
                        <div className="absolute inset-0">
                          <AnimatePresence mode="wait">
                            <motion.img 
                              key={activeDataImg}
                              src={activeDataImg} 
                              alt="Data Routing Platform" 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="w-full h-full object-cover" 
                            />
                          </AnimatePresence>
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeDataImg); setPreviewList(CHIA_DATA_IMAGES); }}>
                          <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                        </div>
                      </div>

                      {/* Next Button */}
                      <button 
                        onClick={() => {
                          const curIdx = CHIA_DATA_IMAGES.indexOf(activeDataImg);
                          const nextIdx = (curIdx + 1) % CHIA_DATA_IMAGES.length;
                          setActiveDataImg(CHIA_DATA_IMAGES[nextIdx]);
                        }}
                        className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </div>
                    {/* Index Indicator */}
                    <span className="text-xs text-slate-400 font-bold mt-3">
                      Image {CHIA_DATA_IMAGES.indexOf(activeDataImg) + 1} of {CHIA_DATA_IMAGES.length}
                    </span>
                    {/* 12 Data Flow Thumbnails */}
                    <div className="w-full max-w-4xl flex gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {CHIA_DATA_IMAGES.map((img, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveDataImg(img)}
                          className={`w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                            activeDataImg === img ? 'border-purple-900/40 scale-105 shadow-sm' : 'border-purple-900/40 hover:border-slate-400'
                          }`}
                        >
                          <img src={img} alt={`Data Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 pt-4">
                    {[
                      { title: "Đồng Bộ Realtime", desc: "Leads từ Meta Ads/Sheets đổ thẳng về CRM không trễ.", icon: <Zap size={18} /> },
                      { title: "Zalo & Email Alert", desc: "Zalo Bot gửi thông tin chi tiết lead cho tư vấn viên.", icon: <Bot size={18} /> },
                      { title: "Routing Round-Robin", desc: "Tự động xoay vòng phân phối số công bằng cho Sales.", icon: <Compass size={18} /> },
                      { title: "Đền Bù Số Tự Động", desc: "Hệ thống duyệt báo lỗi số trùng, tự bù data mới.", icon: <ShieldCheck size={18} /> },
                      { title: "Nhận Diện Nghỉ Phép", desc: "Tạm ngưng chia số khi Sales nghỉ phép để tránh nguội data.", icon: <Users size={18} /> },
                      { title: "Báo Cáo Cuối Ngày", desc: "Zalo Bot tự động tổng kết báo cáo hiệu suất của từng Sales.", icon: <BarChart3 size={18} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-xs">
                        <CheckCircle size={16} className="text-white shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-200">{item.title}</h5>
                          <p className="text-slate-400 font-light mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <TechLab />
              </div>
            )}

            {/* META AD REPORT TAB */}
            {activeTab === 'meta-report' && (
              <div className="space-y-6 w-full">
                <MetaAdReportShowcase />
              </div>
            )}

            {/* MARTECH AUTOMATION TAB */}
            {activeTab === 'automation' && (
              <div className="space-y-6 w-full">
                <AutoFlowPro />
              </div>
            )}

            {/* LANDING PAGES TAB */}
            {activeTab === 'landings' && (
              <div className="space-y-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(147, 51, 234, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Nava Store" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/nava.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      </div>
                      <a href="https://navastore.vn/" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>
                      
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Nava Store</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Website thương mại điện tử (E-commerce) chuyên nghiệp, tối ưu hóa trải nghiệm mua sắm và quy trình thanh toán.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">E-commerce</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">React/Vite</span>
                        </div>
                        <a 
                          href="https://navastore.vn/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Viện IDEAS MBA */}
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(236, 72, 153, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Viện IDEAS MBA" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/ideasmba.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-fuchsia-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                      </div>
                      <a href="https://ideas.edu.vn/mba" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>

                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Viện IDEAS MBA</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page tuyển sinh chương trình Thạc sĩ Quản trị Kinh doanh (MBA), tập trung tối đa tỷ lệ chuyển đổi điền form.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Education</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Conversion</span>
                        </div>
                        <a 
                          href="https://ideas.edu.vn/mba" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Turnio Portfolio */}
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(16, 185, 129, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Turnio Portfolio" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/portfolio.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-emerald-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                      </div>
                      <a href="https://portfo-turnio.vercel.app/" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>

                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Turnio Portfolio</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Trang thông tin năng lực (Portfolio) cao cấp của Creative Agency, hiển thị dự án với hiệu ứng tương tác 3D mượt mà.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Creative</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Next.js</span>
                        </div>
                        <a 
                          href="https://portfo-turnio.vercel.app/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Cấy Ghép Nha Khoa */}
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(245, 158, 11, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Cấy Ghép Nha Khoa Cơ Bản" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/brandson.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-amber-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <a href="https://brandson.vn/cay-ghep-nha-khoa-co-ban" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>

                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Cấy Ghép Nha Khoa</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page giới thiệu và tuyển sinh khóa đào tạo Cấy ghép Nha khoa Cơ bản của Brandson Academy cấp chứng chỉ CME.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">CME Course</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Medical</span>
                        </div>
                        <a 
                          href="https://brandson.vn/cay-ghep-nha-khoa-co-ban" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Ngày Hội Implant */}
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(244, 63, 94, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Ngày Hội Implant Flora" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/flora.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-rose-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                      </div>
                      <a href="https://nhakhoaflora.com/ngay-hoi-implant/" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>

                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Ngày Hội Implant</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page sự kiện thường niên "Ngày Hội Implant" của Nha khoa Flora, thiết kế nhằm thúc đẩy đặt hẹn khám trực tiếp.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Dental Clinic</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Campaign</span>
                        </div>
                        <a 
                          href="https://nhakhoaflora.com/ngay-hoi-implant/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Viện Đào Tạo IDEAS */}
                  <div className="group relative block rounded-2xl bg-[#0f0b24] border border-purple-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(300px at left top, rgba(99, 102, 241, 0.15), transparent 70%)" }}></div>
                    <div className="relative overflow-hidden aspect-video bg-[#161033] border-b border-purple-900/40">
                      <img alt="Viện Đào Tạo IDEAS" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" src="https://domation.net/landingpage_avatar/ideasedu.webp" />
                      <div className="absolute top-3 left-3 p-2 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-xl text-indigo-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                      </div>
                      <a href="https://ideas.edu.vn/" target="_blank" rel="noreferrer" className="absolute top-3 right-3 text-slate-400 group-hover:text-white p-1.5 bg-[#0f0b24]/80 backdrop-blur-md border border-purple-900/30 rounded-full transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                    <div className="p-6 relative z-10 space-y-4">
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161033] border border-purple-900/40 rounded-full text-[9px] font-black text-white hover:bg-purple-900/20 transition-colors uppercase tracking-wider">
                        <Zap size={10} className="animate-pulse" /> Lead Sync: domation.net
                      </a>

                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Viện Đào Tạo IDEAS</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Trang thông tin điện tử tích hợp của Viện Đào Tạo & Nghiên Cứu Quản Trị IDEAS, giới thiệu hoạt động và cổng thông tin sinh viên.</p>
                      <a href="https://domation.net/" target="_blank" rel="noreferrer" className="text-[10px] text-slate-300 hover:text-white font-bold flex items-center gap-1">
                         Link lead sync: https://domation.net/
                      </a>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Institutional</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Portal</span>
                        </div>
                        <a 
                          href="https://ideas.edu.vn/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold text-[9px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1 shrink-0 transition-colors"
                        >
                          Xem Website <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ZALO MINI APP SHOWCASE */}
            {activeTab === 'zalo' && (
              <div className="space-y-10 w-full">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">ZALO MINI APP DEMO</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Giao diện Mini App chăm sóc khách hàng được lập trình native bằng React & TypeScript.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    <div className="relative z-10 w-[320px] md:w-[380px] h-[550px] md:h-[650px] bg-black border-[8px] border-[#1e293b] rounded-2xl shadow-2xl ring-4 ring-slate-200/50 overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-30 flex items-center justify-center">
                        <div className="w-12 h-1.5 bg-[#0f172a] rounded-full"></div>
                      </div>
                      <iframe 
                        src="https://turniodev.github.io/zala_ideas" 
                        title="Zalo Mini App Simulator"
                        className="w-full h-full bg-[#0f0b24] border-0"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    </div>
                    <div className="mt-4 flex gap-4">
                      <a 
                        href="https://turniodev.github.io/zala_ideas" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-[#0f0b24] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-2 hover:bg-[#1a143d] transition-colors"
                      >
                        Open Fullscreen <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 shadow-sm space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">Loyalty Platform</span>
                      <h3 className="text-2xl font-black text-white">Tối Ưu Retention Rate</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                        Mini App trên Zalo giúp doanh nghiệp tận dụng cơ sở dữ liệu khổng lồ của Zalo mà không cần ép khách hàng tải app nặng nề. Hỗ trợ đầy đủ các tính năng:
                      </p>
                      <ul className="space-y-3 text-sm text-slate-300 font-light">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Tích điểm thành viên qua QR Code định danh.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Thăng hạng thông minh (Silver, Gold, VIP).
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Đổi voucher ưu đãi và gửi thông báo ZNS tự động.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Đồng bộ dữ liệu real-time với CRM nội bộ.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MYSTERY TAROT SHOWCASE */}
            {activeTab === 'tarot' && (
              <div className="space-y-10 w-full">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">MYSTERY TAROT</h2>
                    <p className="text-sm text-slate-400 font-light mt-1">Nền tảng xem Tarot số kết hợp 600+ bài viết chuẩn SEO tạo lập tự động bằng Gemini AI.</p>
                  </div>
                  <a 
                    href="https://www.mystery-tarot.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-fit px-6 py-3 bg-[#0f0b24] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-2"
                  >
                    Xem Live Tarot <ExternalLink size={12} />
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div 
                    className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
                    onClick={() => { setPreviewImage(tr1); setPreviewList([tr1, tr2]); }}
                  >
                    <img src={tr1} alt="Tarot Screen 1" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Click to view</span>
                    </div>
                  </div>
                  <div 
                    className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
                    onClick={() => { setPreviewImage(tr2); setPreviewList([tr1, tr2]); }}
                  >
                    <img src={tr2} alt="Tarot Screen 2" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Click to view</span>
                    </div>
                  </div>
                </div>

                {/* Rating Board */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#030014] border border-purple-900/40 rounded-2xl p-8 flex flex-col items-center justify-center shadow-inner">
                    <span className="text-[10px] text-white font-black tracking-widest uppercase mb-2">ĐIỂM TRUNG BÌNH</span>
                    <div className="text-5xl font-black text-amber-500 flex items-baseline gap-1">
                      5.0 <span className="text-base text-slate-400">/ 5.0</span>
                    </div>
                    <div className="flex gap-1 text-amber-400 mt-3">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                    </div>
                    <span className="text-xs text-slate-400 font-medium mt-2">274 lượt đánh giá</span>
                  </div>

                  <div className="bg-[#161033]/50 border border-purple-900/40 rounded-2xl p-8 space-y-4">
                    <span className="text-[10px] text-slate-400 font-black tracking-widest uppercase block">PHÂN BỔ ĐÁNH GIÁ</span>
                    <div className="space-y-2">
                      {[
                        { stars: 5, percent: 98, count: 269 },
                        { stars: 4, percent: 1, count: 3 },
                        { stars: 3, percent: 0, count: 0 },
                        { stars: 2, percent: 0, count: 0 },
                        { stars: 1, percent: 1, count: 2 },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 text-xs">
                          <span className="w-8 font-bold text-slate-300">{row.stars} </span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${row.percent}%` }} />
                          </div>
                          <span className="w-8 text-right text-slate-400 font-mono">{row.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback Captures */}
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest text-center">Đánh Giá Từ Cộng Đồng</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[cmt1, cmt2, cmt3, cmt4].map((cmt, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-2xl overflow-hidden border border-purple-900/40 shadow-sm cursor-pointer hover:border-purple-900/30 hover:scale-[1.03] transition-all"
                        onClick={() => { setPreviewImage(cmt); setPreviewList([cmt1, cmt2, cmt3, cmt4]); }}
                      >
                        <img src={cmt} alt="User Feedback" className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FACEBOOK ADS BOOK */}
            {activeTab === 'book' && (
              <div className="space-y-10 w-full">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">FACEBOOK ADS BOOK</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Cuốn sách "Facebook Ads - AI Chạy Không Được" đúc kết bài học thực chiến và tư duy scale ngân sách.</p>
                </div>
                <div className="flex flex-col items-center gap-12 w-full">
                  {/* CSS 3D Flipping Book Simulator (Centered full screen) */}
                  <div className="w-full flex flex-col items-center justify-center relative min-h-[420px]">
                    <div className="absolute w-[300px] h-[400px] bg-indigo-950/20 rounded-full blur-[40px] pointer-events-none" />
                    
                    <div 
                      className="w-[260px] h-[360px] relative [perspective:1200px] z-10 select-none transition-transform duration-700"
                      style={{ transform: flippedIndex >= 0 && flippedIndex < SHEETS.length - 1 ? 'translateX(130px)' : 'translateX(0)' }}
                    >
                      <div className="w-full h-full relative [transform-style:preserve-3d]">
                        {SHEETS.map((sheet, index) => {
                          const isFlipped = index <= flippedIndex;
                          const rotY = isFlipped ? -180 : 0;
                          const translateZ = isFlipped ? -index : index;
                          const zIndex = isFlipped ? index : SHEETS.length - index;

                          return (
                            <motion.div
                              key={index}
                              animate={{ rotateY: rotY, z: translateZ }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              style={{ zIndex }}
                              className="absolute inset-0 w-full h-full origin-left [transform-style:preserve-3d] cursor-pointer"
                              onClick={handleNextPage}
                            >
                              {/* Page Front */}
                              <div className="absolute inset-0 w-full h-full bg-[#0f0b24] rounded-r-xl border border-purple-900/40 shadow-md [backface-visibility:hidden] overflow-hidden">
                                <img src={sheet.front} alt="Page Front" className="w-full h-full object-cover" />
                              </div>

                              {/* Page Back */}
                              <div className="absolute inset-0 w-full h-full bg-[#0f0b24] rounded-l-xl border border-purple-900/40 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex items-center justify-center">
                                {sheet.back === 'END_SCREEN' ? (
                                  <div className="p-6 text-center space-y-4">
                                    <h4 className="font-black text-white text-lg uppercase">Xin Cảm Ơn!</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-light">Hãy tải bản PDF đầy đủ để nghiên cứu chi tiết hơn nhé.</p>
                                    <a 
                                      href="https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing" 
                                      target="_blank" 
                                      rel="noreferrer"
                                      className="inline-block px-5 py-2.5 bg-amber-500 text-black font-black text-[10px] uppercase tracking-wider rounded-full hover:bg-slate-800 hover:text-white transition-all shadow-md"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      Download Full PDF
                                    </a>
                                  </div>
                                ) : (
                                  <img src={sheet.back} alt="Page Back" className="w-full h-full object-cover" />
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4 items-center z-10">
                      <button 
                        onClick={handlePrevPage}
                        disabled={flippedIndex === -1}
                        className="px-4 py-2 border border-purple-900/40 rounded-full bg-[#0f0b24] hover:bg-[#030014] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-xs font-bold text-slate-300 flex items-center gap-1.5"
                      >
                        <ChevronLeft size={16} /> Prev
                      </button>
                      <span className="text-xs font-bold text-slate-400">
                        {flippedIndex === -1 ? 'Bìa trước' : flippedIndex === SHEETS.length - 1 ? 'Bìa sau' : `Trang ${flippedIndex * 2 + 1} - ${flippedIndex * 2 + 2}`}
                      </span>
                      <button 
                        onClick={handleNextPage}
                        disabled={flippedIndex === SHEETS.length - 1}
                        className="px-4 py-2 border border-purple-900/40 rounded-full bg-[#0f0b24] hover:bg-[#030014] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-xs font-bold text-slate-300 flex items-center gap-1.5"
                      >
                        Next <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Horizontal Banner Underneath */}
                  <div className="w-full">
                    <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-10 shadow-sm w-full flex flex-col lg:flex-row gap-8 items-center justify-between">
                      <div className="space-y-4 flex-1">
                        <div className="flex gap-1.5 text-amber-400">
                          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">TƯ DUY QUẢNG CÁO BỀN VỮNG</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                          "AI chạy không được" ở đây ám chỉ các chiến thuật đặt thầu tự động thuần túy của các nền tảng sẽ đốt sạch ngân sách của bạn nếu không có một phễu bán hàng bền vững và một chiến lược bidding thông thái định hướng.
                        </p>
                      </div>

                      <div className="w-full lg:w-fit shrink-0 space-y-4 border-t lg:border-t-0 lg:border-l border-purple-900/30 pt-6 lg:pt-0 lg:pl-8">
                        <ul className="space-y-2 text-xs text-slate-300 font-bold">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Bản đồ thiết lập phễu quảng cáo tối ưu CPM.
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Cách kết hợp API để đo lường ROAS thời gian thực.
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#161033]0" /> Chiến thuật tăng ngân sách không tăng giá thầu.
                          </li>
                        </ul>
                        <div className="pt-2">
                          <a 
                            href="https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing" 
                            target="_blank" 
                            rel="noreferrer"
                            className="px-6 py-3 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-black text-xs uppercase tracking-widest rounded-full shadow-md flex items-center justify-center gap-2 w-full lg:w-auto"
                          >
                            Tải Full PDF <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CASE STUDIES, OUTSOURCE, & ACTUAL DEV PROJECTS */}
            {activeTab === 'outsource' && (
              <div className="space-y-12 w-full">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">CASE STUDIES</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Các dự án thực tế đạt hiệu quả cao và được kiểm định.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                  {/* Left Column: List of Cases (5 cols) */}
                  <div className="xl:col-span-5 space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      {OUTSOURCE_HIGHLIGHTS.map((item, i) => (
                        <div key={i} className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[360px]">
                          <div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {item.tags.map((tag) => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-[#161033] px-2.5 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-1">{item.company}</h3>
                            <span className="text-[9px] text-white font-black uppercase tracking-wider block mb-4">Success Story</span>
                            
                            <div className="grid grid-cols-3 gap-2 bg-[#030014] border border-purple-900/30 rounded-2xl p-4 mb-4">
                              <div>
                                <span className="text-[8px] text-slate-400 uppercase font-black block tracking-widest mb-1">Impact</span>
                                <span className="text-[10px] font-black text-slate-200 leading-tight">{item.impact}</span>
                              </div>
                              <div className="border-l border-purple-900/40 pl-3">
                                <span className="text-[8px] text-slate-400 uppercase font-black block tracking-widest mb-1">Efficiency</span>
                                <span className="text-[10px] font-black text-slate-400 leading-tight">{item.cost}</span>
                              </div>
                              <div className="border-l border-purple-900/40 pl-3">
                                <span className="text-[8px] text-slate-300 uppercase font-black block tracking-widest mb-1">Result</span>
                                <span className="text-xs font-black text-white leading-tight">{item.result}</span>
                              </div>
                            </div>
                          </div>

                          {item.logos && item.logos.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.logos.map((logo, idx) => (
                                <div key={idx} className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-900/30 shadow-sm shrink-0 bg-[#0f0b24]">
                                  <img src={logo.src} alt="brand logo" className="w-full h-full object-cover" />
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="border-t border-purple-900/30 pt-4">
                            <p 
                              className="text-slate-400 text-xs leading-relaxed font-light text-justify"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Minigame selector button panel */}
                    <div className="bg-[#0f0b24] p-6 rounded-2xl border border-purple-900/40 shadow-sm flex items-center justify-between gap-4 mt-4">
                      <div className="flex items-center gap-4">
                        <div className="text-white p-3 bg-[#161033] rounded-full shrink-0">
                          <Zap size={24} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white leading-none">Minigame Micro-sites</h4>
                          <p className="text-xs text-slate-400 mt-1.5 leading-none">Waterbomb 2025 Campaign Report</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: PDF Viewer Board (7 cols) */}
                  <div className="xl:col-span-7 flex flex-col bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-md min-h-[600px] xl:min-h-0 xl:h-[820px]">
                    {/* Header Toolbar */}
                    <div className="p-4 bg-[#0f0b24] border-b border-purple-900/40 flex justify-between items-center text-xs text-slate-400 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#161033] animate-pulse" />
                        <span className="font-bold text-white">WATERBOMB Campaign Report PDF</span>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={micrositePdf} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3 py-1.5 bg-[#161033] hover:bg-purple-900/20 text-slate-200 font-bold rounded-lg transition-colors flex items-center gap-1"
                        >
                          Mở Tab Mới <ExternalLink size={11} />
                        </a>
                        <a 
                          href={micrositePdf} 
                          download
                          className="px-3 py-1.5 bg-[#0f0b24] hover:bg-purple-900/20 text-white font-bold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                        >
                          Tải Xuống
                        </a>
                      </div>
                    </div>

                    {/* PDF embed viewer container */}
                    <div className="flex-1 w-full bg-slate-800 relative">
                      <object 
                        data={micrositePdf} 
                        type="application/pdf" 
                        className="w-full h-full border-0"
                      >
                        <iframe 
                          src={micrositePdf} 
                          className="w-full h-full border-0" 
                          title="Water Bomb 2025 Case Study PDF"
                        />
                      </object>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STRATEGIC NETWORK & PARTNERS TAB */}
            {activeTab === 'partners' && (
              <div className="space-y-10 w-full">
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
                  <div className="max-w-3xl">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">
                      Co-operative Network
                    </span>
                    <h3 className="text-3xl font-black text-white mt-4">Đồng hành cùng các thương hiệu hàng đầu</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light mt-2 text-justify">
                      Đồng hành cùng các thương hiệu hàng đầu để tạo ra giá trị bền vững và tăng trưởng vượt bậc. Các đối tác tiêu biểu trải dài từ ngành F&B, Giáo dục, Y tế đến Thương mại điện tử.
                    </p>
                  </div>

                  {/* 21 Partners Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6">
                    {PARTNERS.map((partner, idx) => (
                      <div 
                        key={idx} 
                        className="group flex flex-col items-center p-4 bg-[#030014] border border-purple-900/30 rounded-2xl hover:border-purple-500/50 hover:bg-[#0f0b24] transition-all text-center relative hover:shadow-md"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-900/30 shadow-sm bg-[#0f0b24] flex items-center justify-center shrink-0 mb-3 group-hover:scale-105 transition-transform duration-300">
                          <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">{partner.name}</h4>
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">{partner.industry}</span>
                        {partner.website && partner.website !== '#' && (
                          <a 
                            href={partner.website} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white transition-all p-1"
                            title="Visit Website"
                          >
                            <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CERTIFICATIONS & TIMELINE - DISPLAY CERTIFICATE IMAGES */}
            {activeTab === 'certifications' && (
              <div className="space-y-10 w-full">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">CERTIFICATIONS & PATH</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Các cột mốc học vấn, sự nghiệp và bộ sưu tập chứng chỉ chuyên môn của tôi.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12">
                  
                  {/* Career Timeline - Sticky scroll on desktop */}
                  <div className="lg:col-span-5 space-y-6 sticky top-8 self-start">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Kinh Nghiệm & Học Vấn</h3>
                    <div className="relative border-l-2 border-purple-900/40 pl-6 space-y-8 py-2">
                      {EXPERIENCES.map((exp) => (
                        <div key={exp.id} className="relative">
                          <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-900/40 bg-[#0f0b24] shadow-sm" />
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-black uppercase tracking-wider text-white bg-[#161033] border border-purple-900/40 px-3 py-1 rounded-full">
                              {exp.period}
                            </span>
                            <h4 className="text-lg font-black text-white leading-tight pt-1">
                              {exp.role}
                            </h4>
                            <p className="text-xs font-bold text-white">{exp.company}</p>
                            <p className="text-slate-400 text-xs leading-relaxed font-light pt-2 text-justify">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications with Images (AUDIT ADDITION: display cert images) */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Chứng Chỉ Chuyên Ngành</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {CERTIFICATIONS.map((cert) => (
                        <div 
                          key={cert.id} 
                          className="bg-[#0f0b24] border border-purple-900/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-purple-500/50 transition-all flex flex-col justify-between group"
                        >
                          {/* Certificate image header */}
                          <div 
                            className="aspect-[4/3] bg-[#161033] border-b border-purple-900/40 relative overflow-hidden cursor-pointer"
                            onClick={() => setPreviewImage(cert.image)}
                          >
                            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 bg-[#0f0b24]/95 rounded-full text-[9px] font-black text-slate-200 shadow-md uppercase tracking-wider">Xem Ảnh Bằng</span>
                            </div>
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[8px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-1 rounded-full border border-purple-900/40 inline-block mb-2">
                                {cert.year}
                              </span>
                              <h4 className="text-sm font-black text-slate-200 leading-snug group-hover:text-white transition-colors">
                                {cert.name}
                              </h4>
                              <p className="text-[10px] text-slate-400 mt-1 font-bold">{cert.issuer}</p>
                            </div>
                            
                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-[9px] font-black text-white uppercase tracking-wider mt-4 hover:underline"
                            >
                              Verify Credential <ExternalLink size={10} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Unified bottom spacing across all pages */}
            <div className="h-28 w-full block shrink-0 clear-both" />

          </motion.div>
        </AnimatePresence>

      </main>

      {/* FLOATING CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="w-[360px] sm:w-[380px] h-[550px] mb-4 shadow-2xl rounded-2xl overflow-hidden border border-purple-900/40 z-50 bg-[#0f0b24]"
            >
              <DomiBot onNavigate={handleNavigateFromBot} activeTab={activeTab} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-900 to-indigo-950 text-white flex items-center justify-center shadow-lg border border-purple-900/40 relative focus:outline-none"
        >
          {chatOpen ? <X size={24} /> : <Bot size={24} className="animate-pulse" />}
          {!chatOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-[#030014] animate-bounce" />
          )}
        </motion.button>
      </div>

      {/* Global Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 bg-[#161033]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="flex items-center gap-4 max-w-5xl w-full justify-center">
              {/* Prev Button inside Zoom Modal */}
              {previewList.length > 1 && (
                <button 
                  onClick={handleModalPrev}
                  className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0 z-10"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f0b24] p-2 rounded-2xl max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl relative flex-1 flex items-center justify-center"
              >
                <img src={previewImage} alt="Expanded Screenshot" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
                <button 
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>

              {/* Next Button inside Zoom Modal */}
              {previewList.length > 1 && (
                <button 
                  onClick={handleModalNext}
                  className="p-3 bg-[#0f0b24] hover:bg-[#030014] border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all shrink-0 z-10"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CutePortfolio;
