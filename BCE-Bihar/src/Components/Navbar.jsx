import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./api/api.js";
import {
  House,
  User,
  Users,
  University,
  Book,
} from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Check logged-in user
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await api.get("/user/me");
        setUser(data.user);
      } catch (error) {
        setUser(null);
      }
    };

    getCurrentUser();
  }, [location.pathname]);



  // const userAccount = async () => {
  //   try {
  //     const user = await this.account.get();
  //     return user;
  //   }
  //   catch { err } {
  //     console.error("kuchu puchu tum kaha ho", err);
  //   }
  // }

  // if (!user) {
  //   console.log("User is not logged in");
  // }
  // Logout
  // const handleLogout = async () => {
  //   try {
  //     await api.post("/user/logout");

  //     setUser(null);       // UI immediately update karega
  //     setOpen(false);

  //     navigate("/user/login");
  //     setError(""); // Clear any previous error messages


  //     console.log("Logged out successfully");
  //   } catch (error) {
  //     console.log("Logout failed:", error);
  //   }
  // };

  const Navlist = {
    path: [
      { name: "Home", path: "/" },
      { name: "College", path: "/college" },
      // { name: "Contact", path: "/contact" },
      // { name: "Counselling", path: "/counselling" },
      {name: "Roadmap", path: "/roadmap"},
      { name: "Community", path: "/community" },

    ],
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-auto rounded-lg flex items-center justify-center text-white font-bold">
            <img
              className="h-auto rounded-2xl"
              src="/logo.jpg"
              alt="Logo"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="font-bold text-gray-900">
              CollegeNest
            </h1>

            <p className="text-xs text-gray-500">
              Engineering decision made easy
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          {Navlist.path.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) =>
                  `block px-3 py-2 transition ${isActive
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                  }`
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* NOT LOGGED IN */}
          {!user && (
            <>
              <NavLink
                to="/user/login"
                className="hidden lg:block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </NavLink>

              <NavLink
                to="user/register"
                className="hidden lg:block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
              >
                Sign Up
              </NavLink>
            </>
          )}

          {/* LOGGED IN */}
          {user && (
            <button
            
              // onClick={handleLogout}
              to="/user/logout"
              className="hidden lg:block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>


          )}

          {/* Profile */}
          {user && (
            <NavLink

              to="/profile/id:"
            >
              <img
                // onClick={(e) => navigate("/")}  
                className="h-10 hover:opacity-75 hidden lg:block rounded-full "
                src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png"
                alt="Profile"
              />
            </NavLink>)
          }

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <img
                className="h-4"
                src={
                  open
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-crgMstRhpFClNlu0smuBcSZysGDrkkHcGju2wQZ4Q&s"
                    : "https://www.svgrepo.com/show/511065/menu-alt-02.svg"
                }
                alt="Menu"
              />
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-3 left-0 right-0 z-50 px-4">
        <div 

        className="mx-auto max-w-2xl h-16 backdrop-blur-md bg-blur-2xl rounded-full px-3 flex items-center justify-around shadow-2xl border border-blue-200">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"
              }`
            }
          >
            <House size={25} strokeWidth={2.2} />
          </NavLink>

          {/* Colleges */}
          <NavLink
            to="/college"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"}`
            }
          >
            <University size={24} strokeWidth={2.2} />
          </NavLink>

          {/* Community */}
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"}`
            }
          >
            <Users size={24} strokeWidth={2.2} />
          </NavLink>

          {/* Counselling */}
          {/* <NavLink
            to="/counselling"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"}`
            }
          >
            <Square size={23} strokeWidth={2.2} />
          </NavLink> */}
          {/* <NavLink
            to="/counselling"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"}`
            }
          >
            <Book size={23} strokeWidth={2.2} />
          </NavLink> */}
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                ? "bg-blue-500 text-white"
                : "text-black hover:text-white"}`
            }
          >
            <Book size={23} strokeWidth={2.2} />
          </NavLink>

          {/* Profile */}
          {user ? (
            <NavLink
              to={`/profile/id:${user.name}`}
              className={({ isActive }) =>
                `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                  ? "bg-blue-500 text-white"
                  : "text-black hover:text-white"}`
              }
            >
              <User size={24} strokeWidth={2.2} />
            </NavLink>
          ) : (
            <NavLink
              to="/user/login"
              className={({ isActive }) =>
                `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                  ? "bg-blue-500 text-white"
                  : "text-black hover:text-white"}`
              }
            >
              <User size={24} strokeWidth={2.2} />
            </NavLink>
          )}

        </div>
      </nav>


    </nav>
  );
};

export default Navbar;