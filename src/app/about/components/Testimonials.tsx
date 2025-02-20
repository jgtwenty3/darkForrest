import React from 'react'



export default function Testimonials() {
  return (
	<div className='pt-10'>
		<div className='flex justify-end'>
			<h5 className='text-9xl mb-10'>WORD OF <br/>MOUTH</h5>

		</div>
		<div className='flex flex-row justify-around items-center space-x-6 p-10'>

			<div className='flex flex-col'>
				
				<p className='text-3xl mb-5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis eaque voluptate dicta temporibus architecto ea ipsa quae quia in mollitia veritatis pariatur, ullam magnam facilis, assumenda fugit possimus numquam.</p>
				<p className='text-4xl'>Bud S.</p>
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
		</div>
		
		
	</div>
  )
}