import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // подключаем стили Tailwind
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();