import { useState, useEffect } from 'react'

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Talent images that will fade in and out
  const talentImages = [
    '/images/artist-1.jpg',
    '/images/artist-2.jpg',
    '/images/artist-3.jpg',
    '/images/artist-m4.jpg',
    '/images/artist-5.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === talentImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [talentImages.length])

  return (
    <div className="h-screen bg-white pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section with PROPELLACO Background and Talent Images in Front */}
      <section className="relative h-full">
        {/* Talent Images in Front with Fade Effect - Full Screen */}
        <div className="absolute inset-0 z-0">
          {talentImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/40 to-gray-600/30" />
            </div>
          ))}
        </div>

        {/* PROPELLACO Text in Front */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Desktop version - static front text */}
          <div
            className="hidden md:block text-black/20 text-8xl md:text-9xl lg:text-[12rem] font-black"
            style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}
          >
            PROPELLACO
          </div>
          
          {/* Mobile version - scrolling front animation */}
          <div className="md:hidden w-full overflow-hidden">
            <div className="scrolling-text-container">
              <div className="scrolling-text">
                <span className="text-black/20 text-6xl font-black" style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}>
                  PROPELLACO
                </span>
                <span className="text-black/20 text-6xl font-black ml-8" style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}>
                  PROPELLACO
                </span>
                <span className="text-black/20 text-6xl font-black ml-8" style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}>
                  PROPELLACO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Move further down and white bg spans full width */}
        <div
          className="absolute left-0 right-0 z-10 text-center text-white px-0"
          style={{
            bottom: '-1rem', // adjusted for better mobile visibility
          }}
        >
          {/* White background spanning full width */}
          <div
            className="relative w-full"
            style={{
              borderRadius: 0,
              overflow: 'hidden',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
              height: '16rem', // increased height for mobile to ensure all text is visible
            }}
          >
            {/* White gradient with a much more faded top */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                // Make the top much more faded by using a very low alpha at the top
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.60) 28%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.95) 100%)',
                zIndex: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
                // Add blur to the top part only using a pseudo "mask"
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 100%)',
                filter: 'blur(16px)',
                // The blur will be strongest at the top, but the mask keeps the rest sharp
              }}
            />
            {/* Overlay a solid white gradient below the blur so the rest is sharp */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.60) 28%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.95) 100%)',
                zIndex: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <div className="relative z-10 py-8 md:py-14 px-6 flex flex-col items-center justify-center h-full">
                              <p
                  className="text-2xl md:text-4xl font-extrabold tracking-wide mb-2"
                  style={{
                    fontFamily: "'Aquawax', 'aquawax', sans-serif",
                    color: '#1a1a1a',
                    textShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    letterSpacing: '0.04em',
                  }}
                >
                  BUILDING FUTURES IN MUSIC
                </p>
                <p
                  className="text-xl md:text-2xl font-bold tracking-wide mb-2"
                  style={{
                    fontFamily: "'Candara', 'candara', sans-serif",
                    color: '#333333',
                    textShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    letterSpacing: '0.04em',
                  }}
                >
                  TOUCHING THE SKY TOGETHER
                </p>
              <p
                className="text-xl md:text-2xl font-bold tracking-wide"
                style={{
                  fontFamily: "'Candara', 'candara', sans-serif",
                  color: '#333333',
                  textShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  letterSpacing: '0.04em',
                }}
              >
                Empowering Artists, Shaping Icons
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
