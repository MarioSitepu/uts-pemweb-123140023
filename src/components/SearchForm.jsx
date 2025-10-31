import React, { useState } from 'react';

const SearchForm = ({ onSearch, onFilterByArea, onRandomRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, category });
  };

  const handleAreaFilter = (e) => {
    const selectedArea = e.target.value;
    setArea(selectedArea);
    onFilterByArea(selectedArea);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {/* Opsi kategori akan diisi dari API nanti */}
      </select>
      <select value={area} onChange={handleAreaFilter}>
        <option value="">All Areas</option>
        {/* Opsi area akan diisi dari API nanti */}
      </select>
      <button type="submit">Search</button>
      <button type="button" onClick={onRandomRecipe}>Random Recipe</button>
    </form>
  );
};

export default SearchForm;