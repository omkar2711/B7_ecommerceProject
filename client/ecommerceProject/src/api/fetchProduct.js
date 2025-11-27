//api to fetch the product details from the server
import axios from 'axios';


const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
console.log("Backend URL in fetchProduct.js:", backendURL);
const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU3YmE5ZDI4ZDkwZGVmMTczMTE0MiIsImlhdCI6MTc2NDI0MTMwNiwiZXhwIjoxNzY0MjQ0OTA2fQ.PfclMdfi8vsZNO1nS0F17BEWCcEdgRnKX965RMEg7fo';


const fetchProducts = async () => {
    try {
        const response = await axios.get(`${backendURL}/api/product/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
    catch (error){
        console.error("Error fetching products:", error);
        throw error;
    }
}


const fetchProductById = async (productId) => {
    try{
        const response = await axios.get(`${backendURL}/api/product/detail?id=${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
    catch(error){
        console.error("Error fetching product by ID:", error);
        throw error;
    }
}


export {
    fetchProducts,
    fetchProductById
}