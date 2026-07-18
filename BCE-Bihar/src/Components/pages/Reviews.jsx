import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: "Rahul Kumar",
    branch: "CSE 3rd Year",
    rating: 4,
    date: "12 July 2026",
    review:
      "Faculty is supportive and the coding environment is good. Placements are improving every year.",
  },
  {
    id: 2,
    name: "Priya Singh",
    branch: "ECE 2nd Year",
    rating: 5,
    date: "10 July 2026",
    review:
      "Campus is clean, hostel facilities are decent, and seniors are very helpful.",
  },
  {
    id: 3,
    name: "Aman Raj",
    branch: "ME 4th Year",
    rating: 3,
    date: "7 July 2026",
    review:
      "Labs need improvement but overall college life is enjoyable.",
  },
];

const ReviewPage = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Student Reviews
          </h1>

          <p className="text-slate-500 mt-2">
            Read genuine reviews shared by BEU students.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl shadow border p-6 mb-8">
          <div className="flex justify-between items-center flex-wrap gap-5">

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Overall Rating
              </h2>

              <p className="text-slate-500 mt-1">
                Based on 324 student reviews
              </p>
            </div>

            <div className="text-right">
              <h1 className="text-5xl font-bold text-blue-600">
                4.3
              </h1>

              <p className="text-yellow-500 text-xl">
                ★★★★★
              </p>
            </div>

          </div>
        </div>

        {/* Write Review Button */}

        <div className="mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
            Write a Review
          </button>
        </div>

        {/* Reviews */}

        <div className="space-y-6">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-white rounded-2xl shadow border p-6"
            >

              <div className="flex justify-between items-center">

                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {review.name}
                  </h3>

                  <p className="text-slate-500">
                    {review.branch}
                  </p>
                </div>

                <span className="text-sm text-slate-400">
                  {review.date}
                </span>

              </div>

              <div className="mt-3 text-yellow-500 text-lg">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className="mt-4 text-slate-600 leading-7">
                {review.review}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ReviewPage;