import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CountUp from "react-countup";
import {
  Search,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";


const Hero = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  const images = [
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxB1mIykbV0kkWXX0Jyn3MfPcLQko2IzKAth-N9XRdrKQnHXGgrZd914N&s=10",
  // "https://content.jdmagicbox.com/comp/bhagalpur/x6/9999px641.x641.110203114241.g2x6/catalogue/bhagalpur-college-of-engineering-sabour-bhagalpur-colleges-1d9rht9.jpg?w=1920&q=75",
  // "https://www.collegedhundo.com/images/college/cropped-dsc03506.jpg",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  // "https://assets.allegiance-educare.com/colleges/1461848406g5%20-%20Copy.webp",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrMbv4NchJQsmmUTaiUS9wKpVJZeHfv7j5G3IsSC3W2pEBjdsfSuhgBk8&s=10"
];

  const stats = [
    { end: 38, suffix: "+", title: "Colleges" },
    { end: 8000, suffix: "+", title: "Reviews" },
    { end: 500, suffix: "+", title: "Placements" },
    { end: 95, suffix: "%", title: "Verified Students" },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 4000);

    return () => clearInterval(interval);
    useEffect(() => {

      const tl = gsap.timeline();

      tl.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
      })
        .from(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          cardsRef.current,
          {
            y: 50,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.5"
        );
    }, []);
    useEffect(() => {

      cardsRef.current.forEach((card, index) => {

        gsap.to(card, {
          y: index % 2 === 0 ? -12 : 12,
          repeat: -1,
          yoyo: true,
          duration: 2 + index,
        });

      });

    }, []);

  }, []);
  return (
    <section ref={heroRef} className="relative overflow-hidden bg-slate-50">

      {/* Background Blur */}
      <div className="absolute -top-44 -left-32 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-200 blur-3xl opacity-40"></div>

      {/* Announcement Bar */}
      {/* <div className="bg-blue-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* <p className="text-sm font-medium">
            🚀 JEE Main Counselling 2026 is Live • Compare Colleges Before Choosing
          </p> */}

          {/* <button className="hidden md:flex items-center gap-2 text-sm font-semibold hover:underline">
            Compare Now
            <ArrowRight size={16} />
          </button> */}

        {/* </div> */}

      {/* </div> */} 

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div ref={leftRef}>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

              <GraduationCap size={18} />

              Trusted by 15,000+ Engineering Students

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-6xl font-black text-slate-900 leading-tight">

              Find Your

              <span className="text-blue-600">
                {" "}Perfect Engineering
              </span>

              <br />

              College with Confidence

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

              Discover verified student reviews, placement records,
              hostel facilities, faculty ratings, fee structure,
              campus life, scholarships, internships, coding culture,
              alumni network and much more before choosing your college.

            </p>

            {/* Search */}

            <div className="mt-10 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 flex flex-col md:flex-row gap-3">

              <div className="flex items-center flex-1 px-4">

                <Search className="text-slate-400" size={22} />

                <input
                  type="text"
                  placeholder="Search Engineering Colleges..."
                  className="w-full px-3 py-4 outline-none"
                />

              </div>

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2">

                Search

                <ArrowRight size={18} />

              </button>

            </div>

            {/* Popular */}

            <div className="mt-6">

              <p className="font-semibold text-slate-700 mb-3">

                Popular Searches

              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "NIT Patna",
                  "MIT Muzaffarpur",
                  "BCE Bhagalpur",
                  "CSE",
                  "AI & ML",
                  "Best Hostel",
                ].map((item) => (

                  <button
                    key={item}
                    to="/college"
                    className="bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 px-4 py-2 rounded-full transition"
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">



             <NavLink to="/college">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold">

                Explore Colleges

              </button>
              </NavLink>

              <NavLink to="/community">
              <button className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition px-8 py-4 rounded-xl font-semibold">

                Let Connect with Students

              </button>
              </NavLink>

            </div>

            {/* Features */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                "Verified Reviews",
                "Placement Reports",
                "Hostel Ratings",
                "Faculty Reviews",
                "College Comparison",
                "Scholarship Details",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-green-500"
                    size={20}
                  />

                  <span className="text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Students */}

            <div className="flex items-center gap-5 mt-12">

              <div className="flex -space-x-3">

                {/* <img
                  ref={imageRef}
                  src={images[current]}
                  alt="Engineering College"
                  className="h-[680px] w-full rounded-3xl object-cover shadow-2xl"
                /> */}

              </div>

              <div>

                <h3 className="font-bold text-lg">

                  15,000+

                </h3>

                <p className="text-slate-500">

                  Students Trust Our Platform

                </p>

              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

              {[
                {
                  number: "38+",
                  title: "Colleges",
                },
                {
                  number: "8K+",
                  title: "Reviews",
                },
                {
                  number: "500+",
                  title: "Placements",
                },
                {
                  number: "95%",
                  title: "Verified",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
                >

                  <h2 className="text-3xl font-bold text-blue-600">

                    {item.number}

                  </h2>

                  <p className="text-slate-600 mt-2">

                    {item.title}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side will be added in Part 2 */}

          {/* RIGHT SIDE */}

          <div className="relative hidden lg:block">

            {/* Main Image */}
            <img
              ref={imageRef}
              src={images[current]}
              alt="Engineering College"
              className="h-[680px] w-full rounded-3xl object-cover shadow-2xl"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/60 via-transparent"></div>

            {/* Featured College Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-6 w-[320px]">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-xl">

                    NIT Patna

                  </h3>

                  <p className="text-slate-500">

                    Patna, Bihar

                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">

                  #1

                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">

                <div>

                  <p className="text-slate-400 text-sm">

                    Average Package

                  </p>

                  <h4 className="font-bold text-lg">

                    ₹12.5 LPA

                  </h4>

                </div>

                <div>

                  <p className="text-slate-400 text-sm">

                    Highest

                  </p>

                  <h4 className="font-bold text-lg">

                    ₹54 LPA

                  </h4>

                </div>

                <div>

                  <p className="text-slate-400 text-sm">

                    Reviews

                  </p>

                  <h4 className="font-bold">

                    1,250+

                  </h4>

                </div>

                <div>

                  <p className="text-slate-400 text-sm">

                    Rating

                  </p>

                  <h4 className="font-bold text-yellow-500">

                    ★ 4.8

                  </h4>

                </div>

              </div>

            </div>

            {/* Placement Card */}
            <div ref={(el) => (cardsRef.current[0] = el)} className="absolute -top-6 -left-10 bg-white rounded-2xl shadow-xl p-5 w-72">

              <p className="text-sm font-semibold text-green-600">

                Placement Report

              </p>

              <h2 className="text-4xl font-black mt-2 text-slate-900">

                96%

              </h2>

              <p className="text-slate-500">

                Placement Percentage

              </p>

              <div className="mt-4 h-2 rounded-full bg-slate-200 overflow-hidden">

                <div className="h-full w-[96%] bg-green-500"></div>

              </div>

              <div className="flex justify-between mt-4 text-sm">

                <span>120 Recruiters</span>

                <span className="font-semibold text-green-600">

                  +8%

                </span>

              </div>

            </div>

            {/* Student Review */}
            <div ref={(el) => (cardsRef.current[1] = el)} className="absolute top-52 -right-8 bg-white rounded-2xl shadow-xl p-5 w-72">

              <div className="flex items-center gap-3">

                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  className="w-14 h-14 rounded-full"
                  alt=""
                />

                <div>

                  <h4 className="font-bold">

                    Rahul Kumar

                  </h4>

                  <p className="text-sm text-slate-500">

                    CSE • Final Year

                  </p>

                </div>

              </div>

              <div className="text-yellow-500 mt-3 text-lg">

                ★★★★★

              </div>

              <p className="text-sm text-slate-600 mt-3 leading-6">

                The coding culture is excellent. Seniors are very
                supportive and companies like Microsoft, Amazon
                and Atlassian visit regularly.

              </p>

            </div>

            {/* Hostel Card */}
            <div ref={(el) => (cardsRef.current[2] = el)} className="absolute bottom-52 -right-10 bg-blue-600 text-white rounded-2xl p-5 w-64 shadow-xl">

              <h3 className="font-bold text-lg">

                Hostel Experience

              </h3>

              <div className="text-yellow-300 text-xl mt-2">

                ★★★★☆

              </div>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">

                  <span>WiFi</span>

                  <span>4.8/5</span>

                </div>

                <div className="flex justify-between">

                  <span>Mess Food</span>

                  <span>4.3/5</span>

                </div>

                <div className="flex justify-between">

                  <span>Rooms</span>

                  <span>4.6/5</span>

                </div>

                <div className="flex justify-between">

                  <span>Safety</span>

                  <span>4.9/5</span>

                </div>

              </div>

            </div>

            {/* Trending Card */}
            <div ref={(el) => (cardsRef.current[3] = el)} className="absolute top-10 right-5 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-5 w-60">

              <p className="font-bold text-red-500">

                🔥 Trending Colleges

              </p>

              <div className="mt-4 space-y-3">

                {[
                  "NIT Patna",
                  "MIT Muzaffarpur",
                  "BCE Bhagalpur",
                  "Darbhanga CE",
                ].map((college, index) => (
                  <div
                    key={college}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-700">

                      {college}

                    </span>

                    <span className="text-blue-600 font-bold">

                      #{index + 1}

                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Recruiters */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-5 w-[90%]">

              <p className="text-center text-slate-500 text-sm">

                Top Recruiters

              </p>

              <div className="grid grid-cols-4 gap-4 mt-5 text-center text-sm font-semibold text-slate-700">

                <div>Google</div>
                <div>Microsoft</div>
                <div>Amazon</div>
                <div>Adobe</div>
                <div>Oracle</div>
                <div>TCS</div>
                <div>Infosys</div>
                <div>Accenture</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;