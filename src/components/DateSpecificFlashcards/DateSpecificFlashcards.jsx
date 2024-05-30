import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <div className="card">
        <h2>{wordList[currentIndex].kanji}</h2>
        <div
          className="kana"
          onMouseEnter={() => setShowKana(true)}
          onMouseLeave={() => setShowKana(false)}
        >
          {showKana ? wordList[currentIndex].kana : 'Show Kana'}
        </div>
        {showMeaning ? (
          <div className="meaning">
            <p><strong>Your Answer:</strong> {userAnswer}</p>
            <p><strong>Meaning:</strong> {wordList[currentIndex].meaning}</p>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your answer"
            />
            <button onClick={handleShowMeaning}>Show Meaning</button>
          </div>
        )}
      </div>
      {showMeaning && (
        <div className="buttons">
          <button className='button button__green' onClick={handleKnow}>Know</button>
          <button className='button button__red' onClick={handleDontKnow}>Don't Know</button>
        </div>
      )}
      <div className="learned-words">
        <button className="learned-words__button">Learned Words</button>
        <div className="learned-words__list">
          {learnedWords.map((word, index) => (
            <div key={index} className="learned-words__item">
              <p>{word.kanji} - {word.kana} - {word.meaning}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="to-learn-words">
        <button className="to-learn-words__button">To Learn Words</button>
        <div className="to-learn-words__list">
          {toLearn.map((word, index) => (
            <div key={index} className="to-learn-words__item">
              <p>{word.kanji} - {word.kana} - {word.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateSpecificFlashcards;
