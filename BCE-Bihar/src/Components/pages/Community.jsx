import React from "react";
import { NavLink } from "react-router-dom";

const posts = [
  {
    id: 1,
    name: "Rahul Kumar",
    college: "MIT Muzaffarpur",
    time: "2 hours ago",
    post: "Anyone preparing for Java Viva? Let's create a study group for 3rd semester students.",
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    name: "Priya Singh",
    college: "BCE Bhagalpur",
    time: "5 hours ago",
    post: "How are hostel facilities in GEC Vaishali? Seniors please share your experience.",
    likes: 31,
    comments: 18,
  },
  {
    id: 3,
    name: "Aman Raj",
    college: "GEC Gaya",
    time: "Yesterday",
    post: "Placement preparation resources for CSE students. Anyone interested in forming a coding group?",
    likes: 55,
    comments: 24,
  },
];

const branch = ["CSE", "ECE", "ME", "CE", "EE"];

const Community = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Branch Navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {branch.map((item) => (
              <NavLink
                key={item}
                to={`/community/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            BEU Community
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-6 tracking-tight">
            Connect with Engineering Students
          </h1>

          <p className="text-slate-600 mt-5 text-base sm:text-lg leading-7 max-w-2xl mx-auto">
            Ask questions, share experiences, discuss placements, hostels,
            coding, internships and help fellow students.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12">

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-center hover:shadow-md transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              10K+
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Students
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-center hover:shadow-md transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              3.5K+
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Posts
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-center hover:shadow-md transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              38
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Colleges
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-center hover:shadow-md transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              500+
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Daily Discussions
            </p>
          </div>

        </div>

        {/* Main Community Content */}
        <div className="max-w-4xl mx-auto">

          {/* Create Post */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                U
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">
                  Create a Post
                </h2>
                <p className="text-xs text-slate-500">
                  Share something with the community
                </p>
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="What's on your mind?"
              className="w-full border border-slate-200 rounded-xl p-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />

            <div className="flex items-center justify-between mt-4">

              <button className="text-sm text-slate-500 hover:text-blue-600 transition">
                📷 Add Media
              </button>

              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 active:scale-95 transition">
                Post
              </button>

            </div>
          </div>

          {/* Trending */}
          <div className="mb-8">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Trending Discussions
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "#Placement",
                "#Hostel",
                "#SemesterExam",
                "#Internship",
                "#Coding",
              ].map((tag) => (
                <button
                  key={tag}
                  className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

          {/* Posts */}
          <div className="space-y-5">

            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >

                {/* User Info */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      {post.name.charAt(0)}
                    </div>

                    <div>
                      <h2 className="font-semibold text-slate-900">
                        {post.name}
                      </h2>

                      <p className="text-sm text-slate-500 mt-0.5">
                        {post.college}
                      </p>
                    </div>

                  </div>

                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {post.time}
                  </span>

                </div>

                {/* Post Content */}
                <p className="mt-5 text-slate-700 leading-7 text-[15px]">
                  {post.post}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-6 mt-5 pt-4 border-t border-slate-100">

                  <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition px-2 py-1 rounded-lg hover:bg-blue-50">
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition px-2 py-1 rounded-lg hover:bg-blue-50">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition px-2 py-1 rounded-lg hover:bg-blue-50 ml-auto">
                    <span>↗</span>
                    <span className="hidden sm:inline">
                      Share
                    </span>
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-8 sm:p-10 mt-14 text-center text-white">

          <div className="max-w-xl mx-auto">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Join the Conversation
            </h2>

            <p className="mt-3 text-blue-100 leading-6">
              Share your thoughts, ask questions and help fellow BEU
              students.
            </p>

            <button className="mt-6 bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold hover:bg-slate-100 active:scale-95 transition">
              Start Posting
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Community;