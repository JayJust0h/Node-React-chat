// Importing the React library
//
import React from 'react';

// importing the REactDOM library for rendering React components
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';


//Render the App component into the root element of the HTML
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
