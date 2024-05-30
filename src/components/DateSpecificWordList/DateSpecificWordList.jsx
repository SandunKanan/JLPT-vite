import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DateSpecificWordList.scss';

const DateSpecificWordList = () => {
  const { date } = useParams();
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetch(`/data/${date}_words_list.json`)
      .then(response => response.json())
      .then(data => setWordList(data))
      .catch(error => console.error('Error fetching word list data:', error));
  }, [date]);

  return (
    <div className="date-specific-word-list">
      <h2 className="date-specific-word-list__title">Word List for {date}</h2>
      <div className="date-specific-word-list__list">
        {wordList.map((word, index) => (
          <div className="date-specific-word-list__card" key={index}>
            <h3 className="date-specific-word-list__card-title">{word.kanji}</h3>
            <p className="date-specific-word-list__card-kana"><strong>Kana:</strong> {word.kana}</p>
            <p className="date-specific-word-list__card-meaning"><strong>Meaning:</strong> {word.meaning}</p>
          </div>
        ))}
      </div>
      <Link to={`/wordlist/${date}/flashcards`}>
        <button className="date-specific-word-list__button">Start Flashcards</button>
      </Link>
    </div>
  );
};

export default DateSpecificWordList;
