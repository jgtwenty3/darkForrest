"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "next-themes";
import UFOScene from "@/components/3d/UFO";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const secondAnim = useRef<HTMLDivElement>(null);
  const bottomImage = useRef<HTMLDivElement>(null)
  const ufoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // UFO Animation
    

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

        ScrollTrigger.create({
          animation:tl,
          trigger:backgroundRef.current,
          start: "bottom 10%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        })
        tl.fromTo(
          ufoRef.current,
          {
            x:"-60vw"
          },{
            x:"0vw",
            y:"20vh",
            duration:2
          },
          
        )
        tl.to(
          ufoRef.current,{
            x:"30vw"
          }
        )
        tl.to(
          ufoRef.current,{
            y:"40vw",
            duration:1.2
          
          }
        )

        ScrollTrigger.create({
          animation:tl,
          trigger:bottomImage.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        })
        tl.to(ufoRef.current,{x: "-80vw", // Final position off-screen
        y: "100vh",
        delay:3,
        scale: 0.5, // Shrink as it exits
        opacity: 0, // Fade out
        duration: 2,
        ease: "power2.in",})
      }
    }
  }, [mounted]);

  // Render a placeholder until the theme is determined
  if (!mounted) return <div className="dark:bg-black"></div>;

  return (
    <div className="dark:bg-black">
      <Hero />
      <section ref = {backgroundRef} className="flex flex-col w-full relative">
        {/* UFO Background Animation */}
        <div ref={ufoRef} className=" hidden md:block absolute top-0 left-0 w-full h-fit pointer-events-none">
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
          <p ref={secondAnim} className="text-2xl md:w-2/3 mt-10">
            At Dark Forest Studios, we craft bespoke web experiences that
            captivate. We specialize in custom web design and development,
            delivering pixel-perfect, lightning-fast websites. Every line of
            code is meticulously crafted for optimal performance and search
            engine visibility, helping your business attract more customers and
            boost revenue. We offer ongoing support, ensuring you&apos;re never left
            in the dark. Let&apos;s make your digital dreams a reality.
          </p>
        </div>

        <div ref = {bottomImage} className="w-full">
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
    </div>
  );
}
