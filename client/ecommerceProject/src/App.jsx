import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import OrderHistory from './pages/OrderHistory.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import UserProfile from './pages/UserProfile.jsx'
import ProductListing from './pages/ProductListing.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AdminDashboard from './pages/admin/adminDashboard.jsx'
import UserListing from './pages/admin/UserListing.jsx'
import CreateProduct from './pages/admin/CreateProduct.jsx'
import OrderListing from './pages/admin/OrderListing.jsx'



function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/order-history' element={<OrderHistory />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} >
            <Route path='' element={<UserListing />} />
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='order' element={<OrderListing />} />
        </Route>
     </Routes>
    </>
  )
}

export default App
