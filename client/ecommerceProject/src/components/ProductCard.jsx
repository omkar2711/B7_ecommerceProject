import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {
    const navigate = useNavigate();

  return (
    <div className="group relative bg-white h-full w-72 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        <div className='absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10'>
            ₹{product.price}
        </div>
        
        <div className='flex flex-col justify-center items-center p-6'>
            <div className='w-full h-56 flex items-center justify-center mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden'>
                <img src={product.imageUrl} alt={product.productName} className='w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300' />
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2 text-center'>{product.productName}</h2>
            <p className='text-gray-600 text-center text-sm mb-4 line-clamp-2 h-10'>{product.description}</p>
        </div>
        
        <div className='flex gap-2 px-6 pb-6 justify-center'>
            <button 
                onClick={() => navigate(`/product/${product._id}`)} 
                className='flex-1 text-sm py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
                View Details
            </button>
            <button className='text-sm py-2.5 px-4 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default ProductCard
