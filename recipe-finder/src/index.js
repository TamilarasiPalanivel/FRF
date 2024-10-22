import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this matches the name and path of your App component
import './index.css'; // If you have a CSS file for styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
