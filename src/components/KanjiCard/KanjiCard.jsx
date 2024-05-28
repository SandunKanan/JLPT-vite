import React from 'react';
import './KanjiCard.scss';

const KanjiCard = ({ kanji }) => {
  return (
    <div className="kanji-card">
      <h2>{`${kanji['#']}. ${kanji['Kanji']}`}</h2>
      <p><strong>Onyomi:</strong> {kanji['Onyomi']} ({kanji['Onyomi Kana']})</p>
      <p><strong>Kunyomi:</strong> {kanji['Kunyomi']}</p>
      <p><strong>Meaning:</strong> {kanji['Kanji Meaning']}</p>
    </div>
  );
};

export default KanjiCard;
