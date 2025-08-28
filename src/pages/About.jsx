import { useRef, useEffect } from 'react'

function About() {
  const logoRef = useRef(null)

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-white px-4 md:px-0 pt-20 md:pt-24" style={{ overflow: 'hidden' }}>
      {/* Propellaco Gold SVG Logo at the Top */}
      <div className="mt-0 mb-0 flex flex-col items-center">
        <img
          src="/images/Propellaco Logo (Gold).svg"
          alt="Propellaco Gold Logo"
          className="heartbeat"
          style={{
            width: '100%',
            maxWidth: '80rem',
            height: 'auto',
            userSelect: 'none',
            display: 'block',
            filter: 'drop-shadow(0 2px 36px rgba(229,193,92,0.24))',
          }}
          draggable={false}
        />
      </div>
      {/* About Text */}
      <div className="max-w-2xl px-4 md:px-6 text-center mt-4 md:mt-6">
        <p
          className="mb-3 md:mb-1"
          style={{
            fontFamily: "'Candara', 'candara', sans-serif",
            color: '#22223B',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontWeight: 600,
            fontStyle: 'oblique',
          }}
        >
          At Propellaco, we are dedicated to elevating emerging talent, empowering upcoming artists,
          and entertainment professionals to reach new heights. With our mission summed up in three
          words—<span style={{ fontFamily: "'Aquawax', 'aquawax', sans-serif", color: '#E5C15C', fontWeight: 700 }}>Touch the Sky</span>—we're here to ensure every creator we work with is supported at every
          level of their journey.
        </p>
        <p
          className="mb-3 md:mb-1"
          style={{
            fontFamily: "'Candara', 'candara', sans-serif",
            color: '#22223B',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontWeight: 600,
          }}
        >
          Our focus is on the "behind-the-scenes" work that fuels long-term growth, from refining an
          artist's musical identity to shaping a compelling public profile. We connect our clients with influential
          labels and industry insiders, offering the guidance and resources necessary to thrive in a
          competitive industry.
        </p>
        <p
          style={{
            fontFamily: "'Candara', 'candara', sans-serif",
            color: '#22223B',
            fontSize: '1rem',
            lineHeight: 1.7,
            fontWeight: 600,
          }}
        >
          Propellaco believes that true success comes from building a solid foundation in the artistry itself,
          the personality that embodies it, and a brand that resonates beyond the music.
        </p>
      </div>
    </div>
  )
}

export default About
