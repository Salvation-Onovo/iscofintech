import { useNavigate } from "react-router-dom";
import isco from "../src/assets/images/isco2.png";
import { useState } from "react";
import { adminsignin } from "../src/api";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await adminsignin(inputs);

      if (response && response.email) {
        localStorage.setItem("isco", response.email);
        navigate("/AdminDashboard");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (err) {
      toast.error("Login failed");
      console.error(err);
    }
  };

  return (
    <>
      <div
        className={`w-full h-[630px]`}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <form onSubmit={handleLogin} className="py-20">
          <div className="flex justify-center items-center">
            <img className="w-20 h-10 ml-8" src={isco} alt="Logo" />
          </div>
          <h1 className="flex justify-center text-4xl font-bold text-gray-700">
            Admin Login
          </h1>

          <div className="mx-20">
            <div className="shadow-xl">
              <p className="text-sm px-3 pb-1">ADMIN EMAIL</p>
              <input
                value={inputs.email || ""}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full outline-none"
              />
            </div>

            <div className="shadow-xl mt-6">
              <p className="text-sm px-3 pb-1">ADMIN PASSWORD</p>
              <input
                value={inputs.password || ""}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, password: e.target.value }))
                }
                required
                type="password"
                placeholder="Enter your password"
                className="p-3 w-full outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onSubmit={handleLogin}
              type="submit"
              className="flex items-center gap-2 bg-blue-950 rounded-full py-2 px-4 text-white text-sm "
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
