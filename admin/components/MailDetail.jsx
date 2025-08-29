// import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';
import { useLocation } from 'react-router-dom';
// import AdminSideBar from './AdminSideBar';

const MailDetail = () => {
  // const [messages, setMessages] = useState([]);
  // const [selectedMessage, setSelectedMessage] = useState(null);
  const { data } = useLocation().state

  return (
    <>
      <div className={`w-full h-[580px]`} style={{ backgroundImage: `url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
        <AdminNavBar />
        <div className='lg:ml-[255px] lg:mr-1 mx-2 lg:mt-14 mt-4 lg:p-4 p-2'>
            <div style={{ cursor: 'pointer' }}className='p-10 w-full h-auto text-blue-950 font-medium bg-white p-6'>
              <p><span className='text-xl font-semibold text-blue-400'>Name: </span>{data.fullname}</p>
              <p><span className='text-xl font-semibold text-blue-400'>Email: </span>{data.email}</p>
              <p><span className='text-xl font-semibold text-blue-400'>Message: </span>{data.title}</p>
              <p><span className='text-xl font-semibold text-blue-400'>Request: </span>{data.message}</p>
            </div>     
        </div>
      </div>
    </>
  );
};

export default MailDetail;
