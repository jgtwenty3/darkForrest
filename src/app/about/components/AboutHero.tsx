import React from 'react'


export default function AboutHero() {
  return (
	<section>
		<div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground '>
        <h1 className='flex flex-col border-l-2 border-l-foreground'>ABOUT <span className='md:ml-60 ml-28'>US</span></h1>
      </div>
      <div className='mt-5'>
        <div>
          <h2 className='text-6xl font-sans'>
            We make web experiences with purpose and originality.
          </h2>
        </div>

       <div className=''>
        <p className='text-2xl md:w-1/2 mb-5 mt-5'>
          My name is Justin, I'm the owner and lead developer at Dark Forest Studios. 
          I left a decade-long career in software sales to get into programming. After learning what customers want from their products, 
          I spent the last year and a half learning how to code websites the right way by hand.
          As the son of a small business owner, I know what goes into building something on your own. 
        </p>
        <p className='text-2xl md:w-1/2'>
        What I've found is that a lot of small businesses don't have the funds to spend thousands of dollars upfront on a new site.
        The ones that do end up with a website that looks like every other templated, generic , uninspired site. It's a frustating plae to be in.
        How do you trust you're going to get something great? That's why I have a $0 down and $125 a month model. It's more manageable for a small business
        and let's us build a long term working relationship.
        </p>
       </div>
        
      </div>
	</section>
  )
}