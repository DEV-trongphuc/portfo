import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bot, Palette, Code2, Scissors, PenTool, Layout, FileJson, Atom, FileCode2, TrendingUp, Waypoints } from 'lucide-react';

const SkillsShowcase: React.FC = () => {
    const skillGroups = [
        {
            category: "Data & Strategy",
            color: "from-blue-500/20 to-cyan-500/10",
            iconColor: "text-blue-400",
            skills: [
                { name: "Phân tích Report", icon: <BarChart /> },
                { name: "Ads Meta/Google", icon: <TrendingUp /> },
                { name: "Thiết kế Flow Nurturing", icon: <Waypoints /> },
            ]
        },
        {
            category: "Creative & AI",
            color: "from-purple-500/20 to-pink-500/10",
            iconColor: "text-purple-400",
            skills: [
                { name: "Sử dụng AI", icon: <Bot /> },
                { name: "Canva", icon: <Palette /> },
                { name: "Photoshop", icon: <PenTool /> },
                { name: "Capcut", icon: <Scissors /> },
            ]
        },
        {
            category: "Engineering",
            color: "from-gold-500/20 to-orange-500/10",
            iconColor: "text-gold-500",
            skills: [
                { name: "HTML & CSS", icon: <Layout /> },
                { name: "JavaScript", icon: <FileJson /> },
                { name: "TypeScript", icon: <FileCode2 /> },
                { name: "ReactJS", icon: <Atom /> },
            ]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-full mb-6"
                    >
                        <Code2 className="text-gold-500 w-5 h-5" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        MULTIDISCIPLINARY <br/><span className="text-gradient-gold">SKILLS.</span>
                    </h2>
                    <p className="text-gray-400 mt-4 font-light text-lg">Bộ kỹ năng đa nhiệm từ Logic đến Sáng tạo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className={`bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 w-full relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl`}
                        >
                            {/* Ambient glow inside card */}
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${group.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 -mr-20 -mt-20`}></div>
                            
                            <h3 className={`text-xl font-black ${group.iconColor} mb-8 uppercase tracking-widest text-[12px] relative z-10`}>
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-4 relative z-10">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-2 hover:bg-white/10 hover:border-white/20 transition-all cursor-default w-fit shadow-md hover:shadow-lg">
                                        <div className={`scale-75 ${group.iconColor}`}>{skill.icon}</div>
                                        <span className="text-sm font-bold text-gray-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
