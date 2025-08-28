import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Talents() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'MEET OUR TALENTS'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + fullText[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        // Wait 2 seconds before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Wait 1 second before starting to type again
        const timeout = setTimeout(() => {
          setCurrentIndex(0)
          setIsTyping(true)
        }, 1000)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, isTyping, displayText])

  const talents = [
    // Column 1
    ['Artemas', 'Dthang', 'OT7 Quanny', 'Che', 'Will Swinton', 'Nafeesisboujee'],
    // Column 2
    ['Ice Spice', 'Hailey Knox', 'Between Friends', 'Chezile', 'Abe Parker'],
    // Column 3
    ['Trippie Redd', 'Rich Amiri', 'The Living Tombstone', 'Salem Ilese', 'Chicken P'],
    // Column 4
    ['YTB Fatt', 'Surfaces', 'Jessica Baio', 'Dro Kenji', 'PayGotti'],
    // Column 5
    ['Aminé', 'Summrs', 'Sunday Scaries', 'Natalie Jane', 'PSYCHIC FEVER']
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24 bg-white px-4">
      {/* Talents Header */}
      <div className="mb-12 md:mb-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-aquawax font-bold text-[#E5C15C] mb-4 md:mb-6 italic">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-base md:text-xl font-candara font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
          Discover the incredible artists and creators we're proud to work with. 
          Each talent brings their unique vision and passion to the industry.
        </p>
      </div>

      {/* Talents Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {talents.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-3 md:space-y-4">
              {column.map((talent, talentIndex) => (
                <Link
                  key={talentIndex}
                  to={`/talents/${talent.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-purple-600 hover:text-purple-800 transition-all duration-300 font-bold text-sm md:text-base cursor-pointer relative group transform hover:scale-105 hover:translate-x-2"
                >
                  <span className="relative z-10">{talent}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5C15C] transition-all duration-300 group-hover:w-full group-hover:shadow-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Talents
