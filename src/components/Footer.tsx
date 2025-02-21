import React from 'react';

export default function Footer() {
  return (
    <div className='p-6 md:p-10 mt-10 border-t-2 border-foreground flex flex-col md:flex-row justify-between bg-background'>
      <div className='mb-6 md:mb-0'>
        <h6 className='text-xl md:text-3xl'>DARK FOREST STUDIOS</h6>
        <p className='text-lg md:text-2xl mt-2 mb-2'>
          You can do better. Let us help.
        </p>
        <button className="w-full sm:w-auto px-6 py-2 md:px-12 md:py-3 text-lg md:text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black hover:text-foreground border-2 border-foreground hover:border-black font-display">
          CALL US
        </button>
      </div>
      <div className='hidden md:block'>
        {/* Additional content if needed */}
      </div>
      <div className='flex flex-col'>
        <h6 className='text-xl md:text-3xl mb-2'>
          DROP A LINE
        </h6>
        <p className='text-lg md:text-2xl'>
          justinguerrerowork@gmail.com
        </p>
      </div>
    </div>
  );
}
