import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Clock3,
  Award,
} from "lucide-react";

const syllabusData = {
  1: {
    title: "Semester I",
    branch: "Computer Science & Engineering",
    papers: [
      {
        sno: 1,
        code: "100103",
        title: "Chemistry",
        l: 3,
        t: 1,
        p: 3,
        credits: 5.5,
      },
      {
        sno: 2,
        code: "105102",
        title: "Mathematics I (Calculus & Linear Algebra)",
        l: 3,
        t: 1,
        p: 0,
        credits: 4,
      },
      {
        sno: 3,
        code: "100104",
        title: "Programming For Problem Solving",
        l: 3,
        t: 0,
        p: 4,
        credits: 5,
      },
      {
        sno: 4,
        code: "100105",
        title: "Workshop Manufacturing Practices",
        l: 1,
        t: 0,
        p: 4,
        credits: 3,
      },
      {
        sno: 5,
        code: "100106",
        title: "English",
        l: 2,
        t: 0,
        p: 2,
        credits: 3,
      },
    ],
    paperCodes: "100103 || 100203",
  },

  2: {
    title: "Semester II",
    branch: "Computer Science & Engineering",
    papers: [
      {
        sno: 1,
        code: "105201",
        title: "Physics (Semiconductor Physics)",
        l: 3,
        t: 1,
        p: 3,
        credits: 5.5,
      },
      {
        sno: 2,
        code: "105202",
        title: "Mathematics II (Probability And Statistics)",
        l: 3,
        t: 1,
        p: 0,
        credits: 4,
      },
      {
        sno: 3,
        code: "100201",
        title: "Basic Electrical Engineering",
        l: 3,
        t: 1,
        p: 2,
        credits: 5,
      },
      {
        sno: 4,
        code: "100202",
        title: "Engineering Graphics & Design",
        l: 1,
        t: 0,
        p: 4,
        credits: 3,
      },
    ],
    paperCodes: "105101 || 105201",
  },
};

// ------------------------------------------------------
// SEMESTER BUTTONS
// ------------------------------------------------------

const semesters = [
  { id: 1, name: "Semester I" },
  { id: 2, name: "Semester II" },
  { id: 3, name: "Semester III" },
  { id: 4, name: "Semester IV" },
  { id: 5, name: "Semester V" },
  { id: 6, name: "Semester VI" },
  { id: 7, name: "Semester VII" },
  { id: 8, name: "Semester VIII" },
];

// ------------------------------------------------------
// SYLLABUS COMPONENT
// ------------------------------------------------------

const Syllabus = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  const [expandedPaper, setExpandedPaper] = useState(null);

  const currentSemester = syllabusData[activeSemester];

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-20">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <GraduationCap size={16} />
            CollegeNest Syllabus
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-5">
            CSE Syllabus
          </h1>

          <p className="text-gray-500 mt-4 text-base sm:text-lg leading-7">
            Explore your semester-wise subjects, paper codes, lecture hours,
            practical hours and credits.
          </p>
        </div>
      </section>

      {/* =================================================
          SEMESTER SELECTOR
      ================================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {semesters.map((semester) => {
            const isActive = activeSemester === semester.id;
            const hasData = syllabusData[semester.id];

            return (
              <button
                key={semester.id}
                onClick={() => {
                  setActiveSemester(semester.id);
                  setExpandedPaper(null);
                }}
                className={`
                  shrink-0 px-5 py-3 rounded-xl text-sm font-semibold
                  border transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : hasData
                      ? "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                      : "bg-gray-50 text-gray-400 border-gray-200"
                  }
                `}
              >
                {semester.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* =================================================
          CONTENT
      ================================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-8">
        {currentSemester ? (
          <>
            {/* Semester Header */}

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-5 sm:p-7 bg-gray-50 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen
                        size={20}
                        className="text-blue-600"
                      />

                      <span className="text-sm font-semibold text-blue-600">
                        COMPUTER SCIENCE & ENGINEERING
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                      {currentSemester.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm">
                    <Award size={17} className="text-blue-600" />

                    <span className="text-gray-600">
                      {currentSemester.papers.length} Papers
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DESKTOP TABLE
              ================================================= */}

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-gray-200">
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700">
                        S.No
                      </th>

                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700">
                        Paper Code
                      </th>

                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700">
                        Paper Title
                      </th>

                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-700">
                        L
                      </th>

                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-700">
                        T
                      </th>

                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-700">
                        P
                      </th>

                      <th className="px-4 py-4 text-center text-sm font-bold text-gray-700">
                        Credits
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentSemester.papers.map((paper) => (
                      <tr
                        key={paper.sno}
                        className="border-b border-gray-100 last:border-0 hover:bg-blue-50/40 transition"
                      >
                        <td className="px-4 py-5 text-sm text-gray-600">
                          {paper.sno}
                        </td>

                        <td className="px-4 py-5 text-sm font-medium text-gray-800">
                          {paper.code}
                        </td>

                        <td className="px-4 py-5 text-sm font-medium text-gray-800">
                          {paper.title}
                        </td>

                        <td className="px-4 py-5 text-center text-sm text-gray-600">
                          {paper.l}
                        </td>

                        <td className="px-4 py-5 text-center text-sm text-gray-600">
                          {paper.t}
                        </td>

                        <td className="px-4 py-5 text-center text-sm text-gray-600">
                          {paper.p}
                        </td>

                        <td className="px-4 py-5 text-center text-sm font-semibold text-gray-800">
                          {paper.credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* =================================================
                  MOBILE CARDS
              ================================================= */}

              <div className="md:hidden divide-y divide-gray-100">
                {currentSemester.papers.map((paper) => {
                  const isExpanded = expandedPaper === paper.sno;

                  return (
                    <div key={paper.sno} className="p-4">
                      <button
                        onClick={() =>
                          setExpandedPaper(
                            isExpanded ? null : paper.sno
                          )
                        }
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                              {paper.sno}
                            </div>

                            <div>
                              <p className="text-xs text-gray-400 font-medium">
                                {paper.code}
                              </p>

                              <h3 className="font-semibold text-gray-800 mt-1 leading-5">
                                {paper.title}
                              </h3>
                            </div>
                          </div>

                          <div className="shrink-0 text-gray-400">
                            {isExpanded ? (
                              <ChevronUp size={19} />
                            ) : (
                              <ChevronDown size={19} />
                            )}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="grid grid-cols-4 gap-2 mt-4">
                          <div className="bg-gray-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-gray-400">L</p>
                            <p className="font-semibold mt-1">
                              {paper.l}
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-gray-400">T</p>
                            <p className="font-semibold mt-1">
                              {paper.t}
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-gray-400">P</p>
                            <p className="font-semibold mt-1">
                              {paper.p}
                            </p>
                          </div>

                          <div className="bg-blue-50 rounded-lg p-3 text-center">
                            <p className="text-xs text-blue-500">
                              Credits
                            </p>
                            <p className="font-semibold text-blue-700 mt-1">
                              {paper.credits}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                PAPER CODE
            ================================================= */}

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-bold text-blue-600">
                PAPER CODE
              </span>

              <span className="text-sm font-mono text-gray-600">
                {currentSemester.paperCodes}
              </span>
            </div>

            {/* =================================================
                LEGEND
            ================================================= */}

            <div className="flex flex-wrap gap-3 mt-7">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <Clock3 size={15} className="text-blue-600" />
                <span className="text-xs text-gray-600">
                  L = Lecture
                </span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs text-gray-600">
                  T = Tutorial
                </span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs text-gray-600">
                  P = Practical
                </span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs text-gray-600">
                  Credits = Course Credits
                </span>
              </div>
            </div>
          </>
        ) : (
          /* =================================================
             NO DATA
          ================================================= */

          <div className="border border-gray-200 rounded-2xl p-10 sm:p-16 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen size={25} />
            </div>

            <h2 className="text-xl font-bold mt-5">
              Syllabus Coming Soon
            </h2>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              The syllabus data for this semester hasn't been added yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Syllabus;