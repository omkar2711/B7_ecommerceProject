import React from 'react'
import HeroImage from '../assets/heroImage1.png';

const HeroSection = () => {
    return (
        <div className='p-8 h-auto flex flex-wrap mb-12 mt-10 rounded-3xl mx-4 md:mx-20 lg:mx-40 bg-gradient-to-br from-white to-indigo-50 shadow-2xl border border-indigo-100'>
            <div className='h-16 text-center w-full flex justify-center mb-6'>
                <div className='flex w-full md:w-2/3 lg:w-1/2 shadow-xl rounded-full overflow-hidden border-2 border-indigo-200'>
                    <input 
                        type="text" 
                        placeholder="Search for products..." 
                        className="flex-1 p-4 px-6 focus:outline-none bg-white text-gray-700 placeholder-gray-400" 
                    />
                    <button className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto mt-8 px-8 items-center gap-12'>
                {/* Left part */}
                <div className='flex flex-col justify-center gap-6 animate-fade-in'>
                    <h1 className='text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
                        Welcome to the <span className='block mt-2'>Ecommerce Store</span>
                    </h1>
                    <p className='text-xl text-gray-600 leading-relaxed'>Find the best products at unbeatable prices. Shop with confidence and style.</p>

                </div>
                {/* Right Part */}
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className='absolute -inset-4 rounded-3xl  animate-pulse'></div>
                        <img src={HeroImage} alt="Hero" className='relative w-full h-96 object-cover  transform hover:scale-105 transition-transform duration-300'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
