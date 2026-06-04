import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CoreConcepts from './components/CoreConcepts';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import AchievementsExperience from './components/AchievementsExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <CoreConcepts />
          <Projects />
          <Education />
          <Certifications />
          <AchievementsExperience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
