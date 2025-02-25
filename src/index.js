import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 19
import App from './App';
import './index.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);