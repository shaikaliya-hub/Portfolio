import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaBriefcase, FaStar } from 'react-icons/fa';

const AchievementsExperience = () => {
  return (
    <section className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Experience Section */}
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaBriefcase className="text-emerald-500" /> Experience
          </h2>
          
          <div className="space-y-6 flex-1">
            {/* Full Stack Developer Experience */}
            <div className="glass dark:glass-dark p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Full Stack Developer</h3>
              <div className="text-emerald-500 font-semibold mb-4 flex items-center gap-2">
                <span>Software Development</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Developed and maintained scalable web applications, designed responsive user interfaces, and implemented robust backend APIs using modern frameworks and databases.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Tailwind CSS', 'API Development'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Marketing Team Head Experience */}
            <div className="glass dark:glass-dark p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Marketing Team Head</h3>
              <div className="text-emerald-500 font-semibold mb-4 flex items-center gap-2">
                <span>Leadership & Management</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Led marketing initiatives, coordinated team activities, managed campaigns, and developed leadership and communication skills while supporting organizational growth.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Team Leadership', 'Strategic Planning', 'Communication', 'Project Management'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={fadeIn('left', 'tween', 0.4, 1)}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaStar className="text-yellow-500" /> Key Achievements
          </h2>
          
          <div className="glass dark:glass-dark p-8 rounded-3xl h-full flex flex-col justify-center">
            <ul className="space-y-6">
              {[
                'Active Participant in AI & Data Science Hackathons',
                'Cloud Computing Certification Holder',
                'International Quiz Competition Participant',
                'Strong Academic Performance',
                'Technical Project Development Experience'
              ].map((achievement, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default AchievementsExperience;
