import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx'; // Importar App como una exportación con nombre
import { BrowserRouter as Router } from 'react-router-dom'; // Cambié RouterProvider por BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App /> {/* Renderizar el componente App */}
    </Router>
  </React.StrictMode>
);