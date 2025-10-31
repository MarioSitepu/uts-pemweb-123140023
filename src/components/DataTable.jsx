import React from 'react';

const DataTable = ({ meals }) => {
  if (!meals || meals.length === 0) {
    return <p>No meals found. Try searching for something else!</p>;
  }

  return (
    <div className="data-table">
      {meals.map(meal => (
        <div key={meal.idMeal} className="meal-card">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-info">
            <h3>{meal.strMeal}</h3>
            <p>{meal.strArea}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTable;