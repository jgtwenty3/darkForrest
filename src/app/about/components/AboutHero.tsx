import React from 'react'


export default function AboutHero() {
  return (
	<section>
		<div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground '>
      {/* we want to animate on scroll for this to move black left of this from right to left */}
        <div className='flex-1'></div>
        <h1 className='flex flex-col border-l-2 border-l-foreground p-20 md:p-0'>ABOUT <span className='md:ml-60 ml-28'>US</span></h1>
      </div>
      <div className='mt-5 ml-1'>
        <div>
          <h2 className='text-6xl font-sans'>
            We make web experiences with purpose and personality.
          </h2>
        </div>

        <div className=''>
          <div>
            <p className='text-2xl md:w-1/2 mb-5 mt-5'>
              My name is Justin, I&apos;m the owner and lead developer at Dark Forest Studios.
              I&apos;m a full-stack developer and web designer with almost a decade of experience in SaSS sales. After years of working with small busineseses, I left sales to pursue programming. 
              As I&apos;ve learned to code, I&apos;ve found that I still want to help small businesses. 
              I want to combine what I&apos;ve learned about what small business owners want, with a personal touch that helps them stand out online.
            </p>
            <p className='text-2xl md:w-1/2'>
            What I&apos;ve come to understand is that small businesses don&apos;t always have the funds to spend thousands of dollars upfront on a new site.
            The ones that do end up with a website that looks like every other templated, generic , uninspired site. It&apos;s a frustating plae to be in.
            How do you trust you&apos;re going to get something great but also as original as you? That&apos;s why I have a $0 down and $125 a month model. It&apos;s more manageable for a small business
            and let&apos;s us build a long term working relationship. 
            </p>
          </div>
        <div>
          
        </div>
        
       </div>
      </div>
	</section>
  )
}