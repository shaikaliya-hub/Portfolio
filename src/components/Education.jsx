import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'Sri Venkateshwara Institute of Technology',
    period: '2022 – 2026',
    score: 'CGPA: 78%',
    description: 'Specializing in Core Computer Science and Engineering subjects, engaging in various hackathons and project developments.'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    period: '2020 – 2022',
    score: 'Score: 63%',
    description: 'Focused on Mathematics, Physics, and Chemistry, laying a strong foundation for engineering studies.'
  },
  {
    degree: 'SSC',
    institution: 'Crescent English Medium High School',
    period: '2019 – 2020',
    score: 'GPA: 9.8',
    description: 'Excelled in academics with top-tier performance, participating in science fairs and quiz competitions.'
  }
];

const EducationCard = ({ degree, institution, period, score, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 1)}
    className="relative pl-8 md:pl-0"
  >
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500/20 h-full"></div>
    
    <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      
      <div className="hidden md:block w-5/12"></div>
      
      <div className="absolute left-0 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-primary-light dark:border-primary-dark z-10 flex items-center justify-center">
        <FaGraduationCap className="text-white text-sm" />
      </div>

      <div className="w-full md:w-5/12 glass dark:glass-dark p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
        <span className="text-sm font-bold text-emerald-500 mb-2 block">{period}</span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{degree}</h3>
        <h4 className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-3">{institution}</h4>
        <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-bold mb-4">
          {score}
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Education Journey
        </motion.h2>

        <div className="relative mt-12 space-y-12 md:space-y-0">
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-1 bg-emerald-500/20 z-0"></div>
          
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
