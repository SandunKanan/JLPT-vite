// src/components/KanjiList/KanjiList.jsx
import React, { useState, useEffect } from 'react';
import KanjiCard from '../KanjiCard/KanjiCard';
import './KanjiList.scss';

const KanjiList = () => {
  const [kanjiData, setKanjiData] = useState([]);

  useEffect(() => {
    fetch('/kanji_data.json')
      .then(response => response.json())
      .then(data => setKanjiData(data))
      .catch(error => console.error('Error fetching Kanji data:', error));
  }, []);

  return (
    <div className="kanji-list">
      {kanjiData.map(kanji => (
        <KanjiCard key={kanji['#']} kanji={kanji} />
      ))}
    </div>
  );
};

export default KanjiList;
