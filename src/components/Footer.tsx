import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Your Name</h3>
                        <p className="text-gray-400">Frontend Developer</p>
                    </div>
                    
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="hover:text-gray-400 transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourusername" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="hover:text-gray-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="mailto:your.email@example.com"
                             className="hover:text-gray-400 transition-colors">
                            Email
                        </a>
                    </div>
                </div>
                
                <div className="text-center mt-8 text-gray-400 text-sm">
                    © {new Date().getFullYear()} Your Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
