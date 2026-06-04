import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaPython, FaDatabase, FaCode } from 'react-icons/fa';

const coreConcepts = [
  {
    title: 'Python',
    icon: <FaPython className="text-4xl text-blue-500 mb-4" />,
    items: ['Data Types', 'Control Statements', 'Functions', 'File Handling', 'Exception Handling']
  },
  {
    title: 'SQL',
    icon: <FaDatabase className="text-4xl text-blue-400 mb-4" />,
    items: ['CRUD Operations', 'Joins', 'Constraints', 'Grouping', 'Filtering']
  },
  {
    title: 'Web Development',
    icon: <FaCode className="text-4xl text-emerald-500 mb-4" />,
    items: [
      'Semantic HTML & Forms', 
      'Flexbox & Grid', 
      'Responsive Design', 
      'DOM Manipulation & Events', 
      'React Components, Props & Hooks'
    ]
  }
];

const ConceptCard = ({ title, icon, items, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 1)}
    className="glass dark:glass-dark p-8 rounded-3xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
  >
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{title}</h3>
      <ul className="w-full text-left space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
            <span className="text-emerald-500 mr-2 mt-1">▹</span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CoreConcepts = () => {
  return (
    <section className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Core Concepts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreConcepts.map((concept, index) => (
            <ConceptCard key={concept.title} {...concept} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoreConcepts;
