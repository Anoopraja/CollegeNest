// import React from "react";
import college from "../Components/data/College.js"
import { NavLink } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Users,
  Star,
  MessageCircle,
  MapPin,
  Scale,
  TrendingUp,
  GraduationCap,
  UserRound,
  Building2,
  Quote
} from "lucide-react";
// import { useNavigate } from "react-router-dom";

function Hero() {


  const stats = [
    {
      icon: <Building2 size={26} />,
      number: "38+",
      title: "Colleges in Bihar (BEU)",
    },
    {
      icon: <Users size={26} />,
      number: "10,000+",
      title: "Students & Alumni",
    },
    {
      icon: <MessageCircle size={26} />,
      number: "5,000+",
      title: "Reviews & Insights",
    },
    {
      icon: <TrendingUp size={26} />,
      number: "100%",
      title: "Student Focused",
    },
  ];

  const features = [
    {
      icon: <Search size={25} />,
      title: "Honest Reviews",
      description: "Real student experiences and insights",
    },
    {
      icon: <Scale size={25} />,
      title: "Easy Comparison",
      description: "Compare colleges based on rating, facilities & more",
    },
    {
      icon: <MapPin size={25} />,
      title: "College Information",
      description: "All essential details in one place",
    },
    {
      icon: <Users size={25} />,
      title: "Active Community",
      description: "Connect with students and alumni",
    },
  ];



  return (
    <main className="bg-white text-slate-950 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-[calc(100vh-90px)]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 sm:pr-6">

          <div className="flex md:flex-col md:justify-content sm:flex-row md:justify-center lg:flex-row gap-10 h-auto items-center justify-between">

            {/* ========== LEFT CONTENT ========== */}
            <div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-5 py-2.5 rounded-full text-sm font-semibold">

                {/* <span className="text-lg">🔥</span> */}
                <h1>GenZ on Top</h1>

                {/* India's Trusted College Review Platform */}

              </div>


              {/* Heading */}
              <h1 className="mt-7 p-1 text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.08] tracking-tight max-sm:5xl min-sm:2xl">

                Discover Better
                <br />

                Colleges.{" "}

                <span className="text-blue-600">
                  Build
                </span>

                <br />

                <span className="text-blue-600">
                  Brighter Futures.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-7 max-w-[35rem] min-w-[20rem] leading-8 text-start text-gradient-to-blue-600 text-slate-600 text-lg sm:text-lg md:text-lg lg:text-xl">

                CollegeNest helps students to find, compare and review
                engineering colleges across Bihar and we are trying to catch whole country — all in
                one place.

              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <NavLink
                  to="/college">
                  <button

                    className="
                    flex items-center gap-3
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-7 py-4
                    rounded-xl
                    font-semibold
                    transition
                    shadow-lg shadow-blue-600/20
                  "
                  >

                    <Search size={20}
                    />

                    Explore Colleges

                    <ArrowRight size={19} />

                  </button>
                </NavLink>

                <NavLink to="/community">
                  <button
                    className="
                    flex items-center gap-3
                    px-7 py-4
                    rounded-xl
                    border border-slate-300
                    hover:border-blue-600
                    hover:text-blue-600
                    font-semibold
                    transition
                  "
                  >

                    <Users size={20} />

                    Join Community

                  </button>
                </NavLink>

              </div>


              {/* Search */}
              <div
                className="
                  mt-10
                  z-3
                  max-w-2xl
                  flex items-center
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  w-auto
                  p-2
                  shadow-lg shadow-slate-200/50
                "
              >

                <Search
                  size={23}
                  className="ml-4 text-slate-400"
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Search colleges by name, location or branch..."
                  className="
                    flex-1
                    z-3
                    py-3
                    outline-none
                    w-auto
                    text-slate-700
                    placeholder:text-slate-400
                  "
                />

                <NavLink to="/college">
                  <button
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-7
                    py-3.5
                    rounded-xl
                    font-semibold
                    transition
                  "
                  >
                    Search
                  </button>
                </NavLink>
              </div>

            </div>


            {/* ========== RIGHT IMAGE ========== */}

            {/* ========== RIGHT IMAGE ========== */}
            <div className="hidden md:flex relative w-full lg:w-1/2 h-[480px] lg:h-[570px] items-center justify-center mt-8 lg:mt-0">

              {/* Background Glow */}
              <div
                className="
      absolute
      w-[380px] h-[380px]
      md:w-[480px] md:h-[480px]
      lg:w-[650px] lg:h-[650px]
      rounded-full
      bg-blue-300
      opacity-40
      blur-3xl
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
    "
              />

              {/* Image Container */}
              <div
                className="
      relative
      z-10
      w-[90%]
      max-w-[480px]
      lg:max-w-[560px]
      h-[310px]
      lg:h-[370px]
      rounded-2xl
      overflow-hidden
      shadow-2xl
      border-4
      border-white
    "
              >
                <img
                  src="https://beu-bih.ac.in/backend/1747412737507-bhagalpur-engineering-college-bihar-campus-admission.jpg"
                  alt="Bhagalpur Engineering College"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((stat) => (

              <div
                key={stat.title}
                className="
                  flex items-center gap-4
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-5
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  {stat.icon}
                </div>


                <div>

                  <p className="text-2xl font-bold">
                    {stat.number}
                  </p>

                  <p className="text-sm text-slate-500">
                    {stat.title}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY COLLEGENEST ================= */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold">

              Why Choose{" "}

              <span className="text-blue-600">
                CollegeNest?
              </span>

            </h2>

            <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />

            <p className="mt-4 text-slate-500">
              A smarter way to choose your engineering college
            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-7
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-blue-200
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-blue-600
                    text-white
                    flex items-center justify-center
                    mb-6
                  "
                >
                  {feature.icon}
                </div>


                <h3 className="text-xl font-bold mb-2">
                  {feature.title}
                </h3>


                <p className="text-slate-500 leading-6">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold text-[#050b1f]">
                Top Rated in{" "}
                <span className="text-blue-600">Bihar</span>
              </h2>

              <p className="mt-3 text-gray-500 text-lg">
                Based on verified student reviews
              </p>
            </div>

            <NavLink to="/college">
              <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                View All
                <ArrowRight size={20} />
              </button>
            </NavLink>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {college.slice(0, 4).map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-[260px] bg-gray-200">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-1">
                    <Star
                      size={17}
                      fill="#fbbf24"
                      className="text-yellow-400"
                    />
                    <span className="font-semibold">
                      {college.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#07112d]">
                    {college.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-gray-500">
                    <MapPin size={17} />
                    <span>{college.location}</span>
                  </div>

                  {/* Branches */}
                  <div className="h-auto grid gap-2 mt-5">
                    {college.branches.map((branch) => (
                      <span
                        key={branch}
                        className="px-3 py-1.5 bg-[#f1f5f9] text-gray-600 text-sm rounded-md font-medium"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 mt-6 pt-5 flex items-center justify-between">

                    <span className="text-gray-500 text-sm">
                      {college.reviews} Reviews
                    </span>

                    <NavLink to={`/college/${college.id}`}>
                      <button className="text-blue-600 font-semibold hover:text-blue-700">
                        Read Reviews
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}

export default Hero;