import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../api/mealsAPI';

/**
 * DetailCard Component
 * Menampilkan detail lengkap dari sebuah meal/recipe
 * Menggunakan useParams untuk mendapatkan ID dari URL
 */
const DetailCard = () => {
  // Mendapatkan ID meal dari URL parameter
  const { id } = useParams();
  
  // State untuk menyimpan data meal dan loading status
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetch meal details dari API berdasarkan ID
   * Dijalankan saat component mount atau saat ID berubah
   */
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

  // Loading state
  if (isLoading) return <p>Loading details...</p>;
  
  // Error state jika meal tidak ditemukan
  if (!meal) return <p>Meal not found.</p>;

  /**
   * Ekstrak ingredients dan measures dari meal object
   * API menyimpan ingredients dalam format strIngredient1, strIngredient2, etc.
   * Kita perlu menggabungkan measure dengan ingredient untuk setiap item
   */
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
      <Link 
        to="/" 
        className="back-button"
        aria-label="Back to search page"
      >
        &larr; Back to Search
      </Link>
      <div className="detail-content">
        <img 
          src={meal.strMealThumb} 
          alt={`A picture of ${meal.strMeal}`} 
        />
        <h1>{meal.strMeal}</h1>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default DetailCard;