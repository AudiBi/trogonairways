import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { Navbar } from './components/Navbar'
import { Topbar } from './components/Topbar'

import { LandingPage } from './pages/LandingPage'

import { HomePage } from './pages/HomePage'
import { TravelInfoPage } from "./pages/TravelInfoPage";
import { SupportPage } from "./pages/SupportPage";
import FaqPage from "./pages/FaqPage"
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { CookiePolicy } from './pages/CookiePolicy'
import './i18n';

function App() {

  return (
    <div className="min-h-screen bg-gray-300 transition-opacity duration-700  font-sans">
      <Topbar />
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<TravelInfoPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </div>

    </ div>
  )
}

export default App
