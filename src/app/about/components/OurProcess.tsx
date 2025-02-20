// components/OurProcess.js
import React from 'react';
import ProcessCards from './ProcessCards';

export default function OurProcess() {
  return (
    <div className="flex flex-col mt-10 md:mt-32">
      <div>
        <div className="flex justify-center ">
          <h2 className="text-6xl md:text-11xl">
            OUR PROCESS IS A ONE STOP SHOP
          </h2>
        </div>
        <div className="flex justify-center mt-10 space-x-1">
          <ProcessCards
            title="Discovery"
            subtitle="Understanding Your Needs"
            description="We start with a quick questionaire to understand your business, your goals, what sets you apart, and your target audience to ensure our designs align with your vision."
          />
          <ProcessCards
            title="Design"
            subtitle="Creating Beautiful Designs"
            description="We'll schedule a video call to show you the first draft and make any changes you want. Be picky. It's your brand."
          />
          <ProcessCards
            title="Development"
            subtitle="Bring It To Life"
            description="Once approved, we'll start coding the site. You'll receive a demo link before launch."
          />
        </div>
      </div>
    </div>
  );
}
