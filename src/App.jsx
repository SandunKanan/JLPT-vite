import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import KanjiList from './components/KanjiList/KanjiList';
import Flashcards from './components/Flashcards/Flashcards';
import WordList from './components/WordList/WordList';
import DateSpecificWordList from './components/DateSpecificWordList/DateSpecificWordList';
import DateSpecificFlashcards from './components/DateSpecificFlashcards/DateSpecificFlashcards';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kanji-list" element={<KanjiList />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/wordlist" element={<WordList />} />
            <Route path="/wordlist/:date" element={<DateSpecificWordList />} />
            <Route path="/wordlist/:date/flashcards" element={<DateSpecificFlashcards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
