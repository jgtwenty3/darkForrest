// 'use client';

// import React, { useRef, useEffect } from 'react';
// import OfferCard from './OfferCards';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import { useTheme } from 'next-themes'
// gsap.registerPlugin(ScrollTrigger);

// export default function WhatWeDo() {

//   const { theme } = useTheme();
//   return (
//     <section className="flex flex-col w-full">
//       <div className="w-full">
//         {theme === 'dark' ? (
//           <Image src="/images/whiteForest.svg" alt="Decorative SVG" layout="responsive" width={338} height={134} className="rotate-180 w-full" />
//         ) : (
//           <Image src="/images/forrest.svg" alt="Decorative SVG" layout="responsive" width={338} height={134} className="rotate-180 w-full" />
//         )}
//       </div>
//       <div className=''>
//         <h3 className='text-8xl'>WHAT WE DO</h3>
//         <p className='text-4xl'>
//           At Dark Forest Studios, we craft bespoke web experiences that captivate. We specialize in custom web design and development, delivering pixel-perfect, lightning-fast websites.

//           Every line of code is meticulously crafted for optimal performance and search engine visibility, helping your business attract more customers and boost revenue.

//           We offer ongoing support, ensuring you're never left in the dark. Let's make your digital dreams a reality.
//         </p>

//       </div>
//       <div className="w-full">
//         {theme === 'dark' ? (
//           <Image src="/images/whiteForest.svg" alt="Decorative SVG" layout="responsive" width={338} height={134} className=" w-full" />
//         ) : (
//           <Image src="/images/forrest.svg" alt="Decorative SVG" layout="responsive" width={338} height={134} className=" w-full" />
//         )}
//       </div>
//     </section>
//   );
// }
