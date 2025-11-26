import React from 'react'

const HeroSection = () => {
    return (
        <div className='border p-8 h-96 flex  mb-8 rounded-3xl mx-40 '>
            <div className='h-12 text-center w-full flex justify-center '>
                 <input type="text" placeholder="Search for products..." className="border p-2 rounded-l-3xl w-1/2 focus:outline-none" />
            <button className="p-2 rounded-r-3xl border"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>


            </button>
            </div>
           

        </div>
    )
}

export default HeroSection
