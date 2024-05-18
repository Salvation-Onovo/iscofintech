import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';

const MailDetail = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/contact`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages([]);
    }
  };

  useEffect(() => {
    handleDetails();
  }, []);

  const handleClick = (id) => {
    const selected = messages.find(message => message._id === id);
    setSelectedMessage(selected);
  };

  return (
    <>
      <div className={`w-full h-[650px]`} style={{ backgroundImage: `url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
        <AdminNavBar />
        <div className='flex justify-center mt-6'>
          {messages.map((contact, index) => (
            <div key={index} onClick={() => handleClick(contact._id)} style={{ cursor: 'pointer' }}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.subject}</p>
              <p>{contact.message}</p>
            </div>
          ))}
        </div>
        {selectedMessage && (
          <div>
            <h2>Selected Message</h2>
            <p>Name: {selectedMessage.name}</p>
            <p>Email: {selectedMessage.email}</p>
            <p>Subject: {selectedMessage.subject}</p>
            <p>Message: {selectedMessage.message}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MailDetail;
