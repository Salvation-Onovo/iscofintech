import { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";

const AllMails = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const navigate = useNavigate();

  const truncateWords = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  const handleAllMails = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/contact`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const sortedMessages = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setMessages(sortedMessages);
  };

  useEffect(() => {
    handleAllMails();
  }, [selectedMessage]);

  const handleClick = (id) => {
    const selected = messages.find((message) => message._id === id);
    setSelectedMessage(selected);
  };

  return (
    <>
      <div
        className={`w-full h-[650px]`}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <AdminNavBar/>
        <div className="mt-20 bg-white pt-8 pb-12 px-6 ml-[260px] mr-2">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="p-2">Active Members</th>
                <th className="p-2">Email</th>
                <th className="p-2">Title of Message</th>
                <th className="p-2">Message</th>
              </tr>
            </thead>

            <tbody>
              {messages.length > 0
                ? messages.map((contact, index) => (
                    <tr
                      key={index}
                      onClick={() => handleClick(contact._id)}
                      style={{ cursor: "pointer" }}
                      className="border-b"
                    >
                      <td onClick={() => navigate('/mailDetail', { state: { data: contact} })} className="p-4">{contact.fullname}</td>
                      <td className="p-4">{contact.email}</td>
                      <td className="p-4">{contact.title}</td>
                      <td className="p-4">
                        {truncateWords(contact.message, 25)}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllMails;
