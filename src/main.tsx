
import './index.css'
import React from 'react';
import App from './App.tsx'
import { ThemeProvider } from './ThemeContext';
import './theme.css';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
