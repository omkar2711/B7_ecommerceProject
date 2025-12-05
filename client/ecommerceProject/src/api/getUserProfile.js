import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const token = localStorage.getItem('token');
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

const getAllUsers = async () => {
    try{
        const response = await axios.get(`${backendURL}/api/user/get-all-users`, {
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
    getUserProfile,
    getAllUsers
}