import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handle recipe form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('difficulty', difficulty);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchRecipes();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch all recipes from the server
  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/recipes');
      setRecipes(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Image preview functionality
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Reset form after submission
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDuration('');
    setDifficulty('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div style={styles.container}>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
          required
        />
        <input
          type="number"
          placeholder="Duration (in minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={styles.input}
          required
        />
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={styles.select}
          required
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="file"
          onChange={handleImageChange}
          style={styles.fileInput}
          required
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" style={styles.imagePreview} />
        )}
        <button type="submit" style={styles.button}>
          Add Recipe
        </button>
      </form>

      <h3>Recipes</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.recipeGrid}>
          {recipes.map((recipe) => (
            <div key={recipe._id} style={styles.recipeCard}>
              <img
                src={`http://localhost:5000/uploads/${recipe.image}`}
                alt={recipe.title}
                style={styles.recipeImage}
              />
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
              <p>
                <strong>Duration:</strong> {recipe.duration} minutes
              </p>
              <p>
                <strong>Difficulty:</strong> {recipe.difficulty}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    height: '100px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  select: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  fileInput: {
    margin: '10px 0',
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  imagePreview: {
    width: '100px',
    height: '100px',
    marginTop: '10px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  recipeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  recipeCard: {
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  recipeImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default AddRecipe;
