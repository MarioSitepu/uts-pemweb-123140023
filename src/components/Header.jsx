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
        <div className="header-top">
          <img src={logo} alt="Recipe Finder Logo" className="header-logo" />
          <h1>Recipe Finder</h1>
        </div>
        <p className="header-tagline">
          Find your daily culinary inspiration with Recipe Finder, which brings easy, detailed recipes from global kitchens straight to your fingertips.
        </p>
      </div>
    </header>
  );
};

export default Header;