// HomePage.js - Refactored with Components and Hooks
import React, { useState, useMemo } from "react";
import "./HomePage.css";

// Components
import Logo from '../components/Logo';
import AppHeader from '../components/AppHeader';
import LetterSelector from '../components/LetterSelector';
import ProgressBar from '../components/ProgressBar';
import Flashcard from '../components/Flashcard';
import Controls from '../components/Controls';
import CompletionMessage from '../components/CompletionMessage';
import NoWordsMessage from '../components/NoWordsMessage';

// Hooks
import { useFlashcard } from '../hooks/useFlashcard';

// Data
import { greVocabulary, getAvailableLetters } from '../data/greVocabulary';

const HomePage = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");
  
  // Get words for selected letter
  const currentWords = useMemo(() => 
    greVocabulary[selectedLetter] || [], 
    [selectedLetter]
  );
  
  // Get available letters (only those with words)
  const availableLetters = useMemo(() => 
    getAvailableLetters(), 
    []
  );

  // Use flashcard hook
  const {
    currentIndex,
    isFlipped,
    studiedCards,
    currentCard,
    totalWords,
    isFirstCard,
    isLastCard,
    isCompleted,
    nextCard,
    prevCard,
    flipCard,
    resetSession,
    selectLetter: resetFlashcard
  } = useFlashcard(currentWords);

  // Handle letter selection
  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
    resetFlashcard(currentWords);
  };

  return (
    <>
      {/* Fixed Logo */}
      <Logo />

      {/* Main Content */}
      <div className="gre-vocab-homepage">
        <div className="flashcard-app">
          {/* Header */}
          <AppHeader />

          {/* Letter Selector */}
          <LetterSelector
            letters={availableLetters}
            selectedLetter={selectedLetter}
            onLetterSelect={handleLetterSelect}
          />

          {/* Progress */}
          <ProgressBar
            currentIndex={currentIndex}
            totalWords={totalWords}
            studiedCount={studiedCards.size}
          />

          {/* Flashcard */}
          {totalWords > 0 && currentCard && (
            <Flashcard
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={flipCard}
            />
          )}

          {/* Controls */}
          {totalWords > 0 && (
            <Controls
              onPrev={prevCard}
              onNext={nextCard}
              onReset={resetSession}
              isFirstCard={isFirstCard}
              isLastCard={isLastCard}
            />
          )}

          {/* Completion Message */}
          {isCompleted && (
            <CompletionMessage selectedLetter={selectedLetter} />
          )}

          {/* No Words Message */}
          {totalWords === 0 && (
            <NoWordsMessage />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
