import React from 'react';

const Buttons = ({ handleKnow, handleDontKnow }) => (
  <div className="buttons">
    <button className='button button__green' onClick={handleKnow}>Know</button>
    <button className='button button__red' onClick={handleDontKnow}>Don't Know</button>
  </div>
);

export default Buttons;
