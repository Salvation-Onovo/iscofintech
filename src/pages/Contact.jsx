import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { sendMessage } from "../api";
import { TbMail } from "react-icons/tb";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { ...inputs };
      const res = await sendMessage(data);
      setInputs();
      
      toast.success("Message sent");
    } catch (error) {
      toast.error("Failed");
    }
    e.target.reset();
  };

  return (
    <>
      <div className="w-full h-screen">
        <NavBar/>

        <form className="bg-gray-100 py-20 mt-20" onSubmit={handleSubmit}>
          <div>
            <h1 className="flex justify-center text-4xl font-bold text-gray-700">
              Contact us
            </h1>
            <p className="flex justify-center text-gray-500">
              We will be glad to answer all your questions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10 mx-14">
            <div className="shadow-xl">
              <p className="text-sm px-3 pb-1">YOUR NAME</p>
              <input
                type="text"
                onChange={(e) => (inputs.name = e.target.value)}
                placeholder="Enter your name"
                className="p-3 w-96 outline-none"
              />
            </div>
            <div className="shadow-xl">
              <p className="text-sm px-3 pb-1">EMAIL ADDRESS</p>
              <input
                type="text"
                onChange={(e) => (inputs.email = e.target.value)}
                placeholder="example@example.com"
                className="p-3 w-96 outline-none"
              />
            </div>
            <div className="shadow-xl">
              <p className="text-sm px-3 pb-1">SUBJECT</p>
              <input
                type="text"
                onChange={(e) => (inputs.subject = e.target.value)}
                placeholder="Title of your message"
                className="p-3 w-96 outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <div>
              <p>Message</p>
              <textarea
                onChange={(e) => (inputs.message = e.target.value)}
                placeholder="Type your message..."
                className="w-96 lg:w-[1200px] h-36 p-4 outline-none shadow-xl"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-950 rounded-full py-2 px-4 text-white text-sm "
            >
              <TbMail className="w-6 h-6 p-1 bg-white rounded-full text-blue-700 animate-pulse" />
              SEND MESSAGE
            </button>
          </div>
        </form>

        <Footer/>
      </div>
    </>
  );
};

export default Contact;
