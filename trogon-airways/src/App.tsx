import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="min-h-screen bg-gray-300 transition-opacity duration-700  font-serif">
      <Navbar />
      <h1> Testing 123</h1>
    </ div>
  )
}

export default App
