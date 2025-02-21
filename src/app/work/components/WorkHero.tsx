import React from 'react';
import WorkCard from './WorkCard'; 

export default function WorkHero() {
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
      <div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground'>
        <div className='flex-1'></div>
        <h1 className='flex flex-col border-l-2 border-l-foreground p-10 md:p-0'>WORK</h1>
      </div>
      <div className='p-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {workItems.map((item, index) => (
          <WorkCard key={index} title={item.title} videoUrl={item.videoUrl} linkUrl={item.linkUrl} />
        ))}
      </div>
    </header>
  );
}
