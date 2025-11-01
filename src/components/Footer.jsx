import React from 'react';
import logo from '../makan.png';

/**
 * Footer Component
 * Menampilkan informasi pembuat aplikasi dengan layout profesional
 */
const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={logo} alt="Recipe Finder Logo" className="footer-logo" />
            <div className="footer-brand-info">
              <h3 className="footer-title">Recipe Finder</h3>
              <p className="footer-description">
                Find your daily culinary inspiration with Recipe Finder, which brings easy, detailed recipes from global kitchens straight to your fingertips.
              </p>
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p>Made by <strong>Mario Fransiskus Sitepu</strong></p>
            <p>NIM <strong>123140023</strong></p>
            <p><strong>Teknik Informatika ITERA</strong></p>
            <div className="footer-github-wrapper">
              <span className="footer-github-text">Follow me on GitHub</span>
              <a 
                href="https://github.com/MarioSitepu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-github-link"
                aria-label="Follow Mario Fransiskus Sitepu on GitHub"
              >
                <svg 
                  className="github-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

