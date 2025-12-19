import React from 'react'

export default function  HeroSection() {
  return (

    //The parent container for the hero section and to set the background
    <div className="w-full flex flex-col items-start justify-start bg-[url('./assets/Hero_Bg.png')] bg-cover bg-no-repeat bg-center h-45 md:h-70 lg:h-90 px-15 py-1 md:py-5">

      <div className='mt-5'>
        {/* Hero section paragraph and text */}
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-white" >BE <b>BOLD</b></p>

        {/* Here is also my text and the word "different " is upside down */}
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-white font-bold">
          BE <span className="inline-block transform rotate-180 sm:translate-y-3 md:translate-y-2">DIFFERENT</span>
        </p>

        
        {/* Here is more text and here the word "rebel " is circled with a green border */}
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-white mb-3 font-bold" >
          BE A 
          <span className="relative inline-block px-2">
            REBEL
            <span className="absolute inset-0 rounded-full border-4 border-[#9fb658] pointer-events-none"></span>
          </span>
        </p>

          {/*This is where the button is where users can get started   */}
        <button className="bg-[#9fb658] hover:bg-[#545f2c] sm:text-[1em] md:text-2xl text-white font-semibold rounded-2xl shadow-lg transition px-1">
          GET STARTED
        </button>
      </div>

    </div>
  )
}
