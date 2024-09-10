import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Component for displaying individual recipe
const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <h2>{recipe.name}</h2>
    <img src={recipe.image} alt={recipe.name} />
    <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
    <p><strong>Instructions:</strong> {recipe.instructions}</p>
  </div>
);

const App = () => {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/search', {
        params: { ingredients, cuisine },
      });
      setRecipes(response.data.recipes);
      setError('');
    } catch (error) {
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Enter ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter cuisine type"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <button onClick={handleSearch}>Search Recipes</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
