import React from "react";

const WhereToStudy = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Where to Study
          </h2>

          <p className="text-gray-500 mt-2">
            Find the right resources to learn and improve your skills.
          </p>
        </div>

        {/* Study Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* YouTube */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">
              ▶
            </div>

            <h3 className="text-lg font-bold text-black">
              YouTube
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              Learn through free tutorials, playlists and
              project-based videos.
            </p>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-sm font-semibold text-blue-600"
            >
              Explore →
            </a>
          </div>

          {/* Online Courses */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">
              📚
            </div>

            <h3 className="text-lg font-bold text-black">
              Online Courses
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              Follow structured courses from beginner to
              advanced level.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-blue-600"
            >
              Explore →
            </button>
          </div>

          {/* Documentation */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">
              📖
            </div>

            <h3 className="text-lg font-bold text-black">
              Documentation
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              Learn directly from official documentation and
              technical references.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-blue-600"
            >
              Explore →
            </button>
          </div>

          {/* Personal Tutor */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-4">
              👨‍🏫
            </div>

            <h3 className="text-lg font-bold text-black">
              Personal Tutor
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              Discover tutors and mentors recommended by
              CollegeNest students.
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-blue-600"
            >
              Explore →
            </button>
          </div>

        </div>

        {/* Add Personal Tutor */}
        <div className="mt-8 border border-blue-100 bg-blue-50 rounded-2xl p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <h3 className="text-xl font-bold text-black">
                Know a Good Personal Tutor?
              </h3>

              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Share a teacher, mentor or tutor who helped
                you learn a particular skill and help other
                students discover them.
              </p>
            </div>

            <button
              type="button"
              className="bg-blue-600 text-white px-5 py-3
                         rounded-xl font-semibold
                         hover:bg-blue-700 transition
                         whitespace-nowrap"
            >
              + Add Personal Tutor
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhereToStudy;