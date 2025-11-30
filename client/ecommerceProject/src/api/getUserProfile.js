import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
console.log("Backend URL in fetchProduct.js:", backendURL);
const token = localStorage.getItem('token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjU3YmE5ZDI4ZDkwZGVmMTczMTE0MiIsImlhdCI6MTc2NDMyNzA2OSwiZXhwIjoxNzY0MzMwNjY5fQ.7r1Ce1MWcUjDyJfnAWn8Bk70uq9PpsFC5EuQBQ8QYgo";


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