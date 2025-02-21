import React from 'react'

export default function ServicesHero() {
  return (
	<header className=''>
		<div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground '>
      {/* we want to animate on scroll for this to move black left of this from right to left */}
        <div className='flex-1'></div>
        <h1 className='flex flex-col border-l-2 border-l-foreground p-5 md:p-5'>SERVICES</h1>
      </div>
		<div className='text-7xl md:text-8xl border-2 border-b-foreground'>
			<a href ="#web-design">
				<h2 className='mb-5 md:mb-0 hover:bg-foreground hover:text-background'>WEB DESIGN & DEVELOPMENT</h2>
			</a>
			<a href='#software'>
				<h3 className='mb-5 md:mb-0 hover:bg-foreground hover:text-background'>SOFTWARE DEVELOPMENT</h3>

			</a>
			<a href = "#seo">
				<h4 className='mb-[30vh] hover:bg-foreground hover:text-background'>SEO</h4>
			</a>
			
		</div>
		<div>
			

		</div>
		
	</header>
  )
}