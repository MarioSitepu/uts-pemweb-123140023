/**
 * Meals API Module
 * Berisi semua fungsi untuk berinteraksi dengan TheMealDB API
 * Base URL: https://www.themealdb.com/api/json/v1/1/
 */
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

/**
 * Fetch semua kategori meal yang tersedia
 * @returns {Promise<Array>} Array kategori meal
 */
export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}categories.php`);
  const data = await response.json();
  return data.categories;
};

/**
 * Fetch semua area/country yang tersedia
 * @returns {Promise<Array>} Array area meal
 */
export const fetchAreas = async () => {
  const response = await fetch(`${BASE_URL}list.php?a=list`);
  const data = await response.json();
  return data.meals;
};

/**
 * Search meals berdasarkan searchTerm atau category
 * Prioritas: searchTerm > category > default
 * @param {Object} params - Parameter pencarian
 * @param {string} params.searchTerm - Kata kunci pencarian nama meal
 * @param {string} params.category - Kategori meal untuk filter
 * @returns {Promise<Array>} Array hasil meal yang ditemukan
 */
export const searchMeals = async ({ searchTerm, category }) => {
  let url;
  if (searchTerm) {
    // Jika ada searchTerm, gunakan search API
    url = `${BASE_URL}search.php?s=${searchTerm}`;
  } else if (category) {
    // Jika ada category, gunakan filter by category
    url = `${BASE_URL}filter.php?c=${category}`;
  } else {
    // Default fetch if no search term or category
    url = `${BASE_URL}search.php?s=`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

/**
 * Filter meals berdasarkan area/country
 * @param {string} area - Nama area untuk filter
 * @returns {Promise<Array>} Array meal dari area tertentu
 */
export const filterByArea = async (area) => {
  const response = await fetch(`${BASE_URL}filter.php?a=${area}`);
  const data = await response.json();
  return data.meals;
};

/**
 * Mendapatkan random recipe dari API
 * @returns {Promise<Object>} Random meal object
 */
export const getRandomRecipe = async () => {
  const response = await fetch(`${BASE_URL}random.php`);
  const data = await response.json();
  return data.meals[0];
};

/**
 * Mendapatkan detail meal lengkap berdasarkan ID
 * @param {string} id - ID meal
 * @returns {Promise<Object>} Meal object dengan detail lengkap
 */
export const getMealById = async (id) => {
  const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};