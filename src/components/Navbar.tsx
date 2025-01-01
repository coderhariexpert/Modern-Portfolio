import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1" />
          <div className="flex items-center space-x-8">
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </Link>
            <Link 
              to="education" 
              smooth={true} 
              duration={500} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Education
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link 
              to="certification" 
              smooth={true} 
              duration={500} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Certification
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="flex-1 flex justify-end space-x-4">
            <a 
              href="https://github.com/coderhariexpert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hari-vigneshwaran-46a6b9246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
