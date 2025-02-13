import Image from 'next/image'
import React from 'react'
import CheckCards from './CheckCards'

type Props = {}

export default function Offerings({}: Props) {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center mt-20 px-6">
      <div className="relative w-full md:w-1/2">
        <Image 
          src="/images/justin.JPEG" 
          alt="owner" 
          width={500} 
          height={500} 
          className="object-cover h-full w-full rounded-t-full border-2 border-black"
        />
        <div className="absolute bottom-0 right-0 bg-background bg-opacity-75 text-foreground p-3 font-display px-10 text-3xl border-2 border-black">
          <p>JUSTIN GUERRERO</p>
          <p>OWNER, DEVELOPER</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-7xl mt-5 mb-5 underline">
            WHAT WE OFFER
          </h3>
          <p className="md:w-3/5 mb-20 text-lg md:text-xl leading-relaxed">
            We offer $0 down for a standard 5 page small business website. 
            If you need more than that, we have to do custom pricing based on the scope of work, number of additional pages, and time involved. 
            12 month minimum contract. Includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CheckCards
              icon="/icons/check.svg"
              title="CUSTOM DESIGNED"
              description="Our designs are made in-house, which allows us to make anything we want."
            />
            <CheckCards
              icon="/icons/check.svg"
              title="24/7 SUPPORT"
              description="We provide round-the-clock support to ensure your site runs smoothly."
            />
            <CheckCards
              icon="/icons/check.svg"
              title="SEO OPTIMIZED"
              description="Our sites are built with SEO best practices to help you rank higher."
            />
            <CheckCards
              icon="/icons/check.svg"
              title="HOSTING INCLUDED"
              description="Reliable and secure hosting is included with all our packages."
            />
            <CheckCards
              icon="/icons/check.svg"
              title="LIFETIME UPDATES"
              description="Receive free lifetime updates for any of our designs."
            />
            <CheckCards
              icon="/icons/check.svg"
              title="UNLIMITED CUSTOMIZATION"
              description="Customize your site as much as you want, without any extra charges."
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <button className="px-12 py-3 text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black hover:text-foreground border-2 border-foreground hover:border-black font-display w-full sm:w-auto">          CALL US
          </button>
        </div>
      </div>
    </section>
  )
}
