import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const token = localStorage.getItem('token');


const getAllOrders = async () => {
    try{
        const response = await axios.get(`${backendURL}/api/order/all-orders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
    catch(error){
        console.error("Error fetching all orders:", error);
        throw error;    
    }
}

export {
    getAllOrders
}