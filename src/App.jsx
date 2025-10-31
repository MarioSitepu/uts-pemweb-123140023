import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Konten utama akan ada di sini */}
      </main>
      <footer>
        <p>&copy; 2023 Recipe Finder</p>
      </footer>
    </div>
  );
}

export default App;