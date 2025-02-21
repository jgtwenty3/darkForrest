// components/OurProcess.js
import React from 'react';
import ProcessCards from './ProcessCards';

export default function OurProcess() {
  return (
    <div className="flex flex-col mt-10 md:mt-32">
      <div>
        <div className="flex justify-center ">
          <h2 className="text-8xl md:text-11xl">
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
            subtitle="Creating Beautiful Designs"
            description="Next, we brainstorm multiple approaches—ranging from bold to conservative—but always focused on clear communication. Our designs prioritize both functionality and durability.."
          />
          <ProcessCards
            title="Development"
            subtitle="Bring It To Life"
            description="Finally, we bring our designs to life, working together to ensure a smooth and successful launch."
          />
        </div>
      </div>
    </div>
  );
}
