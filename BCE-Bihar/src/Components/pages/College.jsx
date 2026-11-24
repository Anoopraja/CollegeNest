
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  X,
  Plus,
  ArrowLeftRight,
  MapPin,
  GraduationCap,
  Globe,
  Star,
  Building2,
  GitCompareArrows,
  ChevronDown,
} from "lucide-react";

import api from "../api/api.js";

const Colleges = () => {
  const [search, setSearch] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Colleges selected for comparison
  const [compareIds, setCompareIds] = useState(["", ""]);

  // Unique college identifier
  const getCollegeId = (college) =>
    String(college._id || college.id);

  // Fetch all colleges from database
  const getColleges = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/college");

      // Supports both response.data.data and
      // response.data.data.college response structures.
      const collegeData =
        response.data?.data?.college ||
        response.data?.data ||
        [];

      if (!Array.isArray(collegeData)) {
        throw new Error("Invalid college data received");
      }

      setColleges(collegeData);
    } catch (err) {
      console.error("College fetch error:", err);
      setError("Unable to load colleges. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getColleges();
  }, []);

  // Search colleges
  const filteredColleges = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return colleges;

    return colleges.filter((college) =>
      [
        college.name,
        college.shortName,
        college.district,
        college.state,
        college.university,
      ]
        .filter(Boolean)
        .some((value) =>
          String(value).toLowerCase().includes(query)
        )
    );
  }, [search, colleges]);

  // Get selected colleges
  const selectedColleges = useMemo(() => {
    return compareIds
      .filter(Boolean)
      .map((id) =>
        colleges.find(
          (college) => getCollegeId(college) === id
        )
      )
      .filter(Boolean);
  }, [compareIds, colleges]);

  // Add another comparison selector
  const addCompareSlot = () => {
    setCompareIds((prev) => [...prev, ""]);
  };

  // Remove comparison selector
  const removeCompareSlot = (index) => {
    setCompareIds((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // Select college
  const handleCompareChange = (index, value) => {
    setCompareIds((prev) =>
      prev.map((id, i) => (i === index ? value : id))
    );
  };

  // Remove all selected colleges
  const clearComparison = () => {
    setCompareIds(["", ""]);
  };

  // Comparison fields from your College database
  const comparisonFields = [
    {
      label: "College Name",
      field: "name",
      icon: Building2,
    },
    {
      label: "Short Name",
      field: "shortName",
    },
    {
      label: "District",
      field: "district",
      icon: MapPin,
    },
    {
      label: "State",
      field: "state",
    },
    {
      label: "Address",
      field: "address",
    },
    {
      label: "Established",
      field: "established",
    },
    {
      label: "College Type",
      field: "type",
    },
    {
      label: "Ownership",
      field: "ownership",
    },
    {
      label: "University",
      field: "university",
    },
    {
      label: "Approval",
      field: "approval",
    },
    {
      label: "Campus",
      field: "campus",
    },
    {
      label: "Courses / Branches",
      field: "branches",
    },
    {
      label: "Facilities",
      field: "facilities",
    },
    {
      label: "Rating",
      field: "rating",
      icon: Star,
    },
    {
      label: "Admission",
      field: "admission",
    },
    {
      label: "Website",
      field: "website",
    },
    {
      label: "Contact Email",
      field: "email",
    },
    {
      label: "Phone",
      field: "phone",
    },
  ];

  // Format comparison values
  const formatValue = (value) => {
    if (value === null || value === undefined || value === "") {
      return "Not available";
    }

    if (Array.isArray(value)) {
      return value.length ? value.join(", ") : "Not available";
    }

    if (typeof value === "object") {
      return Object.entries(value)
        .map(([key, val]) => `${key}: ${val}`)
        .join(", ");
    }

    return String(value);
  };

  const isSearching = search.trim().length > 0;

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-16">

      {/* ============================= */}
      {/* SEARCH BAR */}
      {/* ============================= */}

      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

          <div className="relative max-w-3xl mx-auto">

            <Search
              size={21}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearch("");
                }
              }}
              placeholder="Search colleges by name, district, state..."
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-14 pr-12 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-red-500"
                aria-label="Clear search"
              >
                <X size={19} />
              </button>
            )}

          </div>

          {isSearching && (
            <p className="text-center text-sm text-gray-500 mt-3">
              {filteredColleges.length} colleges found
            </p>
          )}

        </div>
      </section>


      <main className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ============================= */}
        {/* COLLEGE COMPARISON */}
        {/* ============================= */}

        {!isSearching && !loading && colleges.length > 0 && (
          <section className="mt-10 mb-16">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

              <div>
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <GitCompareArrows size={19} />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Smart Comparison
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Compare Colleges
                </h1>

                <p className="text-gray-500 mt-2 text-sm">
                  Compare courses, facilities, ownership and other details.
                </p>
              </div>

              <button
                onClick={clearComparison}
                className="text-sm font-medium text-red-500 hover:text-red-700"
              >
                Clear comparison
              </button>

            </div>


            {/* SELECT COLLEGES */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {compareIds.map((selectedId, index) => {

                const selected = colleges.find(
                  (college) =>
                    getCollegeId(college) === selectedId
                );

                return (
                  <div
                    key={index}
                    className="relative bg-gray-50 border border-gray-200 rounded-2xl p-4"
                  >

                    <div className="flex items-center justify-between mb-3">

                      <label className="text-sm font-semibold text-gray-700">
                        College {index + 1}
                      </label>

                      {compareIds.length > 2 && (
                        <button
                          onClick={() => removeCompareSlot(index)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label={`Remove college selector ${index + 1}`}
                        >
                          <X size={17} />
                        </button>
                      )}

                    </div>

                    <div className="relative">

                      <select
                        value={selectedId}
                        onChange={(e) =>
                          handleCompareChange(index, e.target.value)
                        }
                        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                      >

                        <option value="">
                          Select a college
                        </option>

                        {colleges.map((college) => {
                          const id = getCollegeId(college);

                          const alreadySelected = compareIds.some(
                            (existingId, i) =>
                              existingId === id && i !== index
                          );

                          return (
                            <option
                              key={id}
                              value={id}
                              disabled={alreadySelected}
                            >
                              {college.name}
                            </option>
                          );
                        })}

                      </select>

                      <ChevronDown
                        size={17}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />

                    </div>

                    {selected && (
                      <div className="mt-3 flex items-center gap-3">

                        <img
                          src={selected.logo || selected.image || "/default-college.jpg"}
                          alt={selected.name}
                          className="w-10 h-10 rounded-lg object-cover bg-white"
                        />

                        <div className="min-w-0">
                          <p className="font-semibold text-sm truncate">
                            {selected.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {selected.district || "Location unavailable"}
                          </p>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>


            {/* ADD COLLEGE BUTTON */}

            <button
              onClick={addCompareSlot}
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-dashed border-green-400 text-green-700 font-semibold text-sm hover:bg-green-50 transition"
            >
              <Plus size={18} />
              Add college to compare
            </button>


            {/* COMPARISON TABLE */}

            {selectedColleges.length >= 2 && (

              <div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

                <div className="bg-gray-50 px-5 py-4 flex items-center gap-2 border-b border-gray-200">
                  <ArrowLeftRight size={19} className="text-green-600" />
                  <h2 className="font-bold text-gray-800">
                    College Comparison
                  </h2>
                </div>

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[650px] text-sm text-left">

                    <thead>
                      <tr className="bg-white border-b border-gray-200">

                        <th className="p-4 bg-gray-50 min-w-[160px] font-semibold text-gray-700">
                          Features
                        </th>

                        {selectedColleges.map((college) => (
                          <th
                            key={getCollegeId(college)}
                            className="p-4 min-w-[200px] font-bold text-green-700"
                          >
                            {college.name}
                          </th>
                        ))}

                      </tr>
                    </thead>

                    <tbody>

                      {comparisonFields.map((item, index) => {

                        const Icon = item.icon;

                        return (
                          <tr
                            key={item.field}
                            className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                              }`}
                          >

                            <td className="p-4 font-semibold text-gray-700">

                              <div className="flex items-center gap-2">

                                {Icon && (
                                  <Icon
                                    size={15}
                                    className="text-green-600 shrink-0"
                                  />
                                )}

                                {item.label}

                              </div>

                            </td>

                            {selectedColleges.map((college) => (

                              <td
                                key={getCollegeId(college)}
                                className="p-4 text-gray-600 leading-6"
                              >
                                {item.field === "website" && college.website ? (
                                  <a
                                    href={college.website.startsWith("http")
                                      ? college.website
                                      : `https://${college.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-700 hover:underline break-all"
                                  >
                                    Visit Website
                                  </a>
                                ) : (
                                  formatValue(college[item.field])
                                )}
                              </td>

                            ))}

                          </tr>
                        );
                      })}

                    </tbody>

                  </table>

                </div>

              </div>
            )}

            {selectedColleges.length < 2 && (
              <div className="mt-5 bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-800">
                Select at least two different colleges to see their comparison.
              </div>
            )}

          </section>
        )}


        {/* ============================= */}
        {/* ALL COLLEGES */}
        {/* ============================= */}

        <section className="mt-10">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">

            <div>

              <div className="flex items-center gap-2 text-green-600 mb-2">
                <GraduationCap size={20} />

                <span className="text-sm font-semibold uppercase tracking-wider">
                  Explore Institutions
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {isSearching ? "Search Results" : "All Colleges"}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {isSearching
                  ? `Showing ${filteredColleges.length} matching colleges`
                  : `${colleges.length} colleges available`}
              </p>

            </div>

          </div>


          {/* LOADING */}

          {loading && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-4 animate-pulse"
                >
                  <div className="h-44 bg-gray-200 rounded-xl mb-4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-5" />
                  <div className="h-10 bg-gray-200 rounded-xl" />
                </div>
              ))}

            </div>
          )}


          {/* ERROR */}

          {!loading && error && (
            <div className="text-center py-16">

              <p className="text-red-500 mb-4">{error}</p>

              <button
                onClick={getColleges}
                className="px-6 py-3 bg-green-600 text-white rounded-xl"
              >
                Retry
              </button>

            </div>
          )}


          {/* COLLEGE CARDS */}

          {!loading && !error && filteredColleges.length > 0 && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {filteredColleges.map((college) => (

                <article
                  key={getCollegeId(college)}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={college.image || "/default-college.jpg"}
                      alt={college.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {college.type && (
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-green-700">
                        {college.type}
                      </span>
                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="p-4">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-lg font-bold text-gray-900 leading-7 group-hover:text-green-700 transition">
                        {college.name}
                      </h3>

                      {college.rating && (
                        <span className="flex items-center gap-1 text-sm font-semibold text-amber-600 shrink-0">
                          <Star size={15} fill="currentColor" />
                          {college.rating}
                        </span>
                      )}

                    </div>


                    {/* LOCATION */}

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">

                      <MapPin size={16} className="text-green-600 shrink-0" />

                      <span>
                        {[college.district, college.state]
                          .filter(Boolean)
                          .join(", ") || "Location unavailable"}
                      </span>

                    </div>


                    {/* UNIVERSITY */}

                    {college.university && (
                      <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                        <span className="font-semibold text-gray-700">
                          University:
                        </span>{" "}
                        {college.university}
                      </p>
                    )}


                    {/* DETAILS */}

                    <div className="grid grid-cols-2 gap-3 mt-5">

                      <div className="bg-gray-50 rounded-xl p-3">

                        <p className="text-xs text-gray-400 mb-1">
                          Established
                        </p>

                        <p className="text-sm font-semibold text-gray-800">
                          {formatValue(college.established)}
                        </p>

                      </div>

                      <div className="bg-gray-50 rounded-xl p-3">

                        <p className="text-xs text-gray-400 mb-1">
                          Ownership
                        </p>

                        <p className="text-sm font-semibold text-gray-800">
                          {formatValue(college.ownership)}
                        </p>

                      </div>

                    </div>


                    {/* VIEW DETAIL */}

                    <NavLink
                      to={`/college/${college.slug}`}
                      className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
                    >
                      View Details
                      <Globe size={16} />
                    </NavLink>

                  </div>

                </article>

              ))}

            </div>
          )}


          {/* NO RESULTS */}

          {!loading && !error && filteredColleges.length === 0 && (

            <div className="text-center py-20 border border-dashed border-gray-300 rounded-2xl">

              <Search
                size={35}
                className="mx-auto text-gray-300 mb-4"
              />

              <h3 className="text-xl font-bold text-gray-800">
                No colleges found
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Try searching with another college name or location.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-5 px-6 py-3 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700"
              >
                Clear Search
              </button>

            </div>
          )}

        </section>

      </main>

    </div>
  );
};

export default Colleges;
