import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
          
          <div className="flex-1 md:pr-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 mb-4">
              Aliya.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto md:mx-0">
              Building scalable web applications and intelligent solutions using modern technologies. Passionate about creating seamless user experiences.
            </p>
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all transform hover:-translate-y-1">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all transform hover:-translate-y-1">
              <FiGithub size={20} />
            </a>
            <a href="mailto:shaikaliya9054@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all transform hover:-translate-y-1">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shaik Aliya Firdous. All rights reserved.</p>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mt-4 md:mt-0 cursor-pointer flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors group"
          >
            Back to Top 
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full group-hover:-translate-y-1 transition-transform">
              <FiArrowUp />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
