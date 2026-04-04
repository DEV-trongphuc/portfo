import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark-bg relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">APPLICATION SKILLS.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((skill, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group bg-dark-card ${skill.color ? '' : 'hover:bg-white/5'}`}
                >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${skill.color}`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">{skill.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {skill.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;