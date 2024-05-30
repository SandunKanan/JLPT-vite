import React from 'react';
import { Link } from 'react-router-dom';
import './WordList.scss';

const WordList = () => {
  // Manually entered list of dates
  const dates = [
    '20240527',
    '20240529',
    // Add more dates as needed
  ];

  return (
    <div className="word-list">
      <h2 className="word-list__title">Word List Dates</h2>
      <ul className="word-list__dates">
        {dates.map(date => (
          <li key={date} className="word-list__item">
            <Link to={`/wordlist/${date}`} className="word-list__link">{date}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
