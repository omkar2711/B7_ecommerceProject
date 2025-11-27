import React from 'react'
import HeroImage from '../assets/heroImage1.png';

const HeroSection = () => {
    return (
        <div className='  p-8 h-auto flex flex-wrap mb-8 rounded-3xl mx-40 '>
            <div className='h-12 text-center w-full flex justify-center '>
            <input type="text" placeholder="Search for products..." className="border p-2 rounded-l-3xl w-1/2 focus:outline-none" />
            <button className="p-2 rounded-r-3xl border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
            </button>
            </div>

            <div className='grid grid-cols-2 h-96 mx-auto mt-8 px-8 items-center gap-8'>
                {/* Left part */}
                <div className='h-full  flex flex-col justify-center gap-4'>
                    <h1 className='text-5xl'>Welcome to the <strong>Ecommerce Store</strong></h1>
                    <p className='mt-4 text-xl'>Find the best products at unbeatable prices.</p>
                </div>
                {/* Right Part */}
                <div className='h-full w-full flex items-center justify-center'>
                    <img  src={HeroImage} alt="Hero" className='h-full w-full object-cover rounded-3xl p-2'/>
                </div>

            </div>
        </div>
    )
}

export default HeroSection
