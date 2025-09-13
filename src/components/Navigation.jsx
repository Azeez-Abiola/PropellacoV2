import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${currentPage === 'home' || currentPage === 'artist' ? '' : 'bg-white shadow-sm border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative h-28 md:h-32">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" aria-label="Home">
              <img
                src="/images/Propellacologo1.png"
                alt="Propellaco Logo"
                className="w-40 md:w-56 lg:w-64 h-auto"
                style={{
                  maxHeight: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-16">
            <Link
              to="/"
              className={`text-base font-aquawax font-bold transition-colors duration-200 px-4 py-2 rounded-lg ${
                currentPage === 'home'
                  ? 'text-white bg-[#48295B]'
                  : currentPage === 'artist'
                  ? 'text-white hover:text-[#E5C15C]'
                  : 'text-black hover:text-[#48295B]'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/talents"
              className={`text-base font-aquawax font-bold transition-colors duration-200 px-4 py-2 rounded-lg ${
                currentPage === 'talents'
                  ? 'text-white bg-[#48295B]'
                  : currentPage === 'artist'
                  ? 'text-white hover:text-[#E5C15C]'
                  : 'text-black hover:text-[#48295B]'
              }`}
            >
              TALENTS
            </Link>
            <Link
              to="/about"
              className={`text-base font-aquawax font-bold transition-colors duration-200 px-4 py-2 rounded-lg ${
                currentPage === 'about'
                  ? 'text-white bg-[#48295B]'
                  : currentPage === 'artist'
                  ? 'text-white hover:text-[#E5C15C]'
                  : 'text-black hover:text-[#48295B]'
              }`}
            >
              ABOUT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-12 h-12 space-y-1.5 focus:outline-none z-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-8 h-0.5 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-2 bg-propellaco-sunray' 
                    : currentPage === 'artist' 
                    ? 'bg-white' 
                    : 'bg-black'
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-0' 
                    : currentPage === 'artist' 
                    ? 'bg-white' 
                    : 'bg-black'
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen 
                    ? '-rotate-45 -translate-y-2 bg-propellaco-sunray' 
                    : currentPage === 'artist' 
                    ? 'bg-white' 
                    : 'bg-black'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen Drop Down */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-all duration-500 ease-in-out z-40 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto transform translate-y-0' 
            : 'opacity-0 pointer-events-none transform -translate-y-full'
        }`}
      >
        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full relative">
          {/* Menu Links */}
          <div className="flex flex-col items-center space-y-8">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`text-4xl md:text-5xl font-aquawax font-black transition-all duration-300 transform hover:scale-110 ${
                currentPage === 'home'
                  ? 'text-propellaco-sunray'
                  : 'text-white hover:text-propellaco-sunray'
              }`}
              style={{
                textShadow: '0 4px 8px rgba(229, 193, 92, 0.3)',
                letterSpacing: '0.05em'
              }}
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`text-4xl md:text-5xl font-aquawax font-black transition-all duration-300 transform hover:scale-110 ${
                currentPage === 'about'
                  ? 'text-propellaco-sunray'
                  : 'text-white hover:text-propellaco-sunray'
              }`}
              style={{
                textShadow: '0 4px 8px rgba(229, 193, 92, 0.3)',
                letterSpacing: '0.05em'
              }}
            >
              ABOUT
            </Link>
            <Link
              to="/talents"
              onClick={toggleMenu}
              className={`text-4xl md:text-5xl font-aquawax font-black transition-all duration-300 transform hover:scale-110 ${
                currentPage === 'talents'
                  ? 'text-propellaco-sunray'
                  : 'text-white hover:text-propellaco-sunray'
              }`}
              style={{
                textShadow: '0 4px 8px rgba(229, 193, 92, 0.3)',
                letterSpacing: '0.05em'
              }}
            >
              TALENTS
            </Link>
          </div>

          {/* Logo at bottom */}
          <div className="absolute bottom-8">
            <img
              src="/images/Propellaco Logo (Gold).svg"
              alt="Propellaco Logo"
              className="w-48 md:w-56 h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
