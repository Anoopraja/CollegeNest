// import React from "react";
import {
  GraduationCap,
  Search,
  Star,
  Image,
  Map,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Users,
  // BookOpen,
  // Target,
  Compass,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Discover Colleges",
    description:
      "Explore Bihar engineering colleges and discover the right college according to your goals.",
    icon: Compass,
    color: "bg-blue-100 text-blue-600",
    tag: "Find your college",
  },
  {
    number: "02",
    title: "Real Student Reviews",
    description:
      "Understand college life through student experiences, honest opinions and reviews.",
    icon: MessageSquare,
    color: "bg-indigo-100 text-indigo-600",
    tag: "Know before you choose",
  },
  {
    number: "03",
    title: "College Gallery",
    description:
      "Explore campus environments, classrooms, laboratories, hostels and college facilities.",
    icon: Image,
    color: "bg-sky-100 text-sky-600",
    tag: "Explore campus life",
  },
  {
    number: "04",
    title: "Your 4-Year Roadmap",
    description:
      "Plan your engineering journey semester by semester with skills, projects and career goals.",
    icon: Map,
    color: "bg-violet-100 text-violet-600",
    tag: "Plan your future",
  },
];

const Home = () => {
  return (
    <main className="bg-white text-slate-900 overflow-clip">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

        <div className="absolute w-[450px] h-[450px] bg-blue-100/60 rounded-full blur-3xl -right-40 top-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-7">
              <Star size={16} fill="currentColor" />
              Built for BEU Students
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
              Explore.
              <br />
              Experience.
              <br />
              <span className="text-blue-600">
                Plan Your Journey.
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mt-7 max-w-xl">
              Discover engineering colleges, read real student experiences
              and plan your four-year engineering journey with CollegeNest.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="/college"
                className="flex items-center gap-3 bg-blue-600 text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Explore Colleges
                <ArrowRight size={19} />
              </a>

              {/* <a
                href="#about"
                className="flex items-center gap-3 border border-blue-200 text-blue-700 px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Discover More
                <ChevronDown size={19} />
              </a> */}
            </div>

            <div className="flex items-center gap-3 mt-12 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-9 h-9 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center"
                  >
                    <Users size={16} className="text-blue-600" />
                  </div>
                ))}
              </div>
              <p>
                Made for students, by the student community.
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[430px] flex items-center justify-center">

            <div className="absolute w-[380px] h-[380px] bg-blue-100 rounded-full" />

            <div className="relative z-10 w-full max-w-md bg-white border border-blue-100 shadow-2xl shadow-blue-200/60 rounded-3xl p-6 rotate-2">

              <div className="flex items-center gap-2 border-b border-slate-100 pb-5">
                <GraduationCap className="text-blue-600" size={28} />
                <span className="font-bold text-xl">
                  College<span className="text-blue-600">Nest</span>
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-blue-600 font-semibold">
                  YOUR STUDENT JOURNEY
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  Welcome to CollegeNest!
                </h2>
                <p className="text-slate-500 text-sm mt-2">
                  Everything you need for your engineering journey.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-7">
                {[
                  { icon: Search, title: "Find Colleges" },
                  { icon: Star, title: "Student Reviews" },
                  { icon: Image, title: "College Gallery" },
                  { icon: Map, title: "4-Year Roadmap" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
                  >
                    <item.icon size={25} className="text-blue-600" />
                    <p className="font-semibold text-sm mt-4">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-blue-600 text-white p-5 rounded-2xl">
                <p className="text-sm text-blue-100">
                  Your engineering journey
                </p>
                <p className="font-bold text-xl mt-1">
                  Starts Here.
                </p>
              </div>
            </div>

            <div className="absolute top-8 -right-2 md:right-0 z-20 bg-white shadow-xl border border-blue-100 p-4 rounded-2xl">
              <MessageSquare className="text-blue-600" size={25} />
              <p className="font-bold text-sm mt-2">Real Reviews</p>
              <p className="text-xs text-slate-500">Student Experiences</p>
            </div>

            <div className="absolute bottom-5 -left-2 md:left-0 z-20 bg-white shadow-xl border border-blue-100 p-4 rounded-2xl">
              <Map className="text-blue-600" size={25} />
              <p className="font-bold text-sm mt-2">4-Year Roadmap</p>
              <p className="text-xs text-slate-500">Plan Your Future</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-t-[50%]" />
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative bg-white px-5 py-24 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
            ABOUT COLLEGENEST
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-6">
            What is <span className="text-blue-600">CollegeNest?</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mt-6">
            CollegeNest is a student-focused platform that helps engineering
            students discover colleges, understand campus life through
            student reviews and plan their academic journey.
          </p>

          <div className="flex justify-center mt-10">
            <a
              href="#colleges"
              className="flex items-center gap-2 text-blue-600 font-bold"
            >
              Explore what we offer
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* STACKING INTRODUCTION PANELS */}
      <section className="relative px-4 md:px-8 pb-24">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.number}
              id={
                index === 0
                  ? "colleges"
                  : index === 1
                  ? "reviews"
                  : index === 2
                  ? "gallery"
                  : "roadmap"
              }
              className="sticky top-24 mb-8 min-h-[65vh] md:min-h-[70vh] max-w-6xl mx-auto"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="h-full min-h-[65vh] md:min-h-[70vh] bg-white border border-blue-100 rounded-[2rem] shadow-[0_-10px_60px_rgba(37,99,235,0.10)] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* TEXT */}
                <div className="max-w-xl">
                  <p className="text-blue-600 font-bold tracking-widest text-sm">
                    {feature.number} / 04
                  </p>

                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mt-7`}>
                    <Icon size={32} />
                  </div>

                  <p className="text-blue-600 text-sm font-bold mt-8">
                    {feature.tag}
                  </p>

                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
                    {feature.title}
                  </h2>

                  <p className="text-slate-600 text-lg leading-relaxed mt-6">
                    {feature.description}
                  </p>

                  <a
                    href={
                      index === 0
                        ? "/colleges"
                        : index === 1
                        ? "/reviews"
                        : index === 2
                        ? "/gallery"
                        : "/roadmap"
                    }
                    className="inline-flex items-center gap-3 mt-9 bg-blue-600 text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
                  >
                    Explore More
                    <ArrowRight size={19} />
                  </a>
                </div>

                {/* VISUAL */}
                <div className="w-full md:w-[42%] min-h-[260px] bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden">

                  <div className="absolute w-64 h-64 bg-blue-100 rounded-full blur-2xl opacity-70" />

                  <div className="relative z-10 bg-white shadow-xl border border-blue-100 rounded-3xl p-10">
                    <Icon size={85} className="text-blue-600" strokeWidth={1.4} />
                  </div>

                  <div className="absolute top-5 right-5 w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="absolute bottom-8 left-8 w-5 h-5 bg-blue-200 rounded-full" />
                </div>

              </div>
            </article>
          );
        })}

      </section>

    </main>
  );
};

export default Home;