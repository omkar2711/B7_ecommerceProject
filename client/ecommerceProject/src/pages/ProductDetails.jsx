import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProductById } from '../api/fetchProduct';
import Navbar from '../components/Navbar';
import SimilarProducts from '../components/SimilarProducts';
import { addToCart } from '../api/cartApi.js';


const ProductDetails = () => {

    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await fetchProductById(id);
                setProductDetails(response.data);
                console.log("Product details fetched:", response);
            }
            catch (error) {
                console.error("Error fetching product details:", error);
            }
        }

        getProductById();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            const response = await addToCart(productDetails._id, quantity);
            console.log("Product added to cart:", response);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }

    return (
        <>
            <Navbar />

            <div className='min-h-screen pb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mx-4 md:mx-20 lg:mx-40 mb-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden'>
                    {/* Left Section */}
                    <div className='bg-gradient-to-br from-gray-50 to-white'>
                        {productDetails && (
                            <div className='flex justify-center items-center p-10 h-full'>
                                <div className='relative'>
                                    <div className='absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20'></div>
                                    <img src={productDetails.imageUrl} alt={productDetails.name} className='relative w-96 h-96 object-contain rounded-2xl' />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Section */}
                    <div className='p-10'>
                        {productDetails && (
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className='inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4'>
                                        {productDetails.category}
                                    </div>
                                    <h1 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>{productDetails.name}</h1>
                                    <p className='text-xl text-gray-600 mb-6 leading-relaxed'>{productDetails.description}</p>
                                    <div className='bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-6'>
                                        <p className='text-sm text-gray-600 mb-2'>Price</p>
                                        <p className='text-4xl font-bold text-indigo-600'>₹{productDetails.price}</p>
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <div className='flex items-center gap-4'>
                                        <label className='text-gray-700 font-semibold'>Quantity:</label>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            defaultValue="1" 
                                            className='border-2 border-gray-300 focus:border-indigo-600 p-3 rounded-xl w-24 focus:outline-none transition-colors' 
                                            onChange={(e) => setQuantity(Number(e.target.value))} 
                                        />
                                    </div>

                                    <div className='flex gap-4'>
                                        <button 
                                            onClick={() => handleAddToCart()} 
                                            className='flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                        <button className='border-2 border-indigo-600 text-indigo-600 px-6 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <SimilarProducts productDetails={productDetails ? productDetails : ''} currentProductId={id} />
            </div>
        </>

    )
}

export default ProductDetails
