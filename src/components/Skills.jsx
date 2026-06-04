import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaTerminal, FaCode, FaBug } from 'react-icons/fa';

const skills = [
  { category: 'Programming Languages', items: [
    { name: 'Python', icon: <FaPython className="text-blue-500" />, level: 90 },
    { name: 'SQL', icon: <FaDatabase className="text-blue-400" />, level: 85 },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 80 },
  ]},
  { category: 'Frontend', items: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 85 },
    { name: 'Responsive Design', icon: <FaCss3Alt className="text-pink-500" />, level: 90 },
  ]},
  { category: 'Backend & DB', items: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 75 },
    { name: 'SQL', icon: <FaDatabase className="text-blue-400" />, level: 85 },
  ]},
  { category: 'Tools', items: [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 85 },
    { name: 'VS Code', icon: <FaCode className="text-blue-500" />, level: 90 },
    { name: 'Bash Scripting', icon: <FaTerminal className="text-gray-200" />, level: 70 },
    { name: 'Manual Testing', icon: <FaBug className="text-green-600" />, level: 80 },
  ]},
];

const SkillBar = ({ name, icon, level, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeIn('up', 'tween', groupIndex * 0.2, 1)}
              className="glass dark:glass-dark p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                {skillGroup.category}
              </h3>
              
              <div>
                {skillGroup.items.map((item, index) => (
                  <SkillBar key={item.name} {...item} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
