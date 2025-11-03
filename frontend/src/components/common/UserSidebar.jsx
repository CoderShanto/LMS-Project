import React, { useContext, useState } from 'react'

import { FaChartBar, FaDesktop, FaUserLock } from 'react-icons/fa'
import { BsMortarboardFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import { FaUserCircle } from "react-icons/fa";

const UserSidebar = () => {
    const { logout, user } = useContext(AuthContext);
    
    // Check if user is admin
    const isAdmin = user?.role === 'admin';

  return (
    <div className='card border-0 shadow-lg'>
        <div className='card-body  p-4'>
            <ul>
                <li className='d-flex align-items-center'>
                    <Link to="/account/dashboard"><FaChartBar  size={16} className='me-2 ' /> Dashboard</Link>
                </li>

                 <li className='d-flex align-items-center'>
                 
                    <Link to="/account/profile"><FaUserCircle  size={16} className='me-2 ' /> Profile</Link>
                </li>

                {/* Add admin link only if user is admin */}
                 
                  <li className='d-flex align-items-center'>
                    <Link to="/admin"><FaUserCircle  size={16} className='me-2 ' /> Admin</Link>
                  </li>
                
               
                <li  className='d-flex align-items-center'>
                    <Link to="/account/my-learning"><BsMortarboardFill  size={16} className='me-2' /> My Learning</Link>
                </li>
                <li  className='d-flex align-items-center'>
                    <Link to="/account/my-courses"><FaDesktop  size={16} className='me-2'/> My Courses</Link>
                </li>
                <li  className='d-flex align-items-center '>
                    <Link to="/account/change-password"><FaUserLock  size={16}  className='me-2'/> Change Password</Link>
                </li>
                <li>
                    <Link onClick={logout} className='text-danger'><MdLogout  size={16} className='me-2'/> Logout</Link>
                </li>
            </ul>
        </div>                             
    </div>
  )
}

export default UserSidebar