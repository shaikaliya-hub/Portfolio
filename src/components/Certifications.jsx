import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaCertificate, FaTrophy, FaMedal } from 'react-icons/fa';

const certifications = [
  {
    title: 'APSCHE Virtual Internship',
    issuer: 'EduSkills',
    icon: <FaCertificate className="text-emerald-500 text-3xl" />,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL',
    icon: <FaCertificate className="text-blue-500 text-3xl" />,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'AI & Data Science Hackathons',
    issuer: 'Participant',
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'ISRO International Quiz',
    issuer: 'Competition',
    icon: <FaMedal className="text-purple-500 text-3xl" />,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Science Fair International Quiz',
    issuer: 'Competition',
    icon: <FaMedal className="text-rose-500 text-3xl" />,
    color: 'from-rose-400 to-red-500'
  }
];

const Certifications = () => {
  return (
    <section className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          Licenses & Certifications
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.15, 1)}
              className="glass dark:glass-dark p-6 rounded-2xl flex items-center gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg group-hover:text-emerald-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
