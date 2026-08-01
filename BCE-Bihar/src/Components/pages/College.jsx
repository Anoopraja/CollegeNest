import React from 'react'
import College from '../data/College'
import { NavLink } from 'react-router-dom'
import CollegeInfo from './Collegeinfo'
import { useState } from 'react'


const Colleges = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(College);

  const handleSearch = () => {
    const filtered = College.filter((college) =>
      college.name.toLowerCase().includes(search.trim().toLowerCase())
    
    );

    setResult(filtered);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <search className="mb-8 flex space-x-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
              else if (e.key === 'Escape') {
                setSearch("");
                setResult(College);
              }
            }}
            type="text"
            placeholder="Search for colleges..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className='border-1 rounded-lg bg-blue-700 px-3 text-white hover:bg-blue-800 transition'>Search</button>
        </search>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Explore Colleges
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className= "w-auto h-auto rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded-xl"
                />
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
