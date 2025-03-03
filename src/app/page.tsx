"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "next-themes";
import UFOScene from "@/components/3d/UFO";
import SpaceBoyScene from "@/components/3d/SpaceBoy";
import PlanCard from "@/components/PlanCard";

gsap.registerPlugin(ScrollTrigger);

const wordList = [
 
  "the internet is huge.",
  "there's so many websites.",
  "they all look the same.",
  "where do you fit in?",
  "how do you stand out?",
];

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const secondAnim = useRef<HTMLDivElement>(null);
  const bottomImage = useRef<HTMLDivElement>(null);
  const ufoRef = useRef<HTMLDivElement>(null);
  const spaceContainer = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Only initialize GSAP animations after the component has mounted
    if (mounted) {
      const chars = headerRef.current?.querySelectorAll(".char");

      if (chars && chars.length > 0) {
        const tl = gsap.timeline();

        // First ScrollTrigger
        ScrollTrigger.create({
          animation: tl,
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        });

        tl.fromTo(
          chars,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1 }
        );

        // Second ScrollTrigger
        ScrollTrigger.create({
          animation: tl,
          trigger: secondAnim.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        });

        tl.fromTo(
          secondAnim.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        // Third ScrollTrigger
        ScrollTrigger.create({
          animation: tl,
          trigger: backgroundRef.current,
          start: "bottom 10%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        });
      }

      // Separate timeline for UFO animation
      const ufoTl = gsap.timeline();

      ScrollTrigger.create({
        animation: ufoTl,
        trigger: bottomImage.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      });

      // UFO enters the screen
      ufoTl.fromTo(
        ufoRef.current,
        { x: "-60vw" },
        { x: "0vw", y: "20vh", duration: 2 }
      );

      ufoTl.to(ufoRef.current, { x: "30vw" });

      ufoTl.to(ufoRef.current, { y: "40vw", duration: 1.2 });

      // New ScrollTrigger for flying away at the bottom
      ScrollTrigger.create({
        trigger: bottomImage.current,
        start: "top 20%",
        end: "bottom 0%",
        toggleActions:"play none none reverse",
        onEnter: () => {
          gsap.to(ufoRef.current, {
            x: "-80vw", // Final position off-screen
            y: "100vh",
            scale: 0.1, // Shrink as it exits
            opacity: 0, // Fade out
            duration: 2,
            ease: "power2.in",
          });
        },
      });
    }

    // Interval to cycle through words in wordList
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    }, 4000); // Change the word every 4 seconds

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, [mounted]);

  // Render a placeholder until the theme is determined
  if (!mounted) return <div className="dark:bg-black"></div>;

  return (
    <main className="dark:bg-black">
      <Hero />
      <section ref={backgroundRef} className="flex flex-col w-full relative">
        {/* UFO Background Animation */}
        <div ref={ufoRef} className="hidden md:block absolute top-0 left-0 w-full h-fit pointer-events-none">
          <UFOScene />
        </div>

        <div className="w-full">
          {theme === "dark" ? (
            <Image
              src="/images/whiteForest.svg"
              alt="Decorative SVG"
              layout="responsive"
              width={338}
              height={134}
              className="rotate-180 w-full"
            />
          ) : (
            <Image
              src="/images/forrest.svg"
              alt="Decorative SVG"
              layout="responsive"
              width={338}
              height={134}
              className="rotate-180 w-full"
            />
          )}
        </div>
        <div className="relative mt-5 flex flex-col items-center md:items-start">
          <div ref={headerRef} className="inline-block">
            {"WHAT WE DO".split("").map((char, index) => (
              <span
                key={index}
                className={`char inline-block font-display text-8xl md:text-8xl ${
                  char === " " ? "space" : ""
                }`}
              >
                {char}
              </span>
            ))}
          </div>
          <p ref={secondAnim} className="text-2xl md:w-1/2 mt-10 ml-1 md:-mb-32 ">
            In the fast-moving digital world, a website isn't just a presence—it's a strategy.
            At <span className="font-bold">dark forest</span>, we build high-performance, strategically designed websites that help small businesses stand out—and scale.
            Every line of code is handcrafted for speed, security, and search visibility, so your brand gets seen by the right people at the right time.
            We don't just launch sites—we manage, optimize, and refine them, making sure you're always ahead of the curve. 
            No fluff, no guesswork—just smart, effective web design that drives real results. 
          </p>
        </div>

        <div ref={bottomImage} className="w-full">
          {theme === "dark" ? (
            <Image
              src="/images/whiteForest.svg"
              alt="Decorative SVG"
              layout="responsive"
              width={338}
              height={134}
              className="w-full"
            />
          ) : (
            <Image
              src="/images/forrest.svg"
              alt="Decorative SVG"
              layout="responsive"
              width={338}
              height={134}
              className="w-full"
            />
          )}
        </div>
      </section>

      <div ref={spaceContainer} style={{ width: "100%", height: "100vh" }} className="bg-black relative">
        <SpaceBoyScene />
        
        {/* Display the wordList in the SpaceBoy scene */}
        <div className="absolute bottom-96 md:top-84 md:left-32 z-10 font-bitterThin text-white text-2xl md:text-3xl">
          {wordList[currentWordIndex]}
        </div>
        <div className="absolute bottom-0 md:bottom-0 md:left-32 z-10 font-bitterThin text-gray-800 text-xs bg-opacity-0">
          This work is based on "space boi" by silvercrow101 licensed under CC-BY-NC-4.0
        </div>
      </div>
      
      <section>
        <div className='flex justify-end text-5xl md:text-10xl border-b-2 border-foreground'>
          <div className='flex-1'> </div>
          <h2 ref = {headerRef} className='flex flex-col border-l-2 border-l-foreground p-10 md:p-5 md:text-9xl text-4xl'>
            THE PLAN
          </h2>
        </div>
        <div className="">
          <PlanCard 
            title="Custom Design" 
            description="We create custom coded sites that fit your brand. Templates are meant to be one size fits most, but are you really a 'template' person?" 
          />

          <PlanCard 
            title="Mobile First" 
            description="We prioritize mobile-friendly design, ensuring your website looks and functions flawlessly on all devices. Because in today's world, most users experience your site on their phones first." 
          />

          <PlanCard 
            title="Responsive" 
            description="A seamless experience across all screen sizes. Whether it's a phone, tablet, or desktop, your site will adapt beautifully to provide the best user experience." 
          />

          <PlanCard 
            title="Speed" 
            description="Templates are meant to fit a wide use case. That means bloated code. Bloated code means slow sites. Slow sites lose visitors. We optimize every aspect of your site to ensure lightning-fast load times, keeping users engaged and improving your search rankings." 
          />
          <PlanCard 
            title="SEO-Friendly" 
            description="Great design isn't just about looks—it's about visibility. We build websites with clean code, fast performance, and SEO best practices, helping your site rank higher and attract more visitors." 
          />

        </div>
          
      </section>
      

    </main>
  );
}
