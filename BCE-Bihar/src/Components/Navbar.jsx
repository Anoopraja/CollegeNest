import { Link, NavLink } from "react-router-dom";
import { useState } from "react";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  onclick = () => {

  }
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
            <img className="h-auto" src="/logo.svg" alt="Logo" />
          </div>

          <div className="hidden sm:block">
            <h1 className="font-bold text-gray-900">College Reviews</h1>
            <p className="text-xs text-gray-500">Engineering decision made easy</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-700 cursor-pointer">Home</NavLink>
          <NavLink to="/college" className="hover:text-blue-700 cursor-pointer">College</NavLink>
          <NavLink to="/reviews" className="hover:text-blue-700 cursor-pointer">Reviews</NavLink>
          <NavLink to="/community" className="hover:text-blue-700 cursor-pointer">Community</NavLink>
          <NavLink to="/contact" className="hover:text-blue-700 cursor-pointer">Contact</NavLink>
        </ul>
       {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t shadow-md">
          <NavLink to="/"
          onClick={() => setOpen(false)}
          className="block px-6 py-3">
            Home
          </NavLink>

          <NavLink to="/college"
          onClick={() => setOpen(false)} className="block px-6 py-3">
            College
          </NavLink>

          <NavLink to="/reviews"
          onClick={() => setOpen(false)}
          className="block px-6 py-3">
            Reviews
          </NavLink>

          <NavLink to="/community" 
          onClick={() => setOpen(false)}
          className="block px-6 py-3">
            Community
          </NavLink>

          <NavLink to="/contact" 
          onClick={() => setOpen(false)}
          className="block px-6 py-3">
            Contact
          </NavLink>

          <div className="p-4 border-t">
            <button className="w-full border py-2 rounded-lg mb-3">
              Login
            </button>

            <button className="w-full bg-blue-700 text-white py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>)}

        {/* Right */}
        <div className="flex items-center gap-3">

          <NavLink
            className={({ isActive }) =>
              `block px-3 py-2 transition ${isActive
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-700"
              }`
            }
            to="/login" className="hidden lg:block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            Login
          </NavLink>

          <NavLink to="/signup" className="lg:bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
            Sign Up
          </NavLink>
          {/* mobile menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
              <img className="h-4" src="https://www.svgrepo.com/show/511065/menu-alt-02.svg" alt="" />
            </button>


          </div>




        </div>

      </div>
    </nav>
  );
};

export default Navbar;