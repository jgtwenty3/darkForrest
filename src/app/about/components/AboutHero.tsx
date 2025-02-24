"use client"
import React, {useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutHero: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      {
        x:900,
      },{
        opacity:1,
        x:0,
        duration:1.2,
        ease:'power2.inOut'
      }

    )
  })
  return (
    <header>
      <div className='flex justify-end text-5xl md:text-10xl border-b-2 border-foreground'>
        {/* we want to animate on scroll for this to move black left of this from right to left */}
        <div className='flex-1'> </div>
        <h1 ref = {headerRef} className='flex flex-col border-l-2 border-l-foreground p-10 md:p-5'>
          ABOUT US
        </h1>
      </div>
      <div className='relative mt-5 ml-1'>

        <h2 className='text-5xl md:text-7xl font-sans font-semibold'>
            We make web experiences with purpose & personality.
        </h2>

        <div className='flex md:flex-col flex-row'>
          <p className='text-2xl md:w-1/2 mb-5 mt-5 p-2 md:p-0'>
              My name is Justin, I&apos;m the owner and lead developer at Dark Forest Studios.
              I&apos;m a full-stack developer and web designer with almost a decade of experience in SaSS sales. After years of working with small busineseses, I left sales to pursue programming. 
              As I&apos;ve learned to code, I&apos;ve found that I still want to help small businesses. 
              I want to combine what I&apos;ve learned about what small business owners want, with a personal touch that helps them stand out online.
          </p>
          <p className='text-2xl md:w-1/2 mt-5 p-2 md:p-0'>
              What I&apos;ve come to understand is that small businesses don&apos;t always have the funds to spend thousands of dollars upfront on a new site.
              The ones that do end up with a website that looks like every other templated, generic, uninspired site. It&apos;s a frustrating place to be in.
              How do you trust you&apos;re going to get something great but also as original as you? That&apos;s why I have a $0 down and $150 a month model. It&apos;s more manageable for a small business
              and lets us build a long-term working relationship.
          </p>
        </div>
          
        </div>
    </header>
  );
};

export default AboutHero;
