import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Footer from '../components/Footer';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 100;
      const shouldShowButton = window.scrollY > 400 || atTop;
      setShowButton(shouldShowButton);
      setIsAtTop(atTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 
      dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 
      text-slate-800 dark:text-white transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-white via-indigo-50/20 to-white 
        dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        <Hero />
      </div>

      {/* Projects Section */}
      <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 
        dark:from-gray-900 dark:via-slate-900/50 dark:to-gray-900">
        <Projects />
      </div>

      {/* Experience Section */}
      <div className="bg-gradient-to-br from-white via-indigo-50/20 to-white 
        dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        <Experience />
      </div>

      {/* Skills Section */}
      <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 
        dark:from-gray-900 dark:via-slate-900/50 dark:to-gray-900">
        <Skills />
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-br from-white via-indigo-50/20 to-white 
        dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        <About />
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 
        dark:from-gray-900 dark:via-slate-900/50 dark:to-gray-900">
        <Contact />
      </div>

      <Footer />

      {/* Scroll Direction Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToPosition}
            className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 
              p-3 rounded-full bg-white/90 dark:bg-gray-800/90 
              text-slate-600 dark:text-gray-200
              shadow-lg backdrop-blur-sm
              hover:bg-indigo-50 dark:hover:bg-gray-700
              hover:text-indigo-500 dark:hover:text-blue-400
              transition-all duration-300
              hover:shadow-indigo-500/20 dark:hover:shadow-blue-500/20
              ring-1 ring-slate-200/50 dark:ring-gray-700/50
              group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 8px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ 
                rotate: isAtTop ? 180 : 0,
                y: isAtTop ? 2 : -2
              }}
              transition={{ 
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="transform transition-transform group-hover:translate-y-0"
            >
              <FaArrowUp 
                size={20} 
                className="transition-colors duration-300
                  group-hover:text-indigo-500 dark:group-hover:text-blue-400" 
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;