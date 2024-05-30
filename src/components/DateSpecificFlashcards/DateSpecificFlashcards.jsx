import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Flashcard from './Flashcard';
import Buttons from './Buttons';
import WordList from './WordList';
import './DateSpecificFlashcards.scss';

const DateSpecificFlashcards = () => {
  const { date } = useParams();
  const [wordList, setWordList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toLearn, setToLearn] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);
  const [showKana, setShowKana] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    fetch(`/data/${date}_words_list.json`)
      .then(response => response.json())
      .then(data => setWordList(data))
      .catch(error => console.error('Error fetching word list data:', error));
  }, [date]);

  const handleKnow = () => {
    setLearnedWords([...learnedWords, wordList[currentIndex]]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    resetCard();
  };

  const handleDontKnow = () => {
    setToLearn([...toLearn, wordList[currentIndex]]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    resetCard();
  };

  const resetCard = () => {
    setShowKana(false);
    setShowMeaning(false);
    setUserAnswer('');
  };

  const handleShowMeaning = () => {
    setShowMeaning(true);
  };

  if (wordList.length === 0) return <div>Loading...</div>;

  return (
    <div className="flashcards">
      <Flashcard
        word={wordList[currentIndex]}
        showKana={showKana}
        showMeaning={showMeaning}
        userAnswer={userAnswer}
        setShowKana={setShowKana}
        setShowMeaning={setShowMeaning}
        setUserAnswer={setUserAnswer}
        handleShowMeaning={handleShowMeaning}
      />
      {showMeaning && (
        <Buttons handleKnow={handleKnow} handleDontKnow={handleDontKnow} />
      )}
      <WordList title="Learned Words" words={learnedWords} />
      <WordList title="To Learn Words" words={toLearn} />
    </div>
  );
};

export default DateSpecificFlashcards;
