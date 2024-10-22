import React from 'react';

const Recipes = () => {
  const recipeList = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
    { id: 2, title: 'Chicken Tikka Masala', description: 'A popular Indian dish made with marinated chicken in a spiced curry sauce.' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'A quick and healthy dish made with mixed vegetables and soy sauce.' },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipeList.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
