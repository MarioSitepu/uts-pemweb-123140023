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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setIsLoading(true);
    setError(null);
    try {
      const results = await searchMeals(params);
      setMeals(results || []);
    } catch (err) {
      setError('Failed to fetch meals. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterByArea = async (area) => {
    setIsLoading(true);
    setError(null);
    try {
      if (area) {
        const result = await filterByArea(area);
        setMeals(result || []);
      } else {
        setMeals([]);
      }
    } catch (err) {
      setError('Failed to fetch meals. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRandomRecipe = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getRandomRecipe();
      setMeals(result ? [result] : []);
    } catch (err) {
      setError('Failed to fetch meals. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
        {isLoading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {!isLoading && !error && <DataTable meals={meals} />}
      </main>
      {/* ... footer */}
    </div>
  );
}

export default App;