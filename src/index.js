import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Ex1 from './Ex1'
import Ex2 from './Ex2'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ex1 />
    <Ex2 />
  </React.StrictMode>
);
