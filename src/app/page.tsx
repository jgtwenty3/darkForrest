"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react"; // Correct import of the hook

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const firstAnim = useRef<HTMLDivElement>(null);
  const secondAnim = useRef<HTMLDivElement>(null);

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
          trigger: firstAnim.current,
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
      }
    }
  }, [mounted]);

  // Render a placeholder until the theme is determined
  if (!mounted) return <div className="dark:bg-black"></div>;

  return (
    <div className="dark:bg-black">
      <Hero />
      <section className="flex flex-col w-full">
        <div ref={firstAnim} className="w-full">
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
        <div className="absolute mt-80">
          <div ref={headerRef} className="inline-block">
            {"WHAT WE DO".split("").map((char, index) => (
              <span
                key={index}
                className={`char inline-block font-display text-8xl ${
                  char === " " ? "space" : ""
                }`}
              >
                {char}
              </span>
            ))}
          </div>

          <p ref={secondAnim} className="text-2xl md:w-2/3 md:mt-10">
            At Dark Forest Studios, we craft bespoke web experiences that
            captivate. We specialize in custom web design and development,
            delivering pixel-perfect, lightning-fast websites. Every line of
            code is meticulously crafted for optimal performance and search
            engine visibility, helping your business attract more customers and
            boost revenue. We offer ongoing support, ensuring you&apos;re never left
            in the dark. Let&apos;s make your digital dreams a reality.
          </p>
        </div>
        <div className="w-full">
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
      <section className="w-full">
        

      </section>
    </div>
  );
}
