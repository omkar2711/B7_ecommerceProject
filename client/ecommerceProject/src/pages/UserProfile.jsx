import React, {useEffect , useState } from 'react'
import { getUserProfile } from '../api/getUserProfile.js';
import Navbar from '../components/Navbar';

const UserProfile = () => {

    const [userProfile, setUserProfile] = useState(null);

    useEffect(()=>{
        const fetchUserProfile = async () => {
            try {
                const data = await getUserProfile();
                setUserProfile(data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };
        fetchUserProfile();
    } , []);


  return (
    <div>
        <Navbar />
        <div>
            {
                userProfile && (
                    <div className='mt-20 mx-40 p-10 border bg-white rounded-3xl shadow-lg'>
                        <h1 className='text-3xl font-bold mb-6'>User Profile</h1>
                        <p className='text-xl mb-4'><span className='font-semibold'>Name:</span> {userProfile.data.userName}</p>
                        <p className='text-xl mb-4'><span className='font-semibold'>Email:</span> {userProfile.data.email}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default UserProfile
