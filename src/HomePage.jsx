import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router'
import AboutDetailed from './pages/About/AboutDetailed'
import Services from './pages/Services/Services'


function HomePage() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<AboutDetailed />} />
      <Route path="services" element={<Services />} />
    </Routes>
  )
}

export default HomePage