import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Footer from '../components/Footer';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

const Home = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Navbar />
    <Hero />
    <Projects/>
    <Experience/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
);

export default Home;