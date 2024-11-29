import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router'
import AboutDetailed from './pages/About/AboutDetailed'


function HomePage() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<AboutDetailed />} />
    </Routes>
  )
}

export default HomePage