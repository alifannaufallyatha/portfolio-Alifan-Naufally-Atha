import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow px-6 py-4 fixed w-full z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-white">My Portfolio</h1>
      <div className="flex space-x-8">
        <a href="#skills" className="text-lg md:text-xl text-gray-100 hover:text-white transition-colors">
          Skills
        </a>
        <a href="#experience" className="text-lg md:text-xl text-gray-100 hover:text-white transition-colors">
          Experience
        </a>
        <a href="#projects" className="text-lg md:text-xl text-gray-100 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="text-lg md:text-xl text-gray-100 hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;