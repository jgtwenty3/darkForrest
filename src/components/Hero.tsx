"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);

  const tl = gsap.timeline()

  //header animation
  useGSAP(() => {
    if (textRef.current) {
      tl.fromTo(textRef.current, {
        opacity: 0,
        scale: 0.5,
        y: -50,
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power.out",
      });
    }

    //buttons animation
    buttonRefs.current.forEach((button, index) => {
      if (button) {
        tl.from(button, {
          opacity: 0,
          x: 50 * (index % 2 === 0 ? -1 : 1),
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out",
        });
      }
    });
  });

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-visible">
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

    
      {/* <UFOScene /> */}

      {/* Content (Moved Higher) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mt-[-320px]">
        <span className="uppercase text-4xl tracking-wide">Small Business Web Design</span>
        <h1 ref={textRef} className="text-4xl md:text-6xl font-bold mb-6">
          Hand-Coded Websites, Superior Results
        </h1>
        <p className="text-2xl md:text-3xl mb-6">
          No page builders or WordPress. We offer 100% custom-coded websites starting at $125/month, as well as SEO services.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <a
            ref={(el) => {
              if (el) buttonRefs.current[0] = el;
            }}
            href="#"
            className="px-6 py-3 md:text-3xl text-xl bg-black hover:bg-white text-white hover:text-black  hover:border-2 hover:border-black font-display border-2 border-foreground"
          >
            GET STARTED
          </a>
          <a
            ref={(el) => {
              if (el) buttonRefs.current[1] = el;
            }}
            href="#"
            className="px-6 py-3 md:text-3xl text-xl bg-black hover:bg-white text-white hover:text-black  hover-border-2 hover-border-black font-display border-2 border-foreground"
          >
            {/* <Image src="/images/play-icon.svg" alt="Play" width={20} height={20} /> */}
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
