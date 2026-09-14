import React, { useState, useEffect, useRef } from "react";
import College from "../data/College";
import { NavLink } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

const filterColleges = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return College;
  return College.filter((c) => c.name.toLowerCase().includes(q));
};

const Colleges = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(College);

  const gsapRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const debounceRef = useRef(null);

  // ── Load GSAP once, animate the header in on mount ──────────────
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
        return;
      }
      const gsap = window.gsap;
      if (!gsap) return;
      gsapRef.current = gsap;

      if (reduceMotion) return;

      gsap.from(headerRef.current ? headerRef.current.children : [], {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
      animateGrid(true);
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Animate the grid every time results change (search / clear) ─
  function animateGrid(isFirstLoad) {
    const gsap = gsapRef.current;
    if (!gsap || !gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".college-card");
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: isFirstLoad ? 20 : 14, scale: isFirstLoad ? 1 : 0.98 },
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
  }

  // ── Debounced live search as you type — feels instant, not laggy ─
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setResult(filterColleges(search));
    }, 250);
    return () => clearTimeout(debounceRef.current);
  }, [search]);

  // Re-run the reveal whenever the visible set of cards changes
  useEffect(() => {
    animateGrid(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setResult(filterColleges(search));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearch("");
      setResult(College);
    }
  };

  return (
    <div className="bg-white">
      {/* App-feel polish: momentum scroll, no tap flash, tactile
          presses — matches the rest of the site. */}
      <style>{`
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        body { -webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; -webkit-font-smoothing: antialiased; }
        a, button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
        .cn-heading { font-size: clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem); }
        .cn-press { transition: transform 0.18s cubic-bezier(0.22,1,0.36,1), background-color 0.18s ease, box-shadow 0.18s ease; }
        .cn-press:active { transform: scale(0.96); }
        .cn-card { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease; }
        .cn-card:active { transform: scale(0.98); }
        .cn-card-img { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .cn-card:hover .cn-card-img { transform: scale(1.06); }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .cn-press, .cn-card, .cn-card-img { transition: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto pb-16 px-6 py-5 z-51">

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
              className="w-full px-4 py-2.5  rounded-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            />
            <button
              type="submit"
              className="cn-press shrink-0 rounded-full bg-blue-700 px-4 sm:px-5 text-white hover:bg-blue-800 font-medium"
            >
              Search
            </button>
          </form>


        <h1 ref={headerRef} className="cn-heading font-bold text-gray-800 mb-8">
          Explore Colleges
        </h1>

        {result.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-500">
              No colleges match "{search}". Try a different name.
            </p>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {result.map((item) => (
              <div
                key={item.id}
                className="cn-card college-card p-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <img
                    src={item.image || "/default-college.jpg"}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="cn-card-img absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {item.description}
                </p>

                <NavLink to={`/college/${item.id}`}>
                  <button className="cn-press mt-6 w-full py-2 rounded-xl bg-blue-600 text-white hover:bg-slate-800">
                    View Details
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
