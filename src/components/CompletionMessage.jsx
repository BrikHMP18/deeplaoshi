import React from 'react';
import { motion } from 'framer-motion';

/**
 * CompletionMessage Component
 * Displays completion message when all cards are studied
 */
const CompletionMessage = ({ 
  selectedLetter, 
  className = "" 
}) => {
  return (
    <motion.div 
      className={`completion-message ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="completion-title">¡Felicitaciones!</h3>
      <p className="completion-text">
        Has completado todas las tarjetas de la letra {selectedLetter}.
      </p>
    </motion.div>
  );
};

export default CompletionMessage;
