import { useState, useEffect } from 'react'

function About() {
  const [animationState, setAnimationState] = useState('mottoIn')
 
  useEffect(() => {
    const animationCycle = () => {
      // Motto slides in from both sides
      setAnimationState('mottoIn')
      
      setTimeout(() => {
        // Motto slides out as logo starts emerging simultaneously
        setAnimationState('mottoOut')
      }, 3500)
      
      setTimeout(() => {
        // Logo fully visible, motto completely hidden
        setAnimationState('logoIn')
      }, 5500)
      
      setTimeout(() => {
        // Logo retracts as motto starts sliding in simultaneously
        setAnimationState('logoOut')
      }, 9500)
      
      // Smooth transition back to motto in - no gap
      setTimeout(() => {
        animationCycle()
      }, 11500)
    }

    animationCycle()
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col bg-white pt-28 md:pt-32">
      {/* Header - Above both sections */}
      <div className="w-full flex justify-center mb-8 md:mb-12 mt-8 md:mt-16">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center"
          style={{
            fontFamily: "'Aquawax', 'aquawax', sans-serif",
            textShadow: '0 2px 4px rgba(72, 41, 91, 0.2)',
            letterSpacing: '0.02em'
          }}
        >
          <span style={{ color: '#48295B' }}>ABOUT </span>
          <span style={{ color: '#E5C15C' }}>PROPELLACO</span>
        </h1>
      </div>

      {/* Main Content - Left Animation, Right Text */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Animated Motto and Logo */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative bg-white min-h-[50vh] md:min-h-auto">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4 md:px-0 min-h-[50vh]">
            
            {/* Motto Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Left part of motto */}
              <div 
                className={`absolute flex items-center justify-end transition-all duration-2000 ease-in-out ${
                  animationState === 'mottoIn' || animationState === 'logoOut'
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform -translate-x-full opacity-0'
                }`}
                style={{ 
                  left: '0%', 
                  width: '45%',
                  paddingRight: '0.5rem'
                }}
              >
                <span 
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-propellaco-purple transform -skew-y-12"
                  style={{
                    fontFamily: "'Aquawax', 'aquawax', sans-serif",
                    textShadow: '0 4px 8px rgba(72, 41, 91, 0.3)',
                    letterSpacing: '0.02em'
                  }}
                >
                  TOUCH
                </span>
              </div>
              
              {/* Right part of motto */}
              <div 
                className={`absolute flex items-center justify-start transition-all duration-2000 ease-in-out ${
                  animationState === 'mottoIn' || animationState === 'logoOut'
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform translate-x-full opacity-0'
                }`}
                style={{ 
                  right: '0%', 
                  width: '55%',
                  paddingLeft: '0.5rem'
                }}
              >
                <span 
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-propellaco-sunray transform -skew-y-12"
                  style={{
                    fontFamily: "'Aquawax', 'aquawax', sans-serif",
                    textShadow: '0 4px 8px rgba(229, 193, 92, 0.4)',
                    letterSpacing: '0.02em'
                  }}
                >
                  THE SKY
                </span>
              </div>
            </div>

            {/* Logo Animation - Smooth fade in as text slides out */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ease-in-out ${
                animationState === 'logoIn' 
                  ? 'opacity-100 transform scale-100' 
                  : animationState === 'mottoOut'
                  ? 'opacity-50 transform scale-95'
                  : 'opacity-0 transform scale-0'
              }`}
            >
              <img
                src="/images/Propellaco Logo (Gold).svg"
                alt="Propellaco Gold Logo"
                className="w-32 sm:w-48 md:w-96 lg:w-[32rem] xl:w-[36rem] h-auto transform -skew-y-12 transition-all duration-2000 ease-in-out"
                style={{
                  filter: 'drop-shadow(0 8px 32px rgba(229, 193, 92, 0.4))',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - About Content */}
        <div className="hidden md:flex md:w-1/2 items-center justify-start bg-white pl-4 lg:pl-8">
          <div className="max-w-xl">
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "'Candara', 'candara', sans-serif",
                color: '#2D2D2D',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              At Propellaco, we are dedicated to elevating emerging talent, empowering upcoming artists,
              and entertainment professionals to reach new heights. With our mission summed up in three
              words—<span style={{ 
                fontFamily: "'Aquawax', 'aquawax', sans-serif", 
                color: '#E5C15C', 
                fontWeight: 700,
                textShadow: '0 1px 2px rgba(229, 193, 92, 0.3)'
              }}>Touch the Sky</span>—we're here to ensure every creator we work with is supported at every
              level of their journey.
            </p>
            
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "'Candara', 'candara', sans-serif",
                color: '#2D2D2D',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              Our focus is on the "behind-the-scenes" work that fuels long-term growth, from refining an
              artist's musical identity to shaping a compelling public profile. We connect our clients with influential
              labels and industry insiders, offering the guidance and resources necessary to thrive in a
              competitive industry.
            </p>
            
            <p
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "'Candara', 'candara', sans-serif",
                color: '#2D2D2D',
                fontWeight: 500,
                lineHeight: 1.7,
              }}
            >
              Propellaco believes that true success comes from building a solid foundation in the artistry itself,
              the personality that embodies it, and a brand that resonates beyond the music.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Content - Visible on mobile */}
      <div className="md:hidden w-full bg-white p-6">
        <div className="max-w-lg mx-auto">
          <p
            className="text-lg leading-relaxed mb-4"
            style={{
              fontFamily: "'Candara', 'candara', sans-serif",
              color: '#2D2D2D',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            At Propellaco, we are dedicated to elevating emerging talent, empowering upcoming artists,
            and entertainment professionals to reach new heights. With our mission summed up in three
            words—<span style={{ 
              fontFamily: "'Aquawax', 'aquawax', sans-serif", 
              color: '#E5C15C', 
              fontWeight: 700 
            }}>Touch the Sky</span>—we're here to ensure every creator we work with is supported at every
            level of their journey.
          </p>
          
          <p
            className="text-lg leading-relaxed mb-4"
            style={{
              fontFamily: "'Candara', 'candara', sans-serif",
              color: '#2D2D2D',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Our focus is on the "behind-the-scenes" work that fuels long-term growth, from refining an
            artist's musical identity to shaping a compelling public profile.
          </p>
          
          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: "'Candara', 'candara', sans-serif",
              color: '#2D2D2D',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Propellaco believes that true success comes from building a solid foundation in the artistry itself,
            the personality that embodies it, and a brand that resonates beyond the music.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
