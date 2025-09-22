import React from 'react';
import { motion } from 'framer-motion';

/**
 * Flashcard Component
 * Displays a single flashcard with flip animation
 */
const Flashcard = ({ 
  card, 
  isFlipped, 
  onFlip, 
  className = "" 
}) => {
  if (!card) return null;

  return (
    <motion.div
      className={`flashcard-container ${isFlipped ? 'flipped' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      onClick={onFlip}
    >
      <div className="card-inner">
        {!isFlipped ? (
          // Front of card - Word
          <div className="card-front">
            <div className="part-of-speech">
              {card.partOfSpeech}
            </div>
            <h2 className="word-title">{card.word}</h2>
            <p className="click-hint">Click to reveal definition</p>
          </div>
        ) : (
          // Back of card - Spanish translation and English definition
          <div className="card-back">
            <div className="spanish-translation">{card.spanish}</div>
            <p className="definition-text">{card.definition}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Flashcard;
