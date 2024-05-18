import React from 'react'
import isco from '../../src/assets/images/isco2.png'
import { FaMessage, FaUser } from 'react-icons/fa6'
import { IoIosNotifications } from 'react-icons/io'

function AdminNavBar() {
  return (
    <div>
      <nav className='bg-white p-3 shadow-lg'>
        <div className='mx-10 flex justify-between items-center'>
          <div>
            <img
              className='w-24 h-10'
              src={isco}
              alt='Logo' />
          </div>
          <div className='flex gap-5'>
            <IoIosNotifications />
            <FaMessage />
            <FaUser />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavBar