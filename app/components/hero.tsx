import React from 'react'
import heroBackground from '@/public/hero-background.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#1B1E23] overflow-hidden">
      {/* Background Image */}
      <Image 
        src={heroBackground} 
        alt="hero-background" 
        fill
        className="object-cover"
        priority
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 
        bg-gradient-to-t from-[#1B1E23] via-[#1B1E23]/80 to-transparent" 
      />

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="font-days-one text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Every anime, right in your hands!
        </h1>
        <p className="font-rubik text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90">
          Every episode. Every season. Every story. Watch anime in the highest quality, anytime, anywhere, with Sozo.
        </p>
      </div>
    </div>
  )
}

export default Hero
