import React, { useState } from 'react';

/**
 * SearchForm Component
 * Form untuk pencarian, filtering, dan mendapatkan random recipe
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Handler untuk pencarian meal
 * @param {Function} props.onFilterByArea - Handler untuk filter berdasarkan area
 * @param {Function} props.onRandomRecipe - Handler untuk mendapatkan random recipe
 * @param {Array} props.categories - Array kategori meal yang tersedia
 * @param {Array} props.areas - Array area meal yang tersedia
 */
const SearchForm = ({ onSearch, onFilterByArea, onRandomRecipe, categories, areas }) => {
  // State untuk menyimpan nilai input form
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');

  /**
   * Handler untuk submit form pencarian
   * Mengirim semua parameter (searchTerm, category, area) ke handler pencarian
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim semua parameter untuk dikombinasikan
    onSearch({ searchTerm, category, area });
  };

  /**
   * Handler untuk perubahan filter area
   * Hanya mengubah state, tidak langsung melakukan pencarian
   * @param {Event} e - Select change event
   */
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} aria-label="Search meals form">
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search meal by name"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories && categories.map(cat => (
            <option key={cat.idCategory} value={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
      <select 
        value={area} 
        onChange={handleAreaChange}
        aria-label="Filter by area"
      >
        <option value="">All Areas</option>
        {areas && areas.map(a => (
            <option key={a.strArea} value={a.strArea}>{a.strArea}</option>
        ))}
      </select>
      <button type="submit" aria-label="Search meals">Search</button>
      <button 
        type="button" 
        onClick={onRandomRecipe}
        aria-label="Get a random recipe"
      >
        Random Recipe
      </button>
    </form>
  );
};

export default SearchForm;