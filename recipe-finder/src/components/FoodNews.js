import React from 'react';

const FoodNews = () => {
  const newsList = [
    {
      id: 1,
      title: 'New Culinary Trends in 2024',
      description: 'Discover the top culinary trends that are shaping the food industry this year.',
      link: 'https://example.com/news1',
    },
    {
      id: 2,
      title: 'The Rise of Plant-Based Diets',
      description: 'Exploring the growing popularity of plant-based diets and their health benefits.',
      link: 'https://example.com/news2',
    },
    {
      id: 3,
      title: 'Top Chefs Share Their Secrets',
      description: 'Learn cooking tips and secrets from renowned chefs around the world.',
      link: 'https://example.com/news3',
    },
    // Add more news articles as needed
  ];

  return (
    <div>
      <h2>Food News</h2>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodNews;
