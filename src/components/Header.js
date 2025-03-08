import React from 'react';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Marwah Raja</h1>
        <nav>
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#likes">Passions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
