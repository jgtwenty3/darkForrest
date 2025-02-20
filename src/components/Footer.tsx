import React from 'react'

export default function Footer() {
  return (
	<div className='p-10 mt-10 border-t-2 border-foreground flex flex-row justify-between'>
    <div>
      <h6 className='text-3xl'>DARK FOREST STUDIOS</h6>
      <p className='text-2xl mt-2 mb-2'>
        You can do better. Let us help. 
      </p>
      <button className="px-12 py-3 text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black hover:text-foreground border-2 border-foreground hover:border-black font-display w-full sm:w-auto"> 
               CALL US
          </button>
      

    </div>
    <div>

    </div>
    <div>
      <h6 className='text-3xl mb-2'>
        DROP A LINE
      </h6>
      <p className='text-2xl'>
        justinguerrerowork@gmail.com
      </p>

    </div>
  </div>
  )
}