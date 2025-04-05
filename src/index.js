import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// ✅ Get root element
const rootElement = document.getElementById('root');

// ✅ Create root
const root = ReactDOM.createRoot(rootElement);

// ✅ Render your app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Optional performance tracking
reportWebVitals();
