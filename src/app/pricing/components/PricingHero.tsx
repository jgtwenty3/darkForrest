import React from 'react';
import PricingCard from './PricingCard';

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

export default function PricingHero() {
  return (
    <header>
      <div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground'>
        <div className='flex-1'></div>
        <h1 className='flex flex-col border-l-2 border-l-foreground p-5 md:p-0'>PRICING</h1>
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
