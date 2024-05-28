import React, { useState, useEffect } from 'react';
import KanjiCard from './components/KanjiCard/KanjiCard';
import './App.css';
import Flashcards from './components/Flashcards/Flashcards';

const App = () => {
  const [kanjiData, setKanjiData] = useState([]);

  useEffect(() => {
    fetch('n4_kanji.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setKanjiData(data)
      })
      .catch(error => console.error('Error fetching Kanji data:', error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>JLPT N4 Kanji List</h1>
      </header>
      <main>
        <div className="kanji-list">
          {kanjiData.map(kanji => (
            <KanjiCard key={kanji['#']} kanji={kanji} />
          ))}
        </div>
        <Flashcards kanjiData={kanjiData} />
      </main>
    </div>
  );
};

export default App;
