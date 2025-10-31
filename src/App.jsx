import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchCategories, fetchAreas, searchMeals, filterByArea, getRandomRecipe } from './api/mealsAPI';
import DataTable from './components/DataTable';

function App() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const fetchedCategories = await fetchCategories();
      const fetchedAreas = await fetchAreas();
      setCategories(fetchedCategories);
      setAreas(fetchedAreas);
    };
    getInitialData();
  }, []);

  const handleSearch = async (params) => {
    const result = await searchMeals(params);
    setMeals(result || []);
  };

  const handleFilterByArea = async (area) => {
    if (area) {
      const result = await filterByArea(area);
      setMeals(result || []);
    } else {
      setMeals([]);
    }
  };

  const handleRandomRecipe = async () => {
    const result = await getRandomRecipe();
    setMeals(result ? [result] : []);
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
        <DataTable meals={meals} />
      </main>
      {/* ... footer */}
    </div>
  );
}

export default App;