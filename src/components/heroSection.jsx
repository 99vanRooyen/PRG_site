import React from 'react'

export default function HeroSection() {
  return (
    // Parent container for the hero section with background
    <div className="relative w-full bg-[url('./assets/Hero_Bg.png')] bg-cover bg-no-repeat bg-center h-45 md:h-70 lg:h-90 px-15 py-1 md:py-5">

      {/* Get Started button pinned to bottom */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button className="bg-[#9fb658] hover:bg-[#545f2c] sm:text-[1em] md:text-2xl text-white font-semibold rounded-2xl shadow-lg transition px-6 py-2">
          GET STARTED
        </button>
      </div>

    </div>
  )
}
