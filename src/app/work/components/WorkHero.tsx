"use client"
import React, { useRef } from 'react';
import WorkCard from './WorkCard'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function WorkHero() {

  const headerRef = useRef<HTMLDivElement>(null)

  	useGSAP(()=>{
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      {
        x:-1500,
      },{
        opacity:1,
        x:0,
        duration:1.5,
        ease:"sine.inOut"
      }

    )
  })
  const workItems = [
    { title: 'LYONSHARE PUBLIC HOUSE', videoUrl: '/videos/lyonshare.mp4', linkUrl: 'https://lyonsharebeacon.com/' },
    { title: 'L TRAIN SKATE Co.', videoUrl: '/videos/ltrainskate.mp4', linkUrl: 'https://ltrainskateco.netlify.app/' },
	  { title: 'ROBERT NOBLE', videoUrl: '/videos/robert.mp4', linkUrl: 'https://robertnoble.vercel.app/' },
	  { title: 'SWISH SOCIAL', videoUrl: '/videos/swish.mp4', linkUrl: 'https://example.com/swish' },
    { title: 'CODEHUB', videoUrl: '/videos/codehub.mp4', linkUrl: 'https://codhub-ashen.vercel.app/' },
   
    // Add more work items as needed
  ];

  return (
    <header>
      <div className='flex justify-end text-5xl md:text-10xl border-b-2 border-foreground'>
        <div className='flex-1'></div>
        <h1 ref = {headerRef} className='flex flex-col border-l-2 border-l-foreground p-10 md:p-5'>WORK</h1>
      </div>
      <div className='p-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {workItems.map((item, index) => (
          <WorkCard key={index} title={item.title} videoUrl={item.videoUrl} linkUrl={item.linkUrl} />
        ))}
      </div>
    </header>
  );
}
