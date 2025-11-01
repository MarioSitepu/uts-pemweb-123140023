import React from 'react';
import logo from '../makan.png';

/**
 * Header Component
 * Komponen header aplikasi dengan logo dan judul utama
 */
const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <img src={logo} alt="Recipe Finder Logo" className="header-logo" />
        <h1>Recipe Finder</h1>
      </div>
    </header>
  );
};

export default Header;