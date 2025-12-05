import React from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdown from './NavbarDropdown.jsx'

const AdminNavbar = () => {

    const token = localStorage.getItem("token");
    return (
        <div>
            <nav className='navbar flex justify-center p-5 relative border-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl rounded-2xl mx-4 md:mx-20 lg:mx-40 mt-6 backdrop-blur-sm'>
                <div className='flex justify-center w-full'>
                    <div className='flex justify-center gap-8 my-auto'>
                        <Link to="/admin/dashboard/create-product" className='text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-110 relative group'>
                            Products
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link to="/admin/dashboard/order" className='text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-110 relative group'>
                            Orders
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link to="/admin/dashboard/" className='text-white font-semibold text-lg transition-all duration-300 hover:text-yellow-300 hover:scale-110 relative group flex items-center gap-2'>
                            Users
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                    </div>

                
                    <div className='flex justify-center gap-4 absolute right-8 top-1/2 transform -translate-y-1/2'>
                        {token ? (
                            <>
                                <div className='dropdown'>
                                    <NavbarDropdown />
                                </div>
                            </>

                        ) : (
                            <>
                                <Link to="/login" className='bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
                                    Login
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar
