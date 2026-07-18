const posts = [
  {
    id: 1,
    name: "Rahul Kumar",
    college: "MIT Muzaffarpur",
    time: "2 hours ago",
    text: "Anyone preparing for BEU Semester exams? Let's create a study group.",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    name: "Priya Singh",
    college: "BCE Bhagalpur",
    time: "5 hours ago",
    text: "How are hostel facilities at GEC Vaishali? Need honest opinions.",
    likes: 17,
    comments: 12,
  },
  {
    id: 3,
    name: "Aman Raj",
    college: "GEC Gaya",
    time: "Yesterday",
    text: "Sharing my placement interview experience. Feel free to ask questions.",
    likes: 42,
    comments: 19,
  },
];

const Community = () => {
  return (
    <section className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            BEU Student Community
          </h1>

          <p className="text-slate-500 mt-2">
            Connect with students, ask questions, share experiences, and help others.
          </p>
        </div>

        {/* Create Post */}

        <div className="bg-white rounded-2xl shadow border p-6 mb-8">

          <textarea
            placeholder="What's on your mind?"
            className="w-full border rounded-xl p-4 resize-none h-28 outline-none focus:border-blue-500"
          ></textarea>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Post
            </button>
          </div>

        </div>

        {/* Feed */}

        <div className="space-y-6">

          {posts.map((post) => (

            <div
              key={post.id}
              className="bg-white rounded-2xl shadow border p-6"
            >

              <div className="flex justify-between">

                <div>
                  <h2 className="font-semibold text-lg">
                    {post.name}
                  </h2>

                  <p className="text-sm text-slate-500">
                    {post.college}
                  </p>
                </div>

                <p className="text-sm text-slate-400">
                  {post.time}
                </p>

              </div>

              <p className="mt-5 text-slate-700 leading-7">
                {post.text}
              </p>

              <div className="flex gap-6 mt-6 border-t pt-4">

                <button className="text-slate-600 hover:text-blue-600">
                  👍 {post.likes}
                </button>

                <button className="text-slate-600 hover:text-blue-600">
                  💬 {post.comments}
                </button>

                <button className="text-slate-600 hover:text-blue-600">
                  ↗ Share
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Community;