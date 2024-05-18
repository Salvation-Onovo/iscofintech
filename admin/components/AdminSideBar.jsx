import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div>
      <aside className="hidden lg:block fixed h-screen w-full max-w-[16rem] bg-white mt-1 shadow-2xl">
        <div>
          <p className='p-4'>MAIN</p>
          <ul className='text-blue-900'>
            <li className='flex items-center gap-2 py-2 px-4'><MdDashboard /><Link to={'/Dashboard'}>Dashboard</Link></li>
            <li className='flex items-center gap-2 py-2 px-4 mt-2'><MdDashboard /><Link to={'/AllMails'}>Email</Link></li>
          </ul>
        </div>

        <div className="flex hover:bg-red-400 text-red-700  hover:text-white font-semibold p-1 rounded-lg mt-36 cursor-pointer">
          <p className="p-2"> Log Out</p>
        </div>
      </aside>
    </div>
  )
}

export default AdminSideBar