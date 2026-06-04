import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'AI-Based Student Result Analysis',
    description: 'Developed machine learning models to analyze historical student academic data and predict future performance. The system helps identify at-risk students and supports data-driven educational decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['Data Analysis', 'Predictive Modeling', 'Performance Forecasting', 'Visualization Dashboard'],
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 2,
    title: 'Identification of Trash and Recycle Materials',
    description: 'Developed a Convolutional Neural Network (CNN) based image classification system that automatically identifies and categorizes trash and recyclable materials to improve waste segregation accuracy and support sustainable waste management.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    features: ['Image Classification', 'CNN Model', 'Waste Segregation', 'Sustainability Support'],
    tech: ['Python', 'CNN', 'Deep Learning', 'Computer Vision'],
    demoLink: '#',
    sourceLink: '#'
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="section-container">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              variants={fadeIn('up', 'spring', index * 0.3, 1)}
              className="glass dark:glass-dark rounded-3xl overflow-hidden cursor-pointer group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                <motion.img 
                  layoutId={`card-image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {project.title}
                </motion.h3>
                <motion.div layoutId={`card-tech-${project.id}`} className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-emerald-500 font-semibold group-hover:text-emerald-600 transition-colors">
                  View Details <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass dark:glass-dark rounded-3xl z-10 scrollbar-hide"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors z-20"
              >
                <FiX size={24} className="text-gray-800 dark:text-gray-200" />
              </button>
              
              <div className="h-64 md:h-96 w-full">
                <motion.img 
                  layoutId={`card-image-${selectedId}`}
                  src={selectedProject?.image || ''} 
                  alt={selectedProject?.title || 'Project'} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                  {selectedProject.title}
                </motion.h3>
                
                <motion.div layoutId={`card-tech-${selectedId}`} className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </motion.div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About the Project</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedProject?.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject?.features.map(f => (
                      <li key={f} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="text-emerald-500 mr-2">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-10">
                  <a href={selectedProject?.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={selectedProject?.sourceLink} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
