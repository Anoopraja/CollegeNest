import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-slate-50">

      <div className="sm:top max-w-7xl mx-auto px-6 py-15">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              🎓 Bihar Engineering University
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">

              Find Honest

              <span className="text-blue-700">
                {" "}College Reviews
              </span>

              <br />

              Before You Take Admission

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

              Read genuine reviews from BEU students, compare colleges,
              explore placements, hostels, faculty, campus life, and help
              future students by sharing your own experience.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <NavLink to="/college" className="text-white border bg-blue-700 px-7 py-3 rounded-lg hover:bg-blue-800 transition">
                Explore Colleges
              </NavLink>
              <NavLink to="/review" className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-100 transition">
                Write Review
              </NavLink>

            </div>

            <div className="flex gap-10 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  38+
                </h2>

                <p className="text-gray-600">
                  BEU Colleges
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  2K+
                </h2>

                <p className="text-gray-600">
                  Student Reviews
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  10K+
                </h2>

                <p className="text-gray-600">
                  Monthly Visitors
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Rated Colleges
            </h2>

            <div className="space-y-5">

              <div className="border rounded-xl p-5 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  MIT Muzaffarpur
                </h3>

                <p className="text-gray-500 mt-1">
                  ⭐ 4.6 • 280 Reviews
                </p>
              </div>

              <div className="border rounded-xl p-5 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  BCE Bhagalpur
                </h3>

                <p className="text-gray-500 mt-1">
                  ⭐ 4.4 • 220 Reviews
                </p>
              </div>

              <div className="border rounded-xl p-5 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">
                  GEC Vaishali
                </h3>

                <p className="text-gray-500 mt-1">
                  ⭐ 4.3 • 190 Reviews
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;