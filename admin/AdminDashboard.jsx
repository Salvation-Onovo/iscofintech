import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./components/AdminNavBar";
// import AdminSideBar from "./components/AdminSideBar";
import { getMessage } from "../src/api";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleAllMessages = async () => {
    const data = await getMessage();
    const sortedMessages = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setMessages(sortedMessages);
  };

  useEffect(() => {
    handleAllMessages();
    localStorage.getItem("isco") ? null : navigate("/AdminLogin");
  });

  const truncateWords = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  return (
    <>
      <div
        className={`w-full h-[580px]`}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <AdminNavBar />

        <div className="lg:ml-[290px] lg:mr-12 mx-2 lg:mt-14 mt-4 lg:p-4 p-2">
          <div className="">
            <p className="text-gray-700 text-xl font-medium">
              Hello, <span className="text-sm font-normal">Welcome here</span>
            </p>
          </div>

          <div className="mt-4 bg-white pt-8 pb-12 px-6">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-2">Active Members</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Title of Messeage</th>
                  <th className="p-2">Message</th>
                </tr>
              </thead>

              <tbody>
                {messages.length > 0
                  ? messages.slice(0, 6).map((contact, index) => (
                      <tr key={index} className="border-b">
                        <td
                          onClick={() =>
                            navigate("/mailDetail", {
                              state: { data: contact },
                            })
                          }
                          className="p-4 cursor-pointer"
                        >
                          {contact.fullname}
                        </td>
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
      </div>
    </>
  );
};

export default AdminDashboard;
