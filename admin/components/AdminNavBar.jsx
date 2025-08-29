import isco from "../../src/assets/images/isco2.png";
import { FaMessage, FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate,} from "react-router-dom";

function AdminNavBar() {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.clear()
    navigate('/AdminLogin')
  }

  return (
    <div>
      <nav className="fixed w-[100%] top-0 bg-white shadow-lg">
        <div className="mx-10 p-2 flex justify-between items-center">
          <div>
            <img className="w-24 h-10" src={isco} alt="Logo" />
          </div>
          <div className="flex gap-5">
            <IoIosNotifications />
            <FaMessage />
            <FaUser />
          </div>
        </div>
        <aside className="hidden lg:block fixed h-screen w-full max-w-[16rem] bg-white mt-0 shadow-2xl">
          <div>
            <p className="p-4">MAIN</p>
            <ul className="text-blue-900">
              <li className="flex items-center gap-2 py-2 px-4">
                <MdDashboard />
                <Link to={"/AdminDashboard"}>Dashboard</Link>
              </li>
              <li className="flex items-center gap-2 py-2 px-4 mt-2">
                <MdDashboard />
                <Link to={"/AllMails"}>Email</Link>
              </li>
            </ul>
          </div>

          <div
            onClick={handleLogout}
            className="flex hover:bg-red-400 text-red-700  hover:text-white font-semibold p-1 rounded-lg mt-36 cursor-pointer"
          >
            <p className="p-2"> Log Out</p>
          </div>
        </aside>
      </nav>

    </div>
  );
}

export default AdminNavBar;
