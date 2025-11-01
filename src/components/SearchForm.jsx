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
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, category });
  };

  /**
   * Handler untuk perubahan filter area
   * Memanggil onFilterByArea langsung saat area berubah
   * @param {Event} e - Select change event
   */
  const handleAreaFilter = (e) => {
    const selectedArea = e.target.value;
    setArea(selectedArea);
    onFilterByArea(selectedArea);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} aria-label="Search meals form">
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
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
        onChange={handleAreaFilter}
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