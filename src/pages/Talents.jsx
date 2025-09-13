import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Talents() {
  const [hoveredTalent, setHoveredTalent] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  // Track mouse movement for floating CD image
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const talents = [
    { name: 'Efue', image: '/images/SLIDE-1-.JPG' },
  ]

  const handleTalentClick = (talent, event) => {
    setIsTransitioning(true)
    setCirclePosition({ x: event.clientX, y: event.clientY })
    
    // Navigate after a short delay to allow the circle to start expanding
    setTimeout(() => {
      navigate(`/talents/${talent.name.toLowerCase().replace(/\s+/g, '-')}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 relative overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-center mb-16 md:mb-20 mt-8 md:mt-16">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center"
          style={{
            fontFamily: "'Aquawax', 'aquawax', sans-serif",
            textShadow: '0 2px 4px rgba(72, 41, 91, 0.2)',
            letterSpacing: '0.02em'
          }}
        >
          <span style={{ color: '#48295B' }}>OUR </span>
          <span style={{ color: '#E5C15C' }}>TALENTS</span>
        </h1>
      </div>

      {/* Talents List - Full Width */}
      <div className="w-full">
        <div className="space-y-0">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTalent(talent)}
              onMouseLeave={() => setHoveredTalent(null)}
              onClick={(e) => handleTalentClick(talent, e)}
            >
              {/* Artist Name Row - Full Width */}
              <div className="flex items-center justify-between py-8 md:py-12 px-4 md:px-8 lg:px-12 border-b border-gray-200 transition-all duration-300 group-hover:bg-gray-50/30 relative overflow-hidden">
                {/* Left side - Artist Name */}
                <div className="flex-1">
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black transition-all duration-300 group-hover:translate-x-4"
                    style={{
                      fontFamily: "'Aquawax', 'aquawax', sans-serif",
                      color: '#2D2D2D',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {talent.name.toUpperCase()}
                  </h2>
                </div>
                
                {/* Right side - Index Number and Click Me */}
                <div className="flex-shrink-0 flex flex-col items-end">
                  <span 
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-400 transition-all duration-300 group-hover:text-propellaco-sunray"
                    style={{
                      fontFamily: "'Candara', 'candara', sans-serif",
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span 
                    className="text-base md:text-lg lg:text-xl font-medium text-propellaco-purple transition-all duration-300 group-hover:text-propellaco-sunray mt-3"
                    style={{
                      fontFamily: "'Candara', 'candara', sans-serif",
                    }}
                  >
                    click me
                  </span>
                </div>
              </div>

              {/* Hover Line Effect - Full Width */}
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-propellaco-purple via-propellaco-sunray to-propellaco-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating CD Image that follows cursor */}
      {hoveredTalent && (
        <div 
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x - 75, // Center the CD on cursor
            top: mousePosition.y - 75,
            transition: 'all 0.1s ease-out'
          }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Just the Artist Image - no CD background */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
              <img
                src={hoveredTalent.image}
                alt={hoveredTalent.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Golden glow effect */}
            <div className="absolute inset-0 rounded-full shadow-xl shadow-propellaco-sunray/40"></div>
          </div>
        </div>
      )}

      {/* Circular Portal Transition - Visible expanding circle overlay */}
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[100] bg-black"
          style={{
            clipPath: `circle(0% at ${circlePosition.x}px ${circlePosition.y}px)`,
            animation: 'circleExpand 1s ease-out forwards'
          }}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes circleExpand {
          0% {
            clip-path: circle(0% at ${circlePosition.x}px ${circlePosition.y}px);
          }
          100% {
            clip-path: circle(150% at ${circlePosition.x}px ${circlePosition.y}px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        /* Smooth cursor following animation */
        .cursor-follow {
          transition: all 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </div>
  )
}

export default Talents
