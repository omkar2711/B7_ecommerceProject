import React, { useState, useEffect } from 'react'
import { getCartItems, removeFromCart } from '../api/cartApi';
import Navbar from '../components/Navbar';

const ShoppingCart = () => {

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItems();
                setCartItems(items.data.products);
                console.log("Cart items fetched:", items);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        }

        fetchCartItems();
    }, [])

    const handleRemoveFromCart = async (productId) => {
        try {
            console.log("Removing product with ID:", productId);
            const response = await removeFromCart(productId);
            console.log("Product removed from cart:", response);
            // Update cart items after removal
            setCartItems(cartItems.filter(item => item.productId._id !== productId));
        } catch (error) {
            console.error("Error removing product from cart:", error);
        }
    }

    return (
        <div className='min-h-screen pb-10'>

            <Navbar />

            <div className='h-full mx-4 md:mx-20 lg:mx-40 mt-20 mb-10'>
                <div className='bg-white p-10 rounded-3xl shadow-2xl border border-gray-100'>
                    <h1 className='text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8'>Shopping Cart</h1>
                    
                    {cartItems.length === 0 ? (
                        <div className='text-center py-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 mx-auto text-gray-300 mb-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p className='text-xl text-gray-500 mb-4'>Your cart is empty</p>
                            <p className='text-gray-400'>Start shopping to add items to your cart</p>
                        </div>
                    ) : (
                        <div className='space-y-4'>
                            {cartItems.map((item) => (
                                <div key={item.productId._id} className='bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300'>
                                    <div className='flex items-center gap-6 flex-1'>
                                        <div className='w-24 h-24 bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0'>
                                            <img src={item.productId.imageUrl} alt={item.productId.productName} className='w-full h-full object-contain p-2' />
                                        </div>
                                        
                                        <div className='flex-1'>
                                            <h2 className='text-xl font-bold text-gray-800 mb-2'>{item.productId.productName}</h2>
                                            <div className='flex items-center gap-4'>
                                                <span className='text-gray-600'>Quantity: <span className='font-semibold text-indigo-600'>{item.quantity}</span></span>
                                                <span className='text-gray-600'>•</span>
                                                <span className='text-lg font-bold text-indigo-600'>₹{item.productId.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleRemoveFromCart(item.productId._id)}
                                        className='ml-4 p-3 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-300 hover:scale-110'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className='flex justify-end mt-8 gap-4'>
                        <div className='bg-white p-6 rounded-2xl shadow-lg'>
                            <p className='text-gray-600 mb-2'>Total Items: <span className='font-bold text-indigo-600'>{cartItems.length}</span></p>
                            <p className='text-2xl font-bold text-gray-800 mb-4'>
                                Total: <span className='text-indigo-600'>₹{cartItems.reduce((sum, item) => sum + (item.productId.price * item.quantity), 0)}</span>
                            </p>
                            <button className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105'>
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default ShoppingCart
