import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Background Image */}
      <picture className="absolute inset-0 z-0">
        <source media="(max-width: 600px)" srcSet="/images/forrest.svg" />
        <source media="(min-width: 601px)" srcSet="/images/forrest.svg" />
        <img
          src="/images/forrest.svg"
          alt="Hero Background"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </picture>

      {/* Content (Moved Higher) */}
      <div className="relative z-10 flex flex-col items-center text-center text-white max-w-2xl mt-[-320px]">
        <span className="uppercase text-xl tracking-wide text-black">Small Business Web Design</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
          Hand-Coded Websites, Superior Results
        </h1>
        <p className="text-lg md:text-xl mb-6 text-black">
          No page builders or WordPress. We offer 100% custom-coded websites starting at $125/month, as well as SEO services.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <a href="#" className="px-6 py-3 text-lg bg-black hover:bg-white text-white hover:text-black rounded-lg hover:border-2 hover:border-black font-display">
            GET STARTED
          </a>
          <a href="#" className="px-6 py-3 text-lg bg-black hover:bg-white text-white hover:text-black rounded-lg hover:border-2 hover:border-black font-display">
            {/* <Image src="/images/play-icon.svg" alt="Play" width={20} height={20} /> */}
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  )
}
