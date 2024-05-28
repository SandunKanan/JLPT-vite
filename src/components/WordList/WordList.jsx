import React, { useEffect, useState } from 'react';
import './WordList.scss';
import wordData from '../../assets/data/words_list.json';

const WordList = () => {
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    setWordList(wordData);
  }, []);

  return (
    <div className="word-list">
      {wordList.map((item, index) => (
        <div key={index} className="word-item">
          <div className="kanji">{item.kanji}</div>
          <div className="kana">{item.kana}</div>
          <div className="meaning">{item.meaning}</div>
        </div>
      ))}
    </div>
  );
};

export default WordList;
