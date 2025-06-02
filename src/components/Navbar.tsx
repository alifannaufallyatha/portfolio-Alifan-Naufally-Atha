import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaUser } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { href: '#projects', label: 'Projects', icon: <FaProjectDiagram size={20} /> },
    { href: '#experience', label: 'Experience', icon: <FaBriefcase size={20} /> },
    { href: '#about', label: 'About Me', icon: <FaUser size={20} /> },
    { href: '#skills', label: 'Skills', icon: <FaCode size={20} /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope size={20} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
       <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed w-full z-50 bg-slate-50/95 dark:bg-gray-900/95 backdrop-blur-sm 
          shadow-lg shadow-slate-200/50 dark:shadow-black/20 transition-all duration-200 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-purple-600
                bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              My Portfolio
            </motion.h1>

            <div className="flex items-center space-x-8">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`relative text-gray-700 dark:text-gray-200 
                      ${isActive ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}
                      font-medium transition-colors duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                  transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'light' ? (
                      <FaMoon className="text-gray-700 text-xl" />
                    ) : (
                      <FaSun className="text-yellow-400 text-xl" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 
          backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden transition-colors duration-200"
      >
        <div className="grid grid-cols-5 h-16">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const isAbout = item.href === '#about';
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center relative"
                whileTap={{ scale: 0.9 }}
                whileHover={{ y: -2 }}
              >
                <motion.div 
                  className={`p-2.5 rounded-full transition-all duration-300 
                    ${isActive ? 'bg-blue-100/80 dark:bg-blue-900/40' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'} 
                    ${isAbout ? 'ring-2 ring-blue-500 dark:ring-blue-400 ring-offset-2 ring-offset-white dark:ring-offset-gray-900' : ''}`}
                  whileHover={isAbout ? { 
                    scale: 1.1,
                    boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                  } : {}}
                  animate={isAbout && isActive ? { 
                    scale: [1, 1.1, 1],
                    boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 12px rgba(59, 130, 246, 0.8)", "0 0 0px rgba(59, 130, 246, 0)"]
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`transition-all duration-300
                    ${isActive ? 'text-blue-500 dark:text-blue-400 scale-110' : 'text-gray-700 dark:text-gray-300'}
                    ${isAbout ? 'text-blue-500 dark:text-blue-400' : ''}`}
                  >
                    {item.icon}
                  </span>
                </motion.div>
                <span className={`text-xs mt-1.5 transition-all duration-300
                  ${isActive ? 'text-blue-500 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300'}
                  ${isAbout ? 'font-medium' : ''}`}
                >
                  {item.label}
                </span>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute -top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
        </div>
      </motion.nav>

      {/* Theme Toggle Button for Mobile */}
      <motion.button
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg md:hidden transition-all duration-300 hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? (
              <FaMoon className="text-gray-700 text-xl" />
            ) : (
              <FaSun className="text-yellow-400 text-xl" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Navbar;