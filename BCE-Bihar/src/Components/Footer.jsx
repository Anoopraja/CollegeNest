
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-14">

          {/* ================= ABOUT ================= */}
          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20">
                B
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  BEU Reviews
                </h2>

                <p className="text-xs text-slate-500">
                  Bihar Engineering Community
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              A platform where Bihar Engineering students share honest
              college reviews to help future students make better
              decisions.
            </p>

            {/* Social / Community */}
            <div className="flex gap-3 mt-6">

              <button className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                f
              </button>

              <button className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                X
              </button>

              <button className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition">
                in
              </button>

            </div>

          </div>


          {/* ================= EXPLORE ================= */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Colleges
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Community
                </a>
              </li>

            </ul>

          </div>


          {/* ================= COMPANY ================= */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">

                <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  📧
                </div>

                <div>
                  <p className="text-slate-500 text-xs mb-1">
                    Email
                  </p>

                  <p className="text-slate-300 break-all">
                    support@beureviews.com
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="text-slate-500 text-xs mb-1">
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
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">

          <p className="text-slate-500 text-center sm:text-left">
            © 2026 BEU Reviews. All rights reserved.
          </p>

          <p className="text-slate-500 text-center">
            Made with <span className="text-blue-500">♥</span> for Bihar
            Engineering Students
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

