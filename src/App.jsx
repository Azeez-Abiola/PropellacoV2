import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Talents from './pages/Talents'
import ArtistPage from './pages/ArtistPage'
import About from './pages/About'

function AppContent() {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const path = location.pathname
    if (path === '/') setCurrentPage('home')
    else if (path === '/talents') setCurrentPage('talents')
    else if (path === '/about') setCurrentPage('about')
    else if (path.startsWith('/talents/')) setCurrentPage('artist')
  }, [location])

  return (
    <div className="min-h-screen bg-propellaco-white">
      <Navigation currentPage={currentPage} />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/talents/:artistName" element={<ArtistPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
