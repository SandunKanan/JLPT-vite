import React from 'react';

const Flashcard = ({ word, showKana, showMeaning, userAnswer, setShowKana, setShowMeaning, setUserAnswer, handleShowMeaning }) => (
  <div className="card">
    <h2>{word.kanji}</h2>
    <div
      className="kana"
      onMouseEnter={() => setShowKana(true)}
      onMouseLeave={() => setShowKana(false)}
    >
      {showKana ? word.kana : 'Show Kana'}
    </div>
    {showMeaning ? (
      <div className="meaning">
        <p><strong>Your Answer:</strong> {userAnswer}</p>
        <p><strong>Meaning:</strong> {word.meaning}</p>
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
);

export default Flashcard;
