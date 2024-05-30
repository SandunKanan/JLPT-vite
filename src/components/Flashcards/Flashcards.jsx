import React, { useState } from 'react';
import './Flashcards.scss';

const Flashcards = ({ kanjiData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toLearn, setToLearn] = useState([]);

  const handleKnow = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % kanjiData.length);
  };

  const handleDontKnow = () => {
    setToLearn([...toLearn, kanjiData[currentIndex]]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % kanjiData.length);
  };

  const saveToLearnList = () => {
    const json = JSON.stringify(toLearn, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'to_learn.json';
    a.click();
  };

  return (
    <div className="flashcards">
      <div className="card">
        <h2>{`${kanjiData[currentIndex]['#']}. ${kanjiData[currentIndex]['Kanji']}`}</h2>
        <p><strong>Onyomi:</strong> {kanjiData[currentIndex]['Onyomi']} ({kanjiData[currentIndex]['Onyomi Kana']})</p>
        <p><strong>Kunyomi:</strong> {kanjiData[currentIndex]['Kunyomi']}</p>
        <p><strong>Meaning:</strong> {kanjiData[currentIndex]['Kanji Meaning']}</p>
      </div>
      <div className="buttons">
        <button onClick={handleKnow}>Know</button>
        <button onClick={handleDontKnow}>Don't Know</button>
      </div>
      <div className="save">
        <button onClick={saveToLearnList}>Save "To Learn" List</button>
      </div>
    </div>
  );
};

export default Flashcards;
