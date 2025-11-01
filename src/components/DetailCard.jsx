import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../api/mealsAPI';
import Loading from './Loading';

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
  if (isLoading) {
    return (
      <div className="detail-card">
        <Loading message="Loading recipe details..." />
      </div>
    );
  }
  
  // Error state jika meal tidak ditemukan
  if (!meal) {
    return (
      <div className="detail-card">
        <Link to="/" className="back-button" aria-label="Back to search page">
          &larr; Back to Search
        </Link>
        <div className="error-container">
          <p className="error-message">Meal not found. Please try searching again.</p>
        </div>
      </div>
    );
  }

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
      
      <div className="detail-header">
        <img 
          src={meal.strMealThumb} 
          alt={`A picture of ${meal.strMeal}`} 
        />
        <div className="detail-info">
          <h1>{meal.strMeal}</h1>
          <div className="detail-meta">
            {meal.strCategory && (
              <span className="meta-badge">
                <strong>Category:</strong> {meal.strCategory}
              </span>
            )}
            {meal.strArea && (
              <span className="meta-badge">
                <strong>Area:</strong> {meal.strArea}
              </span>
            )}
            {meal.strTags && (
              <span className="meta-badge">
                <strong>Tags:</strong> {meal.strTags.split(',').join(', ')}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="ingredients-section">
          <h2>
            <span className="section-icon">🍽️</span> Ingredients
          </h2>
          <ul className="ingredients-list">
            {ingredients.map((ing, index) => (
              <li key={index}>
                <span className="ingredient-bullet">•</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>
            <span className="section-icon">📝</span> Instructions
          </h2>
          <div className="instructions-text">
            {meal.strInstructions.split('\n')
              .filter(paragraph => paragraph.trim())
              .map((paragraph, index) => (
                <div key={index} className="instruction-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <p>{paragraph.trim()}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {meal.strYoutube && (
          <div className="video-section">
            <h2>
              <span className="section-icon">🎥</span> Video Tutorial
            </h2>
            <a 
              href={meal.strYoutube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-link"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailCard;