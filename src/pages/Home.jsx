import { useState, useEffect } from 'react'

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Artist images that will fade in and out - similar to 10k Projects
  const artistImages = [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === artistImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [artistImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Fading Artist Images */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images with Fade Effect */}
        {artistImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 to-gray-600/60" />
          </div>
        ))}

        {/* Large Logo Overlay - like 10k Projects */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-black/20 text-8xl md:text-9xl lg:text-[12rem] font-black"
            style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}
          >
            PROPELLACO
            </div>
          </div>

        {/* Hero Content - Move further down and gold bg spans full width */}
        <div
          className="absolute left-0 right-0 z-10 text-center text-white px-0"
          style={{
            bottom: '-2.5rem', // move it even further down so the bottom is not visible
          }}
        >
          {/* Gold sunray background spanning full width and hidden bottom */}
          <div
            className="relative w-screen left-1/2 -translate-x-1/2"
            style={{
              borderRadius: 0,
              overflow: 'hidden',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
              maxWidth: '100vw',
              height: '13rem', // make it tall enough so the bottom is hidden
            }}
          >
            {/* Gold gradient with a much more faded top */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                // Make the top much more faded by using a very low alpha at the top
                background: 'linear-gradient(to bottom, rgba(229,193,92,0.01) 0%, rgba(229,193,92,0.18) 10%, rgba(229,193,92,0.60) 28%, rgba(229,193,92,0.92) 60%, rgba(229,193,92,0.92) 100%)',
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
            {/* Overlay a solid gold gradient below the blur so the rest is sharp */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(229,193,92,0.01) 0%, rgba(229,193,92,0.18) 10%, rgba(229,193,92,0.60) 28%, rgba(229,193,92,0.92) 60%, rgba(229,193,92,0.92) 100%)',
                zIndex: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <div className="relative z-10 py-14 px-6 flex flex-col items-center justify-center h-full">
              <p
                className="text-2xl md:text-4xl font-extrabold tracking-wide mb-2"
                style={{
                  fontFamily: "'Aquawax', 'aquawax', sans-serif",
                  color: '#48295B',
                  textShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  letterSpacing: '0.04em',
                }}
              >
                BUILDING FUTURES IN MUSIC
              </p>
              <p
                className="text-xl md:text-2xl font-bold tracking-wide mb-2"
                style={{
                  fontFamily: "'Candara', 'candara', sans-serif",
                  color: '#48295B',
                  textShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  letterSpacing: '0.04em',
                }}
              >
                TOUCHING THE SKY TOGETHER
              </p>
              <p
                className="text-xl md:text-2xl font-bold tracking-wide"
                style={{
                  fontFamily: "'Candara', 'candara', sans-serif",
                  color: '#48295B',
                  textShadow: '0 2px 12px rgba(0,0,0,0.10)',
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
