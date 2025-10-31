import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchCategories, fetchAreas } from './api/mealsAPI';

function App() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const fetchedCategories = await fetchCategories();
      const fetchedAreas = await fetchAreas();
      setCategories(fetchedCategories);
      setAreas(fetchedAreas);
    };
    getInitialData();
  }, []);

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
          categories={categories}
          areas={areas}
        />
      </main>
      {/* ... footer */}
    </div>
  );
}

export default App;