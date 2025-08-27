import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6" style={{ height: '7.5rem' }}>
        <div className="flex items-center justify-between relative h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" aria-label="Home" style={{ height: '100%' }}>
              <img
                src="/images/Propellacologo1.png"
                alt="Propellaco Logo"
                className="w-32 md:w-48 lg:w-[28rem] h-auto"
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
              className="flex flex-col justify-center items-center w-12 h-12 space-y-1.5 focus:outline-none z-50 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-8 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Close Button */}
          <div className="flex justify-end p-6 bg-white">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4 px-6 bg-white">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`text-xl font-aquawax font-bold transition-all duration-200 px-6 py-4 rounded-xl ${
                currentPage === 'home'
                  ? 'text-white bg-[#48295B] shadow-lg'
                  : 'text-gray-800 hover:text-[#48295B] hover:bg-gray-50'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/talents"
              onClick={toggleMenu}
              className={`text-xl font-aquawax font-bold transition-all duration-200 px-6 py-4 rounded-xl ${
                currentPage === 'talents'
                  ? 'text-white bg-[#48295B] shadow-lg'
                  : 'text-gray-800 hover:text-[#48295B] hover:bg-gray-50'
              }`}
            >
              TALENTS
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`text-xl font-aquawax font-bold transition-all duration-200 px-6 py-4 rounded-xl ${
                currentPage === 'about'
                  ? 'text-white bg-[#48295B] shadow-lg'
                  : 'text-gray-800 hover:text-[#48295B] hover:bg-gray-50'
              }`}
            >
              ABOUT
            </Link>
          </div>

          {/* Mobile Logo */}
          <div className="flex-1 flex items-end justify-center pb-8 bg-white">
            <img
              src="/images/Propellacologo1.png"
              alt="Propellaco Logo"
              className="w-48 h-auto opacity-20"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
