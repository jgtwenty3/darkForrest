import React from 'react'
import ServicesHero from './components/ServicesHero'
import WebDesign from './components/WebDesign'
import SoftwareDevelopment from './components/SoftwareDevelopment'
import Seo from './components/Seo'

export default function ServicesPage() {
  return (
    <div className='min-h-screen'>
      <ServicesHero/>
      <WebDesign/>
      <SoftwareDevelopment/>
      <Seo/>
      
    </div>
  )
}