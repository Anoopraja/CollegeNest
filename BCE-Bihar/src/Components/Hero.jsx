import React from "react";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      <section className="min-h-[calc(100vh-80px)]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center align-middle  ">

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
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">

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
                  max-w-2xl
                  flex items-center
                  bg-white
                  border border-slate-200
                  rounded-2xl
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
                  placeholder="Search colleges by name, location or branch..."
                  className="
                    flex-1
                    px-4
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
            <div className="relative h-[570px]">

              {/* Background Circle */}
              <div
                className="
                  absolute
                  w-[500px]
                  h-[500px]
                  rounded-full
                  sm:w-[600px]
                  sm:h-[600px]
                  lg:w-[700px]
                  lg:h-[700px]
                  2xl:w-[800px]
                  2xl:h-[800px]
                  bg-blue-300
                  opacity-50
                  blur-3xl
                  -translate-x-1/2
                  -translate-y-1/2
                  left-1/2
                  top-1/2

                  right-0
                  top-0
                "
              />


              {/* College Image */}
              <div
                className="
                  absolute
                  right-0
                  top-12
                  w-[90%]
                  h-[470px]
                  rounded-2xl
                  overflow-hidden
                "
              >

                <img
                  src="https://beu-bih.ac.in/backend/1747412737507-bhagalpur-engineering-college-bihar-campus-admission.jpg"
                  alt="Engineering College"
                  className="w-full h-auto object-cover"
                />

              </div>


              {/* Rating Card */}



              {/* Trending Colleges */}



              {/* Hostel Card */}



              {/* Recruiters Card */}


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

    </main>
  );
}

export default Hero;