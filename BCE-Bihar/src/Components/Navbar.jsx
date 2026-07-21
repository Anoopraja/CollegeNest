import { Link, NavLink } from "react-router-dom";
import useState from "react";
// const [menuOpen, setMenuOpen] = useState(false);

const navClass = ({ isActive }) =>
  `block px-3 py-2 transition ${
    isActive
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-700"
  }`;

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
            B
          </div>

          <div>
            <h1 className="font-bold text-gray-900">BEU Reviews</h1>
            <p className="text-xs text-gray-500">Bihar Engineering</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-700 cursor-pointer">Home</NavLink>
          <NavLink to="/college" className="hover:text-blue-700 cursor-pointer">College</NavLink>
          <NavLink to="/reviews" className="hover:text-blue-700 cursor-pointer">Reviews</NavLink>
          <NavLink to="/community" className="hover:text-blue-700 cursor-pointer">Community</NavLink>
          <NavLink to="/contact" className="hover:text-blue-700 cursor-pointer">Contact</NavLink>
        </ul>

        {/* mobile menu */}
        <div className="md:hidden lg:hidden">
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            <img className="h-4" src="https://www.svgrepo.com/show/511065/menu-alt-02.svg" alt="" />
          </button>
        </div>


        {/* tablet menu  */}
        <div className="hidden md:flex sm:hidden lg:hidden items-center gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            <img className="h-4" src="https://www.svgrepo.com/show/511065/menu-alt-02.svg" alt="" />
          </button>
        </div>
        {/* Right */}
        <div className="flex items-center gap-3">

          <NavLink to="/login" className="hidden md:block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            Login
          </NavLink>

          <NavLink to="/login" className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
            Sign Up
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;