"use client";
import React, { useRef, useEffect } from 'react';
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const smallTextRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(smallTextRef.current, 
      { x: '100%', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 1, ease: "power2.out" })
      .fromTo(textRef.current, 
        { scale: 0.5, opacity: 0, y: -50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        ) // Overlapping the previous animation by 0.5 seconds
      .fromTo(paragraphRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        ) // Overlapping the previous animation by 1 second
      .add(buttonRefs.current.map((button, index) =>
        gsap.fromTo(button, 
          { opacity: 0, x: 50 * (index % 2 === 0 ? -1 : 1) },
          { opacity: 1, x: 0, duration: 1, delay: index * 0.2, ease: "power2.out" }
        )
      ), ); // Overlapping the previous animation by 0.5 seconds
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen bg-gray-100 dark:bg-gray-800 overflow-visible">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-20">
        <h1 ref={smallTextRef} className="uppercase text-4xl tracking-wide font-sans -mt-20">Small Business Web Design</h1>
        <h2 ref={textRef} className="text-8xl md:text-10xl font-bold mb-6">
          Hand-Coded Websites, Superior Results
        </h2>
        <p ref={paragraphRef} className="text-3xl md:text-xl mb-6 md:ml-20">
          No page builders or WordPress. We offer 100% custom-coded websites starting at $125/month, as well as SEO services.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 md:absolute right-10 hidden top-48">
          <a
            ref={(el) => {
              if (el) buttonRefs.current[0] = el;
            }}
            href="#"
            className="px-6 py-3 md:text-3xl text-xl bg-black hover:bg-white text-white hover:text-black  hover:border-2 hover:border-black font-display border-2"
          >
            GET STARTED
          </a>
          <a
            ref={(el) => {
              if (el) buttonRefs.current[1] = el;
            }}
            href="#"
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
