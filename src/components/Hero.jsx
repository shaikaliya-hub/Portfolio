import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '../utils/motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#10b981",
              },
              links: {
                color: "#10b981",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="show"
          animate="show"
          viewport={{ once: true }}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="text-xl md:text-2xl font-medium text-emerald-500 mb-2"
            >
              Hi there, I'm
            </motion.h2>
            
            <motion.h1 
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            >
              Shaik Aliya Firdous
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-6 h-[40px] md:h-[48px]"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Computer Science Student',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-emerald-500"
              />
            </motion.div>

            <motion.p 
              variants={fadeIn('up', 'tween', 0.5, 1)}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-8"
            >
              Building scalable web applications and intelligent solutions using modern technologies. Passionate about creating seamless user experiences and diving deep into data.
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>
              <a href="#" className="btn-outline flex items-center gap-2">
                <FiDownload /> Download Resume
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 'tween', 0.7, 1)}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors transform hover:scale-110">
                <FiLinkedin size={28} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors transform hover:scale-110">
                <FiGithub size={28} />
              </a>
              <a href="mailto:shaikaliya9054@gmail.com" className="text-gray-500 hover:text-emerald-500 transition-colors transform hover:scale-110">
                <FiMail size={28} />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.3, 1)}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              {/* Decorative blob or gradient behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full border-4 border-emerald-500 overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center z-10 shadow-2xl">
                 <img src={profileImg} alt="Shaik Aliya Firdous" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="text-emerald-500 opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-emerald-500 flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-500"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
