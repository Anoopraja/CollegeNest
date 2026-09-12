import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";

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

/**
 * ─────────────────────────────────────────────────────────────
 *  DROP-IN NOTES FOR YOUR CODEBASE
 *  This file is self-contained so it previews on its own.
 *  In your real project:
 *   1. Replace the <a> tags with <NavLink to="..."> from
 *      "react-router-dom" (kept as <a> here only so the
 *      preview renders without a router installed).
 *   2. Replace the `college` mock array below with your
 *      `import college from "../Components/data/College.js"`.
 *   3. The `name` state was missing in the original file (the
 *      search input referenced `name`/`setName` with no
 *      useState) — that's fixed here.
 *
 *  WHY THE INTRO NO LONGER WAITS ON GSAP
 *  GSAP + ScrollTrigger are fetched from a CDN, so there's a real
 *  network delay before the page-load reveal used to fire — on a
 *  slow connection the hero would sit fully visible (unanimated)
 *  for a beat, then suddenly reset and animate. The intro reveal
 *  (badge, headline, subtext, CTAs, search bar, image, glow) is
 *  now plain CSS `@keyframes`, so it plays the instant the DOM
 *  paints, with no dependency on the script finishing its download.
 *  GSAP + ScrollTrigger still drive everything that's inherently
 *  scroll-linked and can't run at load time anyway: the hero image
 *  parallax, the stat count-up, the alternating feature rows, and
 *  the college-card deal-in — those still enhance progressively
 *  once the script arrives.
 * ─────────────────────────────────────────────────────────────
 */

const college = [
  {
    id: 1,
    name: "Muzaffarpur Institute of Technology",
    shortName: "MIT Muzaffarpur",
    slug: "mit-muzaffarpur",
    district: "Muzaffarpur",
    address: "Muzaffarpur, Bihar",
    location: "Muzaffarpur, Bihar",
    state: "Bihar",
    established: 1954,
    type: "Government",
    ownership: "Government of Bihar",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "50+ Acres",
    website: "https://mitmuzaffarpur.org",
    email: "principal@mitmuzaffarpur.org",
    phone: "+91-0621-2262442",
    image: "https://i0.wp.com/www.mitmuzaffarpur.org/wp-content/uploads/2018/05/img-3.jpg?fit=450%2C270&ssl=1",
    logo: "https://www.mitmuzaffarpur.org/wp-content/uploads/2026/08/mit-logo.jpg",
    rating: 4.6,
    admission: "BCECE UGEAC",
    about: "One of the oldest engineering institutes in Bihar offering UG and PG programmes. Muzaffarpur Institute of Technology (MIT), Muzaffarpur is a premier institution of eastern India for technical education. It is under administrative control of department of Science, Technology and Technical Education and wholly funded by Govt. of Bihar. Established in 1954, MIT is one of the oldest technical institute in India working with moto ॥ सर्वोपरि कर्मः ॥ i.e. [Work is above everything else]. The foundation stone was laid by the first prime minister of India, Pandit Jawaharlal Nehru.MIT came into existence on 25th September 1954, just seven years after independence of India. It was inaugurated by Sri C.P.N. Sinha, then governor of East Punjab. Initially it was started with Civil Engineering descipline with a batch of 45 students as 1954-55 batch with the name 'College of Civil Engineering, Muzaffarpur'.It is affiliated to Aryabhatta Knowlege University, Patna and offers undergraduate programs in engineering and pharmacy with postgraduate specialisation in Machine design and thermal engineering. The institute also caters to the research and development activities of the state of Bihar.",
    branches: [
      "Computer Science & Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication Engineering",
      "Leather Technology"
    ],
    facilities: [
      "Boys Hostel",
      "Girls Hostel",
      "Central Library",
      "WiFi",
      "Sports",
      "Auditorium",
      "Canteen",
      "Placement Cell"
    ]
  },

  {
    id: 2,
    name: "Bhagalpur College of Engineering",
    shortName: "BCE Bhagalpur",
    slug: "bce-bhagalpur",
    district: "Bhagalpur",
    address: "Sabour, Bhagalpur, Bihar",
    location: "Bhagalpur",
    established: "1960",
    type: "Government",
    ownership: "Government of Bihar",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "114 Acres",
    website: "https://www.bcebhagalpur.ac.in",
    email: "principal@bcebhagalpur.ac.in",
    phone: "0641-2451063",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzLVIb2-R0aln_D8hVuPnXBao-3EY3Pi47tCf_WjLUw&s=10",
    logo: "https://res-console.cloudinary.com/wt32d4lg/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/a2NlaGM4ZGN5amE0bmRreHN5cDg=/template_primary",
    rating: 4.5,
    admission: "BCECE UGEAC (JEE Main)",
    about: "One of Bihar's oldest engineering colleges with a fully residential campus.Bhagalpur College of Engineering (B.C.E) Bhagalpur is one of the oldest and prestigious institute of Bihar in the field of technical education. Established in 1960, the institute continuously serving the nation and state in the field of research and innovation in technical field. This institute is fully funded and administered by ministry of Science, Technology and Technical Education Department, government of Bihar. The institute works with the motto '' योग: कर्मसु कौशलम्'' अर्थात् योग से कर्मों में कुश्लाता आती है। “i.e. yoga is excellence at work.The institute is affiliated to Bihar Engineering University (BEU), Patna. It offers undergraduate programs in Computer Science & Engineering (CSE), Civil Engineering (CE), Electronics and communication Engineering (ECE), Electrical Engineering (EE), Mechanical Engineering (ME) with post-graduation (PG) program in MICRO ELECTRONICS AND VLSI TECHNOLOGY.Institute is located in Bhagalpur on the bank of holy river Ganga with the campus area of around 114 acres. The campus is covered with greenery and natural beauty. The campus also provides excellent amenities for sports and other recreational facilities to students and faculties. Institute is fully residential for students, faculties and all its staff.The alumni have distinguished themselves through their achievements in and contributions to industry, academics, research, business, government and social domains. The institute continues to work closely with the alumni to enhance its activities through interactions in academic and research programs as well as to mobilize financial support",
    branches: [
      "CSE",
      "Civil",
      "Mechanical",
      "Electrical",
      "ECE",
      "ME",
      "Basic Sciences",
      "Humanities",
      "Mathematics and Computing",
    ],
    facilities: [
      "Hostels",
      "Central Library",
      "Sports Complex",
      "Laboratories",
      "Placement Cell",
      "WiFi"
    ]
  },

  {
    id: 3,
    name: "Bakhtiyarpur College of Engineering",
    shortName: "BCE Bakhtiyarpur",
    slug: "bakhtiyarpur-college-of-engineering",
    district: "Patna",
    established: 2016,
    type: "Government",
    ownership: "Government of Bihar",
    university: "Bihar Engineering University",
    approval: "AICTE",
    website: "https://bcebakhtiyarpur.ac.in/",
    email: "principal@bcebakhtiyarpur.org",
    phone: "9835092066",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrMbv4NchJQsmmUTaiUS9wKpVJZeHfv7j5G3IsSC3W2pEBjdsfSuhgBk8&s=10",
    logo: "https://bcebakhtiyarpur.ac.in/wp-content/uploads/2024/05/logo-bced-f.png",
    rating: 4.3,
    campus: "10 Acres",
    about: "Bakhtiyarpur College of Engineering, BCE affiliated with Bihar Engineering University, stands as a sought-after destination for engineering studies in Bihar. The institute is one of the 38 government engineering colleges established in each district of Bihar by the Department of Science Technology and Technical Education, Government of Bihar. It started its first academic session in 2016 from the old campus of the Indian Institute of Technology (IIT), Patna, at Patliputra Colony. It was shifted to Bakhtiyarpur town of Patna district in the year 2020 with a state-of-the-art infrastructure conducive to a healthy academic environment.",
    branches: [
      "CSE",
      "CSE(IOT)",
      "Fire and Technology & Safety Engineering",
      "Applied Science & Humanities",
      "Civil",
      "Mechanical",
      "Electrical",
      "ECE"

    ],

    facilities: [
      "Modern Labs",
      "Hostel",
      "Library",
      "Sports",
      "Placement Cell"
    ]
  },

  {
    id: 4,
    name: "Gaya College of Engineering",
    shortName: "GCE Gaya",
    slug: "gce-gaya",
    district: "Gaya",
    address: "Sri Krishna Nagar, P.O. Nagari Yana, Via Buniyadganj, Gaya, Bihar - 823003",
    location: "Gaya, Bihar",
    established: 1981,
    type: "Government",
    ownership: "Government of Bihar",
    university: "Bihar Engineering University",
    approval: "AICTE",

    campus: "87 Acres",

    website: "https://www.gcegaya.ac.in",
    email: "principal@gcegaya.ac.in",
    phone: "8877969565",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv8ShCTf8k20q0zW2xsT6Ix1dHvulXF9UOgVtGMdztsAfvkqwzZ3BB0-i&s=10",

    logo: "https://www.gcegaya.ac.in/wp-content/themes/theme-college/assets/img/logo.jpg",

    rating: 4.2,

    admission: "BCECE / UGEAC",

    about:
      "Gaya College of Engineering (GCE Gaya) is a government engineering college managed by the Department of Science and Technology, Government of Bihar. The institution has its roots in 1981 and the present GCE campus was inaugurated in 2008. It is approved by AICTE and affiliated with Bihar Engineering University. The college is located in Gaya and has an 87-acre campus.",

    branches: [
      "Civil Engineering",
      "Computer Science & Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
      "Architecture"
    ],

    postgraduateBranches: [
      "Structural Engineering",
      "VLSI",
      "Cyber Security",
      "Manufacturing Engineering"
    ],

    facilities: [
      "Hostel",
      "Central Library",
      "Computer Center",
      "Laboratories",
      "Sports Facilities",
      "Medical Facilities",
      "Gymnasium",
      "WiFi",
      "Bank",
      "Guest House",
      "Student Clubs",
      "Workshop"
    ]
  },
];

function Hero() {
  const [name, setName] = useState("");

  const mainRef = useRef(null);
  const imageWrapRef = useRef(null);

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
      } catch (e) {
        return; // fail quietly, page still works without animation
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger);

      if (reduceMotion) return; // respect user preference, skip all motion

      ctx = gsap.context(() => {
        // Note: the hero's page-load reveal (badge, headline, subtext,
        // CTAs, search bar, image, glow) now runs as plain CSS
        // animation so it fires the instant the page paints instead
        // of waiting on this script to finish downloading. Everything
        // below is scroll-linked and genuinely needs GSAP.

        // Gentle parallax drift on the hero photo while scrolling —
        // a small, single depth cue rather than a repeated hover trick.
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

        // ── Stats: scoreboard-style count-up as it enters view ───
        const statEls = gsap.utils.toArray(".stat-number");
        statEls.forEach((el) => {
          const raw = el.getAttribute("data-value") || "";
          const numeric = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
          const suffix = raw.replace(/[0-9.]/g, ""); // keeps +, %, etc.
          const counter = { val: 0 };
          gsap.to(counter, {
            val: numeric,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              const isDecimal = raw.includes(".");
              const display = isDecimal
                ? counter.val.toFixed(1)
                : Math.round(counter.val).toLocaleString();
              el.textContent = display + suffix;
            },
          });
        });
        gsap.from(".stat-card", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".stat-card", start: "top 88%", once: true },
        });

        // ── Why choose: rows alternate in from left/right, echoing
        // the "compare two sides" idea behind the feature itself ──
        gsap.utils.toArray(".feature-row").forEach((row, i) => {
          gsap.from(row, {
            opacity: 0,
            x: i % 2 === 0 ? -36 : 36,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%", once: true },
          });
        });

        // ── Top rated: cards deal in like results being revealed ─
        gsap.utils.toArray(".college-card").forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 34,
            rotate: i % 2 === 0 ? -3 : 3,
            duration: 0.7,
            delay: (i % 4) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          });
        });
      }, mainRef);
    }

    init();
    return () => ctx && ctx.revert();
  }, []);

  const stats = [
    { icon: <Building2 size={24} />, number: "38+", title: "Colleges in Bihar (BEU)" },
    { icon: <Users size={24} />, number: "10,000+", title: "Students & alumni" },
    { icon: <MessageCircle size={24} />, number: "5,000+", title: "Reviews & insights" },
    { icon: <TrendingUp size={24} />, number: "100%", title: "Student-focused" },
  ];

  const features = [
    { icon: <Search size={22} />, title: "Honest reviews", description: "Real student experiences and insights." },
    { icon: <Scale size={22} />, title: "Easy comparison", description: "Compare colleges by rating, facilities & more." },
    { icon: <MapPin size={22} />, title: "College information", description: "All the essential details in one place." },
    { icon: <Users size={22} />, title: "Active community", description: "Connect with students and alumni." },
  ];

  return (
    <main ref={mainRef} className="bg-white text-slate-900">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeScale {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroGlowIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 0.5; transform: scale(1); }
        }
        .hero-in {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-in-scale {
          opacity: 0;
          animation: heroFadeScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-in-glow {
          opacity: 0;
          animation: heroGlowIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-in, .hero-in-scale, .hero-in-glow {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* ========== LEFT CONTENT ========== */}
          <div className="w-full lg:w-1/2">
            <div
              className="hero-in inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ animationDelay: "0ms" }}
            >
              GenZ on Top
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="hero-in block" style={{ animationDelay: "90ms" }}>
                Discover better colleges.
              </span>
              <span className="hero-in block" style={{ animationDelay: "170ms" }}>
                Build <span className="text-blue-600">brighter futures.</span>
              </span>
            </h1>

            <p
              className="hero-in mt-6 max-w-md text-lg text-slate-600 leading-7"
              style={{ animationDelay: "300ms" }}
            >
              CollegeNest helps students find, compare and review
              engineering colleges across Bihar — and we're working on
              covering the whole country next.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/college" className="hero-in" style={{ animationDelay: "390ms" }}>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20">
                  <Search size={19} />
                  Explore colleges
                  <ArrowRight size={18} />
                </button>
              </a>
              <a href="/community" className="hero-in" style={{ animationDelay: "460ms" }}>
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-semibold transition">
                  <Users size={19} />
                  Join community
                </button>
              </a>
            </div>

            {/* Search */}
            <div
              className="hero-in mt-8 max-w-xl flex items-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm"
              style={{ animationDelay: "530ms" }}
            >
              <Search size={20} className="ml-3 text-slate-400 shrink-0" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search colleges by name, location or branch..."
                className="flex-1 py-3 px-3 outline-none w-full text-slate-700 placeholder:text-slate-400"
              />
              <a href="/college" className="shrink-0">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold transition">
                  Search
                </button>
              </a>
            </div>
          </div>

          {/* ========== RIGHT IMAGE ========== */}
          <div className="hidden md:flex relative w-full lg:w-1/2 items-center justify-center" style={{ height: 420 }}>
            <div
              className="hero-in-glow absolute rounded-full bg-blue-200 blur-3xl"
              style={{ width: 420, height: 420, animationDelay: "120ms" }}
            />
            <div
              ref={imageWrapRef}
              className="hero-in-scale relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full"
              style={{ maxWidth: 480, height: 320, animationDelay: "180ms" }}
            >
              <img
                src="https://beu-bih.ac.in/backend/1747412737507-bhagalpur-engineering-college-bihar-campus-admission.jpg"
                alt="Bhagalpur Engineering College campus"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY COLLEGENEST ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why choose <span className="text-blue-600">CollegeNest?</span>
            </h2>
            <p className="mt-4 text-slate-500">
              A smarter way to choose your engineering college
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-row bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-6 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOP RATED ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Top rated in <span className="text-blue-600">Bihar</span>
              </h2>
              <p className="mt-3 text-slate-500">
                Based on verified student reviews
              </p>
            </div>
            <a href="/college" className="shrink-0">
              <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                View all
                <ArrowRight size={18} />
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {college.map((c) => (
              <div
                key={c.id}
                className="college-card bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition"
              >
                <div className="relative" style={{ height: 180 }}>
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star size={15} fill="#fbbf24" className="text-yellow-400" />
                    <span className="font-semibold text-sm">{c.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-snug">{c.name}</h3>
                  <div className="flex items-center gap-1.5 mt-2 text-slate-500 text-sm">
                    <MapPin size={15} />
                    <span>{c.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {c.branches.map((branch) => (
                      <span
                        key={branch}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 mt-5 pt-4 flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{c.reviews} reviews</span>
                    <a href={`/college/${c.id}`}>
                      <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                        Read reviews
                      </button>
                    </a>
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
