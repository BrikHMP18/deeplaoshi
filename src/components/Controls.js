import React from 'react';
import { motion } from 'framer-motion';

/**
 * Controls Component
 * Displays navigation and control buttons
 */
const Controls = ({ 
  onPrev, 
  onNext, 
  onReset, 
  isFirstCard, 
  isLastCard, 
  className = "" 
}) => {
  return (
    <motion.div 
      className={`controls-section ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <button
        className="control-btn prev-btn"
        onClick={onPrev}
        disabled={isFirstCard}
      >
        <span className="btn-icon">←</span>
        Previous
      </button>

      <div className="center-controls">
        <button className="reset-btn" onClick={onReset}>
          <span className="btn-icon">↻</span>
        </button>
      </div>

      <button
        className="control-btn next-btn"
        onClick={onNext}
        disabled={isLastCard}
      >
        Next
        <span className="btn-icon">→</span>
      </button>
    </motion.div>
  );
};

export default Controls;
