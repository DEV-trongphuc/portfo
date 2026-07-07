import React, { useState, useEffect, useRef } from 'react';
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
  SlidersHorizontal,
  QrCode,
  Ticket,
  ScanLine
} from 'lucide-react';
import { 
  STATS, 
  TECH_GRID, 
  BRIDGE_CARDS, 
  OUTSOURCE_HIGHLIGHTS, 
  SHORT_CAMPAIGNS,
  EXPERIENCES, 
  CERTIFICATIONS,
  PROJECTS, // Original 8 developer projects
  PARTNERS,
  BRAND_LOGO
} from '../../constants';
import DomiBot from './DomiBot';
import BentoStats3D from './BentoStats3D';
import TechLab from './TechLab';

// @ts-ignore
import micrositePdf from '../../pdf/microsite game_compressed.pdf';
// @ts-ignore
// @ts-ignore
import meAvatar from '../../me.webp';

// Import images
// @ts-ignore
import tr1 from '../../imgs/tr1.webp';
// @ts-ignore
import tr2 from '../../imgs/tr2.webp';
// @ts-ignore
import cmt1 from '../../imgs/CMT1.webp';
// @ts-ignore
import cmt2 from '../../imgs/CMT2.webp';
// @ts-ignore
import cmt3 from '../../imgs/CMT3.webp';
// @ts-ignore
import cmt4 from '../../imgs/CMT4.webp';
// @ts-ignore
import crms1 from '../../imgs/CRMS (1).webp';
// @ts-ignore
import crms2 from '../../imgs/CRMS (2).webp';
// @ts-ignore
import crms3 from '../../imgs/CRMS (3).webp';
// @ts-ignore
import crms4 from '../../imgs/CRMS (4).webp';
// @ts-ignore
import lms1 from '../../imgs/lms (1).webp';
// @ts-ignore
import lms2 from '../../imgs/lms (2).webp';
// @ts-ignore
import lms3 from '../../imgs/lms (3).webp';
// @ts-ignore
import lms4 from '../../imgs/lms (4).webp';
// @ts-ignore
import auto1 from '../../imgs/automation (1).webp';
// @ts-ignore
import auto2 from '../../imgs/automation (2).webp';
// Import extra CRM screenshots for full showcase
// @ts-ignore
import crm1 from '../../imgs/CRM (1).webp';
// @ts-ignore
import crm2 from '../../imgs/CRM (2).webp';
// @ts-ignore
import crm3 from '../../imgs/CRM (3).webp';
// @ts-ignore
import crm4 from '../../imgs/CRM (4).webp';
// @ts-ignore
import crm5 from '../../imgs/CRM (5).webp';
// @ts-ignore
import crm6 from '../../imgs/CRM (6).webp';
// @ts-ignore
import crm7 from '../../imgs/CRM (7).webp';
// @ts-ignore
import crm8 from '../../imgs/CRM (8).webp';
// @ts-ignore
import crm9 from '../../imgs/CRM (9).webp';
// @ts-ignore
import crm10 from '../../imgs/CRM (10).webp';
// @ts-ignore
import crm11 from '../../imgs/CRM (11).webp';
// @ts-ignore
import crm12 from '../../imgs/CRM (12).webp';
// @ts-ignore
import crm13 from '../../imgs/CRM (13).webp';
// @ts-ignore
import crm14 from '../../imgs/CRM (14).webp';
// @ts-ignore
import crm15 from '../../imgs/CRM (15).webp';
// @ts-ignore
import crm16 from '../../imgs/CRM (16).webp';
// @ts-ignore
import crm17 from '../../imgs/CRM (17).webp';
// @ts-ignore
import crm18 from '../../imgs/CRM (18).webp';
// @ts-ignore
import gameBlindbag from '../../imgs/game_blindbag.webp';
// @ts-ignore
import gameWheelKnowledge from '../../imgs/game_wheel_knowledge.webp';
// @ts-ignore
import gameSpaWheel from '../../imgs/game_spa_wheel.webp';
// @ts-ignore
import logoIdeas from '../../imgs/logo_ideas.webp';
// @ts-ignore
import logoPhucloctho from '../../imgs/logo_phucloctho.webp';

// Book pages
// @ts-ignore
import bookCover from '../../imgs/book_cover.webp';
// @ts-ignore
import bookPage71 from '../../imgs/book_page_71.webp';
// @ts-ignore
import bookPage60 from '../../imgs/book_page_60.webp';
// @ts-ignore
import bookPage109 from '../../imgs/book_page_109.webp';
// @ts-ignore
import bookPage107 from '../../imgs/book_page_107.webp';

// AI Agent
// @ts-ignore
import aiKienthuc from '../../imgs/ai_kienthuc.webp';
// @ts-ignore
import aiChatbot from '../../imgs/ai_chatbot.webp';
// @ts-ignore
import aiAgent2 from '../../imgs/ai_agent2.webp';
// @ts-ignore
import aiTuTrain1 from '../../imgs/ai_tu_train (1).webp';
// @ts-ignore
import aiTuTrain2 from '../../imgs/ai_tu_train (2).webp';
// @ts-ignore
import aiTuTrain3 from '../../imgs/ai_tu_train (3).webp';


// @ts-ignore
import logoFlora from '../../imgs/partner_flora.webp';
// @ts-ignore
import logoBrandson from '../../imgs/partner_brandson.webp';

import MetaAdReportShowcase from './MetaAdReportShowcase';
import AutoFlowPro from './AutoFlowPro';

interface CutePortfolioProps {
  onToggleClassic: () => void;
}

const RAW_PAGES = [
  bookCover,
  bookPage71,
  bookPage60,
  bookPage109,
  bookPage107
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
  
  const mainScrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0 });
  }, [activeTab]);
  
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
    let resolvedTab = tab.toLowerCase().trim();
    
    // Robust alias routing mappings for AI bot outputs
    if (['partner', 'partners', 'doi_tac', 'doitac'].includes(resolvedTab)) {
      resolvedTab = 'partners';
    } else if (['certification', 'certifications', 'chung_chi', 'chungchi', 'cv'].includes(resolvedTab)) {
      resolvedTab = 'certifications';
    } else if (['saas', 'saas-apps', 'saas_apps', 'crm', 'pos', 'lms'].includes(resolvedTab)) {
      resolvedTab = 'saas';
    } else if (['martech', 'data', 'chia-data', 'chia_data', 'data-flow', 'data_flow'].includes(resolvedTab)) {
      resolvedTab = 'martech';
    } else if (['meta-report', 'meta_report', 'ads-report', 'ads_report', 'ads', 'insight'].includes(resolvedTab)) {
      resolvedTab = 'meta-report';
    } else if (['automation', 'autoflow', 'auto-flow'].includes(resolvedTab)) {
      resolvedTab = 'automation';
    } else if (['landing', 'landings'].includes(resolvedTab)) {
      resolvedTab = 'landings';
    } else if (['outsource', 'highlight', 'highlights', 'case-study', 'case_study'].includes(resolvedTab)) {
      resolvedTab = 'outsource';
    } else if (['book', 'facebook-book', 'sach'].includes(resolvedTab)) {
      resolvedTab = 'book';
    } else if (['zalo', 'zalo-app', 'zalo_app'].includes(resolvedTab)) {
      resolvedTab = 'zalo';
    } else if (['tarot', 'mystery-tarot'].includes(resolvedTab)) {
      resolvedTab = 'tarot';
    } else if (['ai-agent', 'ai-custom', 'ai_agent', 'ai_custom', 'tro-ly-ao', 'trolyao'].includes(resolvedTab)) {
      resolvedTab = 'ai-agent';
    } else if (['dashboard', 'overview'].includes(resolvedTab)) {
      resolvedTab = 'dashboard';
    }

    const validTabs = ['dashboard', 'saas', 'martech', 'meta-report', 'automation', 'zalo', 'tarot', 'landings', 'outsource', 'book', 'partners', 'certifications', 'ai-agent'];
    if (validTabs.includes(resolvedTab)) {
      setActiveTab(resolvedTab);
      setMobileMenuOpen(false);
      setChatOpen(false);
    }
  };

  const menuGroups = {
    general: [
      { id: 'dashboard', name: 'Overview', icon: <Grid size={16} /> },
      { id: 'partners', name: 'Partners', icon: <Users size={16} /> },
    ],
    digitalApp: [
      { id: 'saas', name: 'SaaS Apps', icon: <Database size={16} /> },
      { id: 'zalo', name: 'Zalo App', icon: <MonitorSmartphone size={16} /> },
      { id: 'tarot', name: 'Tarot App', icon: <Sparkles size={16} /> },
    ],
    buildAutomation: [
      { id: 'martech', name: 'Data Flow', icon: <Server size={16} /> },
      { id: 'automation', name: 'Automation', icon: <Zap size={16} /> },
      { id: 'ai-agent', name: 'AI Custom', icon: <Bot size={16} /> },
    ],
    digitalMarketingAds: [
      { id: 'meta-report', name: 'Ads Report', icon: <BarChart3 size={16} /> },
      { id: 'landings', name: 'Landings', icon: <Globe size={16} /> },
      { id: 'book', name: 'Ads Book', icon: <BookOpen size={16} /> },
      { id: 'outsource', name: 'Case Study', icon: <BarChart3 size={16} /> },
    ],
    info: [
      { id: 'certifications', name: 'Credentials', icon: <Award size={16} /> },
    ]
  };

  const menuItems = [
    ...menuGroups.general,
    ...menuGroups.digitalApp,
    ...menuGroups.buildAutomation,
    ...menuGroups.digitalMarketingAds,
    ...menuGroups.info,
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
          <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/30 shrink-0">
            <img src={meAvatar} alt="Huynh Trong Phuc" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs font-black text-white leading-none">Huynh Trong Phuc</h2>
            <p className="text-[8.5px] text-purple-300 font-bold tracking-wide mt-0.5">Digital - AI Automation</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Slide-in Glassmorphic Drawer */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="xl:hidden fixed top-0 left-0 h-screen w-[280px] bg-[#0f0b24]/95 border-r border-purple-900/40 z-50 shadow-2xl flex flex-col p-6 overflow-y-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-purple-900/30 mb-6 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/30 shrink-0">
                    <img src={meAvatar} alt="Huynh Trong Phuc" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xs font-black text-white leading-none">Huynh Trong Phuc</h2>
                    <p className="text-[8.5px] text-purple-300 font-bold tracking-wide mt-0.5">Digital - AI Automation</p>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 bg-[#161033] border border-purple-900/40 rounded-full text-slate-300">
                  <X size={16} />
                </button>
              </div>

              {/* Menu Items Container */}
              <div className="flex flex-col gap-5 flex-1">
                {/* General / Navigation */}
                <div className="flex flex-col gap-1.5">
                  {menuGroups.general.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                          isActive 
                            ? 'bg-[#161033] text-white border-purple-900/50 shadow-inner' 
                            : 'text-slate-400 hover:bg-[#030014]/50 border-transparent'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Digital App Group */}
                <div className="flex flex-col gap-1.5">
                  <span className="px-5 text-[8.5px] font-black text-slate-500 uppercase tracking-widest mt-2 block">Digital app</span>
                  {menuGroups.digitalApp.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                          isActive 
                            ? 'bg-[#161033] text-white border-purple-900/50 shadow-inner' 
                            : 'text-slate-400 hover:bg-[#030014]/50 border-transparent'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Build Automation Group */}
                <div className="flex flex-col gap-1.5">
                  <span className="px-5 text-[8.5px] font-black text-slate-500 uppercase tracking-widest mt-2 block">Build Automation</span>
                  {menuGroups.buildAutomation.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                          isActive 
                            ? 'bg-[#161033] text-white border-purple-900/50 shadow-inner' 
                            : 'text-slate-400 hover:bg-[#030014]/50 border-transparent'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Digital Marketing Ads Group */}
                <div className="flex flex-col gap-1.5">
                  <span className="px-5 text-[8.5px] font-black text-slate-500 uppercase tracking-widest mt-2 block">Digital Marketing Ads</span>
                  {menuGroups.digitalMarketingAds.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                          isActive 
                            ? 'bg-[#161033] text-white border-purple-900/50 shadow-inner' 
                            : 'text-slate-400 hover:bg-[#030014]/50 border-transparent'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Info Group */}
                <div className="flex flex-col gap-1.5 pb-8">
                  <span className="px-5 text-[8.5px] font-black text-slate-500 uppercase tracking-widest mt-2 block">Info</span>
                  {menuGroups.info.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                          isActive 
                            ? 'bg-[#161033] text-white border-purple-900/50 shadow-inner' 
                            : 'text-slate-400 hover:bg-[#030014]/50 border-transparent'
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SLIM LEFT SIDEBAR (DESKTOP) - REDUCED WIDTH TO 260PX */}
      <aside className="hidden xl:flex w-[260px] bg-[#0f0b24]/70 border-r border-purple-900/30 backdrop-blur-xl flex-col p-6 justify-between sticky top-0 h-screen z-20 shrink-0 shadow-sm">
        <div className="flex flex-col gap-6">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
              <img src={meAvatar} alt="Huynh Trong Phuc" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-black text-white leading-tight">Huynh Trong Phuc</h2>
              <p className="text-[9.5px] text-purple-300 font-bold tracking-wide mt-0.5">Digital - AI Automation</p>
            </div>
          </div>

          {/* Navigation Menu (Sized up, spaced out, scrollbar hidden) */}
          <nav 
            className="flex flex-col gap-4 overflow-y-auto max-h-[80vh]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* General */}
            <div className="flex flex-col gap-1.5">
              {menuGroups.general.map((item) => {
                const isActive = activeTab === item.id;
                const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                      isActive 
                        ? 'bg-[#0f0b24] text-white shadow-sm border border-purple-900/40' 
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
            </div>

            {/* Digital App */}
            <div className="flex flex-col gap-1.5">
              <span className="px-4 text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-l-2 border-purple-500/40 pl-2">Digital app</span>
              {menuGroups.digitalApp.map((item) => {
                const isActive = activeTab === item.id;
                const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                      isActive 
                        ? 'bg-[#0f0b24] text-white shadow-sm border border-purple-900/40' 
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
            </div>

            {/* Build Automation */}
            <div className="flex flex-col gap-1.5">
              <span className="px-4 text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-l-2 border-purple-500/40 pl-2">Build Automation</span>
              {menuGroups.buildAutomation.map((item) => {
                const isActive = activeTab === item.id;
                const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                      isActive 
                        ? 'bg-[#0f0b24] text-white shadow-sm border border-purple-900/40' 
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
            </div>

            {/* Digital Marketing Ads */}
            <div className="flex flex-col gap-1.5">
              <span className="px-4 text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-l-2 border-purple-500/40 pl-2">Digital Marketing ads</span>
              {menuGroups.digitalMarketingAds.map((item) => {
                const isActive = activeTab === item.id;
                const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                      isActive 
                        ? 'bg-[#0f0b24] text-white shadow-sm border border-purple-900/40' 
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
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1.5">
              <span className="px-4 text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-l-2 border-purple-500/40 pl-2">Info</span>
              {menuGroups.info.map((item) => {
                const isActive = activeTab === item.id;
                const resizedIcon = React.cloneElement(item.icon as React.ReactElement, { size: 18 });
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all group ${
                      isActive 
                        ? 'bg-[#0f0b24] text-white shadow-sm border border-purple-900/40' 
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
            </div>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-4">
          
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
      <main ref={mainScrollRef} className="flex-1 px-4 md:px-10 pt-8 pb-32 relative z-10 lg:overflow-y-auto lg:max-h-screen overflow-x-hidden w-full">
        
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
                
                {/* HERO: 3D Dark Bento Glassmorphic Grid (Enhanced with vibrant neon colors and premium gradients) */}
                <div className="relative bg-gradient-to-br from-[#0c051e] via-[#090514] to-[#1d0d3a] border border-purple-500/35 rounded-2xl p-8 md:p-12 text-white overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[380px]">
                  {/* Cyber grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.025)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
                  
                  {/* Ambient neon light glows */}
                  <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" />
                  <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDelay: '2s' }} />
                  
                  {/* Rotating geometric visual helper rings */}
                  <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full border border-purple-500/10 [transform:rotateX(60deg)_rotateY(10deg)] pointer-events-none z-0 hidden lg:block" />
                  <div className="absolute -right-10 -bottom-10 w-[350px] h-[350px] rounded-full border border-purple-500/15 [transform:rotateX(60deg)_rotateY(10deg)] pointer-events-none z-0 hidden lg:block" />

                  <div className="flex-1 space-y-6 relative z-10 max-w-2xl">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-yellow-300 bg-purple-950/60 border border-purple-500/50 px-4 py-1.5 rounded-full inline-block shadow-[0_0_15px_rgba(168,85,247,0.25)] animate-pulse">
                       MARTECH & FULLSTACK COCKPIT
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200 drop-shadow-[0_2px_10px_rgba(168,85,247,0.3)]">
                      HUYNH TRONG PHUC
                    </h2>
                    <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed text-justify">
                      Thiết kế hệ thống <span className="text-purple-400 font-bold">Flow - Automation</span>, tối ưu quy trình vận hành và xây dựng giải pháp <span className="text-amber-300 font-bold">chuyển đổi số toàn diện</span> cho doanh nghiệp vừa và nhỏ.
                    </p>
                    <div className="pt-2 grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-md">
                      <button 
                        onClick={() => setActiveTab('partners')} 
                        className="w-full px-3 py-2.5 sm:px-6 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        View Partners <ArrowRight size={12} className="shrink-0" />
                      </button>
                      <a 
                        href="https://domation.net/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full px-3 py-2.5 sm:px-6 sm:py-3.5 bg-[#0f0b24]/40 border border-purple-500/30 hover:border-yellow-400/50 hover:bg-[#0f0b24]/80 text-white hover:text-yellow-400 font-black text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase rounded-full flex items-center justify-center gap-1.5 transition-all duration-300"
                      >
                        Visit domation.net <ExternalLink size={12} className="shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-96 h-80 relative items-center justify-center z-10 shrink-0">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-72 h-72 rounded-full border border-dashed border-purple-500/25"
                    />
                    {[
                      { icon: <Database size={18} className="text-blue-400 group-hover:text-white transition-colors" />, label: 'CRM Sync', angle: 0, glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:border-blue-400' },
                      { icon: <MonitorSmartphone size={18} className="text-cyan-400 group-hover:text-white transition-colors" />, label: 'Zalo SDK', angle: 72, glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:border-cyan-400' },
                      { icon: <Zap size={18} className="text-orange-400 group-hover:text-white transition-colors" />, label: 'n8n Flow', angle: 144, glow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:border-orange-400' },
                      { icon: <Cpu size={18} className="text-yellow-400 group-hover:text-white transition-colors" />, label: 'Apps Script', angle: 216, glow: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:border-yellow-400' },
                      { icon: <Bot size={18} className="text-fuchsia-400 group-hover:text-white transition-colors" />, label: 'AI Agent', angle: 288, glow: 'hover:shadow-[0_0_20px_rgba(217,70,239,0.6)] hover:border-fuchsia-400' },
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
                          className={`absolute w-12 h-12 bg-[#090514]/80 backdrop-blur-md border border-purple-900/40 rounded-full flex flex-col items-center justify-center text-slate-300 shadow-md cursor-pointer transition-all duration-300 group ${node.glow}`}
                        >
                          {node.icon}
                          <span className="absolute top-14 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded border border-purple-500/30 text-[8px] font-black uppercase text-white scale-0 group-hover:scale-100 transition-transform whitespace-nowrap z-20">
                            {node.label}
                          </span>
                        </motion.div>
                      );
                    })}

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1b0a3a] to-[#0c041e] border border-purple-500/50 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_35px_rgba(168,85,247,0.5)] backdrop-blur-xl animate-pulse">
                      <Sparkles size={28} className="text-yellow-400 mb-1" />
                      <span className="text-[8px] font-black tracking-widest text-white leading-none">DOM ENGINE</span>
                    </div>
                  </div>
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

                {/* 3D Bento stats */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Key Performance Metrics</h3>
                  <BentoStats3D />
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


            {activeTab === 'saas' && (
              <div className="space-y-10 w-full">
                {/* DOMATION CRM CARD */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-6 md:space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-3 md:space-y-4 max-w-3xl text-left">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                        Enterprise CRM
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">DOMATION CRM</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                        Hệ thống quản lý quan hệ khách hàng (CRM) chuyên sâu dành cho doanh nghiệp SME. Hỗ trợ quản lý dữ liệu phễu khách hàng khép kín, phân bổ số tự động, quản lý kho sản phẩm, tài chính hóa đơn và Ticket CSKH.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1 md:pt-2">
                      <a 
                        href="https://domation.net/crm" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Dùng Thử Ngay <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (DOMATION CRM) */}
                  <div className="flex flex-col items-center w-full">
                    {/* Image Container with Overlay Controls */}
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl bg-[#161033]">
                      <div className="absolute inset-0">
                        <img 
                          src={activeCrmImg} 
                          alt="DOMATION CRM" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeCrmImg); setPreviewList([crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18]); }}>
                        <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                      </div>

                      {/* Glassmorphic Overlay Navigation Buttons */}
                      <button 
                        onClick={() => {
                          const crmList = [crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18];
                          const curIdx = crmList.indexOf(activeCrmImg);
                          const prevIdx = (curIdx - 1 + crmList.length) % crmList.length;
                          setActiveCrmImg(crmList[prevIdx]);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>

                      <button 
                        onClick={() => {
                          const crmList = [crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18];
                          const curIdx = crmList.indexOf(activeCrmImg);
                          const nextIdx = (curIdx + 1) % crmList.length;
                          setActiveCrmImg(crmList[nextIdx]);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>
                    </div>

                    {/* Index Indicator */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-2.5">
                      Image {[crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18].indexOf(activeCrmImg) + 1} of 18
                    </span>
                    
                    {/* CRM Thumbnail Gallery Selector (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full max-w-4xl justify-center gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[crms1, crms2, crms3, crms4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14, crm15, crm16, crm17, crm18].map((img, index) => (
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-4">
                    {[
                      { title: "Quản Lý Khách Hàng", desc: "Lưu trữ toàn bộ thông tin liên hệ, phân loại VIP/Mới khoa học.", icon: <Users size={16} /> },
                      { title: "Phễu Bán Hàng", desc: "Theo dõi tiến độ Deals, dự báo doanh thu thực tế.", icon: <Compass size={16} /> },
                      { title: "Kiểm Soát Tồn Kho", desc: "Quản lý tồn kho theo lô, cảnh báo hàng sắp hết.", icon: <Database size={16} /> },
                      { title: "Tài Chính Hóa Đơn", desc: "Tính hóa đơn, doanh thu và biên lợi nhuận gộp.", icon: <Layers size={16} /> },
                      { title: "Hỗ Trợ Kỹ Thuật", desc: "Tiếp nhận và xử lý tickets phản hồi của khách hàng.", icon: <Layers size={16} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-4 md:p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MINTH CRM & POS CARD */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-6 md:space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-3 md:space-y-4 max-w-3xl text-left">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                        SME Retail ERP
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">MINTH CRM & POS</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                        Giải pháp quản lý bán hàng "Tinh gọn - Hiện đại - Dễ dùng" dành riêng cho các shop vừa và nhỏ. Chỉ với 1 màn hình duy nhất, bạn nắm trọn toàn bộ bức tranh tài chính và vận hành của cửa hàng.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1 md:pt-2">
                      <span className="px-4 py-2 bg-[#161033] border border-purple-900/40 text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full">
                        Retail POS System
                      </span>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (MINTH CRM & POS) */}
                  <div className="flex flex-col items-center w-full">
                    {/* Image Container with Overlay Controls */}
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl bg-[#161033]">
                      <div className="absolute inset-0">
                        <img 
                          src={activeMinthImg} 
                          alt="MINTH CRM & POS" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeMinthImg); setPreviewList([crm1, crm2, crm3, crm4]); }}>
                        <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                      </div>

                      {/* Glassmorphic Overlay Navigation Buttons */}
                      <button 
                        onClick={() => {
                          const minthList = [crm1, crm2, crm3, crm4];
                          const curIdx = minthList.indexOf(activeMinthImg);
                          const prevIdx = (curIdx - 1 + minthList.length) % minthList.length;
                          setActiveMinthImg(minthList[prevIdx]);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>

                      <button 
                        onClick={() => {
                          const minthList = [crm1, crm2, crm3, crm4];
                          const curIdx = minthList.indexOf(activeMinthImg);
                          const nextIdx = (curIdx + 1) % minthList.length;
                          setActiveMinthImg(minthList[nextIdx]);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>
                    </div>

                    {/* Index Indicator */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-2.5">
                      Image {[crm1, crm2, crm3, crm4].indexOf(activeMinthImg) + 1} of 4
                    </span>
                    
                    {/* CRM Thumbnail Gallery Selector (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full max-w-4xl justify-center gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[crm1, crm2, crm3, crm4].map((img, index) => (
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 md:pt-4">
                    {[
                      { title: "Bento Dashboard", desc: "Cập nhật tức thời doanh thu, lợi nhuận gộp, AOV và tính sẵn LN ròng.", icon: <Layers size={16} /> },
                      { title: "CRM \"Mini\" Siêu Nhẹ", desc: "Quản lý khách hàng, tự động thống kê khách VIP và xem lịch sử mua hàng.", icon: <Users size={16} /> },
                      { title: "Cảnh Báo Tồn Kho", desc: "Tự động cảnh báo hàng Sắp hết và Sắp hết hạn để tối ưu dòng vốn.", icon: <Database size={16} /> },
                      { title: "Giờ Vàng Mua Sắm", desc: "Phân tích thời điểm khách chốt đơn nhiều nhất để chạy Ads hoặc khuyến mãi.", icon: <Compass size={16} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-4 md:p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LMS E-LEARNING */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-6 md:space-y-8">
                  <div className="space-y-3 md:space-y-4 max-w-3xl">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                      Edu-Tech Solution
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">LMS E-LEARNING Platform</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                      Nền tảng quản lý học tập (LMS) hoàn chỉnh. Sở hữu toàn bộ các tính năng cốt lõi của một hệ thống giáo dục trực tuyến chuyên nghiệp nhất, đáp ứng quy mô học viên lớn.
                    </p>
                  </div>

                  {/* Widescreen Slideshow Gallery (LMS) */}
                  <div className="flex flex-col items-center w-full">
                    {/* Image Container with Overlay Controls */}
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl bg-[#161033]">
                      <div className="absolute inset-0">
                        <img 
                          src={activeLmsImg} 
                          alt="LMS Platform" 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10" onClick={() => { setPreviewImage(activeLmsImg); setPreviewList([lms1, lms2, lms3, lms4]); }}>
                        <span className="px-4 py-2 bg-[#0f0b24]/90 rounded-full text-xs font-bold text-slate-200 shadow-md">Zoom Screen</span>
                      </div>

                      {/* Glassmorphic Overlay Navigation Buttons */}
                      <button 
                        onClick={() => {
                          const lmsList = [lms1, lms2, lms3, lms4];
                          const curIdx = lmsList.indexOf(activeLmsImg);
                          const prevIdx = (curIdx - 1 + lmsList.length) % lmsList.length;
                          setActiveLmsImg(lmsList[prevIdx]);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>

                      <button 
                        onClick={() => {
                          const lmsList = [lms1, lms2, lms3, lms4];
                          const curIdx = lmsList.indexOf(activeLmsImg);
                          const nextIdx = (curIdx + 1) % lmsList.length;
                          setActiveLmsImg(lmsList[nextIdx]);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>
                    </div>

                    {/* Index Indicator */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-2.5">
                      Image {[lms1, lms2, lms3, lms4].indexOf(activeLmsImg) + 1} of 4
                    </span>
                    
                    {/* LMS Thumbnail Gallery Selector (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full max-w-4xl justify-center gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 md:pt-4">
                    {[
                      { title: "Bài Giảng Video", desc: "Streaming mượt mà, Course phân loại khoa học.", icon: <GraduationCap size={16} /> },
                      { title: "Trắc Nghiệm Tự Động", desc: "Tính giờ câu hỏi, trả kết quả kiểm tra tức thì.", icon: <CheckCircle size={16} /> },
                      { title: "Cấp Certs PDF", desc: "Tự động xuất chứng chỉ PDF khi đạt yêu cầu.", icon: <Award size={16} /> },
                      { title: "Tracking Tiến Độ", desc: "Theo dõi % hoàn thành khóa học của từng user.", icon: <BarChart3 size={16} /> },
                    ].map((feat, i) => (
                      <div key={i} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-4 md:p-5 hover:border-purple-500/50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                          {feat.icon}
                        </div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'martech' && (
              <div className="space-y-10 w-full">
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-6 md:space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-3 md:space-y-4 max-w-3xl text-left">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                        Data Routing Solution
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">DOMATION Data Routing (Chia Data)</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                        Hệ thống chuyển dữ liệu tự động thời gian thực từ Landing Page, Facebook Ads, Zalo Form về CRM nội bộ. Phân chia Data xoay vòng Round-Robin cho các Sale, nhận diện nghỉ phép, tự động báo lỗi và đền bù số qua Zalo Bot.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1 md:pt-2">
                      <a 
                        href="https://domation.net/data" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Dùng Thử Ngay <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  {/* Widescreen Slideshow Gallery (Data Routing) */}
                  <div className="flex flex-col items-center w-full">
                    {/* Image Container with Overlay Controls */}
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-900/40 shadow-xl bg-[#161033]">
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

                      {/* Glassmorphic Overlay Navigation Buttons */}
                      <button 
                        onClick={() => {
                          const curIdx = CHIA_DATA_IMAGES.indexOf(activeDataImg);
                          const prevIdx = (curIdx - 1 + CHIA_DATA_IMAGES.length) % CHIA_DATA_IMAGES.length;
                          setActiveDataImg(CHIA_DATA_IMAGES[prevIdx]);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>

                      <button 
                        onClick={() => {
                          const curIdx = CHIA_DATA_IMAGES.indexOf(activeDataImg);
                          const nextIdx = (curIdx + 1) % CHIA_DATA_IMAGES.length;
                          setActiveDataImg(CHIA_DATA_IMAGES[nextIdx]);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-[#0f0b24]/60 hover:bg-[#0f0b24]/90 border border-purple-900/40 rounded-full shadow-md text-slate-200 hover:text-white transition-all z-20 backdrop-blur-md"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </button>
                    </div>

                    {/* Index Indicator */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-bold mt-2.5">
                      Image {CHIA_DATA_IMAGES.indexOf(activeDataImg) + 1} of {CHIA_DATA_IMAGES.length}
                    </span>

                    {/* 12 Data Flow Thumbnails (Hidden on Mobile) */}
                    <div className="hidden md:flex w-full max-w-4xl justify-center gap-1.5 mt-4 overflow-x-auto pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-4">
                    {[
                      { title: "Đồng Bộ Realtime", desc: "Leads từ Meta Ads/Sheets đổ thẳng về CRM không trễ.", icon: <Zap size={16} /> },
                      { title: "Zalo & Email Alert", desc: "Zalo Bot gửi thông tin chi tiết lead cho tư vấn viên.", icon: <Bot size={16} /> },
                      { title: "Routing Round-Robin", desc: "Tự động xoay vòng phân phối số công bằng cho Sales.", icon: <Compass size={16} /> },
                      { title: "Đền Bù Số Tự Động", desc: "Hệ thống duyệt báo lỗi số trùng, tự bù data mới.", icon: <ShieldCheck size={16} /> },
                      { title: "Nhận Diện Nghỉ Phép", desc: "Tạm ngưng chia số khi Sales nghỉ phép để tránh nguội data.", icon: <Users size={16} /> },
                      { title: "Báo Cáo Cuối Ngày", desc: "Zalo Bot tự động tổng kết báo cáo hiệu suất của từng Sales.", icon: <BarChart3 size={16} /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-xs bg-[#030014] border border-purple-900/30 rounded-2xl p-4 hover:border-purple-500/50 transition-colors">
                        <CheckCircle size={16} className="text-white shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-200 text-xs sm:text-sm">{item.title}</h5>
                          <p className="text-slate-400 font-light mt-0.5 text-[11px] sm:text-xs">{item.desc}</p>
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Nava Store</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Website thương mại điện tử (E-commerce) chuyên nghiệp, tối ưu hóa trải nghiệm mua sắm và quy trình thanh toán.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">E-commerce</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">React/Vite</span>
                        </div>
                        <a 
                          href="https://navastore.vn/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Viện IDEAS MBA</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page tuyển sinh chương trình Thạc sĩ Quản trị Kinh doanh (MBA), tập trung tối đa tỷ lệ chuyển đổi điền form.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Education</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Conversion</span>
                        </div>
                        <a 
                          href="https://ideas.edu.vn/mba" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Turnio Portfolio</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Trang thông tin năng lực (Portfolio) cao cấp của Creative Agency, hiển thị dự án với hiệu ứng tương tác 3D mượt mà.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Creative</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Next.js</span>
                        </div>
                        <a 
                          href="https://portfo-turnio.vercel.app/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Cấy Ghép Nha Khoa</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page giới thiệu và tuyển sinh khóa đào tạo Cấy ghép Nha khoa Cơ bản của Brandson Academy cấp chứng chỉ CME.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">CME Course</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Medical</span>
                        </div>
                        <a 
                          href="https://brandson.vn/cay-ghep-nha-khoa-co-ban" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Ngày Hội Implant</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Landing Page sự kiện thường niên "Ngày Hội Implant" của Nha khoa Flora, thiết kế nhằm thúc đẩy đặt hẹn khám trực tiếp.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Dental Clinic</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Campaign</span>
                        </div>
                        <a 
                          href="https://nhakhoaflora.com/ngay-hoi-implant/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">Viện Đào Tạo IDEAS</h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[50px] font-light">Trang thông tin điện tử tích hợp của Viện Đào Tạo & Nghiên Cứu Quản Trị IDEAS, giới thiệu hoạt động và cổng thông tin sinh viên.</p>
                      <div className="pt-4 flex items-center justify-between border-t border-purple-900/30 mt-2">
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Institutional</span>
                          <span className="px-2 py-0.5 text-[8.5px] font-bold text-slate-400 bg-[#161033] border border-purple-900/40 rounded-md">Portal</span>
                        </div>
                        <a 
                          href="https://ideas.edu.vn/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-[9px] uppercase tracking-wider rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] flex items-center gap-1 shrink-0 transition-all duration-300 hover:-translate-y-0.5"
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
                  <h2 className="text-3xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">ZALO MINI APP DEMO</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Giao diện Mini App chăm sóc khách hàng được lập trình native bằng React & TypeScript.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    {/* SLEEK PHONE MOCKUP (iPhone 15 Pro style - Thinner bezel, wider & highly mobile responsive) */}
                    <div className="relative z-10 w-full max-w-[325px] md:max-w-[410px] h-[580px] md:h-[750px] bg-[#030014] rounded-[40px] p-2 shadow-[0_0_50px_rgba(168,85,247,0.25)] border-[3px] border-[#2e264f]">
                      {/* Inner screen frame */}
                      <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-black/40 ring-1 ring-white/10 bg-[#0c051e] flex flex-col">
                        {/* Dynamic Island Notch */}
                        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full z-30 flex items-center justify-center border border-white/10">
                          {/* Camera lens glint */}
                          <div className="absolute left-3 w-1.5 h-1.5 bg-[#0d0d21] rounded-full border border-blue-900/30 flex items-center justify-center">
                            <div className="w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse" />
                          </div>
                          {/* Sensor indicator */}
                          <div className="absolute right-5 w-1 h-1 bg-green-500 rounded-full opacity-60" />
                        </div>
                        
                        {/* Simulator screen content */}
                        <iframe 
                          src="https://turniodev.github.io/zala_ideas" 
                          title="Zalo Mini App Simulator"
                          className="w-full h-full bg-[#0f0b24] border-0 pt-5"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <a 
                        href="https://turniodev.github.io/zala_ideas" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-2 transition-all duration-300"
                      >
                        Open Fullscreen <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-8 shadow-sm space-y-6">
                      <div className="space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">Loyalty Platform</span>
                        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200 leading-tight">Tối Ưu Retention Rate</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-light text-justify">
                          Mini App trên Zalo giúp doanh nghiệp tận dụng cơ sở dữ liệu khổng lồ của Zalo mà không cần ép khách hàng tải app nặng nề. Hỗ trợ đầy đủ các tính năng:
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {[
                          {
                            title: "Tích Điểm QR Code",
                            desc: "Định danh khách hàng tức thời qua QR Code cá nhân hóa để tích và tiêu điểm nhanh chóng.",
                            icon: <QrCode size={18} className="text-purple-400" />
                          },
                          {
                            title: "Thăng Hạng Thành Viên",
                            desc: "Tự động xếp hạng VIP, Gold, Silver và áp dụng chính sách ưu đãi riêng biệt theo chi tiêu.",
                            icon: <Award size={18} className="text-purple-400" />
                          },
                          {
                            title: "Voucher & Zalo ZNS",
                            desc: "Đổi voucher ưu đãi trực tiếp trên app và tự động gửi tin nhắn nhắc nhở/chăm sóc ZNS.",
                            icon: <Ticket size={18} className="text-purple-400" />
                          },
                          {
                            title: "Đồng Bộ CRM Real-time",
                            desc: "Dữ liệu giao dịch, thông tin khách hàng đồng bộ tức thời với cơ sở dữ liệu CRM nội bộ.",
                            icon: <RefreshCw size={18} className="text-purple-400" />
                          }
                        ].map((feat, idx) => (
                          <div 
                            key={idx} 
                            className="bg-[#030014] border border-purple-900/30 rounded-2xl p-5 hover:border-purple-500/50 transition-all flex flex-col gap-3 text-left group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                              {feat.icon}
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs sm:text-sm font-black text-slate-200 group-hover:text-purple-400 transition-colors leading-tight">{feat.title}</h4>
                              <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light text-justify">{feat.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
                    <h2 className="text-3xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">MYSTERY TAROT</h2>
                    <p className="text-sm text-slate-400 font-light mt-1">Nền tảng xem Tarot số kết hợp 600+ bài viết chuẩn SEO tạo lập tự động bằng Gemini AI.</p>
                  </div>
                  <a 
                    href="https://www.mystery-tarot.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* AI CUSTOM (TRỢ LÝ ẢO AI) */}
            {activeTab === 'ai-agent' && (
              <div className="space-y-12 w-full text-left">
                
                {/* PHÂN HỆ 1: TRỢ LÝ ẢO AI CHATBOT (AI CHATBOT SYSTEM) */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
                    <div className="space-y-3 md:space-y-4 max-w-3xl">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-2.5 py-0.5 rounded-full border border-purple-900/40 inline-block">
                        AI Chatbot System
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">
                        Trợ Lý Ảo AI Thông Minh Như Chuyên Gia
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                        Train AI từ tài liệu nội bộ, website của bạn. Thiết lập nền tảng kiến thức (Knowledge Base) thông minh, trả lời trực tiếp thắc mắc Khách hàng 24/7.
                      </p>
                    </div>
                    <div className="shrink-0 pt-1 md:pt-2">
                      <a 
                        href="https://ideas.edu.vn/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Chat Thử AI <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  {/* Layout: Info grid on left, screenshot on right */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4">
                    {/* Left Grid: Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: "Giao Diện Branding", desc: "Custom màu sắc, UI Design & Logo riêng chuẩn thương hiệu.", icon: <Sparkles size={14} className="text-purple-400" /> },
                        { title: "Thiết Lập Văn Hóa", desc: "Tuỳ chỉnh tone giọng phù hợp, chuẩn văn hoá định vị Brand.", icon: <Award size={14} className="text-purple-400" /> },
                        { title: "Giao Tiếp Tự Nhiên", desc: "Tư vấn, hỏi đáp, hỗ trợ khách hàng và chốt sale giống như người thật.", icon: <Bot size={14} className="text-purple-400" /> },
                        { title: "Train Kiến Thức", desc: "Máy học tự động hóa thần tốc qua File dữ liệu thô hoặc Web URL.", icon: <Database size={14} className="text-purple-400" /> },
                      ].map((feat, idx) => (
                        <div key={idx} className="bg-[#030014] border border-purple-900/30 rounded-2xl p-4 md:p-5 hover:border-purple-500/50 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-[#161033] border border-purple-900/40 text-white flex items-center justify-center mb-3">
                            {feat.icon}
                          </div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-200 mb-1">{feat.title}</h4>
                          <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{feat.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right Grid: Prominent Mockup screenshot */}
                    <div 
                      onClick={() => { setPreviewImage(aiAgent2); setPreviewList([aiAgent2]); }}
                      className="border border-white/10 rounded-3xl p-2 bg-[#161b22] shadow-[0_0_80px_-20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <img loading="lazy" alt="AI Agent Custom Chat UI" className="w-full rounded-2xl" src={aiAgent2} />
                    </div>
                  </div>
                </div>

                {/* PHÂN HỆ 2: NỀN TẢNG AI WORKSPACE (KHÔNG GIAN AI ĐỘC LẬP) */}
                <div className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-4 sm:p-6 md:p-12 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                  
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Column: Info & Stats Grid */}
                    <div className="w-full lg:w-[45%] z-20 space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                          <Sparkles size={12} className="text-rose-400" /> Nền tảng AI Workspace
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                          Không Gian AI <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                            Độc Lập Cho Phòng Ban
                          </span>
                        </h3>
                      </div>
                      
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light text-justify">
                        <strong className="text-amber-400/90 font-bold block mb-2 italic">
                          Nhân sự cạn kiệt ý tưởng, tư vấn nhầm lẫn? Khách hàng bức xúc vì chờ đợi trả lời quá lâu?
                        </strong>
                        Đã đến lúc "thuê" một nhân sự AI xuất sắc. Phân chia rõ ràng AI chuyên gia Sale - Marketing - CSKH. Được huấn luyện khắt khe dưới tiêu chuẩn Knowledge Base đóng, triệt tiêu tình trạng AI bịa chuyện, làm việc xuyên đêm 24/7.
                      </p>
                      
                      {/* Features stats card grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Training Chuyên Biệt",
                            desc: "Data độc lập, kiến thức phân quyền theo phòng ban",
                            icon: <Layers size={14} className="text-rose-400" />
                          },
                          {
                            title: "Chế Độ Đa Năng",
                            desc: "Tích hợp IMAGE, CodeMode, và Expert mode",
                            icon: <ScanLine size={14} className="text-rose-400" />
                          },
                          {
                            title: "Knowledge Khắt khe",
                            desc: "Kiểm soát truy xuất tài liệu, cấm AI bịa chuyện",
                            icon: <ShieldCheck size={14} className="text-rose-400" />
                          },
                          {
                            title: "Phong Cách AI",
                            desc: "Giọng điệu Mentoring chân thật, hướng dẫn chi tiết",
                            icon: <Users size={14} className="text-rose-400" />
                          }
                        ].map((feat, idx) => (
                          <div key={idx} className="flex gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-rose-500/30 transition-colors">
                            <div className="w-8 h-8 rounded border border-rose-500/40 bg-rose-500/20 flex shrink-0 items-center justify-center">
                              {feat.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-xs sm:text-sm mb-1">{feat.title}</h4>
                              <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed font-light">{feat.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column: Stacked Images (Bố trí 3D tuyệt đẹp) */}
                    <div className="w-full lg:w-[55%] relative pt-6 pb-12 sm:py-12 flex flex-col items-center perspective-1000">
                      
                      {/* Main Image 1 */}
                      <div 
                        onClick={() => { setPreviewImage(aiTuTrain1); setPreviewList([aiTuTrain1, aiTuTrain2, aiTuTrain3, aiChatbot, aiKienthuc]); }}
                        className="border border-white/10 rounded-3xl p-2 bg-[#161b22] shadow-[0_0_80px_-20px_rgba(244,63,94,0.3)] w-full sm:w-[90%] z-10 hover:-translate-y-2 hover:z-40 transition-all duration-500 cursor-pointer"
                      >
                        <img loading="lazy" alt="AI Space Workspace" className="w-full rounded-2xl" src={aiTuTrain1} />
                      </div>
                      
                      {/* Main Image 2 */}
                      <div 
                        onClick={() => { setPreviewImage(aiTuTrain2); setPreviewList([aiTuTrain1, aiTuTrain2, aiTuTrain3, aiChatbot, aiKienthuc]); }}
                        className="border border-white/10 rounded-3xl p-2 bg-[#161b22] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] w-[85%] -mt-16 sm:-mt-24 self-end z-20 hover:-translate-y-2 hover:z-40 transition-all duration-500 cursor-pointer"
                      >
                        <img loading="lazy" alt="Department Training" className="w-full rounded-2xl" src={aiTuTrain2} />
                      </div>
                      
                      {/* Main Image 3 */}
                      <div 
                        onClick={() => { setPreviewImage(aiTuTrain3); setPreviewList([aiTuTrain1, aiTuTrain2, aiTuTrain3, aiChatbot, aiKienthuc]); }}
                        className="border border-white/10 rounded-3xl p-2 bg-[#161b22] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] w-[95%] sm:w-[85%] -mt-10 sm:-mt-16 z-30 self-center hover:-translate-y-2 hover:z-50 transition-all duration-500 cursor-pointer"
                      >
                        <img loading="lazy" alt="AI Expert Mode" className="w-full rounded-2xl" src={aiTuTrain3} />
                      </div>
                      
                      {/* Floating Absolute Popups 1: Image Mode */}
                      <div 
                        onClick={() => { setPreviewImage(aiChatbot); setPreviewList([aiTuTrain1, aiTuTrain2, aiTuTrain3, aiChatbot, aiKienthuc]); }}
                        className="absolute top-[8%] -right-2 md:-right-8 border border-white/10 rounded-2xl p-1.5 bg-[#161b22] shadow-[0_20px_50px_rgba(244,63,94,0.4)] w-[40%] sm:w-[35%] z-40 hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"
                      >
                        <img loading="lazy" alt="Image Mode" className="w-full rounded-xl" src={aiChatbot} />
                      </div>
                      
                      {/* Floating Absolute Popups 2: Code Mode */}
                      <div 
                        onClick={() => { setPreviewImage(aiKienthuc); setPreviewList([aiTuTrain1, aiTuTrain2, aiTuTrain3, aiChatbot, aiKienthuc]); }}
                        className="absolute bottom-[-5%] -left-2 md:-left-6 border border-white/10 rounded-2xl p-1.5 bg-[#161b22] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)] w-[45%] sm:w-[40%] z-40 hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"
                      >
                        <img loading="lazy" alt="Code Mode" className="w-full rounded-xl" src={aiKienthuc} />
                      </div>
                      
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* FACEBOOK ADS BOOK */}
            {activeTab === 'book' && (
              <div className="space-y-10 w-full">
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">FACEBOOK ADS BOOK</h2>
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
                            className="px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-black font-black text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.55)] flex items-center justify-center gap-2 w-full lg:w-auto transition-all duration-300 hover:-translate-y-0.5"
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
                  <h2 className="text-3xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200">CASE STUDIES</h2>
                  <p className="text-sm text-slate-400 font-light mt-1">Các dự án thực tế đạt hiệu quả cao và được kiểm định.</p>
                </div>
                <div className="flex flex-col gap-8">
                  {/* Case Study Cards Grid (Full width cards) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                          <div className="flex items-center gap-3.5 mb-4 text-left">
                            {item.logo && (
                              <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-900/40 bg-[#0f0b24] shrink-0">
                                <img src={item.logo} alt={item.company} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div>
                              <h3 className="text-2xl font-black text-white leading-tight">{item.company}</h3>
                              <span className="text-[9px] text-purple-300 font-black uppercase tracking-wider block mt-0.5">Success Story</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 bg-[#030014] border border-purple-900/30 rounded-2xl p-4 mb-4">
                            <div>
                              <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Impact</span>
                              <span className="text-xs md:text-sm font-black text-slate-200 leading-tight">{item.impact}</span>
                            </div>
                            <div className="border-l border-purple-900/40 pl-3">
                              <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Efficiency</span>
                              <span className="text-xs md:text-sm font-black text-slate-300 leading-tight">{item.cost}</span>
                            </div>
                            <div className="border-l border-purple-900/40 pl-3">
                              <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Result</span>
                              <span className="text-xs md:text-sm font-black text-white leading-tight">{item.result}</span>
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

                  {/* Short Campaigns Section */}
                  <div className="pt-8 space-y-6">
                    <div className="text-left">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">
                        Chiến Dịch Ngắn
                      </span>
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200 mt-3">Chiến Dịch Ngắn</h3>
                      <p className="text-sm text-slate-400 font-light mt-1">Các chiến dịch ngắn hạn tối ưu ngân sách với tỷ lệ chuyển đổi cao.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {SHORT_CAMPAIGNS.map((item, i) => (
                        <div key={i} className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[320px]">
                          <div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {item.tags.map((tag) => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-[#161033] px-2.5 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-3.5 mb-4 text-left">
                              {item.logo && (
                                <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-900/40 bg-[#0f0b24] shrink-0">
                                  <img src={item.logo} alt={item.company} className="w-full h-full object-cover" />
                                </div>
                              )}
                              <div>
                                <h3 className="text-2xl font-black text-white leading-tight">{item.company}</h3>
                                <span className="text-[9px] text-purple-300 font-black uppercase tracking-wider block mt-0.5">Short Campaign</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2 bg-[#030014] border border-purple-900/30 rounded-2xl p-4 mb-4 text-left">
                              <div>
                                <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Impact</span>
                                <span className="text-xs md:text-sm font-black text-slate-200 leading-tight">{item.impact}</span>
                              </div>
                              <div className="border-l border-purple-900/40 pl-3">
                                <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Efficiency</span>
                                <span className="text-xs md:text-sm font-black text-slate-300 leading-tight">{item.cost}</span>
                              </div>
                              <div className="border-l border-purple-900/40 pl-3">
                                <span className="text-[9px] md:text-xs text-slate-400 uppercase font-black block tracking-widest mb-1">Result</span>
                                <span className="text-xs md:text-sm font-black text-white leading-tight">{item.result}</span>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-purple-900/30 pt-4 flex flex-col gap-4">
                            <p 
                              className="text-slate-400 text-xs leading-relaxed font-light text-justify"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                            {item.link && (
                              <div className="flex justify-start">
                                <a 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="px-4 py-2 bg-[#161033] hover:bg-purple-900/20 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                                >
                                  Xem Chiến Dịch <ExternalLink size={12} />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Minigame status banner */}
                  <div className="bg-[#0f0b24] p-6 rounded-2xl border border-purple-900/40 shadow-sm flex items-center justify-between gap-4">
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

                  {/* PDF Viewer Board (Full Width Below) */}
                  <div className="flex flex-col bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-md h-[800px] w-full">
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



                    {/* Minigame Showcase & Shared Projects Header */}
                    <div className="pt-8 space-y-6">
                      <div className="text-left">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#161033] px-3 py-1 rounded-full border border-purple-900/40">
                          Minigames & Landing Sites
                        </span>
                        <h3 className="text-2xl font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200 leading-tight">
                          Minigame Campaigns & Web Sharing
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {/* Card 1: Unboxing the blind bag */}
                        <div 
                          onClick={() => { setPreviewImage(gameBlindbag); setPreviewList([gameBlindbag, gameWheelKnowledge, gameSpaWheel]); }}
                          className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm relative group hover:border-purple-500/50 transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161033] border-b border-purple-900/40">
                              <img src={gameBlindbag} alt="Unboxing the blind bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 bg-[#0f0b24]/90 rounded-full text-[10px] font-bold text-slate-200 shadow-md">Zoom Image</span>
                              </div>
                            </div>
                            <div className="p-5 space-y-2 text-left">
                              <span className="text-[8px] font-black uppercase tracking-wider text-purple-400 bg-[#161033] px-2 py-0.5 rounded border border-purple-900/40 w-fit inline-block">
                                Zalo Minigame
                              </span>
                              <h4 className="text-sm font-black text-white group-hover:text-purple-400 transition-colors leading-tight">Unboxing the blind bag - Tet 2024</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                                Minigame tương tác khui túi mù Tết 2024 giúp giữ chân và tăng lượng tương tác của người dùng.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 2: Wheel of Knowledge */}
                        <div 
                          onClick={() => { setPreviewImage(gameWheelKnowledge); setPreviewList([gameBlindbag, gameWheelKnowledge, gameSpaWheel]); }}
                          className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm relative group hover:border-purple-500/50 transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161033] border-b border-purple-900/40">
                              <img src={gameWheelKnowledge} alt="Wheel of Knowledge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 bg-[#0f0b24]/90 rounded-full text-[10px] font-bold text-slate-200 shadow-md">Zoom Image</span>
                              </div>
                            </div>
                            <div className="p-5 space-y-2 text-left">
                              <span className="text-[8px] font-black uppercase tracking-wider text-purple-400 bg-[#161033] px-2 py-0.5 rounded border border-purple-900/40 w-fit inline-block">
                                Lucky Wheel
                              </span>
                              <h4 className="text-sm font-black text-white group-hover:text-purple-400 transition-colors leading-tight">Wheel of Knowledge - Tet 2023</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                                Vòng quay kiến thức may mắn kết hợp trả lời câu hỏi trúng quà chiến dịch Tết 2023.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 3: Trangpap Spa Wheel */}
                        <div 
                          onClick={() => { setPreviewImage(gameSpaWheel); setPreviewList([gameBlindbag, gameWheelKnowledge, gameSpaWheel]); }}
                          className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm relative group hover:border-purple-500/50 transition-all hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161033] border-b border-purple-900/40">
                              <img src={gameSpaWheel} alt="Trangpap Spa Wheel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 bg-[#0f0b24]/90 rounded-full text-[10px] font-bold text-slate-200 shadow-md">Zoom Image</span>
                              </div>
                            </div>
                            <div className="p-5 space-y-2 text-left">
                              <span className="text-[8px] font-black uppercase tracking-wider text-purple-400 bg-[#161033] px-2 py-0.5 rounded border border-purple-900/40 w-fit inline-block">
                                Spa Mini-Web
                              </span>
                              <h4 className="text-sm font-black text-white group-hover:text-purple-400 transition-colors leading-tight">Trangpap Spa Wheel</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                                Vòng quay trúng quà thương hiệu tùy biến riêng cho chiến dịch tăng Retention của Trangpap Spa.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card 4: Google Sites Sharing Project */}
                        <div 
                          className="bg-[#0f0b24] border border-purple-900/40 rounded-2xl overflow-hidden shadow-sm relative group hover:border-purple-500/50 transition-all hover:-translate-y-0.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#161033] border-b border-purple-900/40 flex items-center justify-center p-6 text-center">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 to-slate-950/30" />
                              <div className="relative z-10 space-y-2">
                                <div className="w-12 h-12 rounded-2xl bg-[#0f0b24] border border-purple-900/40 text-yellow-300 flex items-center justify-center mx-auto shadow-md">
                                  <ExternalLink size={20} />
                                </div>
                                <span className="text-[10px] font-black text-white tracking-widest uppercase">MÓN QUÀ NHỎ</span>
                              </div>
                            </div>
                            <div className="p-5 space-y-2 text-left">
                              <span className="text-[8px] font-black uppercase tracking-wider text-yellow-400 bg-[#161033] px-2 py-0.5 rounded border border-purple-900/40 w-fit inline-block">
                                Free Template
                              </span>
                              <h4 className="text-sm font-black text-white group-hover:text-yellow-400 transition-colors leading-tight">Google Sites Theme Sharing</h4>
                              <p className="text-[11px] text-slate-400 font-light leading-relaxed text-justify">
                                Google Sites giúp tạo web trực quan không code, chỉ hỗ trợ nhúng HTML cơ bản. Mọi người đều có thể tự làm cho mình trang web thông tin Chuyên nghiệp & Miễn phí.
                              </p>
                            </div>
                          </div>
                          <div className="p-5 pt-0">
                            <a 
                              href="https://sites.google.com/view/turnio-theme/home" 
                              target="_blank" 
                              rel="noreferrer"
                              className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-black text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-all duration-300 shadow-sm"
                            >
                              Mở Template <ExternalLink size={10} />
                            </a>
                          </div>
                        </div>
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
                    <h3 className="text-3xl font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-amber-200 leading-tight">Đồng hành cùng các thương hiệu hàng đầu</h3>
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

      {/* FLOATING CHATBOT WINDOW */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-0 right-0 sm:bottom-28 sm:right-6 w-full sm:w-[460px] h-[100dvh] sm:h-[650px] z-50 sm:rounded-2xl shadow-2xl overflow-hidden border-t sm:border border-purple-900/40 bg-[#0f0b24]"
          >
            <DomiBot onNavigate={handleNavigateFromBot} activeTab={activeTab} onClose={() => setChatOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
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
