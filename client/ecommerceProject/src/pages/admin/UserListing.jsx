import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../../api/getUserProfile';

const UserListing = () => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllUsers();
        console.log(response);
        setUsers(response.data);
      }
      catch {
        throw new Error("Cannot fetch Users");
      }
    }

    fetchAllUsers();
  }, []);

  return (
    <div className=' mt-10 text-center '>

      <h1 className='m-10 text-xl font-bold'>Registered Users</h1>
      {users?.length === 0 ? (
        <div>
          <p>No user found</p>
        </div>
      ) :

        <div>
          {users?.map((user) =>
            <div className='grid grid-cols-3'>
              <h4>{user.userName}</h4>
              <h4>{user.email}</h4>
              <h4>{user.role}</h4>
            </div>
          )}
        </div>

      }
    </div>
  )
}

export default UserListing
