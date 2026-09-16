
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Code2,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Roadmap = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 pb-25 pt-5 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
            <Sparkles size={14} />
            Student Roadmap
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Use your crucial years wisely to build your skills and knowledge.
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-6 text-gray-500">
            CollegeNest helps you understand what to study and what skills
            to build throughout your engineering journey.
          </p>
        </div>

        {/* ================= QUICK STATUS ================= */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <GraduationCap size={25} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Start your journey
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Choose where you want to begin
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={16} className="text-blue-600" />
              2 learning paths available
            </div>

          </div>
        </div>

        {/* ================= MAIN SECTIONS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= SYLLABUS ================= */}
          <div
            onClick={() => navigate("/roadmap/syllabus")}
            className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            {/* Icon + Arrow */}
            <div className="flex items-start justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                <BookOpen size={28} />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                <ArrowRight size={18} />
              </div>

            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Section 01
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Syllabus
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Explore your semester-wise engineering syllabus and understand
                what you need to study throughout your degree.
              </p>
            </div>

            {/* Bottom info */}
            <div className="mt-7 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between">

                <span className="text-xs text-gray-400">
                  Semester-wise roadmap
                </span>

                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Explore →
                </span>

              </div>
            </div>
          </div>

          {/* ================= SKILLS ================= */}
          <div
            onClick={() => navigate("/roadmap/skills")}
            className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            {/* Icon + Arrow */}
            <div className="flex items-start justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white transition-transform duration-300 group-hover:scale-105">
                <Code2 size={28} />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                <ArrowRight size={18} />
              </div>

            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Section 02
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Skills
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Discover the technical and practical skills you can build
                alongside your college studies.
              </p>
            </div>

            {/* Bottom info */}
            <div className="mt-7 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between">

                <span className="text-xs text-gray-400">
                  Skill-building roadmap
                </span>

                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Explore →
                </span>

              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
          <div className="flex gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 border border-blue-100">
              <Sparkles size={19} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Don't know where to start?
              </h3>

              <p className="mt-1 text-xs sm:text-sm leading-5 text-gray-600">
                Start with your syllabus to understand your academics,
                then use the skills roadmap to plan what you want to learn
                beyond your classroom.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;

