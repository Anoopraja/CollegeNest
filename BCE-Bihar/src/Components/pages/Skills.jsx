import React, { useEffect, useState } from "react";
import {
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  ShieldCheck,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  Blocks,
  Cpu,
  Palette,
  Users,
  Trophy,
  Sparkles,
  X,
  ArrowRight,
  Bookmark,
  Briefcase,
  Layers3,
} from "lucide-react";

// ------------------------------------------------------
// SKILL DOMAINS
// ------------------------------------------------------

const skillDomains = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Globe,
    description:
      "Build modern websites and powerful web applications from frontend to backend.",
    skills: [
      "Frontend",
      "Backend",
      "Full Stack",
    //   "HTML",
    //   "CSS",
    //   "JavaScript",
    //   "TypeScript",
    //   "React",
    //   "Next.js",
    //   "Node.js",
    //   "Express",
    //   "REST APIs",
    //   "PostgreSQL",
    //   "MongoDB",
    //   "Git",
    //   "Deployment",
    ],
    careers: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Engineer",
    ],
  },

  {
    id: "app-development",
    title: "App Development",
    icon: Smartphone,
    description:
      "Create Android and iOS applications using modern mobile development technologies.",
    skills: [
    //   "Android",
    //   "iOS",
      "Java",
      "Kotlin",
      "Dart",
      "Flutter",
      "React Native",
      "Firebase",
    //   "REST APIs",
    //   "Mobile UI",
      "App Architecture",
    ],
    careers: [
      "Android Developer",
      "iOS Developer",
      "Flutter Developer",
      "React Native Developer",
      "Mobile Engineer",
    ],
  },

  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    description:
      "Learn artificial intelligence, machine learning and modern AI systems.",
    skills: [
      "AI Engineer",
      "Machine Learning",
      "AI and Data Scientist",
      "Python",
      "NumPy",
      "Pandas",
      "Statistics",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "LLMs",
      "RAG",
      "MLOps",
    ],
    careers: [
      "AI Engineer",
      "Machine Learning Engineer",
      "AI Developer",
      "Data Scientist",
      "Deep Learning Engineer",
      "NLP Engineer",
      "MLOps Engineer",
    ],
  },

  {
    id: "data-science",
    title: "Data Science",
    icon: BarChart3,
    description:
      "Turn raw data into meaningful insights using programming, statistics and analytics.",
    skills: [
      "Data Analyst",
      "BI Analyst",
      "Python",
      "SQL",
      "PostgreSQL",
      "Statistics",
      "Probability",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Visualization",
      "Data Cleaning",
      "Data Analysis",
      "Machine Learning",
    ],
    careers: [
      "Data Analyst",
      "Data Scientist",
      "BI Analyst",
      "Analytics Engineer",
    ],
  },

  {
    id: "cyber-security",
    title: "Cyber Security",
    icon: ShieldCheck,
    description:
      "Protect applications, networks and systems from security threats and attacks.",
    skills: [
      "Cyber Security",
      "DevSecOps",
      "Networking",
      "Linux",
      "Python",
      "Web Security",
      "Cryptography",
      "Ethical Hacking",
      "OWASP",
      "Penetration Testing",
      "Digital Forensics",
      "Security Tools",
    ],
    careers: [
      "Security Analyst",
      "Cyber Security Engineer",
      "Penetration Tester",
      "SOC Analyst",
      "Security Researcher",
    ],
  },

  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Build, deploy and manage scalable applications and cloud infrastructure.",
    skills: [
      "DevOps",
      "DevSecOps",
      "Linux",
      "Networking",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
      "Nginx",
      "Network Engineer",
    ],
    careers: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Cloud Architect",
      "Network Engineer",
    ],
  },

  {
    id: "software-development",
    title: "Software Development",
    icon: Code2,
    description:
      "Build reliable software while developing strong programming and computer science fundamentals.",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "OOP",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "Design Patterns",
      "Testing",
      "QA",
      "Software Architect",
    ],
    careers: [
      "Software Developer",
      "Software Engineer",
      "Backend Engineer",
      "Systems Engineer",
      "Software Architect",
      "QA Engineer",
    ],
  },

  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: Database,
    description:
      "Design data pipelines and infrastructure that power analytics and AI systems.",
    skills: [
      "Data Engineer",
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "ETL",
      "Data Pipelines",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "Cloud",
      "Data Warehousing",
    ],
    careers: [
      "Data Engineer",
      "Big Data Engineer",
      "Analytics Engineer",
    ],
  },

  {
    id: "game-development",
    title: "Game Development",
    icon: Gamepad2,
    description:
      "Design and develop interactive games using programming, physics and graphics.",
    skills: [
      "Game Developer",
      "Server Side Game Developer",
      "C++",
      "C#",
      "Unity",
      "Unreal Engine",
      "Game Physics",
      "3D Mathematics",
      "Graphics",
      "Game Design",
      "Blender",
    ],
    careers: [
      "Game Developer",
      "Gameplay Programmer",
      "Graphics Programmer",
      "Game Designer",
      "Server Side Game Developer",
    ],
  },

  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: Blocks,
    description:
      "Explore decentralized applications, smart contracts and blockchain systems.",
    skills: [
      "Blockchain",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "Smart Contracts",
      "Ethereum",
      "Web3 APIs",
      "Cryptography",
      "Wallets",
      "DApps",
    ],
    careers: [
      "Blockchain Developer",
      "Smart Contract Developer",
      "Web3 Developer",
    ],
  },

  {
    id: "embedded-iot",
    title: "Embedded Systems & IoT",
    icon: Cpu,
    description:
      "Work with hardware, microcontrollers, sensors and connected smart devices.",
    skills: [
      "C",
      "C++",
      "Microcontrollers",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "Sensors",
      "Embedded Linux",
      "Electronics",
      "IoT Protocols",
    ],
    careers: [
      "Embedded Engineer",
      "IoT Developer",
      "Firmware Engineer",
      "Robotics Engineer",
    ],
  },

  {
    id: "product-ux",
    title: "Product & UX Design",
    icon: Palette,
    description:
      "Design useful digital products and create better user experiences.",
    skills: [
      "Product Design",
      "UX Design",
      "UI Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Figma",
    ],
    careers: [
      "Product Designer",
      "UX Designer",
      "UI Designer",
      "UX Researcher",
    ],
  },

  {
    id: "tech-management",
    title: "Tech Leadership & Management",
    icon: Users,
    description:
      "Explore technical leadership, product management and developer-focused roles.",
    skills: [
      "Product Manager",
      "Engineering Manager",
      "Developer Relations",
      "Technical Writer",
      "Forward Deployed Engineer",
      "Communication",
      "Product Strategy",
      "Technical Documentation",
      "Leadership",
    ],
    careers: [
      "Product Manager",
      "Engineering Manager",
      "Developer Relations",
      "Technical Writer",
      "Forward Deployed Engineer",
    ],
  },

  {
    id: "competitive-programming",
    title: "Competitive Programming",
    icon: Trophy,
    description:
      "Strengthen problem solving, algorithms and coding skills for technical interviews.",
    skills: [
      "C++",
      "DSA",
      "Algorithms",
      "Mathematics",
      "Graphs",
      "Dynamic Programming",
      "Greedy",
      "Recursion",
      "Backtracking",
      "LeetCode",
      "CodeChef",
      "Codeforces",
      "AtCoder",
    ],
    careers: [
      "Software Engineer",
      "Competitive Programmer",
      "Problem Solver",
    ],
  },

  {
    id: "learn-with-ai",
    title: "Learn With AI",
    icon: Sparkles,
    description:
      "Use AI tools to learn faster, understand concepts and build real-world projects.",
    skills: [
      "AI Coding",
      "Prompt Engineering",
      "AI-Assisted Development",
      "Code Generation",
      "Debugging With AI",
      "AI Research",
      "Project Building",
      "Learning With AI",
    ],
    careers: [
      "AI-Assisted Developer",
      "AI Developer",
      "AI Product Builder",
    ],
  },
];

// ------------------------------------------------------
// SKILLS PAGE
// ------------------------------------------------------

const Skills = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);

  // ----------------------------------------------------
  // GSAP ANIMATION
  // ----------------------------------------------------

  useEffect(() => {
    let ctx;

    const loadGSAP = async () => {
      if (!window.gsap) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");

          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";

          script.onload = resolve;
          script.onerror = reject;

          document.head.appendChild(script);
        });
      }

      if (!window.ScrollTrigger) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");

          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";

          script.onload = resolve;
          script.onerror = reject;

          document.head.appendChild(script);
        });
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".skills-hero", {
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.utils.toArray(".skill-domain-card").forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 45,
            duration: 0.65,
            delay: (index % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });

        gsap.from(".skills-bottom-section", {
          opacity: 0,
          y: 30,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".skills-bottom-section",
            start: "top 88%",
            once: true,
          },
        });
      });
    };

    loadGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  // ----------------------------------------------------
  // MODAL SCROLL LOCK
  // ----------------------------------------------------

  useEffect(() => {
    if (selectedDomain) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDomain]);

  // ----------------------------------------------------
  // ESCAPE TO CLOSE
  // ----------------------------------------------------

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedDomain(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-20">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="skills-hero max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-5">
            <Layers3 size={15} />
            Career Skills
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Choose your direction.
            <span className="block text-blue-600">
              Build the right skills.
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 max-w-2xl">
            You don't need to learn everything. Choose a career domain,
            understand the required skills and follow a clear learning path.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10 max-w-2xl">
          <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
            <p className="text-2xl sm:text-3xl font-bold">15+</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Career Domains
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
            <p className="text-2xl sm:text-3xl font-bold">100+</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Skills
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
            <p className="text-2xl sm:text-3xl font-bold">∞</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Possibilities
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          DOMAIN GRID
      ================================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Explore Career Paths
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Pick a domain and explore what you need to learn.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <article
                key={domain.id}
                className="skill-domain-card group border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedDomain(domain)}
              >
                {/* Card Top */}

                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}

                <h3 className="text-xl font-bold mt-5 group-hover:text-blue-600 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2 min-h-[72px]">
                  {domain.description}
                </p>

                {/* Skills */}

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    Includes
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {domain.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}

                    {domain.skills.length > 6 && (
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs text-blue-600 font-medium">
                        +{domain.skills.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom */}

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    Explore roadmap
                  </span>

                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =================================================
          DON'T LEARN EVERYTHING SECTION
      ================================================= */}

      <section className="skills-bottom-section max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Briefcase size={20} />
              </div>

              <span className="text-sm font-semibold text-blue-600">
                CollegeNest Advice
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Don't try to learn everything.
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
              Start with fundamentals, build a few real projects and then
              specialize in the area you enjoy. Depth in one direction is
              usually more useful than knowing a little about everything.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-blue-600 font-bold">01</span>
                <h3 className="font-semibold mt-2">Foundation</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Learn programming and CS fundamentals.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-blue-600 font-bold">02</span>
                <h3 className="font-semibold mt-2">Build</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Create projects and solve real problems.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-blue-600 font-bold">03</span>
                <h3 className="font-semibold mt-2">Specialize</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Go deeper into your chosen career path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          MODAL / DETAIL OVERLAY
      ================================================= */}

      {selectedDomain && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDomain(null)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}

            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              aria-label="Close"
            >
              <X size={19} />
            </button>

            {/* Modal Header */}

            <div className="p-6 sm:p-8 border-b border-gray-100">
              <div className="flex items-start gap-4 pr-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <selectedDomain.icon size={24} />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {selectedDomain.title}
                  </h2>

                  <p className="text-gray-500 mt-2 leading-6">
                    {selectedDomain.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}

            <div className="p-6 sm:p-8">
              {/* Skills */}

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Bookmark size={18} className="text-blue-600" />

                  <h3 className="font-bold text-lg">
                    Skills to Learn
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {selectedDomain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}

              <div className="mt-8 pt-7 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={18} className="text-blue-600" />

                  <h3 className="font-bold text-lg">
                    Career Opportunities
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDomain.careers.map((career) => (
                    <div
                      key={career}
                      className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />

                      <span className="text-sm font-medium text-gray-700">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Order */}

              <div className="mt-8 pt-7 border-t border-gray-100">
                <h3 className="font-bold text-lg mb-4">
                  Recommended Approach
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-blue-600">
                      STEP 01
                    </span>

                    <h4 className="font-semibold mt-2">
                      Fundamentals
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Understand the basics before jumping into advanced
                      tools.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-blue-600">
                      STEP 02
                    </span>

                    <h4 className="font-semibold mt-2">
                      Projects
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Apply what you learn by building practical projects.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-blue-600">
                      STEP 03
                    </span>

                    <h4 className="font-semibold mt-2">
                      Specialization
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Choose a specific role and go deeper into it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}

            <div className="px-6 sm:px-8 py-5 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Start with the fundamentals and build consistently.
              </p>

              <button
                onClick={() => setSelectedDomain(null)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Got it
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Skills;