// src/components/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Kanji Learning App</h1>
      <nav>
        <ul>
          <li><Link to="/kanji-list">Kanji List</Link></li>
          <li><Link to="/flashcards">Flashcards</Link></li>
          <li><Link to="/wordlist">Word List</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
