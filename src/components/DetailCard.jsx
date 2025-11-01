import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../api/mealAPI';

const DetailCard = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const mealDetails = await getMealById(id);
        setMeal(mealDetails);
      } catch (error) {
        console.error("Failed to fetch meal details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (isLoading) return <p>Loading details...</p>;
  if (!meal) return <p>Meal not found.</p>;

  // Logika untuk menggabungkan ingredients dan measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="detail-card">
      <Link to="/" className="back-button">&larr; Back to Search</Link>
      <div className="detail-content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h1>{meal.strMeal}</h1>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
        </ul>
        <h2>Instructions</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default DetailCard;