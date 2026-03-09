import React from 'react';
import { motion } from 'framer-motion';

/**
 * NoWordsMessage Component
 * Displays message when no words are available for selected letter
 */
const NoWordsMessage = ({ className = "" }) => {
  return (
    <motion.div 
      className={`no-words-message ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="no-words-title">No hay palabras disponibles</h3>
      <p className="no-words-text">
        Selecciona otra letra para ver las palabras disponibles.
      </p>
    </motion.div>
  );
};

export default NoWordsMessage;
