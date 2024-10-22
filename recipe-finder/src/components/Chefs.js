import React from 'react';

const Chefs = () => {
  const chefList = [
    { id: 1, name: 'Gordon Ramsay', specialty: 'Italian and French Cuisine' },
    { id: 2, name: 'Jamie Oliver', specialty: 'British Cuisine' },
    { id: 3, name: 'Martha Stewart', specialty: 'Baking and Home Cooking' },
    // Add more chefs as needed
  ];

  return (
    <div>
      <h2>Chefs</h2>
      <ul>
        {chefList.map((chef) => (
          <li key={chef.id}>
            <h3>{chef.name}</h3>
            <p>Specialty: {chef.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chefs;
