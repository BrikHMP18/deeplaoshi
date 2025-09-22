# GRE Vocabulary Flashcards

> A clean, minimalist flashcard app for GRE vocabulary learning with Spanish translations

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.4.3-purple.svg)](https://www.framer.com/motion/)
[![Firebase](https://img.shields.io/badge/Firebase-11.2.0-orange.svg)](https://firebase.google.com/)

## 🎯 Purpose

This project is a **learning exercise** in frontend development, specifically focused on:

- **React Hooks** (useState, useMemo, custom hooks)
- **Component Architecture** (reusable, modular components)
- **State Management** (local state, prop drilling)
- **CSS Animations** (Framer Motion, CSS transitions)
- **Responsive Design** (mobile-first approach)
- **Code Organization** (separation of concerns)

## ✨ Features

- **112 GRE Vocabulary Words** organized by letter (A-Z)
- **Interactive Flashcards** with flip animations
- **Spanish Translations** for each word
- **Progress Tracking** with studied cards counter
- **Letter Navigation** to focus on specific alphabets
- **Responsive Design** works on all devices
- **Clean UI** with Apple-inspired minimalism

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/gre-vocabulary-flashcards.git

# Navigate to project directory
cd gre-vocabulary-flashcards

# Install dependencies
npm install

# Set up environment variables (optional - for Firebase features)
cp .env.example .env
# Edit .env with your Firebase project details

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> **Note**: The app works without Firebase configuration. Firebase is included for future features.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI Components
│   ├── Flashcard.js     # Individual flashcard component
│   ├── LetterSelector.js # A-Z letter grid
│   ├── ProgressBar.js   # Progress indicator
│   ├── Controls.js      # Navigation buttons
│   └── ...              # Other UI components
├── data/
│   └── greVocabulary.js # All 112 vocabulary words
├── hooks/
│   └── useFlashcard.js  # Custom flashcard logic
└── unAuth/
    ├── HomePage.js      # Main app component
    └── HomePage.css     # All styles
```

## 🛠️ Built With

- **React 19** - UI library
- **Framer Motion** - Animations
- **CSS3** - Styling with custom properties
- **Firebase** - Ready for future features

## 📚 Learning Objectives

This project demonstrates:

- **Custom Hooks** - `useFlashcard` manages all flashcard state
- **Component Composition** - Small, focused components
- **Data Management** - Centralized vocabulary data
- **Animation Patterns** - Smooth transitions and micro-interactions
- **Responsive Design** - Mobile-first CSS approach
- **Code Organization** - Clean separation of concerns

## 🎨 Design Philosophy

- **Minimalist** - Clean, uncluttered interface
- **Accessible** - Keyboard navigation and screen reader friendly
- **Performance** - Optimized animations and rendering
- **Scalable** - Easy to add more words or features

## 📖 Vocabulary Source

Words are sourced from [Scholar Den's GRE Vocabulary video](https://www.youtube.com/watch?v=RoLBcdM1kPc&t=2223s) - a comprehensive resource for GRE preparation.

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Add more vocabulary words
- Improve animations
- Enhance accessibility
- Optimize performance
- Fix bugs

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Scholar Den](https://www.youtube.com/@ScholarDen) for the vocabulary content
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React](https://reactjs.org/) for the amazing framework

---

**Note**: This project was created as a learning exercise in frontend development. It's not affiliated with ETS or any official GRE testing organization.