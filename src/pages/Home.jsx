import { ReactTyped } from "react-typed";
import { TbMail } from "react-icons/tb";
import { sendMessage } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { ...inputs };
      await sendMessage(data);
      setInputs();

      toast.success("Message sent");
    } catch (error) {
      toast.error("Failed");
    }
    e.target.reset();
  };

  return (
    <>
      <div className="w-full h-screen pt-6">
        <NavBar />

        <div>
          {/* Hero Section */}
          <div className="lg:h-screen xl:h-[50%] m-4 flex justify-center items-center">
            <div>
              <div
                className={`w-full h-[300px] lg:h-[540px] bg-cover bg-center flex flex-col justify-center items-center `}
                style={{
                  backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148809724.jpg?t=st=1713023232~exp=1713026832~hmac=fb6d6c0143e30ae2288534b0c4dec66065842a42ec7f3881b04496b4de4de5e3&w=740')`,
                }}
              >
                <p className="text-xl text-blue-400">Worlds Number One in</p>
                <ReactTyped
                  className="text-3xl lg:text-6xl font-bold text-blue-950"
                  strings={["Web Development", "ISCOFINTECH"]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                ></ReactTyped>
                <p className="text-sm lg:text-xl">
                  To provide an informative, user-friendly and effective
                </p>
                <p className="text-sm lg:text-xl">
                  Apps or Websites to provide companies with the message
                </p>
                <p className="text-sm lg:text-xl">
                  or goal they are hoping to accomplish
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="">
            <div className="flex flex-col lg:flex-row m-2 lg:m-4 p-2 lg:p-10 shadow-xl">
              <div className="p-1 lg:p-2">
                <img
                  className="h-auto lg:w-[550px]"
                  src={
                    "https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt="image"
                />
                <div className="hidden lg:flex mt-24 ml-72 bg-blue-400 hover:bg-blue-900 duration-700 w-fit rounded-md">
                  <Link
                    to={"/About"}
                    className="flex items-center px-6 py-4 text-white font-medium "
                  >
                    More About
                  </Link>
                </div>
              </div>

              <div className="p-2 lg:p-10 lg:text-lg text-blue-950">
                <span className="font-medium flex items-center pb-1 lg:pb-8 text-blue-400">
                  <BsDashLg />
                  About Us
                  <BsDashLg />
                </span>
                <h1 className="text-xl lg:text-4xl pb-2 lg:pb-8 font-semibold">
                  Over 10+ Years Experience <br />
                  In Software Development
                </h1>
                <p>
                  Manage your entire logistics process with a simple-to-use
                  <br />
                  tech platform that gives you real-time visibility and creates
                  <br />
                  an effective value chain for all stakeholders in the supply
                  chain.
                </p>
                <br />
                <p className="hidden lg:flex">
                  With our seamless mobile and web applications, <br /> Kobo360
                  innovates products and solutions that are <br />
                  robust and caters for all stakeholders in the supply chain
                  <br /> network using big data and technology to reduce supply{" "}
                  <br /> chain risks, logistics bottlenecks, manufacturing
                  waste, <br />
                  low turn-around and loss of goods.
                </p>

                <div className="lg:hidden mt-4 bg-blue-400 hover:bg-blue-900 duration-700 w-fit rounded-md">
                  <Link
                    to={"/About"}
                    className="flex items-center p-2 text-white text-sm font-medium "
                  >
                    More About
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full h-[600px] lg:h-[540px] bg-cover bg-center flex flex-col justify-center items-center lg:p-12 shadow-lg`}
            // style={{
            //   backgroundImage: `url('https://img.freepik.com/premium-photo/abstract-background-white-matt-square-bars-white-background-3d-illustration_357568-783.jpg?w=996')`,
            // }}
          >
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:mx-28">
              <div className="w-[350px] lg:w-[400px] lg:h-[300px] border-x-2 rounded-3xl bg-blue-400">
                <p className="flex items-center mt-2 lg:mt-6 ml-6 lg:ml-8 text-2xl lg:text-4xl text-white font-semibold">
                  VISION
                </p>
                <p className="p-3 lg:p-4 text-sm lg:text-base text-blue-950 font-medium">
                  To provide an informative, user-friendly and effective Apps or
                  Websites to provide companies with the message or goal they
                  are hoping to accomplish.
                </p>
              </div>

              <div className="w-[350px] lg:w-[400px] lg:h-[300px] border-x-2 rounded-3xl bg-blue-400">
                <p className="flex items-center mt-4 lg:mt-6 ml-6 lg:ml-8 text-2xl lg:text-4xl text-white font-semibold">
                  MISSION
                </p>
                <p className="p-3 lg:p-4 text-sm lg:text-base text-blue-950 font-medium">
                  To empower businesses of all sizes with cutting-edge, secure,
                  optimal user experience, web design and Apps that drive growth
                  and success. We are committed to delivering exceptional
                  services that exceed our clients&apos; expectations and
                  contribute to their long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* More information about what we do best */}
          <div className="p-20">
            <div className="lg:pt-24">
              <h1 className="flex justify-center text-xl lg:text-2xl font-bold text-gray-700">
                Best Service We Offer
              </h1>
              <p className="flex justify-center text-xs lg:text-lg mt-2 lg:mt-6">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry, has been
              </p>
              <p className="flex justify-center text-xs lg:text-lg">
                the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 lg:gap-12 lg:flex-row mt-12">
              <div className="bg-gray-200 rounded-xl p-8">
                <div className="">
                  <img
                    className="w-full h-fit lg:h-52 rounded-2xl"
                    src={
                      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                  />

                  <div className="my-2 lg:my-8">
                    <Link to={""}>
                      <h1 className="lg:text-2xl font-semibold text-blue-400">
                        Website Development
                      </h1>
                    </Link>
                    <p className="mt-1 lg:mt-4 text-sm lg:text-lg text-blue-950">
                      Electronic typesetting rema essentially <br /> unchanged
                      was popularised.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl p-8">
                <div className="">
                  <img
                    className="w-full h-fit lg:h-52 rounded-2xl"
                    src={
                      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                  />

                  <div className="my-2 lg:my-8">
                    <Link to={""}>
                      <h1 className="lg:text-2xl font-semibold text-blue-400">
                        Website Development
                      </h1>
                    </Link>
                    <p className="mt-1 lg:mt-4 text-sm lg:text-lg text-blue-950">
                      Electronic typesetting rema essentially <br /> unchanged
                      was popularised.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl p-8">
                <div className="">
                  <img
                    className="w-full h-fit lg:h-52 rounded-2xl"
                    src={
                      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                  />

                  <div className="my-2 lg:my-8">
                    <Link to={""}>
                      <h1 className="lg:text-2xl font-semibold text-blue-400">
                        Website Development
                      </h1>
                    </Link>
                    <p className="mt-1 lg:mt-4 text-sm lg:text-lg text-blue-950">
                      Electronic typesetting rema essentially <br /> unchanged
                      was popularised.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Us */}
          <form className="bg-gray-100 py-20" onSubmit={handleSubmit}>
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
          <ToastContainer />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
