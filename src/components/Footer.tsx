import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50/95 dark:bg-gray-900/95 backdrop-blur-sm 
            shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.15)] 
            py-6 md:py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
                    {/* Name and Role */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r 
                            from-indigo-400 to-purple-500 dark:from-blue-400 dark:to-purple-500 
                            bg-clip-text text-transparent">
                            Alifan Naufally Atha
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base">
                            Frontend Developer
                        </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center space-x-6 mb-6 md:mb-0">
                        <a href="https://github.com/alifannaufallyatha" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-indigo-500 dark:text-gray-400 
                                dark:hover:text-blue-400 transition-colors duration-300">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/alifan-naufally-atha-422411279/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-indigo-500 dark:text-gray-400 
                                dark:hover:text-blue-400 transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:athaalifan@gmail.com"
                            className="text-slate-600 hover:text-indigo-500 dark:text-gray-400 
                                dark:hover:text-blue-400 transition-colors duration-300">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="text-center text-slate-500 dark:text-gray-500 text-sm 
                    border-t border-slate-200 dark:border-gray-800 pt-6 mt-6">
                    © {new Date().getFullYear()} Alifan Naufally Atha. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;