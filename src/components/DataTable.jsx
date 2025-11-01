import React from 'react';
import { Link } from 'react-router-dom';

/**
 * DataTable Component
 * Menampilkan daftar meal dalam format grid card
 * @param {Object} props - Component props
 * @param {Array} props.meals - Array of meal objects to display
 */
const DataTable = ({ meals }) => {
  // Jika tidak ada data meal, tampilkan pesan
  if (!meals || meals.length === 0) {
    return <p>No meals found. Try searching for something else!</p>;
  }

  return (
    <div className="data-table">
      {meals.map(meal => (
        <Link 
          to={`/recipe/${meal.idMeal}`} 
          key={meal.idMeal} 
          className="meal-card-link"
          aria-label={`View details for ${meal.strMeal}`}
        >
          <div className="meal-card">
            <img 
              src={meal.strMealThumb} 
              alt={`A picture of ${meal.strMeal}`} 
            />
            <div className="meal-info">
              <h3>{meal.strMeal}</h3>
              <p>{meal.strArea}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DataTable;