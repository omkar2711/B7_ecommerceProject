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

            <div>
                <div className='grid grid-cols-2 border mt-20 mx-40 mb-10 bg-white rounded-3xl shadow-lg'>
                    {/* Left Section */}
                    <div>
                        {productDetails && (
                            <div className='flex flex-wrap justify-center items-center p-10 '>
                                <img src={productDetails.imageUrl} alt={productDetails.name} className='w-96 h-96 object-cover rounded-2xl shadow-md' />
                            </div>
                        )}
                    </div>


                    {/* Right Section */}

                    <div>
                        {productDetails && (
                            <div className=' p-10 rounded-3xl flex flex-col justify-between h-full'>
                                <div className=''>
                                    <h1 className='text-4xl font-bold mb-4'>{productDetails.name}</h1>
                                    <p className='text-xl mb-4'>{productDetails.description}</p>
                                    <p className='text-2xl font-semibold mb-4'>₹{productDetails.price}</p>
                                    <p className='text-lg mb-4'>Category: {productDetails.category}</p>
                                </div>

                                <div className='flex gap-4'>
                                    <input type="number" min="1" defaultValue="1" className='border p-2 rounded-lg w-24' onChange={(e) => setQuantity(Number(e.target.value))} />
                                </div>


                                <div className='flex items-end mt-6 '>
                                    <button onClick={() => handleAddToCart()} className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 '>Add to Cart</button>
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
