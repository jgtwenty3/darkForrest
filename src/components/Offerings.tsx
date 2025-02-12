import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Offerings({}: Props) {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center mt-10 px-6">
        <div>
        </div>
        <div>
            <div className='flex flex-col items-center'>
                <h3 className='text-4xl mt-5'>
                    WHAT WE OFFER
                </h3>
                <p className='text-lg mt-5'>
                We offer $0 down for a standard 5 page small business website. 
                If you need more than that, we have to do custom pricing based on the scope of work, number of additional pages, and time involved. 
                12 month minimum contract. Includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates.
                </p>

            </div>
            <div>

            </div>
            <div className='flex justify-center mt-5'>
                <button className="px-8 py-3 text-2xl bg-black hover:bg-white text-white hover:text-black rounded-lg border-2 border-black font-display">
                    SCHEDULE A CALL
                </button>
            </div>
           
        </div>
        
    </section>
  )
}