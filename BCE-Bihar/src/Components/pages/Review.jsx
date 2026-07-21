import React from "react";
import review from "./review";

const Reviews = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-10">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">
    Student Reviews
  </h2>

  <div className="space-y-6">
    {review.map((item) => (
      <div
        key={item.id}
        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {item.name}
          </h3>

          <span className="text-yellow-500 font-medium">
            ⭐ {item.rating}
          </span>
        </div>

        <p className="text-black leading-7">
          {item.review}
        </p>
        <p className="text-gray-600 leading-7">
          {item.college}
        </p>
        <p className="text-gray-600 leading-7">
          {item.branch}
        </p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Reviews;