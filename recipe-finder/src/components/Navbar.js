import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Features</button>
            <div className="dropdown-content">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/chefs">Chefs</Link>
              <Link to="/food-news">Food News</Link>
              <Link to="/about-us">About Us</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
