import React from 'react'
import College from '../data/College'
import { NavLink } from 'react-router-dom'
import CollegeInfo from './Collegeinfo'



const Colleges = () => {

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Explore Colleges
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {College.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                🎓
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.name}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.description}
              </p>
              <NavLink 
              path={`/college/${item.id}`}
                to={`/college/${item.id}`}>
              <button
                className="mt-6 w-full py-2 rounded-xl bg-blue-600 text-white hover:bg-slate-800 transition">
                View Details
              </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Colleges
