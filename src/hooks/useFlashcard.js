import { useState, useCallback } from 'react';

/**
 * Custom hook for managing flashcard state and navigation
 * @param {Array} words - Array of words for the current letter
 * @returns {Object} Flashcard state and control functions
 */
export const useFlashcard = (words = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set());

  const currentCard = words[currentIndex];
  const totalWords = words.length;

  // Navigation functions
  const nextCard = useCallback(() => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
      if (currentCard) {
        setStudiedCards(prev => new Set(prev).add(currentCard.id));
      }
    }
  }, [currentIndex, totalWords, currentCard]);

  const prevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const flipCard = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const resetSession = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
  }, []);

  const selectLetter = useCallback((newWords) => {
    setCurrentIndex(0);
    setIsFlipped(false);
    // Reset studied cards when changing letters
    setStudiedCards(new Set());
  }, []);

  // Progress calculations
  const progress = totalWords > 0 ? ((currentIndex + 1) / totalWords) * 100 : 0;
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === totalWords - 1;
  const isCompleted = totalWords > 0 && currentIndex === totalWords - 1 && studiedCards.size === totalWords;

  return {
    // State
    currentIndex,
    isFlipped,
    studiedCards,
    currentCard,
    totalWords,
    progress,
    
    // Computed state
    isFirstCard,
    isLastCard,
    isCompleted,
    
    // Actions
    nextCard,
    prevCard,
    flipCard,
    resetSession,
    selectLetter,
    
    // Setters (for external control)
    setCurrentIndex,
    setIsFlipped,
    setStudiedCards
  };
};
