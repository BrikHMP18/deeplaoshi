import React from 'react';
import { motion } from 'framer-motion';

/**
 * LetterSelector Component
 * Displays a grid of letter buttons for navigation
 */
const LetterSelector = ({ 
  letters, 
  selectedLetter, 
  onLetterSelect, 
  className = "" 
}) => {
  return (
    <motion.div 
      className={`letter-selector ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="selector-title">Select Letter</h3>
      <div className="letter-grid">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`letter-btn ${selectedLetter === letter ? 'active' : ''}`}
            onClick={() => onLetterSelect(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default LetterSelector;
