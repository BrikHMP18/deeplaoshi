import React from 'react';
import { motion } from 'framer-motion';

/**
 * AppHeader Component
 * Displays the main title and subtitle
 */
const AppHeader = ({ className = "" }) => {
  return (
    <motion.div 
      className={`app-header ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="app-title">GRE Vocabulary</h1>
      <p className="app-subtitle">
        High frequency words you need to know (source: <a 
          href="https://www.youtube.com/watch?v=RoLBcdM1kPc&t=2223s" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="video-link"
        >
          Scholar Den
        </a>)
      </p>
    </motion.div>
  );
};

export default AppHeader;
