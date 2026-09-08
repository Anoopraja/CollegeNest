import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-9">

          {/* ABOUT */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold">
                <img className="w-full h-full object-cover rounded-2xl" src="logo.jpg" alt="" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  CollegeNest
                </h2>
                <p className="text-[11px] text-slate-500">
                  Engineering decisions made easy
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400 max-w-xs">
              Helping students discover, compare and review engineering
              colleges to make better decisions.
            </p>

            <div className="flex gap-2.5 mt-4">
              <button className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                f
              </button>

              <button className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                X
              </button>

              <button className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                in
              </button>
            </div>
          </div>


          {/* EXPLORE */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Explore
            </h3>

            <ul className="space-y-2.5 text-sm">
              <NavLink
                to="/"> <li className="hover:text-blue-500 transition">
                  Home
                </li></NavLink>
              <NavLink to="/colleges">
                <li className="hover:text-blue-500 transition pt-1 pb-1">
                  Colleges
                </li>
              </NavLink>
              <NavLink to="/Contact">
                <li className="hover:text-blue-500 transition">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>


          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Company
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>


          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  📧
                </div>

                <div className="min-w-0">
                  <p className="text-slate-500 text-[11px] mb-0.5">
                    Email
                  </p>

                  <p className="text-slate-300 break-all">
                    anooprajapati807@gmail.com
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="text-slate-500 text-[11px] mb-0.5">
                    Location
                  </p>

                  <p className="text-slate-300">
                    Bihar, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="border-t border-slate-800 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">

          <p className="text-slate-500 text-center sm:text-left">
            © 2026 CollegeNest. All rights reserved.
          </p>

          <p className="text-slate-500 text-center">
            Made with{" "}
            <span className="text-blue-500">♥</span>{" "}
            for Engineering Students
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;