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
        <div>

            <Navbar />

            <div className=' h-full  mx-40 border mt-20 p-10 rounded-3xl shadow-lg mb-10'>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div className='border w-full flex justify-between mb-4 '>
                                <div className='  w-full'>
                                    <img src={item.productId.imageUrl} alt={item.productId.productName} className='w-20 h-20 object-cover rounded-lg ' />
                                </div>

                                <div className=' w-full'>
                                    <div>
                                        <h1>{item.productId.productName}</h1>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ₹{item.productId.price}</p>
                                    </div>

                                    <button onClick={() => handleRemoveFromCart(item.productId._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </button>

                                </div>

                            </div>
                        ))}
                    </div>
                )}

            </div>


            <div className='flex justify-center w-full'>
                <button className='border p-2 rounded-xl'>Place Order</button>
            </div>

        </div>
    )
}

export default ShoppingCart
