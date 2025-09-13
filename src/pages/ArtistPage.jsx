import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ArtistPage() {
  const { artistName } = useParams()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Enhanced artist data with SLIDE images integration
  const getArtistData = (name) => {
    const baseData = {
      genre: 'Hip-Hop / R&B',
      location: 'Los Angeles, CA',
      followers: '2.4M',
      monthlyListeners: '8.7M',
      socialLinks: {
        instagram: '#',
        twitter: '#',
        spotify: '#',
        youtube: '#',
        soundcloud: '#'
      }
    }

    // Special artist that uses SLIDE images from homepage
    if (name === 'daiverse' || name === 'daiverse-cocaine') {
      return {
        ...baseData,
        name: 'DAIVERSE',
        displayName: 'Daiverse',
        tagline: 'COCAINE',
        backgroundImage: '/images/SLIDE-1-.JPG',
        bio: 'Born from the streets of Atlanta, Daiverse emerged as a revolutionary force in hip-hop. His unique blend of melodic rap and hard-hitting beats has captured the attention of millions worldwide. With tracks like "Cocaine" taking over the charts, Daiverse represents the new wave of authentic storytelling in music that speaks to the soul and challenges the status quo.',
        accentColor: '#E5C15C'
      }
    }

    // Regular artists with their images as backgrounds
    const artistMap = {
      'artemas': {
        name: 'ARTEMAS',
        displayName: 'Artemas',
        tagline: 'RISING STAR',
        backgroundImage: '/images/artist-1.jpg',
        bio: 'Rising star with a unique blend of alternative rock and modern pop, creating anthems for the next generation. Artemas is redefining the boundaries of modern music with their innovative approach and authentic storytelling. From humble beginnings to chart-topping success, their journey represents the essence of artistic evolution and creative excellence.',
        accentColor: '#48295B'
      },
      'ice-spice': {
        name: 'ICE SPICE',
        displayName: 'Ice Spice',
        tagline: 'BRONX PRINCESS',
        backgroundImage: '/images/artist-2.jpg',
        bio: 'The Bronx princess taking over the rap game with her fiery flows and undeniable charisma. Ice Spice has become a cultural phenomenon, bringing authentic Bronx energy to the mainstream. Her meteoric rise represents the power of staying true to your roots while conquering new heights.',
        accentColor: '#E5C15C'
      },
      'trippie-redd': {
        name: 'TRIPPIE REDD',
        displayName: 'Trippie Redd',
        tagline: 'MELODIC GENIUS',
        backgroundImage: '/images/artist-3.jpg',
        bio: 'A melodic genius who has revolutionized the hip-hop landscape with his distinctive sound and emotional depth. Trippie Redd continues to push boundaries and inspire a new generation of artists with his innovative approach to music and authentic artistic expression.',
        accentColor: '#48295B'
      },
      'ytb-fatt': {
        name: 'YTB FATT',
        displayName: 'YTB Fatt',
        tagline: 'STREET SCHOLAR',
        backgroundImage: '/images/artist-4.jpg',
        bio: 'Street scholar and lyrical mastermind bringing authentic narratives from the ground up. YTB Fatt represents the raw essence of hip-hop culture, delivering powerful messages through his music while staying true to his roots and inspiring his community.',
        accentColor: '#E5C15C'
      },
      'aminé': {
        name: 'AMINÉ',
        displayName: 'Aminé',
        tagline: 'CREATIVE VISIONARY',
        backgroundImage: '/images/artist-5.jpg',
        bio: 'Creative visionary blending genres and breaking conventional boundaries with every release. Aminé brings a fresh perspective to modern music, combining thoughtful lyricism with innovative production to create a sound that is uniquely his own.',
        accentColor: '#48295B'
      },
      'dthang': {
        name: 'DTHANG',
        displayName: 'Dthang',
        tagline: 'STREET KING',
        backgroundImage: '/images/artist-1.jpg',
        bio: 'Street king dominating the hip-hop scene with authentic narratives and powerful delivery. Dthang represents the raw energy of modern rap culture.',
        accentColor: '#E5C15C'
      },
      'hailey-knox': {
        name: 'HAILEY KNOX',
        displayName: 'Hailey Knox',
        tagline: 'POP SENSATION',
        backgroundImage: '/images/artist-2.jpg',
        bio: 'Pop sensation captivating audiences with her unique sound and magnetic presence. Hailey Knox is redefining what it means to be a modern pop artist.',
        accentColor: '#48295B'
      },
      'rich-amiri': {
        name: 'RICH AMIRI',
        displayName: 'Rich Amiri',
        tagline: 'MELODIC MASTERMIND',
        backgroundImage: '/images/artist-3.jpg',
        bio: 'Melodic mastermind crafting the future of hip-hop with innovative sounds and authentic storytelling. Rich Amiri is a force to be reckoned with.',
        accentColor: '#E5C15C'
      },
      'efue': {
        name: 'EFUE',
        displayName: 'Efue',
        tagline: 'AFRO-SOUL SENSATION',
        backgroundImages: ['/images/SLIDE-1-.JPG', '/images/SLIDE-2.JPG', '/images/SLIDE-3.JPG'],
        backgroundImage: '/images/SLIDE-1-.JPG',
        bio: 'Efue is an Afro-soul musician who uses her music to express her personal feelings and experiences, particularly those that are difficult to articulate verbally. She is known for her EP, "Memorabilia," and has been featured on Apple Music\'s "Up Next Nigeria" playlist. As a person, she is an introvert who loves reading, watching anime, and writing.',
        accentColor: '#E5C15C',
        genre: 'Afro-Soul',
        hasSlider: true
      }
    }

    const artist = artistMap[name] || artistMap['artemas']
    return { ...baseData, ...artist }
  }

  const artistData = getArtistData(artistName)

  // Auto-slide effect for Efue
  useEffect(() => {
    if (artistData.hasSlider && artistData.backgroundImages) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % artistData.backgroundImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [artistData.hasSlider, artistData.backgroundImages])

  // Get current background image
  const getCurrentBackgroundImage = () => {
    if (artistData.hasSlider && artistData.backgroundImages) {
      return artistData.backgroundImages[currentSlide]
    }
    return artistData.backgroundImage
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-center md:bg-[center_20%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${getCurrentBackgroundImage()})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50 hidden md:block">
        <Link
          to="/talents"
          className="inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-300 border border-white/20 cursor-pointer"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">BACK</span>
        </Link>
      </div>

      {/* Listen Button */}
      <div className="absolute bottom-40 md:bottom-48 lg:bottom-52 left-1/2 transform -translate-x-1/2 z-30">
        <button 
          className="px-12 py-4 bg-propellaco-sunray text-propellaco-purple font-bold rounded-full text-lg hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-propellaco-sunray/30 backdrop-blur-sm border border-propellaco-sunray/20 tracking-widest"
          style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif" }}
        >
          LISTEN
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-8">
          <a 
            href={artistData.socialLinks.youtube}
            className="w-14 h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-white/30 hover:border-red-600 shadow-lg"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a 
            href={artistData.socialLinks.spotify}
            className="w-14 h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110 border border-white/30 hover:border-green-500 shadow-lg"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a 
            href={artistData.socialLinks.instagram}
            className="w-14 h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all duration-300 transform hover:scale-110 border border-white/30 hover:border-transparent shadow-lg"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.45.204 4.896.388a7.9 7.9 0 0 0-2.85 1.85A7.9 7.9 0 0 0 .395 4.89C.21 5.444.088 6.088.054 7.035.019 7.983.006 8.39.006 12.011s.013 4.028.048 4.976c.034.947.156 1.591.34 2.145a7.9 7.9 0 0 0 1.851 2.85 7.9 7.9 0 0 0 2.854 1.852c.554.184 1.198.306 2.145.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.591-.156 2.145-.34a7.9 7.9 0 0 0 2.85-1.851 7.9 7.9 0 0 0 1.852-2.854c.184-.554.306-1.198.34-2.145.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.591-.34-2.145a7.9 7.9 0 0 0-1.851-2.85A7.9 7.9 0 0 0 19.138.388c-.554-.184-1.198-.306-2.145-.34C16.045.013 15.638 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.85.07.3.012.921.166 1.532.376 1.3.5 2.347 1.548 2.847 2.847.21.611.364 1.232.376 1.532.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.012.3-.166.921-.376 1.532-.5 1.3-1.547 2.347-2.847 2.847-.611.21-1.232.364-1.532.376-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-.3-.012-.921-.166-1.532-.376a5.738 5.738 0 0 1-2.847-2.847c-.21-.611-.364-1.232-.376-1.532-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.012-.3.166-.921.376-1.532.5-1.3 1.547-2.347 2.847-2.847.611-.21 1.232-.364 1.532-.376 1.266-.058 1.646-.07 4.85-.07zm0 3.676a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.441 1.441 0 0 1 2.88 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-5xl">
          {/* Artist Name */}
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight"
            style={{
              fontFamily: "'Aquawax', 'aquawax', sans-serif",
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              letterSpacing: '0.02em'
            }}
          >
            {artistName === 'efue' ? 'Efue' : `${artistData.displayName || artistData.name} - ${artistData.tagline}`}
          </h1>

          {/* Artist Bio */}
          <p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl lg:max-w-3xl mx-auto opacity-90 mb-12 md:mb-16 lg:mb-20"
            style={{ 
              fontFamily: "'Candara', 'candara', sans-serif",
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            {artistData.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArtistPage
