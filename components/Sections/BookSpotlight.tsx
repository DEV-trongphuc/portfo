
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BookOpen, Star, Award, ChevronRight, ChevronLeft, ShoppingCart, Sparkles, X, FileText, Share2, Info } from 'lucide-react';

// PAGE DATA
const RAW_PAGES = [
    'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/B%E1%BA%A3n%20%20(14.5%20x%2020.5%20cm).png', // Cover
    'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/71.png',
    'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/60.png',
    'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/109.png',
    'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/107.png'
];

// Combine pages into Sheets (Front/Back) for 3D flipping
const SHEETS = [
    { front: RAW_PAGES[0], back: RAW_PAGES[1] },
    { front: RAW_PAGES[2], back: RAW_PAGES[3] },
    { front: RAW_PAGES[4], back: 'END_SCREEN' },
];

// Typing Effect Component
const GradientTypewriter = ({ text, className }: { text: string, className?: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const timer = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(timer);
            }, 100); // Typing speed
            return () => clearInterval(timer);
        }
    }, [isInView, text]);

    return (
        <span ref={ref} className={className}>
            {displayedText}
            <span className="animate-blink text-white ml-1">|</span>
        </span>
    );
};

const BookSpotlight: React.FC = () => {
    const [isReaderOpen, setIsReaderOpen] = useState(false);
    const [flippedIndex, setFlippedIndex] = useState(-1); // -1 means book is closed (Cover visible)

    // Prevent scrolling when reader is open
    useEffect(() => {
        if (isReaderOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isReaderOpen]);

    const handleNext = () => {
        if (flippedIndex < SHEETS.length - 1) {
            setFlippedIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (flippedIndex >= 0) {
            setFlippedIndex(prev => prev - 1);
        }
    };

    const resetReader = () => {
        setIsReaderOpen(false);
        setTimeout(() => {
            setFlippedIndex(-1);
        }, 800);
    };

    // Logic for shifting the book container to center the active page
    const getContainerOffset = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) return '0%'; // Mobile always center
        if (flippedIndex === -1) return '-25%'; // Cover View (Show Right Page Centered)
        if (flippedIndex === SHEETS.length - 1) return '25%'; // End View (Show Left Page Centered)
        return '0%'; // Spread View
    };

    return (
        <section className="py-40 relative overflow-hidden">
            {/* --- DECOR: GEOMETRIC SVG BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Large Rotating Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 opacity-[0.05]"
                >
                    <svg width="800" height="800" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.2" fill="none" strokeDasharray="4 2" />
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.1" fill="none" />
                        <path d="M50 2 L50 98 M2 50 L98 50" stroke="white" strokeWidth="0.1" />
                        <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.1" fill="none" transform="rotate(45 50 50)" />
                    </svg>
                </motion.div>

                {/* Floating Icons symbolizing logic/ads */}
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 right-[10%] text-gold-500 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </motion.div>
            </div>

            {/* Premium Ambient Background Highlight for Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full -[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/20 to-transparent border border-gold-500/30 rounded-full text-gold-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <Award size={14} /> The #1 Best Seller Guide
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6"
                        >
                            FACEBOOK ADS <br />
                            {/* FIXED: Changed from transparent gradient to Solid Yellow with Glow for visibility */}
                            {/* Added a span with smaller text size for "AI CHẠY KHÔNG ĐƯỢC." */}
                            <span className="text-4xl md:text-6xl">
                                <GradientTypewriter
                                    text="AI CHẠY KHÔNG ĐƯỢC."
                                    className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                                />
                            </span>
                        </motion.h2>

                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <div className="flex items-center gap-1 text-gold-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                            </div>
                            <span className="text-white font-bold tracking-wide text-lg">5.0</span>
                            <span className="text-gray-500 text-sm">/ 500+ Readers</span>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed font-light mb-10 max-w-xl mx-auto lg:mx-0">
                            Không chỉ là sách, đây là <span className="text-white font-bold">Bản đồ tư duy</span> giúp bạn thoát khỏi ma trận giá thầu. Đúc kết 5 năm "đốt tiền" để tìm ra công thức Scale ngân sách bền vững.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => setIsReaderOpen(true)}
                                className="group relative px-10 py-5 bg-gold-500 text-black font-black uppercase text-xs tracking-[0.2em] rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Read Preview <BookOpen size={16} />
                                </span>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white opacity-40 rounded-full group-hover:w-[300px] group-hover:h-[300px] transition-all duration-500 ease-out"></div>
                            </button>

                            <a
                                href="https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            >
                                Tải Full PDF <FileText size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Book Visual - THE HERO PREVIEW */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative perspective-1000 mt-12 lg:mt-0">
                        {/* Glowing Aura behind book */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-gradient-to-tr from-gold-600/20 to-purple-600/20 rounded-full -[80px]"></div>

                        <motion.div
                            initial={{ rotateY: -30, rotateX: 10, y: -20 }}
                            whileHover={{ rotateY: -15, rotateX: 5, scale: 1.05, y: -40 }}
                            animate={{ y: [-20, -30, -20] }}
                            transition={{
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                default: { duration: 0.8, type: "spring", stiffness: 100 }
                            }}
                            className="relative z-10 cursor-pointer group"
                            onClick={() => setIsReaderOpen(true)}
                        >
                            <div className="relative w-[320px] md:w-[400px] aspect-[1/1.4] rounded-r-2xl shadow-[30px_30px_60px_rgba(0,0,0,0.8)] border-l-[12px] border-[#111] bg-black transform transition-shadow duration-500">
                                <img
                                    src={RAW_PAGES[0]}
                                    alt="Facebook Ads Digital Book Cover"
                                    className="w-full h-full object-cover rounded-r-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent rounded-r-2xl pointer-events-none"></div>
                                <div className="absolute inset-0 border border-white/10 rounded-r-2xl group-hover:border-gold-500/50 transition-colors"></div>
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60  border border-gold-500/50 text-gold-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to Read
                            </div>
                        </motion.div>

                        {/* Decor: New Edition Tag - Z-INDEX 30 */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -right-4 z-30 glass-pill px-4 py-2 rounded-xl border-gold-500/30 flex items-center gap-2 pointer-events-none"
                        >
                            <div className="p-1 bg-gold-500 rounded-full text-black"><Sparkles size={12} /></div>
                            <span className="text-[10px] font-bold text-white">New Edition 2026</span>
                        </motion.div>

                        {/* Decor: Author Tag */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-10 z-20 glass-pill pl-2 pr-4 py-2 rounded-full border-white/20 flex items-center gap-3 pointer-events-none"
                        >
                            <img
                                src="https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/turnio_dev.png"
                                alt="Author"
                                className="w-8 h-8 rounded-full border border-gold-500 object-cover"
                            />
                            <div>
                                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest leading-none">Author</p>
                                <p className="text-[10px] font-bold text-white leading-tight">Huynh Trong Phuc</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- REALISTIC 3D BOOK READER OVERLAY --- */}
                <AnimatePresence>
                    {isReaderOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // EXTREME Z-INDEX TO ENSURE IT COVERS EVERYTHING INCLUDING NAVBAR (z-40)
                            className="fixed inset-0 z-[100000] bg-black/95  flex items-center justify-center overflow-hidden"
                        >
                            {/* Background Overlay Click to Close */}
                            <div className="absolute inset-0" onClick={resetReader}></div>

                            <div className="relative w-full h-full flex items-center justify-center flex-col pointer-events-none">

                                {/* Book Wrapper - Handles Auto Centering & Scale */}
                                <motion.div
                                    className="relative w-[90vw] md:w-[800px] aspect-[2/1.4] perspective-1500 pointer-events-auto"
                                    animate={{
                                        x: getContainerOffset(),
                                    }}
                                    transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }} // Springy move
                                >
                                    {/* CLOSE BUTTON - GLASSMORPHISM STYLE */}
                                    <motion.button
                                        onClick={resetReader}
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute -top-6 -right-6 md:-right-12 md:-top-4 p-3 bg-black/30  border border-white/20 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-all z-[200] cursor-pointer"
                                    >
                                        <X size={20} />
                                    </motion.button>

                                    <div className="relative w-full h-full flex justify-center items-center preserve-3d">

                                        {/* Pages Logic */}
                                        {SHEETS.map((sheet, index) => {
                                            const zIndex = flippedIndex >= index ? index : SHEETS.length - index;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ rotateY: 0 }}
                                                    animate={{ rotateY: flippedIndex >= index ? -180 : 0 }}
                                                    // GENTLE FLIP: Higher mass = heavier paper feeling, Lower stiffness = softer
                                                    transition={{
                                                        duration: 1.5,
                                                        type: "spring",
                                                        stiffness: 30,
                                                        damping: 15,
                                                        mass: 1.5
                                                    }}
                                                    className="absolute w-1/2 h-full right-0 origin-left preserve-3d cursor-pointer"
                                                    style={{ zIndex }}
                                                    onClick={() => flippedIndex >= index ? handlePrev() : handleNext()}
                                                >
                                                    {/* FRONT OF SHEET (Right Page) */}
                                                    <div className="absolute inset-0 backface-hidden bg-[#111] border-r border-y border-white/10 rounded-r-lg overflow-hidden shadow-2xl">
                                                        <img src={sheet.front} alt={`Front ${index}`} className="w-full h-full object-contain" />

                                                        {/* Gentle Spine Shadow */}
                                                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>

                                                        {/* Page Highlight on Hover */}
                                                        <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-300"></div>
                                                    </div>

                                                    {/* BACK OF SHEET (Left Page) */}
                                                    <div className="absolute inset-0 backface-hidden bg-[#111] border-l border-y border-white/10 rounded-l-lg overflow-hidden shadow-2xl" style={{ transform: 'rotateY(180deg)' }}>
                                                        {sheet.back === 'END_SCREEN' ? (
                                                            // END SCREEN CONTENT - Auto Centered when active
                                                            <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#000] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                                                {/* Subtle Grain */}
                                                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

                                                                <div className="relative z-10 scale-90 md:scale-100">
                                                                    <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 mx-auto border border-gold-500/20">
                                                                        <FileText size={40} className="text-gold-500" />
                                                                    </div>
                                                                    <h3 className="text-3xl font-black text-white mb-3">YOUR JOURNEY <br /> STARTS HERE.</h3>
                                                                    <p className="text-gray-400 text-sm mb-8 font-light max-w-[200px] mx-auto">
                                                                        Trọn bộ tài liệu 154 trang này là món quà dành tặng cho cộng đồng.
                                                                    </p>

                                                                    <div className="space-y-3 w-full max-w-[220px] mx-auto">
                                                                        <a
                                                                            href="https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="w-full py-4 bg-gold-500 text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 duration-300 shadow-lg shadow-gold-500/20"
                                                                        >
                                                                            <FileText size={16} /> Read Full PDF
                                                                        </a>
                                                                        <button className="w-full py-4 border border-white/10 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                                                                            <Share2 size={16} /> Share to Friends
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            // NORMAL PAGE IMAGE
                                                            <>
                                                                <img src={sheet.back} alt={`Back ${index}`} className="w-full h-full object-contain" />
                                                                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>
                                                                <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-300"></div>
                                                            </>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                {/* Navigation Controls - Optional for better UX */}
                                <div className="mt-8 flex gap-8 z-[150] pointer-events-auto">
                                    <button
                                        onClick={handlePrev}
                                        disabled={flippedIndex < 0}
                                        className={`p-4 rounded-full border transition-all ${flippedIndex < 0 ? 'border-white/5 text-gray-700 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <div className="flex items-center text-gray-400 text-xs font-mono uppercase tracking-widest gap-2">
                                        <Info size={14} className="text-gold-500" />
                                        <span>
                                            {flippedIndex < 0 ? 'Cover View' : flippedIndex === SHEETS.length - 1 ? 'Full Access' : `Reading Mode`}
                                        </span>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        disabled={flippedIndex >= SHEETS.length - 1}
                                        className={`p-4 rounded-full border transition-all ${flippedIndex >= SHEETS.length - 1 ? 'border-white/5 text-gray-700 cursor-not-allowed' : 'border-white/20 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500'}`}
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Global styles for 3D preservation */}
                <style>{`
            .perspective-1500 { perspective: 1500px; }
            .preserve-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
        `}</style>
            </div>
        </section>
    );
};

export default BookSpotlight;
