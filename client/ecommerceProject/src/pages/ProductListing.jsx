import React from 'react'
import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fetchProduct';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';




const ProductListing = () => {
    
     const [allProducts, setAllProducts] = useState([]);
      const [products, setProducts] = useState([]);
      
    

       const selectCategory = (category) => {
            // Function to filter products based on selected category
            const filteredProducts = allProducts.filter(product => product.category === category);
            console.log("Filtered Products:", filteredProducts);
            setProducts(filteredProducts);
        }
        
        useEffect(()=>{
            const getProducts = async () => {
                try {
                    const response = await fetchProducts();
                    setAllProducts(response.data);
                    setProducts(response.data);
                    console.log("Products fetched in ProductSection:", response);
                  
                } catch (error) {
                    console.error("Error in fetching products inside ProductSection:", error);
                }
            }
            getProducts();
        },[]);


       

  return (
    <>
    <Navbar />
   <div className=' h-full p-10 w-full flex flex-wrap justify-center items-center gap-8 rounded-3xl '>
        <div className='w-full flex gap-4 justify-around text-xl font-semibold mb-8 mx-40'>
            <button  className='underline'onClick={() => selectCategory('Electronics')}>Electronics</button>
            <button className='underline' onClick={() => selectCategory('Clothing')}>Clothing</button>
            <button className='underline' onClick={() => selectCategory('Books')}>Books</button>
            <button className='underline' onClick={() => selectCategory('Home')}>Home Decor</button>
        </div>
        <h1 className='w-full text-center text-4xl font-bold mb-8'> Products</h1>
        {products.map((product) => (
            <ProductCard key={product.id} product={product}  />
        ))}
    </div>
     </>
  )
}

export default ProductListing
