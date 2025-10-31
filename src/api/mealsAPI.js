const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}categories.php`);
  const data = await response.json();
  return data.categories;
};

export const fetchAreas = async () => {
  const response = await fetch(`${BASE_URL}list.php?a=list`);
  const data = await response.json();
  return data.meals;
};

export const searchMeals = async ({ searchTerm, category }) => {
  let url;
  if (searchTerm) {
    url = `${BASE_URL}search.php?s=${searchTerm}`;
  } else if (category) {
    url = `${BASE_URL}filter.php?c=${category}`;
  } else {
    // Default fetch if no search term or category
    url = `${BASE_URL}search.php?s=`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const filterByArea = async (area) => {
  const response = await fetch(`${BASE_URL}filter.php?a=${area}`);
  const data = await response.json();
  return data.meals;
};

export const getRandomRecipe = async () => {
  const response = await fetch(`${BASE_URL}random.php`);
  const data = await response.json();
  return data.meals[0];
};

export const getMealById = async (id) => {
  const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};