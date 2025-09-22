import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProgressBar Component
 * Displays progress information and bar
 */
const ProgressBar = ({ 
  currentIndex, 
  totalWords, 
  studiedCount, 
  className = "" 
}) => {
  if (totalWords === 0) return null;

  const progress = ((currentIndex + 1) / totalWords) * 100;

  return (
    <motion.div 
      className={`progress-section ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="progress-info">
        <span className="progress-text">
          Card {currentIndex + 1} of {totalWords}
        </span>
        <span className="studied-text">Studied: {studiedCount}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default ProgressBar;
