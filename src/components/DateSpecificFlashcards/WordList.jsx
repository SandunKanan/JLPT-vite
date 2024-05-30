import React from 'react';

const WordList = ({ title, words }) => (
  <div className={`${title.toLowerCase().replace(' ', '-')}`}>
    <button className={`${title.toLowerCase().replace(' ', '-')}__button`}>{title}</button>
    <div className={`${title.toLowerCase().replace(' ', '-')}__list`}>
      {words.map((word, index) => (
        <div key={index} className={`${title.toLowerCase().replace(' ', '-')}__item`}>
          <p>{word.kanji} - {word.kana} - {word.meaning}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WordList;
