
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ArrowUpRight, Plus, Minus, Grid, Code2, Briefcase, Target, Layers } from 'lucide-react';
import Modal from '../UI/Modal';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 8); 

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4">PROJECT HIGHLIGHTS.</h2>
            </motion.div>
            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">
                <Grid size={14} />
                <span>Total: {PROJECTS.length} Projects</span>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 h-[420px] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Background */}
                <div className="absolute inset-0 h-3/5 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-auto mt-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border ${project.category === 'Marketing' ? 'bg-gold-500 text-black border-gold-500' : 'bg-blue-600 text-white border-blue-600'}`}>
                            {project.category}
                        </span>
                    </div>

                    <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-gold-500 transition-colors">{project.title}</h3>
                        
                        <div className="flex flex-wrap gap-1.5 mb-4">
                             {project.tech?.slice(0,2).map(t => (
                                 <span key={t} className="text-[9px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{t}</span>
                             ))}
                        </div>

                        <p className="text-gray-500 text-xs line-clamp-2 font-light leading-relaxed mb-4">
                            {project.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                            View Project <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
        </div>

        {PROJECTS.length > 8 && (
            <div className="mt-16 text-center">
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className="group px-8 py-4 border border-white/10 rounded-full text-white font-bold text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
                >
                    {showAll ? "Thu gọn" : `Xem thêm ${PROJECTS.length - 8} dự án`}
                </button>
            </div>
        )}

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title="Project Details" className="max-w-4xl">
            {selectedProject && (
                <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto overflow-hidden">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-10">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${selectedProject.category === 'Marketing' ? 'bg-gold-500 text-black' : 'bg-blue-600 text-white'}`}>
                            {selectedProject.category}
                        </span>
                        <h2 className="text-3xl font-black text-white mt-4 mb-6">{selectedProject.title}</h2>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-2"><Briefcase size={12}/> Client</h4>
                                <p className="text-white text-sm">{selectedProject.client || 'Confidential'}</p>
                            </div>
                            <div>
                                <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-2"><Target size={12}/> Purpose</h4>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">{selectedProject.purpose}</p>
                            </div>
                            <div>
                                <h4 className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2"><Code2 size={12}/> Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech?.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-gray-400">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
