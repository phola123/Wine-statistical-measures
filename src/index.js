// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Cockpit
import App from "./cockpit/App";

// styles
import './styles/index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
