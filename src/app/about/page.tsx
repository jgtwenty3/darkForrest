import React from 'react'
import AboutHero from './components/AboutHero'
import Testimonials from './components/Testimonials'
import ProcessCards from './components/ProcessCards'


export default function AboutPage() {
  return (
    <div className='min-h-screen p-2 md:p-0'>
      <AboutHero/>
      <div className="flex flex-col mt-10 md:mt-32">
      <div>
        <div className="flex justify-center border-t-2 border-t-foreground ">
          <h2 className="text-7xl md:text-11xl">
            OUR PROCESS IS A ONE STOP SHOP
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-10 space-x-1 ">
          <ProcessCards
            title="Discovery"
            subtitle="Understanding you"
            description="Every project is unique, so our first step is to get to know you, your organization, and your industry inside out."
          />
          <ProcessCards
            title="Design"
            subtitle="Creation"
            description="Next, we brainstorm multiple approaches—ranging from bold to conservative—but always focused on clear communication."
          />
          <ProcessCards
            title="Development"
            subtitle="Bring It To Life"
            description="Finally, we bring our designs to life, working together to ensure a smooth and successful launch."
          />
        </div>
      </div>
    </div>
      <Testimonials/>
      
    </div>
  )
}