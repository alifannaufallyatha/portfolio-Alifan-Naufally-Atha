import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden
    bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 
    dark:from-gray-900 dark:via-slate-900 dark:to-gray-900
    transition-colors duration-300">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_60%)]
      dark:bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_60%)]" />
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      className="relative z-10 text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold
        bg-gradient-to-r from-slate-800 via-indigo-600 to-slate-800
        dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400
        bg-clip-text text-transparent
        drop-shadow-sm">
        Hello, I'm a Developer
      </h1>
      <p className="mt-6 text-lg md:text-xl
        text-slate-600 dark:text-slate-300
        font-medium">
        Creating modern and interactive UIs
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8"
      >
        <a href="#projects"
          className="px-6 py-3 rounded-full
            bg-gradient-to-r from-indigo-500 to-indigo-600 
            dark:from-blue-500 dark:to-indigo-600
            text-white font-medium
            hover:shadow-lg hover:shadow-indigo-500/25 dark:hover:shadow-blue-500/20
            transform hover:-translate-y-0.5
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-400
            focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-gray-900">
          View My Work
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;