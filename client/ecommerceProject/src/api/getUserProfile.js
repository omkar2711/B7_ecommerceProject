import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
console.log("Backend URL in fetchProduct.js:", backendURL);
const token = localStorage.getItem('token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU3YmE5ZDI4ZDkwZGVmMTczMTE0MiIsImlhdCI6MTc2NDc1Nzc1MywiZXhwIjoxNzY0NzYxMzUzfQ.ZWQVBIqWscYaWkr0oJabPZK1zXwPG4r9HtjPTro4FKU";


const getUserProfile = async () => {
    try{
        const response = await axios.get(`${backendURL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
    catch(error){
        console.error("Error fetching user profile:", error);
        throw error;    
    }
}

export{
    getUserProfile
}