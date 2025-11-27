import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {
    const navigate = useNavigate();

  return (
    <div className="border-transparent h-full w-64 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" >
        <div className='flex flex-col justify-center items-center'>
            <img src={product.imageUrl} alt={product.productName} className='p-4' />
            <h2 className='text-3xl'>{product.productName}</h2>
            <h2 className='text-gray-700 text-center'>{product.description}</h2>
            <h2> price: ₹{product.price}</h2>
        </div>
        
        <div className='flex gap-2 my-4 justify-center'>
            <button onClick={() => navigate(`/product/${product._id}`)} className='border text-sm p-2  rounded-2xl bg-blue-500 text-white hover:bg-blue-700'>View Details</button>
        <button className='border text-sm p-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-700'>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default ProductCard
