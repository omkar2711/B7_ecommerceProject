import React , { useState , useEffect } from 'react'
import { fetchProducts } from '../api/fetchProduct.js';

const UpdateExistingProduct = () => {

    const [allProducts, setAllProducts] = useState([]);


    useEffect(()=>{
            const getProducts = async () => {
                try {
                    const response = await fetchProducts();
                    setAllProducts(response.data);
                    console.log("Products fetched in ProductSection:", response);
                  
                } catch (error) {
                    console.error("Error in fetching products inside ProductSection:", error);
                }
            }
            getProducts();
        },[]);


  return (
    <div>
            <h1 className='text-3xl font-bold text-center mt-10'>Update Existing Product</h1>

            <div className=''>
                 {allProducts.map((product) => (
                <div key={product.id} className="border grid grid-cols-5 p-4 m-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>
                    <p className="mb-2">Category: {product.category}</p>
                    <p className="mb-2">Price: ${product.price}</p>
                    <p className="mb-4">Description: {product.description}</p>
                    <div className='flex gap-4'> 
                    <button className="bg-blue-500 text-white px-4 h-10 ml-8 rounded hover:bg-blue-600">Edit Product</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-red-600 cursor-pointer hover:text-red-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                    </div>
                    
                </div>
            ))}
            </div>
           
    </div>
  )
}

export default UpdateExistingProduct
