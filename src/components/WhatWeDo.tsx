'use client';

import React, { useRef, useEffect } from 'react';
import OfferCard from './OfferCards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const textRef1 = useRef<HTMLSpanElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLSpanElement>(null);
  const additionalTextRef1 = useRef<HTMLDivElement>(null);
  const additionalTextRef2 = useRef<HTMLDivElement>(null);
  const cardDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top 80%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        toggleActions: 'play none none reverse',
      },
    });

    firstTimeline
      .fromTo(
        textRef1.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
      )
      .fromTo(
        textRef2.current!.querySelectorAll('.char'),
        { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out', stagger: 0.05 }
      )
      .fromTo(
        textRef3.current,
        { opacity: 0, y: 100, rotation: 180 },
        { opacity: 1, y: 0, rotation: 0, duration: 1.5, ease: 'power2.out' }
      )
      .to(textRef3.current, {
        opacity: 0.5,
        repeat: 5,
        yoyo: true,
        duration: 0.1,
        ease: 'power1.inOut',
        repeatDelay: 0.05,
      })
      .fromTo(
        additionalTextRef1.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', }
      )
      .fromTo(
        additionalTextRef2.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out',  }
      );
  }, []);


  return (
    <section className="flex flex-col justify-center items-center mt-10 px-6">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Left top box */}
        <div className="flex items-center justify-center w-full md:w-1/2 border-2 border-foreground">
          <div className="font-display text-6xl md:text-9xl text-center py-20">
            <span ref={textRef1} className="block md:inline">
              WHAT <br className="hidden md:block" />
            </span>
            <div className="flex flex-col">
              <div ref={textRef2} className="inline-block">
                {'WE'.split('').map((char, index) => (
                  <span key={index} className="char inline-block">
                    {char}
                  </span>
                ))}
              </div>
              <span ref={textRef3} className="block md:inline mt-0 neon-text">
                DO
              </span>
            </div>
          </div>
        </div>

        {/* Right bottom box */}
        <div className="flex items-center justify-center w-full md:w-1/2 border-2 border-foreground p-2">
          <div className="flex flex-col text-center md:text-left">
            <div ref={additionalTextRef1} className="font-display text-6xl md:text-7xl text-center md:pt-20">
              <span className="block md:inline">
                NEVER WORRY <br className="hidden md:block" />
              </span>
              <span className="block md:inline">
                ABOUT YOUR WEBSITE <br className="hidden md:block" />
              </span>
              <span className="block md:inline">AGAIN</span>
            </div>
            <p ref={additionalTextRef2} className="mb-20 text-lg md:text-3xl mx-auto md:mx-0 mt-10 text-center">
              At Dark Forest Studios, we specialize in custom web design and
              development for small businesses across the US and Canada. Every
              line of code is meticulously crafted to ensure optimal performance
              and search engine visibility, helping your business attract more
              customers and increase revenue. We also offer ongoing management
              and support, so you're never left without assistance. Our mission
              is to build lasting relationships with our clients and support
              their growth every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div ref = {cardDivRef} className="w-4/5 mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li>
            <OfferCard
              icon="/icons/mobile.svg"
              title="MOBILE FIRST DESIGN"
              description="We begin by designing your site with mobile devices in mind, ensuring the code is lean, optimized, and free of unnecessary bloat."
            />
          </li>

          <li>
            <OfferCard
              icon="/icons/clock.svg"
              title="FAST LOADING SPEED"
              description="If your site takes more than 3 seconds to load, you risk losing up to 50% of your traffic. Our websites load in 1 second or less, ensuring every visitor can access your site without delay."
            />
          </li>
          <li>
            <OfferCard
              icon="/icons/devices.svg"
              title="FULLY RESPONSIVE"
              description="Your website will be fully responsive, adapting seamlessly to all mobile screen sizes, tablets, and desktops, ensuring visitors have a beautiful experience no matter what device they use."
            />
          </li>
          <li>
            <OfferCard
              icon="/icons/graph.svg"
              title="SEO OPTIMIZATION"
              description="Optimized for search engines to help your site rank higher in results. We can help rank in your local market."
            />
          </li>

          <li>
            <OfferCard
              icon="/icons/ads.svg"
              title="GOOGLE ADS PPC"
              description="We can help with Google and Yelp ads to make sure your business is found when people in your area search for what you do."
            />
          </li>
          <li>
            <OfferCard
              icon="/icons/newYork.svg"
              title="BASED IN NEW YORK"
              description="We are based in Beacon, NY and work 100% remote. We are open to working with companies nationwide."
            />
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <button className="px-8 py-3 text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black hover:text-foreground border-2 border-foreground hover:border-black font-display w-full sm:w-auto">
          GET STARTED
        </button>
      </div>
    </section>
  );
}
