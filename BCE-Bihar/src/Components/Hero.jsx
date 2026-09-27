import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  ArrowRight,
  Users,
  Star,
  MessageCircle,
  MapPin,
  Scale,
  TrendingUp,
  Building2,
  BookOpen,
  Code2,
  Target,
  CheckCircle2,
} from "lucide-react";


// ===============================
// Load GSAP dynamically
// ===============================

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);

    if (existing) {
      if (window.gsap || window.ScrollTrigger) {
        resolve();
      } else {
        existing.addEventListener("load", resolve);
        existing.addEventListener("error", reject);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = resolve;
    script.onerror = reject;

    document.body.appendChild(script);
  });
};


// ===============================
// College Data
// ===============================

const colleges = [
  {
    id: 1,
    name: "Muzaffarpur Institute of Technology",
    shortName: "MIT Muzaffarpur",
    district: "Muzaffarpur",
    location: "Muzaffarpur, Bihar",
    rating: 4.4,
    students: "5000+",
    established: "1954",
    image:
      "https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/img-3.jpg?fit=450%2C270&ssl=1",
  },
  {
    id: 2,
    name: "Bhagalpur College of Engineering",
    shortName: "BCE Bhagalpur",
    district: "Bhagalpur",
    location: "Bhagalpur, Bihar",
    rating: 4.2,
    students: "3000+",
    established: "1960",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzLVIb2-R0aln_D8hVuPnXBao-3EY3Pi47tCf_WjLUw&s=10",
  },
  {
    id: 3,
    name: "Bakhtiyarpur College of Engineering",
    shortName: "BCE Bakhtiyarpur",
    district: "Patna",
    location: "Bakhtiyarpur, Bihar",
    rating: 4.1,
    students: "2500+",
    established: "2010",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrMbv4NchJQsmmUTaiUS9wKpVJZeHfv7j5G3IsSC3W2pEBjdsfSuhgBk8&s=10",
  },
  {
    id: 4,
    name: "Gaya College of Engineering",
    shortName: "GCE Gaya",
    district: "Gaya",
    location: "Gaya, Bihar",
    rating: 4.2,
    students: "3000+",
    established: "2008",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv8ShCTf8k20q0zW2xsT6Ix1dHvulXF9UOgVtGMdztsAfvkqwzZ3BB0-i&s=10",
  },
];


function Hero() {
  const [name, setName] = useState("");

  const mainRef = useRef(null);
  const imageWrapRef = useRef(null);
  const roadmapRef = useRef(null);

  // ===============================
  // GSAP + ScrollTrigger
  // ===============================

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ctx;

    async function init() {
      try {
        if (!window.gsap) {
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          );
        }

        if (!window.ScrollTrigger) {
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          );
        }
      } catch (error) {
        console.error("GSAP failed to load:", error);
        return;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      if (reduceMotion) return;

      ctx = gsap.context(() => {
        // =====================================
        // HERO IMAGE PARALLAX
        // =====================================

        if (imageWrapRef.current) {
          gsap.to(imageWrapRef.current, {
            y: 28,
            ease: "none",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }


        // =====================================
        // STATS COUNT UP
        // =====================================

        const statEls = gsap.utils.toArray(".stat-number");

        statEls.forEach((el) => {
          const raw = el.getAttribute("data-value") || "";

          const numeric =
            parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;

          const suffix = raw.replace(/[0-9.]/g, "");

          const counter = {
            val: 0,
          };

          gsap.to(counter, {
            val: numeric,
            duration: 1.4,
            ease: "power2.out",

            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },

            onUpdate: () => {
              const isDecimal = raw.includes(".");

              const display = isDecimal
                ? counter.val.toFixed(1)
                : Math.round(counter.val).toLocaleString();

              el.textContent = display + suffix;
            },
          });
        });


        // =====================================
        // STAT CARDS
        // =====================================

        gsap.from(".stat-card", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: ".stat-card",
            start: "top 88%",
            once: true,
          },
        });


        // =====================================
        // FEATURE ROWS
        // =====================================

        gsap.utils.toArray(".feature-row").forEach((row, i) => {
          gsap.from(row, {
            opacity: 0,
            x: i % 2 === 0 ? -36 : 36,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          });
        });


        // =====================================
        // COLLEGE CARDS
        // =====================================

        gsap.utils.toArray(".college-card").forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 34,
            rotate: i % 2 === 0 ? -3 : 3,
            duration: 0.7,
            delay: (i % 4) * 0.08,
            ease: "power3.out",

            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          });
        });


        // =====================================
        // ROADMAP SECTION
        // =====================================

        const roadmap = roadmapRef.current;

        if (roadmap) {
          const roadmapHeader =
            roadmap.querySelector(".roadmap-header");

          const roadmapJourney =
            roadmap.querySelector(".roadmap-journey");

          const roadmapSteps =
            roadmap.querySelectorAll(".roadmap-step");

          const roadmapResult =
            roadmap.querySelector(".roadmap-result");

          const roadmapLine =
            roadmap.querySelector(".roadmap-line");

          const roadmapDecorations =
            roadmap.querySelectorAll(".roadmap-decoration");

          // Initial states

          gsap.set(roadmap, {
            opacity: 0,
            y: 60,
          });

          gsap.set(roadmapHeader, {
            opacity: 0,
            y: 25,
          });

          gsap.set(roadmapJourney, {
            opacity: 0,
            y: 25,
          });

          gsap.set(roadmapSteps, {
            opacity: 0,
            x: -30,
          });

          gsap.set(roadmapResult, {
            opacity: 0,
            y: 25,
          });

          gsap.set(roadmapLine, {
            scaleY: 0,
            transformOrigin: "top",
          });

          gsap.set(roadmapDecorations, {
            opacity: 0,
            scale: 0.7,
          });


          // Main roadmap reveal

          const roadmapTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: roadmap,
              start: "top 78%",
              once: true,
            },
          });


          roadmapTimeline
            .to(roadmap, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            })

            .to(
              roadmapDecorations,
              {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
              },
              "-=0.5"
            )

            .to(
              roadmapHeader,
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out",
              },
              "-=0.5"
            )

            .to(
              roadmapJourney,
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power3.out",
              },
              "-=0.3"
            )

            .to(
              roadmapLine,
              {
                scaleY: 1,
                duration: 1.2,
                ease: "power2.out",
              },
              "-=0.2"
            )

            .to(
              roadmapSteps,
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.18,
                ease: "power3.out",
              },
              "-=0.9"
            )

            .to(
              roadmapResult,
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out",
              },
              "-=0.15"
            );
        }
      }, mainRef);
    }

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);


  return (
    <>
      {/* ========================================= */}
      {/* PAGE ANIMATION CSS */}
      {/* ========================================= */}

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heroGlowIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-in {
          animation: heroFadeUp 0.8s ease-out both;
        }

        .hero-in-scale {
          animation: heroFadeScale 0.9s ease-out both;
        }

        .hero-in-glow {
          animation: heroGlowIn 1.2s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-in,
          .hero-in-scale,
          .hero-in-glow {
            animation: none !important;
          }
        }
      `}</style>


      {/* ========================================= */}
      {/* MAIN WRAPPER */}
      {/* ========================================= */}

      <main
        ref={mainRef}
        className="bg-white text-gray-900 overflow-hidden"
      >


        {/* ========================================= */}
        {/* HERO SECTION */}
        {/* ========================================= */}

        <section className="relative min-h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 py-10 lg:py-10">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 justify-center items-start ">


              {/* LEFT */}

              <div className="max-w-2xl">

                {/* Badge */}

                <div
                  className="hero-in inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-sm font-medium mb-6"
                  style={{ animationDelay: "0.05s" }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  GenZ on Top
                </div>


                {/* Heading */}

                <h1
                  className="hero-in text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
                  style={{ animationDelay: "0.12s" }}
                >
                  Discover Your Colleges.
                  <br />
                  Choose the Right Path.
                  <span className="block text-blue-600 mt-2">
                    Build brighter futures.
                  </span>
                </h1>


                {/* Description */}

                <p
                  className="hero-in mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-xl"
                  style={{ animationDelay: "0.2s" }}
                >
                  Explore colleges, read real student reviews,
                  connect with your community and follow a clear
                  roadmap from your first semester to your future
                  career.
                </p>


                {/* Buttons */}

                <div
                  className="hero-in flex flex-col sm:flex-row gap-3 mt-8"
                  style={{ animationDelay: "0.28s" }}
                >
                  <a
                    href="/colleges"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Explore Colleges
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="/community"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-200 bg-white rounded-xl font-semibold hover:border-blue-200 hover:bg-blue-50 transition"
                  >
                    <Users size={18} />
                    Join Community
                  </a>
                </div>


                {/* Search */}

                <div
                  className="hero-in mt-8 max-w-xl"
                  style={{ animationDelay: "0.36s" }}
                >
                  <div className="flex items-center gap-3 border border-gray-200 rounded-2xl p-2 bg-white shadow-sm">
                    <Search
                      size={20}
                      className="text-gray-400 ml-3"
                    />

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Search colleges..."
                      className="flex-1 outline-none bg-transparent px-1 py-2.5 text-sm"
                    />

                    <a
                      href="/colleges"
                      className="px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition"
                    >
                      Search
                    </a>
                  </div>
                </div>


                {/* Stats */}

                <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-12">

                  <div className="stat-card border border-gray-100 rounded-2xl p-4 bg-white">
                    <div
                      className="stat-number text-2xl sm:text-3xl font-bold"
                      data-value="38+"
                    >
                      0+
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Colleges
                    </p>
                  </div>


                  <div className="stat-card border border-gray-100 rounded-2xl p-4 bg-white">
                    <div
                      className="stat-number text-2xl sm:text-3xl font-bold"
                      data-value="10k+"
                    >
                      0+
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Students
                    </p>
                  </div>


                  <div className="stat-card border border-gray-100 rounded-2xl p-4 bg-white">
                    <div
                      className="stat-number text-2xl sm:text-3xl font-bold"
                      data-value="5k+"
                    >
                      0+
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Reviews
                    </p>
                  </div>

                </div>
              </div>


              {/* RIGHT IMAGE */}

              <div className="relative hidden lg:block">

                <div
                  ref={imageWrapRef}
                  className="relative hero-in-scale"
                  style={{ animationDelay: "0.25s" }}
                >

                  {/* Blue glow */}

                  <div
                    className="hero-in-glow absolute -inset-8 bg-blue-100/60 blur-3xl rounded-full"
                    style={{ animationDelay: "0.4s" }}
                  />


                  {/* Image */}

                  <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 shadow-xl bg-gray-100">

                    <img
                      src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=85"
                      alt="College campus"
                      className="w-full h-[420px] sm:h-[500px] lg:h-[600px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/5" />

                  </div>


                  {/* Floating card */}

                  <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 bg-white border border-gray-200 shadow-lg rounded-2xl p-4 flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Star
                        size={19}
                        className="text-blue-600 fill-blue-600"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-sm">
                        Student Rated
                      </p>

                      <p className="text-xs text-gray-500">
                        Real college experiences
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>



        {/* ========================================= */}
        {/* ROADMAP SECTION */}
        {/* ========================================= */}

        <section
          ref={roadmapRef}
          className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24"
        >

          {/* Decorative circles */}

          <div className="roadmap-decoration absolute top-16 left-4 w-24 h-24 border border-blue-100 rounded-full pointer-events-none" />

          <div className="roadmap-decoration absolute top-32 right-8 w-14 h-14 border border-gray-200 rounded-full pointer-events-none" />

          <div className="roadmap-decoration absolute bottom-20 right-20 w-8 h-8 bg-blue-50 rounded-full pointer-events-none" />


          {/* Main card */}

          <div className="relative border border-gray-200 rounded-[2rem] bg-white overflow-hidden shadow-sm">


            {/* Header */}

            <div className="roadmap-header px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16">

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

                <div className="max-w-3xl">

                  {/* Small label */}

                  <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-4">

                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Target size={17} />
                    </div>

                    Why this roadmap?
                  </div>


                  {/* Title */}

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    One roadmap.
                    <span className="text-blue-600">
                      {" "}Four years.
                    </span>
                    <br />
                    Clear direction.
                  </h2>


                  {/* Description */}

                  <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8 max-w-2xl">
                    CollegeNest connects your college syllabus,
                    practical skills and career goals into one
                    simple journey — so you know what to learn,
                    when to learn it and why it matters.
                  </p>

                </div>


                {/* Mini stats */}

                <div className="flex gap-8 lg:pb-2">

                  <div>
                    <p className="text-3xl font-bold">
                      4
                    </p>

                    <p className="text-sm text-gray-500">
                      Years
                    </p>
                  </div>


                  <div>
                    <p className="text-3xl font-bold">
                      8
                    </p>

                    <p className="text-sm text-gray-500">
                      Semesters
                    </p>
                  </div>


                  <div>
                    <p className="text-3xl font-bold text-blue-600">
                      1
                    </p>

                    <p className="text-sm text-gray-500">
                      Direction
                    </p>
                  </div>

                </div>

              </div>
            </div>



            {/* Journey */}

            <div className="roadmap-journey px-6 sm:px-10 lg:px-14 mt-12 pb-10">

              <div className="relative">


                {/* Vertical line */}

                <div
                  className="roadmap-line absolute left-[19px] sm:left-[23px] top-7 bottom-7 w-px bg-blue-200"
                />


                {/* STEP 1 */}

                <div className="roadmap-step relative flex gap-5 sm:gap-7 pb-10">

                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <BookOpen size={19} />
                  </div>


                  <div className="pt-1 max-w-2xl">

                    <p className="text-sm font-semibold text-blue-600 mb-1">
                      STEP 01
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold">
                      Understand where you are
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      Start with your semester and branch.
                      Understand your college subjects and see
                      what your academic journey actually looks
                      like.
                    </p>

                  </div>

                </div>



                {/* STEP 2 */}

                <div className="roadmap-step relative flex gap-5 sm:gap-7 pb-10">

                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Code2 size={19} />
                  </div>


                  <div className="pt-1 max-w-2xl">

                    <p className="text-sm font-semibold text-blue-600 mb-1">
                      STEP 02
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold">
                      Build skills alongside college
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      Your syllabus is only one part of your
                      journey. Build practical skills, work on
                      projects and learn technologies that help
                      you prepare for the real world.
                    </p>

                  </div>

                </div>



                {/* STEP 3 */}

                <div className="roadmap-step relative flex gap-5 sm:gap-7">

                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <TrendingUp size={19} />
                  </div>


                  <div className="pt-1 max-w-2xl">

                    <p className="text-sm font-semibold text-blue-600 mb-1">
                      STEP 03
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold">
                      Move towards your goal
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      Whether you are targeting placements,
                      GATE, government jobs or higher studies,
                      your roadmap helps you understand the
                      preparation path ahead.
                    </p>

                  </div>

                </div>

              </div>
            </div>



            {/* Result */}

            <div className="roadmap-result mx-6 sm:mx-10 lg:mx-14 mb-10">

              <div className="border border-blue-100 bg-blue-50/60 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">

                <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">

                  <CheckCircle2
                    size={21}
                    className="text-blue-600"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    THE IMPACT
                  </p>

                  <p className="text-gray-700 leading-7">
                    You stop spending semesters figuring out
                    what to do and start using them to build
                    towards where you want to go.
                  </p>

                </div>

              </div>
            </div>



            {/* CTA */}

            <div className="roadmap-result border-t border-gray-100 px-6 sm:px-10 lg:px-14 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div>

                <p className="font-semibold">
                  Ready to plan your journey?
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Explore your semester-wise roadmap.
                </p>

              </div>


              <a
                href="/roadmap/syllabus"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-blue-600 transition"
              >
                Explore your roadmap
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        </section>



        {/* ========================================= */}
        {/* WHY COLLEGENEST */}
        {/* ========================================= */}

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

          <div className="max-w-2xl mb-12">

            <p className="text-sm font-semibold text-blue-600 mb-3">
              WHY COLLEGENEST
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything students need,
              <span className="text-blue-600">
                {" "}in one place.
              </span>
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              From choosing a college to planning your career,
              CollegeNest keeps your entire student journey
              connected.
            </p>

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">


            {/* Feature 1 */}

            <div className="feature-row border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                <Building2
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <h3 className="font-bold text-lg">
                College Discovery
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                Explore colleges, branches, facilities,
                locations and important information.
              </p>

            </div>



            {/* Feature 2 */}

            <div className="feature-row border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                <Star
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <h3 className="font-bold text-lg">
                Real Reviews
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                Understand college life through reviews and
                experiences shared by students.
              </p>

            </div>



            {/* Feature 3 */}

            <div className="feature-row border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                <MessageCircle
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <h3 className="font-bold text-lg">
                Student Community
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                Ask questions, discuss doubts and connect
                with students from different colleges.
              </p>

            </div>



            {/* Feature 4 */}

            <div className="feature-row border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">

                <Scale
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <h3 className="font-bold text-lg">
                Better Decisions
              </h3>

              <p className="text-sm text-gray-600 leading-6 mt-2">
                Compare your options and make college and
                career decisions with more clarity.
              </p>

            </div>

          </div>
        </section>



        {/* ========================================= */}
        {/* TOP RATED COLLEGES */}
        {/* ========================================= */}

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">

            <div>

              <p className="text-sm font-semibold text-blue-600 mb-3">
                EXPLORE
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Top rated in Bihar
              </h2>

              <p className="mt-3 text-gray-600">
                Discover colleges students are talking about.
              </p>

            </div>


            <a
              href="/colleges"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all colleges
              <ArrowRight size={16} />
            </a>

          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {colleges.map((college) => (

              <a
                key={college.id}
                href={`/college/${college.id}`}
                className="college-card group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-blue-200 hover:shadow-lg transition"
              >

                {/* Image */}

                <div className="relative h-48 overflow-hidden bg-gray-100">

                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-3 right-3 bg-white rounded-lg px-2.5 py-1.5 flex items-center gap-1 shadow-sm">

                    <Star
                      size={14}
                      className="text-blue-600 fill-blue-600"
                    />

                    <span className="text-sm font-semibold">
                      {college.rating}
                    </span>

                  </div>

                </div>



                {/* Content */}

                <div className="p-5">

                  <p className="text-xs font-medium text-blue-600 mb-2">
                    {college.district}, Bihar
                  </p>

                  <h3 className="font-bold text-lg leading-6 group-hover:text-blue-600 transition">
                    {college.shortName}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {college.name}
                  </p>


                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Users size={14} />
                      {college.students}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin size={14} />
                      {college.location.split(",")[0]}
                    </div>

                  </div>

                </div>

              </a>

            ))}

          </div>
        </section>



        {/* ========================================= */}
        {/* FINAL CTA */}
        {/* ========================================= */}

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-20">

          <div className="rounded-[2rem] border border-gray-200 bg-gray-50 px-6 sm:px-10 lg:px-14 py-12 sm:py-16">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold text-blue-600 mb-3">
                YOUR JOURNEY STARTS HERE
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Don't just get through college.
                <span className="text-blue-600">
                  {" "}Build your future.
                </span>
              </h2>

              <p className="mt-5 text-gray-600 leading-7 max-w-2xl">
                Explore colleges, connect with students and
                follow a roadmap designed to give your college
                years a clear direction.
              </p>


              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <a
                  href="/roadmap/syllabus"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Start your roadmap
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/college"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 rounded-xl font-semibold hover:border-blue-200 transition"
                >
                  Explore colleges
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Hero;