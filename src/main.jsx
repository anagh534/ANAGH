// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import HomePage from './HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
)
