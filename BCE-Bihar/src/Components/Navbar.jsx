import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "./appWrite/appwrite.js";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Check logged-in user
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
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
  const handleLogout = async () => {
    try {
      await authService.logout();

      setUser(null);       // UI immediately update karega
      setOpen(false);

      navigate("/login");
      serError(""); // Clear any previous error messages


      console.log("Logged out successfully");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const Navlist = {
    path: [
      { name: "Home", path: "/" },
      { name: "College", path: "/college" },
      { name: "Contact", path: "/contact" },
      { name: "Counselling", path: "/counselling" },
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
                to="/login"
                className="hidden lg:block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="hidden lg:block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
              >
                Sign Up
              </NavLink>
            </>
          )}

          {/* LOGGED IN */}
          {user && (
            <button
              onClick={handleLogout}
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
                className="h-10 hover:opacity-75"
                src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png"
                alt="Profile"
              />
            </NavLink>)
          }

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full  bg-white border-t shadow-md">

          <ul className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            {Navlist.path.map((item) => (
              <li key={item.path}>
                <NavLink
                  onClick={() => setOpen(false)}
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

          <div className="p-4 border-t">

            {/* NOT LOGGED IN */}
            {!user && (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full border py-2 rounded-lg mb-3 text-center"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-blue-700 text-white py-2 rounded-lg text-center"
                >
                  Sign Up
                </NavLink>
              </>
            )}

            {/* LOGGED IN */}
            {user && (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white py-2 rounded-lg"
              >
                Logout
              </button>

            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;