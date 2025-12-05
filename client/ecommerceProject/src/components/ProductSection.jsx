import React from 'react'
import ProductCard from './ProductCard.jsx'
import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/fetchProduct.js'

const ProductSection = () => {

    const [products, setProducts] = useState([]);

    
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.data);
                console.log("Products fetched in ProductSection:", response);
              
            } catch (error) {
                console.error("Error in fetching products inside ProductSection:", error);
            }
        }
        getProducts();
    },[]);
  return (
    <div className='h-full p-10 w-full flex flex-wrap justify-center items-center mt-10 rounded-3xl mx-4 md:mx-20 lg:mx-40 mb-8 gap-8 bg-white shadow-xl'>
        <div className='w-full text-center mb-8'>
            <h1 className='text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2'>Featured Products</h1>
            <p className='text-gray-600 text-lg'>Discover our amazing collection</p>
        </div>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductSection
