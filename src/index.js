import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wordle from "./wordle";

const root = ReactDOM.createRoot(document.getElementById('reactRoot'));
root.render(
  <React.StrictMode>
    <Wordle />
  </React.StrictMode>
);