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
    <div className=' h-full p-10 w-full flex flex-wrap justify-center items-center mt-10 rounded-3xl mx-40 mb-8 gap-8'>
        <h1 className='w-full text-center text-4xl font-bold mb-8'> Products</h1>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductSection
