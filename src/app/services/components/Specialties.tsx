import React from 'react';
import SpecialtyCard from './Cards';



const specialtiesData = [
  {
    id: 'web-design',
    title: 'Custom Web Design & Development',
    description: 'No page builders here. We write all of our code by hand from start to finish. No bloat or wasted code from a template that wasn\'t designed for you. Our pages are faster and more secure all while keeping your page feeling like YOU.',
    listTitle: 'WHY?',
    listItems: [
      'Faster Load Times',
      'Better Conversion',
      'More Secure',
      'Better Google Rankings',
      'Boosts Google Business Profile on Map',
    ],
  },
  {
    id: 'software',
    title: 'Full Stack Software Development',
    description: 'We provide comprehensive full stack development services to build robust, scalable, and high-performance applications. From front-end interfaces to back-end architecture, we ensure seamless integration and superior functionality.',
    listTitle: 'BENEFITS:',
    listItems: [
      'End-to-End Development',
      'Scalable Architecture',
      'Enhanced Performance',
      'Seamless Integration',
      'Custom Solutions',
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description: 'Our SEO and digital marketing services are designed to increase your online visibility and drive more traffic to your website. We use the latest techniques and tools to ensure your business stays ahead of the competition.',
    listTitle: 'ADVANTAGES',
    listItems: [
      'Higher Search Rankings',
      'More Organic Traffic',
      'Increased Engagement',
      'Brand Awareness',
      'Data-Driven Strategies',
    ],
  },
];

export default function Specialties() {
  return (
    <div className='flex flex-col items-center justify-around'>
      {specialtiesData.map((specialty) => (
        <SpecialtyCard
          key={specialty.id}
          id={specialty.id}
          title={specialty.title}
          description={specialty.description}
          listTitle={specialty.listTitle}
          listItems={specialty.listItems}
        />
      ))}
    </div>
  );
}
