import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Talents() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'MEET OUR TALENTS'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [visibleTalents, setVisibleTalents] = useState(new Set())
  const talentRefs = useRef({})

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleTalents(prev => new Set([...prev, entry.target.dataset.talent]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all talent elements
    Object.values(talentRefs.current).forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

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
      <div className="mb-12 md:mb-20 text-center mt-8 md:mt-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#E5C15C] mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontStyle: 'italic', fontWeight: '400' }}>
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
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {talents.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-3 md:space-y-4">
              {column.map((talent, talentIndex) => (
                <Link
                  key={talentIndex}
                  to={`/talents/${talent.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-[#E5C15C] transition-all duration-500 font-medium text-sm md:text-base cursor-pointer relative group"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">{talent}</span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#E5C15C]/10 via-[#E5C15C]/5 to-[#E5C15C]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E5C15C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Layout - Centered Single Column */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {talents.flat().map((talent, index) => (
            <Link
              key={index}
              to={`/talents/${talent.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-700 hover:text-[#E5C15C] transition-all duration-500 font-medium text-lg cursor-pointer relative group text-center"
              ref={(el) => {
                talentRefs.current[talent] = el
              }}
              data-talent={talent}
              style={{
                opacity: visibleTalents.has(talent) ? 1 : 0,
                transform: visibleTalents.has(talent) ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">{talent}</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#E5C15C]/10 via-[#E5C15C]/5 to-[#E5C15C]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E5C15C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Talents
