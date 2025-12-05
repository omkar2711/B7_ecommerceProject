import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ProfileAvatar from '../assets/profileAvatar.png'
import { Link , useNavigate } from 'react-router-dom'
import React , { useState , useEffect } from 'react'
import { getUserProfile } from '../api/getUserProfile'

export default function NavbarDropdown() {


    const navigate = useNavigate();

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

    

    console.log(userProfile);

    const handleLogout = () => {
        //delete the token from local storage
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold ">
        <img src={ProfileAvatar} alt="Profile" className="h-6 w-6 rounded-full mr-2" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
       
        <div className="py-1">

          { userProfile?.data.role === "admin" && (
              <MenuItem>
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
              >
                Admin Dashboard
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Account
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/order-history"
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Order History
            </Link>
          </MenuItem>
          
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                onClick={handleLogout}
              >
                log out
              </button>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
