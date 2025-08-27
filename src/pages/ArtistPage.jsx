import { useParams, Link } from 'react-router-dom'

function ArtistPage() {
  const { artistName } = useParams()

  // Map artist names to their corresponding images
  const getArtistImage = (name) => {
    const artistMap = {
      'artemas': '/images/artist-1.jpg',
      'dthang': '/images/artist-2.jpg',
      'ot7-quanny': '/images/artist-3.jpg',
      'che': '/images/artist-4.jpg',
      'will-swinton': '/images/artist-5.jpg',
      'nafeesisboujee': '/images/artist-1.jpg',
      'ice-spice': '/images/artist-2.jpg',
      'hailey-knox': '/images/artist-3.jpg',
      'between-friends': '/images/artist-4.jpg',
      'chezile': '/images/artist-5.jpg',
      'abe-parker': '/images/artist-1.jpg',
      'trippie-redd': '/images/artist-2.jpg',
      'rich-amiri': '/images/artist-3.jpg',
      'the-living-tombstone': '/images/artist-4.jpg',
      'salem-ilese': '/images/artist-5.jpg',
      'chicken-p': '/images/artist-1.jpg',
      'ytb-fatt': '/images/artist-2.jpg',
      'surfaces': '/images/artist-3.jpg',
      'jessica-baio': '/images/artist-4.jpg',
      'dro-kenji': '/images/artist-5.jpg',
      'paygotti': '/images/artist-1.jpg',
      'aminé': '/images/artist-2.jpg',
      'summrs': '/images/artist-3.jpg',
      'sunday-scaries': '/images/artist-4.jpg',
      'natalie-jane': '/images/artist-5.jpg',
      'psychic-fever': '/images/artist-1.jpg'
    }
    return artistMap[name] || '/images/artist-1.jpg'
  }

  // Mock artist data - in a real app, this would come from an API
  const artistData = {
    name: artistName?.replace(/-/g, ' ').toUpperCase() || 'ARTIST',
    image: getArtistImage(artistName),
    bio: `Hailing from the vibrant music scene, ${artistName?.replace(/-/g, ' ')} has been making waves with their unique sound and undeniable talent. With a passion for creating authentic music that resonates with audiences worldwide, they continue to push boundaries and inspire the next generation of artists. Their innovative approach to music production and storytelling has earned them recognition across the industry.`,
    socialLinks: {
      instagram: '#',
      twitter: '#',
      spotify: '#',
      appleMusic: '#',
      youtube: '#',
      soundcloud: '#'
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Section - Artist Image */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="relative">
              <img
                src={artistData.image}
                alt={artistData.name}
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Section - Artist Info */}
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
            {/* Artist Name */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-aquawax font-bold text-[#E5C15C] mb-4 md:mb-8">
                {artistData.name}
              </h1>
            </div>

            {/* Artist Bio */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg font-candara text-gray-700 leading-relaxed">
                {artistData.bio}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-aquawax font-bold text-gray-900">Follow</h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href={artistData.socialLinks.instagram}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-pink-600 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">Instagram</span>
                </a>
                <a
                  href={artistData.socialLinks.twitter}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-blue-500 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">X (Twitter)</span>
                </a>
                <a
                  href={artistData.socialLinks.spotify}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-green-500 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">Spotify</span>
                </a>
                <a
                  href={artistData.socialLinks.appleMusic}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-red-500 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.994 2.186a3.008 3.008 0 0 0-2.816-2.816C18.72-.017 12 0 12 0S5.28-.017 2.816.37A3.008 3.008 0 0 0 0 2.186v19.628a3.008 3.008 0 0 0 2.816 2.816C5.28 24.017 12 24 12 24s6.72.017 9.184-.37A3.008 3.008 0 0 0 24 21.814V2.186zM9.609 15.626V8.34l6.783 3.643-6.783 3.643z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">Apple Music</span>
                </a>
                <a
                  href={artistData.socialLinks.youtube}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-red-600 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">YouTube</span>
                </a>
                <a
                  href={artistData.socialLinks.soundcloud}
                  className="flex items-center space-x-2 md:space-x-3 text-gray-700 hover:text-orange-500 transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">SoundCloud</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Talents Button */}
        <div className="mt-12 md:mt-20 text-center">
          <Link
            to="/talents"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Talents
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArtistPage
