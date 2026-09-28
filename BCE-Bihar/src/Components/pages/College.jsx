import React, { useState, useEffect, useRef } from "react";
import api from "../api/api.js";
import { NavLink } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return resolve();
    }

    const s = document.createElement("script");

    s.src = src;
    s.onload = resolve;
    s.onerror = reject;

    document.body.appendChild(s);
  });
}

const Colleges = () => {

  const [search, setSearch] = useState("");
  const [colleges, setColleges] = useState([]);
  const [result, setResult] = useState([]);

  const gsapRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const debounceRef = useRef(null);


  useEffect(() => {

    const getColleges = async () => {

      try {

        const response = await api.get("/college");

        console.log("Backend response:", response.data);

        const collegeData = response.data.data || [];

        setColleges(collegeData);
        setResult(collegeData);

      } catch (error) {

        console.log("College fetch error:", error);

      }

    };

    getColleges();

  }, []);


  // =========================
  // FILTER COLLEGES
  // =========================

  const filterColleges = (query) => {

    const q = query.trim().toLowerCase();

    if (!q) {
      return colleges;
    }

    return colleges.filter((college) =>
      college.name?.toLowerCase().includes(q)
    );

  };


  // =========================
  // LOAD GSAP
  // =========================

  useEffect(() => {

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


    async function init() {

      try {

        if (!window.gsap) {

          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          );

        }

      } catch (e) {

        console.log("GSAP loading failed:", e);
        return;

      }


      const gsap = window.gsap;

      if (!gsap) return;

      gsapRef.current = gsap;


      if (reduceMotion) return;


      // Header animation
      if (headerRef.current) {

        gsap.from(headerRef.current, {

          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",

        });

      }

    }

    init();


  }, []);


  // =========================
  // ANIMATE GRID
  // =========================

  const animateGrid = (isFirstLoad = false) => {

    const gsap = gsapRef.current;

    if (!gsap || !gridRef.current) return;


    const cards = gridRef.current.querySelectorAll(
      ".college-card"
    );


    if (!cards.length) return;


    gsap.fromTo(

      cards,

      {
        opacity: 0,
        y: isFirstLoad ? 20 : 14,
        scale: isFirstLoad ? 1 : 0.98,
      },

      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.04,
        ease: "power2.out",
        overwrite: true,
      }

    );

  };


  // =========================
  // LIVE SEARCH
  // =========================

  useEffect(() => {

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }


    debounceRef.current = setTimeout(() => {

      setResult(filterColleges(search));

    }, 250);


    return () => {

      clearTimeout(debounceRef.current);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, colleges]);


  // =========================
  // ANIMATE WHEN RESULT CHANGES
  // =========================

  useEffect(() => {

    if (result.length > 0) {
      animateGrid(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);


  // =========================
  // FORM SUBMIT
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setResult(filterColleges(search));

  };


  // =========================
  // ESCAPE SEARCH
  // =========================

  const handleKeyDown = (e) => {

    if (e.key === "Escape") {

      setSearch("");
      setResult(colleges);

    }

  };


  // =========================
  // UI
  // =========================

  return (

    <div className="pb-10 bg-white">

      <style>{`

                html {
                    scroll-behavior: smooth;
                    -webkit-text-size-adjust: 100%;
                }

                body {
                    -webkit-overflow-scrolling: touch;
                    overscroll-behavior-y: contain;
                    -webkit-font-smoothing: antialiased;
                }

                a,
                button {
                    -webkit-tap-highlight-color: transparent;
                    touch-action: manipulation;
                }

                .cn-heading {
                    font-size: clamp(
                        1.75rem,
                        1.4rem + 1.4vw,
                        2.25rem
                    );
                }

                .cn-press {
                    transition:
                        transform 0.18s cubic-bezier(0.22,1,0.36,1),
                        background-color 0.18s ease,
                        box-shadow 0.18s ease;
                }

                .cn-press:active {
                    transform: scale(0.96);
                }

                .cn-card {
                    transition:
                        transform 0.3s cubic-bezier(0.22,1,0.36,1),
                        box-shadow 0.3s ease,
                        border-color 0.3s ease;
                }

                .cn-card:active {
                    transform: scale(0.98);
                }

                .cn-card-img {
                    transition:
                        transform 0.5s cubic-bezier(0.22,1,0.36,1);
                }

                .cn-card:hover .cn-card-img {
                    transform: scale(1.06);
                }

                @media (prefers-reduced-motion: reduce) {

                    html {
                        scroll-behavior: auto;
                    }

                    .cn-press,
                    .cn-card,
                    .cn-card-img {
                        transition: none;
                    }

                }

            `}</style>


      <div className="max-w-7xl mx-auto pb-16 px-6 py-5 z-51">


        {/* SEARCH */}

        <form
          onSubmit={handleSubmit}
          className="mb-8 flex space-x-3 sm:space-x-4 sticky top-[6rem] z-30 border border-blue-200 rounded-full px-4 py-3 sm:px-5 sm:py-4 shadow-sm backdrop-blur-md"
        >

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            placeholder="Search for colleges..."
            className="w-full px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />

        </form>


        {/* HEADING */}

        <h1
          ref={headerRef}
          className="cn-heading font-bold text-gray-800 mb-8"
        >
          Explore Colleges
        </h1>


        {/* COLLEGE LIST */}

        {result.length === 0 ? (

          <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl">

            <p className="text-gray-500">
              {colleges.length === 0
                ? "Loading colleges..."
                : `No colleges match "${search}". Try a different name.`
              }
            </p>

          </div>

        ) : (

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >

            {result.map((item) => (

              <div
                key={item._id}
                className="cn-card college-card p-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >

                {/* IMAGE */}

                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-4">

                  <img
                    src={
                      item.image ||
                      "/default-college.jpg"
                    }
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="cn-card-img absolute inset-0 w-full h-full object-cover"
                  />

                </div>


                {/* NAME */}

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.name}
                </h3>


                {/* ABOUT */}

                {/* <p className="text-gray-600 text-sm leading-6">
                  {item.about}
                </p> */}


                {/* DETAIL */}

                <NavLink
                  to={`/college/${item.slug}`}
                >

                  <button
                    className="cn-press mt-6 w-full py-2 rounded-xl bg-blue-600 text-white hover:bg-slate-800"
                  >
                    View Detail
                  </button>

                </NavLink>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

};

export default Colleges;

