import React from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdown from './NavbarDropdown.jsx'

const Navbar = () => {

    const token = localStorage.getItem("token");
    return (
        <div>
            <nav className='navbar flex justify-center  p-4 relative border-transparent bg-[#C9B59C] shadow-xl rounded-3xl mx-40 mt-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px '>
                <div className='flex justify-center w-full '>
                    <div className='flex justify-center gap-8 my-auto'>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                    </div>

                
                    <div className='flex justify-center gap-4 absolute right-8 top-1/2 transform -translate-y-1/2'>
                        {!token ? (
                            <>
                                <div className='dropdown'>
                                    <NavbarDropdown />
                                </div>
                            </>

                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                            </>
                        )}
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
