import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <header>
      <div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground'>
        {/* we want to animate on scroll for this to move black left of this from right to left */}
        <div className='flex-1'> </div>
        <h1 className='flex flex-col border-l-2 border-l-foreground p-10 md:p-0'>
          ABOUT <span className='md:ml-60 ml-28'>US</span>
        </h1>
      </div>
      <div className='relative mt-5 ml-1'>
       
        <div>
          <h2 className='text-6xl font-sans'>
            We make web experiences with purpose and personality.
          </h2>
        </div>

        <div>
          <div>
            <p className='text-2xl md:w-1/2 mb-5 mt-5 p-2 md:p-0'>
              My name is Justin, I&apos;m the owner and lead developer at Dark Forest Studios.
              I&apos;m a full-stack developer and web designer with almost a decade of experience in SaSS sales. After years of working with small busineseses, I left sales to pursue programming. 
              As I&apos;ve learned to code, I&apos;ve found that I still want to help small businesses. 
              I want to combine what I&apos;ve learned about what small business owners want, with a personal touch that helps them stand out online.
            </p>
            <p className='text-2xl md:w-1/2 p-2 md:p-0'>
              What I&apos;ve come to understand is that small businesses don&apos;t always have the funds to spend thousands of dollars upfront on a new site.
              The ones that do end up with a website that looks like every other templated, generic, uninspired site. It&apos;s a frustrating place to be in.
              How do you trust you&apos;re going to get something great but also as original as you? That&apos;s why I have a $0 down and $125 a month model. It&apos;s more manageable for a small business
              and lets us build a long-term working relationship.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
