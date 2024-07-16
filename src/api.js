export const fetchSuggestions = async (query) => {
  const response = await fetch(
    `https://dummyjson.com/recipes/search?q=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return result.recipes;
};
