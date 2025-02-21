import Link from 'next/link'
import React from 'react'



export default function Testimonials() {
  return (
	<div className='pt-10'>
		<div className='flex justify-end'>
			<h5 className='text-9xl mb-10'>WORD OF <br/>MOUTH</h5>

		</div>
		<div className='flex md:flex-row flex-col justify-around items-center md:space-x-6 p-10'>

			<div className='flex flex-col mb-10'>
				
				<p className='text-3xl mb-5'>
					Working with Justin was a pleasant and rewarding experience from inception to completion.
					A consummate professional. 
					He translated our vision for the website into an enviable finished product while taking our direction and adding his own flourishes.
					What an asset for a technically challenged restaurateur.</p>
				<p className='text-4xl'>Bud Schmeling </p>
				<p className='text-2xl'>Owner, Lyonshare Public House </p>
				<p className='text-2xl'>Beacon, NY</p>
			</div>

			<div className='flex flex-col'>
				
				<p className='text-3xl mb-5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis eaque voluptate dicta temporibus architecto ea ipsa quae quia in mollitia veritatis pariatur, ullam magnam facilis, assumenda fugit possimus numquam.</p>
				<p className='text-4xl'>Dahlia D.</p>
				<p className='text-2xl'>Los Angeles, CA</p>
			</div>
			{/* <div className='flex items-center flex-col'>
				<p className='text-3xl'>"Testimony 3"</p>
				<p className='text-2xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis eaque voluptate dicta temporibus architecto ea ipsa quae quia in mollitia veritatis pariatur, ullam magnam facilis, assumenda fugit possimus numquam.</p>

			</div> */}
			<Link href = "/work">
			<button className=" mt-10 px-12 py-3 text-2xl bg-black hover:bg-background dark:hover:bg-foreground dark:hover:text-background text-background dark:text-foreground hover:text-black hover:text-foreground border-2 border-foreground hover:border-black font-display sm:w-auto">
				OUR WORK
         	</button>

			</Link>
			
		</div>
		
		
		
	</div>
  )
}