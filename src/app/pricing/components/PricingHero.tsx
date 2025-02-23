"use client"
import React, { useRef } from 'react';
import PricingCard from './PricingCard';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const pricingOptions = [
  {
    title: 'One & Done',
    listItems: [
      { item: 'Design And Development', included: true },
      { item: '$100 fee Per Page after 5', included: true },
      { item: '+$50/mo Unlimited Edits Add-on', included: true },
      { item: '+$250 To Add A Blog', included: true },
	    { item: '3D Animation', included: false },
      { item: '24/7 Support', included: false },
      { item: 'Lifetime Updates', included: false },
	    { item: '$25/mo Hosting', included: false },
    ],
    price: '$2200 + $25/mo Hosting',
    buttonLabel: 'Get Started',
    buttonLink: '/contact',
  },
  {
    title: 'Monthly',
    listItems: [
      { item: 'Design And Development', included: true },
      { item: '$25/mo Hosting', included: true },
      { item: '$100 fee Per Page after 5', included: true },
      { item: 'Unlimited Edits Included', included: true },
      { item: '+ $250 for Blog', included: true },
      { item: '24/7 Support', included: true },
      { item: 'Lifetime Updates', included: true },
	    { item: '3D Animation', included: false },
      
    ],
    price: '$150/month',
    buttonLabel: 'Start Now',
    buttonLink: '/contact',
  },
  {
    title: 'Software',
    listItems: [
      { item: 'Design And Development', included: true },
	  { item: 'Full Stack Web or Mobile Application', included: true },
      { item: 'Unlimited Pages', included: true },
      { item: 'Unlimited Edits Included', included: true },
      { item: 'Unlimited Features', included: true },
      { item: '3D Animation', included: true },
      { item: 'Lifetime Updates', included: false },
	  { item: 'Hosting', included: false },
    ],
    price: 'CUSTOM',
    buttonLabel: "Let's Build",
    buttonLink: '/contact',
  },
];

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



export default function PricingHero() {
  
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
      <div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground'>
        <div className='flex-1'></div>
        <h1 ref = {headerRef} className='flex flex-col border-l-2 border-l-foreground p-5 md:p-5'>PRICING</h1>
      </div>
      <div className='border-b-2 border-foreground p-4 flex justify-center'>
          {/* <h2 className='text-5xl md:text-6xl mr-6' >
           options
          </h2>
           */}
        <div className='grid gap-8 md:grid-cols-3'>
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              title={option.title}
              listItems={option.listItems}
              price={option.price}
              buttonLabel={option.buttonLabel}
              buttonLink={option.buttonLink}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
