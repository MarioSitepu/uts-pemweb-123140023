/**
 * Meals API Module
 * Berisi semua fungsi untuk berinteraksi dengan TheMealDB API
 * Base URL: https://www.themealdb.com/api/json/v1/1/
 */
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

/**
 * Membersihkan instruksi dari format "Step 1:", "Step 2:", dll.
 * Menghapus pola seperti "Step 1:", "STEP 1:", "Step 1 -", dll.
 * Tetap mempertahankan line breaks untuk pemisahan paragraf
 * @param {string} instructions - Instruksi mentah dari API
 * @returns {string} Instruksi yang sudah dibersihkan
 */
const cleanInstructions = (instructions) => {
  if (!instructions) return '';
  
  // Pisahkan berdasarkan line breaks untuk memproses setiap baris secara terpisah
  const lines = instructions.split('\n');
  
  // Pola regex untuk menghapus berbagai format step numbering
  // Menghapus: "Step 1:", "STEP 1:", "Step 1 -", "Step 1.", "Step 1)", dll.
  const stepPatterns = [
    /Step\s+\d+\s*[-:.)]\s*/gi,      // "Step 1:", "Step 1 -", "Step 1.", "Step 1)"
    /STEP\s+\d+\s*[-:.)]\s*/gi,      // "STEP 1:", "STEP 1 -", dll.
    /step\s+\d+\s*[-:.)]\s*/gi,      // "step 1:", dll.
    /^\d+\.\s+/gm,                    // "1. ", "2. " di awal baris
    /^\d+\s*[-:)]\s+/gm,              // "1:", "1-", "1)" di awal baris
  ];
  
  // Bersihkan setiap baris secara terpisah
  const cleanedLines = lines.map(line => {
    let cleaned = line;
    
    // Terapkan setiap pola regex
    stepPatterns.forEach(pattern => {
      cleaned = cleaned.replace(pattern, '');
    });
    
    // Bersihkan spasi ganda di dalam baris (tapi tetap pertahankan line breaks)
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    return cleaned;
  });
  
  // Gabungkan kembali dengan line breaks
  return cleanedLines.filter(line => line.length > 0).join('\n');
};

/**
 * Fetch semua kategori meal yang tersedia
 * @returns {Promise<Array>} Array kategori meal
 */
export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}categories.php`);
  const data = await response.json();
  // Pastikan selalu mengembalikan array, bukan null
  return data.categories || [];
};

/**
 * Fetch semua area/country yang tersedia
 * @returns {Promise<Array>} Array area meal
 */
export const fetchAreas = async () => {
  const response = await fetch(`${BASE_URL}list.php?a=list`);
  const data = await response.json();
  // Pastikan selalu mengembalikan array, bukan null
  return data.meals || [];
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
  // Pastikan selalu mengembalikan array, bukan null
  return data.meals || [];
};

/**
 * Mendapatkan multiple meal details berdasarkan array of IDs
 * @param {Array<string>} ids - Array of meal IDs
 * @returns {Promise<Array>} Array of meal objects dengan detail lengkap
 */
export const getMealDetailsByIds = async (ids) => {
  const promises = ids.map(id => getMealById(id));
  const results = await Promise.all(promises);
  return results.filter(meal => meal !== null && meal !== undefined);
};

/**
 * Filter meals berdasarkan area/country
 * @param {string} area - Nama area untuk filter
 * @returns {Promise<Array>} Array meal dari area tertentu
 */
export const filterByArea = async (area) => {
  const response = await fetch(`${BASE_URL}filter.php?a=${area}`);
  const data = await response.json();
  // Pastikan selalu mengembalikan array, bukan null
  return data.meals || [];
};

/**
 * Filter meals berdasarkan category
 * @param {string} category - Nama category untuk filter
 * @returns {Promise<Array>} Array meal dari category tertentu
 */
export const filterByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}filter.php?c=${category}`);
  const data = await response.json();
  // Pastikan selalu mengembalikan array, bukan null
  return data.meals || [];
};

/**
 * Mendapatkan random recipe dari API
 * @returns {Promise<Object>} Random meal object
 */
export const getRandomRecipe = async () => {
  const response = await fetch(`${BASE_URL}random.php`);
  const data = await response.json();
  const meal = data.meals[0];
  if (meal && meal.strInstructions) {
    meal.strInstructions = cleanInstructions(meal.strInstructions);
  }
  return meal;
};

/**
 * Mendapatkan multiple random recipes dari API
 * @param {number} count - Jumlah random recipes yang ingin diambil
 * @returns {Promise<Array>} Array of random meal objects
 */
export const getMultipleRandomRecipes = async (count = 20) => {
  const promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(getRandomRecipe());
  }
  const results = await Promise.all(promises);
  // Filter out duplicates berdasarkan ID
  const uniqueMeals = [];
  const seenIds = new Set();
  results.forEach(meal => {
    if (meal && !seenIds.has(meal.idMeal)) {
      seenIds.add(meal.idMeal);
      uniqueMeals.push(meal);
    }
  });
  return uniqueMeals;
};

/**
 * Mendapatkan detail meal lengkap berdasarkan ID
 * @param {string} id - ID meal
 * @returns {Promise<Object>} Meal object dengan detail lengkap
 */
export const getMealById = async (id) => {
  const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const data = await response.json();
  const meal = data.meals[0];
  if (meal && meal.strInstructions) {
    meal.strInstructions = cleanInstructions(meal.strInstructions);
  }
  return meal;
};