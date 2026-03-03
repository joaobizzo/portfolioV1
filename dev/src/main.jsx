import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; 
import './styles/original.css';
import './styles/modal.css';
import './styles/projects.css';
import './styles/root.css';
import './styles/webkit.css';
import './styles/gradientSelector.css';
import './styles/colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
