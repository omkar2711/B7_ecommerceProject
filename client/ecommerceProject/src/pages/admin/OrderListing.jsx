import React , { useState , useEffect } from 'react'
import { getAllOrders } from '../../api/ordersApi.js';

const OrderListing = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
        console.log("Orders fetched:", response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className=' mx-auto p-4'>
      <h1>Order Listing Page</h1>
      <div className=' mx-auto p-4'>
        {orders?.map((order)=><div className='grid grid-cols-3 gap-4 mx-auto  p-4 my-4' key={order._id}> 
        <h1>{order.userId}</h1>
        <h1>{order.orderStatus}</h1>

        <h1>{order.totalAmount}</h1>
      </div>)}
      </div>
      
    </div>
  )
}

export default OrderListing
