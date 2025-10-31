import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  const handleSearch = (params) => {
    console.log('Searching with:', params);
    // Logika pencarian akan ditambahkan nanti
  };

  const handleFilterByArea = (area) => {
    console.log('Filtering by area:', area);
  };

  const handleRandomRecipe = () => {
    console.log('Fetching random recipe...');
  };

  return (
    <div className="App">
      <Header />
      <main>
        <SearchForm 
          onSearch={handleSearch}
          onFilterByArea={handleFilterByArea}
          onRandomRecipe={handleRandomRecipe}
        />
      </main>
      {/* ... footer */}
    </div>
  );
}

export default App;