import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashbaord Page</h1>
      <Outlet />
    </div>
  )
}

export default AdminDashboard
