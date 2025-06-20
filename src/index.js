import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppWithProvider from './App';
import './index.css';
import './styles/main.css';

// Import Montserrat variable font
import '@fontsource-variable/montserrat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithProvider />
    </BrowserRouter>
  </React.StrictMode>
); 