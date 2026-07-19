import React from "react";
import review from "../data/reviewData";

const Reviews = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
            Student Reviews
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Honest Reviews from Students
          </h1>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Read genuine reviews shared by engineering students from BEU colleges.
          </p>

        </div>

        {/* Overall Rating */}

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold">
              Overall Rating
            </h2>

            <div className="mt-5 flex items-center gap-5">

              <h1 className="text-6xl font-bold text-blue-600">
                4.5
              </h1>

              <div>

                <p className="text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="text-slate-500">
                  Based on 2,154 Reviews
                </p>

              </div>

            </div>

          </div>

          {/* Rating Breakdown */}

          <div className="bg-white rounded-2xl border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Rating Breakdown
            </h2>

            {[
              ["5 Star", "90%"],
              ["4 Star", "75%"],
              ["3 Star", "45%"],
              ["2 Star", "20%"],
              ["1 Star", "8%"],
            ].map((item) => (

              <div
                key={item[0]}
                className="mb-4"
              >

                <div className="flex justify-between mb-2">

                  <span>{item[0]}</span>

                  <span>{item[1]}</span>

                </div>

                <div className="bg-gray-200 rounded-full h-2">

                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: item[1] }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-2xl border p-6 mt-10">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search Reviews..."
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
            />

            <button className="bg-blue-600 text-white px-8 rounded-xl">
              Search
            </button>

          </div>

        </div>

        {/* Filter */}

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "All",
            "Placement",
            "Hostel",
            "Faculty",
            "Campus",
            "Mess",
          ].map((item) => (

            <button
              key={item}
              className="bg-white border px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Review Cards */}

        <div className="space-y-6 mt-10">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-white rounded-2xl border p-6 shadow-sm"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="text-xl font-bold">
                    {review.name}
                  </h2>

                  <p className="text-slate-500">
                    {review.college}
                  </p>

                  <p className="text-sm text-blue-600">
                    {review.branch}
                  </p>

                </div>

                <span className="text-slate-400">
                  {review.date}
                </span>

              </div>

              <div className="mt-4">

                <span className="text-yellow-500 text-lg">
                  {"⭐".repeat(review.rating)}
                </span>

              </div>

              <p className="mt-4 text-slate-700 leading-7">
                {review.review}
              </p>

              <div className="border-t mt-6 pt-4 flex gap-8">

                <button className="hover:text-blue-600">
                  👍 {review.likes}
                </button>

                <button className="hover:text-blue-600">
                  💬 Comment
                </button>

                <button className="hover:text-blue-600">
                  🚩 Report
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white mt-16">

          <h2 className="text-3xl font-bold">
            Share Your College Experience
          </h2>

          <p className="mt-4 text-blue-100">
            Help future students by writing an honest review.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl mt-6 font-semibold">
            Write Review
          </button>

        </div>

      </div>

    </section>
  );
};

export default Reviews;