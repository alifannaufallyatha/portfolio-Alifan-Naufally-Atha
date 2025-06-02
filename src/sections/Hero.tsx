import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-black text-white">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm a Developer</h1>
      <p className="mt-4 text-lg">Creating modern and interactive UIs</p>
    </motion.div>
  </section>
);

export default Hero;