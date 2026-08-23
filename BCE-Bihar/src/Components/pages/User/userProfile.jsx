import React from "react";
import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Anoop prajapati",
    email: "anoop@example.com",
    college: "Muzaffarpur Institute of Technology",
    branch: "Computer Science & Engineering",
    bio: "Engineering student and BEU Reviews contributor.",
    joined: "August 2026",
    avatar: "https://ui-avatars.com/api/?name=Anoop+Raj&background=2563eb&color=fff",
  });

  const [reviews] = useState([
    {
      id: 1,
      college: "Muzaffarpur Institute of Technology",
      rating: 4,
      text: "Good college for engineering. Faculty and campus are decent.",
      date: "Aug 20, 2026",
    },
    {
      id: 2,
      college: "Saharsa College of Engineering",
      rating: 3,
      text: "Infrastructure can be improved, but academics are okay.",
      date: "Aug 18, 2026",
    },
  ]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="h-32 bg-blue-600"></div>

          {/* Profile Info */}
          <div className="px-6 pb-6">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">

                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white"
                />

                <div className="pb-1">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user.name}
                  </h1>

                  <p className="text-gray-500">
                    {user.email}
                  </p>
                </div>

              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-4 sm:mt-0 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>

            </div>

            {/* Edit Form */}
            {isEditing && (
              <div className="mt-8 border-t pt-6">

                <h2 className="text-lg font-semibold mb-4">
                  Edit Profile
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      College
                    </label>

                    <input
                      type="text"
                      name="college"
                      value={user.college}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Branch
                    </label>

                    <input
                      type="text"
                      name="branch"
                      value={user.branch}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                    />
                  </div>

                </div>

                <button
                  onClick={() => setIsEditing(false)}
                  className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>

              </div>
            )}

            {/* About */}
            <div className="mt-8 border-t pt-6">

              <h2 className="text-lg font-semibold mb-2">
                About
              </h2>

              <p className="text-gray-600">
                {user.bio}
              </p>

            </div>

            {/* Details */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  College
                </p>

                <p className="font-medium mt-1">
                  {user.college}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Branch
                </p>

                <p className="font-medium mt-1">
                  {user.branch}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Joined
                </p>

                <p className="font-medium mt-1">
                  {user.joined}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              My Reviews
            </h2>

            <span className="text-sm text-gray-500">
              {reviews.length} Reviews
            </span>
          </div>

          <div className="space-y-4">

            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >

                <div className="flex justify-between gap-4">

                  <div>
                    <h3 className="font-semibold text-lg">
                      {review.college}
                    </h3>

                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-sm text-gray-400">
                    {review.date}
                  </span>

                </div>

                <p className="text-gray-600 mt-3">
                  {review.text}
                </p>

                <div className="mt-4 flex gap-3">

                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>

                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;