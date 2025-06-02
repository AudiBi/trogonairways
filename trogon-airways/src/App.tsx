import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { Navbar } from './components/Navbar'

import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <div className="min-h-screen bg-gray-300 transition-opacity duration-700  font-sans">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </ div>
  )
}

export default App
