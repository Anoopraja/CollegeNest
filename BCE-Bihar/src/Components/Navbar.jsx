import { Link } from 'react-router-dom';
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
          <li className="hover:text-blue-700 cursor-pointer" onClick={() => {
            window.location.href = '/';
          }} >Home</li>
          <li className="hover:text-blue-700 cursor-pointer" onClick={() => {
            window.location.href = '/colleges';
          }} >Colleges</li>
          <li className="hover:text-blue-700 cursor-pointer" onClick={() => {
            window.location.href = '/reviews';
          }} >Reviews</li>
          <li className="hover:text-blue-700 cursor-pointer" onClick={() => {
            window.location.href = '/community';
          }} >Community</li>
          <li className="hover:text-blue-700 cursor-pointer" onClick={() => {
            window.location.href = '/contact';
          }} >Contact</li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="hidden md:block border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            Login
          </button>

          <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;