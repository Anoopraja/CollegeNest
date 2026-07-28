const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl pt-10 mx-auto px-6 py-0">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              BEU Reviews
            </h2>

            <p className="mt-4 text-sm leading-7">
              A platform where Bihar Engineering students share honest
              college reviews to help future students make better decisions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Colleges</li>
              <li className="hover:text-white cursor-pointer">Reviews</li>
              <li className="hover:text-white cursor-pointer">Community</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <p>Email: support@beureviews.com</p>
            <p className="mt-2">Bihar, India</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © 2026 BEU Reviews. Made for Bihar Engineering Students.
        </div>

      </div>

    </footer>
  );
};

export default Footer;