import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchCategories, fetchAreas, searchMeals, filterByArea, getRandomRecipe } from './api/mealsAPI';
import DataTable from './components/DataTable';
import DetailCard from './components/DetailCard';

/**
 * App Component
 * Komponen utama aplikasi Recipe Finder
 * Mengelola state global dan routing
 */
function App() {
  // State untuk menyimpan data categories dan areas
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  
  // State untuk menyimpan hasil pencarian meals
  const [meals, setMeals] = useState([]);
  
  // State untuk loading dan error handling
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch categories dan areas saat component mount
   * Data ini digunakan untuk dropdown filter di SearchForm
   */
  useEffect(() => {
    const getInitialData = async () => {
      const fetchedCategories = await fetchCategories();
      const fetchedAreas = await fetchAreas();
      setCategories(fetchedCategories);
      setAreas(fetchedAreas);
    };
    getInitialData();
  }, []);

  /**
   * Handler untuk pencarian meal
   * Mendukung pencarian berdasarkan searchTerm dan/atau category
   * @param {Object} params - Parameter pencarian
   * @param {string} params.searchTerm - Kata kunci pencarian
   * @param {string} params.category - Kategori meal
   */
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

  /**
   * Handler untuk filter meal berdasarkan area
   * Jika area kosong (All Areas), kosongkan hasil
   * @param {string} area - Nama area/country untuk filter
   */
  const handleFilterByArea = async (area) => {
    if (!area) {
      // Jika area dipilih kembali ke "All Areas", kosongkan hasil
      setMeals([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const results = await filterByArea(area);
      setMeals(results || []);
    } catch (err) {
      setError('Failed to filter by area.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handler untuk mendapatkan random recipe
   * Saat ini menampilkan alert, nantinya akan dinavigasi ke detail page
   */
  const handleRandomRecipe = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const randomMeal = await getRandomRecipe();
      // Untuk sementara, kita tampilkan di console. Nanti akan dinavigasi.
      console.log('Random Recipe:', randomMeal);
      // TODO: Navigate to detail page
      alert(`Random Recipe: ${randomMeal.strMeal}. Check console for details.`);
    } catch (err) {
      setError('Failed to fetch a random recipe.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/recipe/:id" element={<DetailCard />} />
        </Routes>
      </main>
      {/* ... footer */}
    </div>
  );
}

export default App;