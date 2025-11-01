import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchCategories, fetchAreas, searchMeals, filterByArea, getRandomRecipe, getMultipleRandomRecipes, getMealDetailsByIds } from './api/mealsAPI';
import DataTable from './components/DataTable';
import DetailCard from './components/DetailCard';
import Loading from './components/Loading';

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
  
  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 12 card per halaman (3 baris x 4 kolom)
  
  // Ref untuk menandai apakah random recipe sudah ditampilkan saat initial load
  const hasInitialRandomRecipe = useRef(false);

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
   * Fetch multiple random recipes saat pertama kali halaman dibuka
   * Hanya dijalankan sekali saat component mount
   * Fetch 20 random recipes untuk pagination
   */
  useEffect(() => {
    const loadInitialRandomRecipes = async () => {
      // Hanya load random recipes sekali saat pertama kali dibuka
      if (!hasInitialRandomRecipe.current) {
        hasInitialRandomRecipe.current = true;
        setIsLoading(true);
        setError(null);
        try {
          // Fetch 20 random recipes untuk pagination
          const randomMeals = await getMultipleRandomRecipes(20);
          setMeals(randomMeals || []);
          setCurrentPage(1); // Reset ke halaman pertama
        } catch (err) {
          setError('Failed to fetch random recipes. Please try again later.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadInitialRandomRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handler untuk pencarian meal dengan kombinasi parameter
   * Mendukung kombinasi searchTerm, category, dan area
   * @param {Object} params - Parameter pencarian
   * @param {string} params.searchTerm - Kata kunci pencarian
   * @param {string} params.category - Kategori meal
   * @param {string} params.area - Area/country untuk filter
   */
  const handleSearch = async ({ searchTerm, category, area }) => {
    setIsLoading(true);
    setError(null);
    try {
      let results = [];

      // Jika ada area, gunakan filter by area terlebih dahulu
      if (area) {
        const areaResults = await filterByArea(area);
        // Filter by area hanya mengembalikan data ringan (id, name, thumb)
        // Kita perlu mengambil detail lengkap untuk filter berdasarkan category/searchTerm
        if (areaResults && areaResults.length > 0) {
          const mealIds = areaResults.map(meal => meal.idMeal);
          // Ambil detail lengkap semua meal dari area tersebut
          results = await getMealDetailsByIds(mealIds);
        }
      } else {
        // Jika tidak ada area, gunakan search biasa
        results = await searchMeals({ searchTerm, category }) || [];
      }

      // Filter hasil berdasarkan searchTerm dan category jika diperlukan
      if (results.length > 0) {
        // Filter berdasarkan searchTerm (jika ada)
        if (searchTerm && searchTerm.trim()) {
          const searchLower = searchTerm.toLowerCase().trim();
          results = results.filter(meal => 
            meal.strMeal && meal.strMeal.toLowerCase().includes(searchLower)
          );
        }

        // Filter berdasarkan category (jika ada)
        if (category && category.trim()) {
          results = results.filter(meal => 
            meal.strCategory && meal.strCategory.toLowerCase() === category.toLowerCase()
          );
        }
      }

      setMeals(results || []);
      setCurrentPage(1); // Reset ke halaman pertama saat search
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
      setCurrentPage(1);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const results = await filterByArea(area);
      setMeals(results || []);
      setCurrentPage(1); // Reset ke halaman pertama saat filter
    } catch (err) {
      setError('Failed to filter by area.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handler untuk mendapatkan random recipes
   * Menampilkan 20 random recipes di DataTable dengan pagination
   */
  const handleRandomRecipe = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch 20 random recipes untuk pagination
      const randomMeals = await getMultipleRandomRecipes(20);
      setMeals(randomMeals || []);
      setCurrentPage(1); // Reset ke halaman pertama
    } catch (err) {
      setError('Failed to fetch random recipes.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handler untuk perubahan halaman pagination
   * @param {number} page - Nomor halaman yang dipilih
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll ke atas saat ganti halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              {isLoading && <Loading message="Loading delicious recipes..." />}
              {error && <p className="error-message">{error}</p>}
              {!isLoading && !error && (
                <DataTable 
                  meals={meals} 
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          } />
          <Route path="/recipe/:id" element={<DetailCard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;