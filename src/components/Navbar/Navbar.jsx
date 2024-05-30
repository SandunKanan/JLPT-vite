import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <h1 className="navbar__title">JLPT N4 Kanji List</h1>
        <ul className="navbar__links">
          <li className="navbar__item"><Link to="/" className="navbar__link">Kanji List</Link></li>
          <li className="navbar__item"><Link to="/flashcards" className="navbar__link">Flashcards</Link></li>
          <li className="navbar__item"><Link to="/wordlist" className="navbar__link">Word List</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
