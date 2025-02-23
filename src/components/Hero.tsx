"use client";
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { useTheme } from 'next-themes';
import HWaves from './HWaves';

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const smallTextRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);
  const sunRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const tl = gsap.timeline();

    // fromTo(smallTextRef.current, 
    //   { x: '100%', opacity: 0 }, 
    //   { x: '0%', opacity: 1, duration: 1, ease: "power2.out" })
      tl.fromTo(Array.from(textRef.current!.querySelectorAll('.char')), 
        { scale: 0.5, opacity: 0, y: -50 },
        { scale: 1, opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.05 },
        ) // Overlapping the previous animation by 0.5 seconds
      // .fromTo(paragraphRef.current, 
      //   { opacity: 0, y: 50 }, 
      //   { opacity: 0, y: 0, duration: 1, ease: "power2.out" },
      //   ) // Overlapping the previous animation by 1 second
      .add(buttonRefs.current.map((button, index) =>
        gsap.fromTo(button, 
          { opacity: 0, x: 50 * (index % 2 === 0 ? -1 : 1) },
          { opacity: 1, x: 0, duration: 1, delay: index * 0.2, ease: "power2.out" }
        )
      ), ); // Overlapping the previous animation by 0.5 seconds
      
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      gsap.to(sunRef.current, { y: 0, opacity: 1, duration: 1 });
      gsap.to(moonRef.current, { y: -100, opacity: 0, duration: 1 });
    } else if (theme === 'dark') {
      gsap.to(sunRef.current, { y: -100, opacity: 0, duration: 1 });
      gsap.to(moonRef.current, { y: 0, opacity: 1, duration: 1 });
    }
  }, [theme]);

  return (
    <section id="hero" className="relative flex min-h-screen bg-gray-100 dark:bg-gray-800 overflow-visible">
      {/* Background Image */}
      <picture className="absolute inset-0 z-0 border-b-2 border-foreground">
        <HWaves/>
      </picture>
      {/* Sun and Moon Images */}
      <img ref={sunRef} src="/images/sun.svg" alt="Sun" className="absolute top-2 right-0  w-28 h-28 hidden md:block" style={{ opacity: 0, transform: 'translateY(-100%)' }} />
      <img ref={moonRef} src="/images/moon.svg" alt="Moon" className="absolute top-2 right-0  w-24 h-24 hidden md:block" style={{ opacity: 0, transform: 'translateY(0)' }} />
      {/* Content */}
      <div className="relative z-10 flex flex-col mt-20">
        <h1 ref={smallTextRef} className="uppercase text-4xl tracking-wide font-sans -mt-20 opacity-0">Small Business Web Design</h1>
        <h2 ref={textRef} className="text-7xl md:text-10xl font-bold mb-6">
        {'HAND-CODED WEBSITES, SUPERIOR RESULTS'.split('').map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
        </h2>
        <p ref={paragraphRef} className="text-3xl md:text-xl mb-6 md:ml-20 opacity-0">
          No page builders or WordPress. We offer 100% custom-coded websites starting at $150/month, as well as SEO services.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 absolute md:right-10 bottom-32 right-16 ">
          <a
            ref={(el) => {
              if (el) buttonRefs.current[0] = el;
            }}
            href="/contact"
            className="px-6 py-3 md:text-3xl text-xl bg-black hover:bg-white text-white hover:text-black  hover:border-2 hover:border-black font-display border-2"
          >
            GET STARTED
          </a>
          <a
            ref={(el) => {
              if (el) buttonRefs.current[1] = el;
            }}
            href="/about"
            className="px-6 py-3 md:text-3xl text-xl bg-black hover:bg-white text-white hover:text-black  hover-border-2 hover-border-black font-display border-2"
          >
            {/* <Image src="/images/play-icon.svg" alt="Play" width={20} height={20} /> */}
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
