import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './components/Recipes';
import Chefs from './components/Chefs';
import FoodNews from './components/FoodNews';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/food-news" element={<FoodNews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<h1>Welcome to Recipe Finder!</h1>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        
      </Routes>
    </Router>
  );
};

export default App;
