import React from "react";
const posts = [
  {
    id: 1,
    name: "Rahul Kumar",
    college: "MIT Muzaffarpur",
    time: "2 hours ago",
    post:
      "Anyone preparing for Java Viva? Let's create a study group for 3rd semester students.",
    likes: 42,
    comments: 12,
  },
  {
    id: 2,
    name: "Priya Singh",
    college: "BCE Bhagalpur",
    time: "5 hours ago",
    post:
      "How are hostel facilities in GEC Vaishali? Seniors please share your experience.",
    likes: 31,
    comments: 18,
  },
  {
    id: 3,
    name: "Aman Raj",
    college: "GEC Gaya",
    time: "Yesterday",
    post:
      "Placement preparation resources for CSE students. Anyone interested in forming a coding group?",
    likes: 55,
    comments: 24,
  },
];



const Community = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-12">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
            BEU Community
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-6">
            Connect with Engineering Students
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Ask questions, share experiences, discuss placements, hostels,
            coding, internships and help fellow students.
          </p>

        </div>

        {/* Community Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-2xl border p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600 students">10K+</h2>
            <p className="text-gray-500 mt-2">Students</p>
          </div>

          <div className="bg-white rounded-2xl border p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600 post">3.5K+</h2>
            <p className="text-gray-500 mt-2">Posts</p>
          </div>

          <div className="bg-white rounded-2xl border p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600 colleges">38</h2>
            <p className="text-gray-500 mt-2">Colleges</p>
          </div>

          <div className="bg-white rounded-2xl border p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600 discussions">500+</h2>
            <p className="text-gray-500 mt-2">Daily Discussions</p>
          </div>

        </div>

        {/* Create Post */}

        <div className="bg-white border rounded-2xl p-6 mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Create a Post
          </h2>

          <textarea
            rows="4"
            placeholder="What's on your mind?"
            className="w-full border rounded-xl p-4 outline-none focus:border-blue-600 resize-none"
          />

          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Post
            </button>
          </div>

        </div>

        {/* Trending */}

        <div className="flex flex-wrap gap-3 mb-10">

          <span className="bg-white border px-4 py-2 rounded-full">
            #Placement
          </span>

          <span className="bg-white border px-4 py-2 rounded-full">
            #Hostel
          </span>

          <span className="bg-white border px-4 py-2 rounded-full">
            #SemesterExam
          </span>

          <span className="bg-white border px-4 py-2 rounded-full">
            #Internship
          </span>

          <span className="bg-white border px-4 py-2 rounded-full">
            #Coding
          </span>

        </div>

        {/* Posts */}

        <div className="space-y-6">

          {posts.map((post) => (

            <div
              key={post.id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-xl font-semibold">
                    {post.name}
                  </h2>

                  <p className="text-gray-500">
                    {post.college}
                  </p>

                </div>

                <span className="text-gray-400 text-sm">
                  {post.time}
                </span>

              </div>

              <p className="mt-5 text-slate-700 leading-7">
                {post.post}
              </p>

              <div className="flex gap-8 mt-6 border-t pt-4">

                <button className="hover:text-blue-600">
                  👍 {post.likes}
                </button>

                <button className="hover:text-blue-600">
                  💬 {post.comments}
                </button>

                <button className="hover:text-blue-600">
                  ↗ Share
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="bg-blue-600 rounded-3xl p-10 mt-16 text-center text-white">

          <h2 className="text-3xl font-bold">
            Join the Conversation
          </h2>

          <p className="mt-3 text-blue-100">
            Share your thoughts, ask questions and help fellow BEU students.
          </p>

          <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100">
            Start Posting
          </button>

        </div>

      </div>
    </section>
  );
};

export default Community;