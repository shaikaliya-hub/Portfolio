import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const stats = [
  { id: 1, title: 'Years Experience', value: 2, suffix: '+' },
  { id: 2, title: 'Major Projects', value: 2, suffix: '' },
  { id: 3, title: 'Certifications', value: 5, suffix: '+' },
  { id: 4, title: 'Tech Stack', value: 10, suffix: '+' },
];

const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: 2.5,
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [end, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <section id="about" className="section-container relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="show"
        animate="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1)} className="section-title">
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div variants={fadeIn('right', 'tween', 0.3, 1)} className="flex-1">
            <div className="glass dark:glass-dark p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Full Stack Developer & Computer Science Student
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                I am a passionate Full Stack Developer with experience in developing modern web applications and a strong foundation in AI, Data Science, and Software Development. Currently pursuing my B.Tech in Computer Science and Engineering at Sri Venkateshwara Institute of Technology.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Skilled in frontend and backend technologies, problem-solving, and project execution. I am deeply passionate about building innovative digital solutions, optimizing algorithms, and continuously learning emerging technologies in the fast-paced tech world.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="flex-1 grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                variants={fadeIn('up', 'spring', index * 0.2, 1)}
                className="glass dark:glass-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <h4 className="text-4xl md:text-5xl font-extrabold text-emerald-500 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
