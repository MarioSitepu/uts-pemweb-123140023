import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

/**
 * DataTable Component
 * Menampilkan daftar meal dalam format grid card dengan pagination
 * @param {Object} props - Component props
 * @param {Array} props.meals - Array of meal objects to display
 * @param {number} props.currentPage - Halaman saat ini (default: 1)
 * @param {number} props.itemsPerPage - Jumlah item per halaman (default: 4)
 * @param {Function} props.onPageChange - Handler saat halaman berubah
 */
const DataTable = ({ meals, currentPage = 1, itemsPerPage = 4, onPageChange }) => {
  // Hitung pagination - harus dipanggil sebelum early return
  const totalPages = useMemo(() => {
    if (!meals || meals.length === 0) return 0;
    return Math.ceil(meals.length / itemsPerPage);
  }, [meals, itemsPerPage]);
  
  // Get current page items - harus dipanggil sebelum early return
  const currentMeals = useMemo(() => {
    if (!meals || meals.length === 0) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return meals.slice(startIndex, endIndex);
  }, [meals, currentPage, itemsPerPage]);

  // Jika tidak ada data meal, tampilkan pesan
  if (!meals || meals.length === 0) {
    return <p>No meals found. Try searching for something else!</p>;
  }

  return (
    <>
      <div className="data-table">
        {currentMeals.map(meal => (
          <Link 
            to={`/recipe/${meal.idMeal}`} 
            key={meal.idMeal} 
            className="meal-card-link"
            aria-label={`View details for ${meal.strMeal}`}
          >
            <div className="meal-card">
              <div className="meal-image-wrapper">
                <img 
                  src={meal.strMealThumb} 
                  alt={`A picture of ${meal.strMeal}`} 
                />
                <div className="meal-overlay">
                  <span className="view-recipe-text">View Recipe →</span>
                </div>
              </div>
              <div className="meal-info">
                <h3>{meal.strMeal}</h3>
                {meal.strArea && <p>{meal.strArea}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default DataTable;