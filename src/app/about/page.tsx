import React from 'react'
import AboutHero from './components/AboutHero'
import OurProcess from './components/OurProcess'
import Testimonials from './components/Testimonials'


export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <AboutHero/>
      <OurProcess/>
      <Testimonials/>
      
    </div>
  )
}