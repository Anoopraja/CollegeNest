import { useParams } from "react-router-dom";
import College from "../data/College";



const CollegeInfo = () => {
  const { id } = useParams();

  const college = College.find((item) => item.id === Number(id));

  if (!College) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        College Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Banner */}
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Heading */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold">{college.name}</h1>

        <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
          <p>📍 {college.location}</p>
          <p>⭐ {college.rating}/5</p>
          <p>🏛️ {college.established}</p>
          <p>🎓 {college.type}</p>
        </div>
      </div>

      {/* About */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          About College
        </h2>

        <p className="text-gray-700 leading-8">
          {college.about}
        </p>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="border rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">
            Basic Information
          </h3>

          <div className="space-y-3">
            <p><strong>University:</strong> {college.university}</p>
            <p><strong>Approval:</strong> {college.approval}</p>
            <p><strong>Campus Size:</strong> {college.campus}</p>
          </div>
        </div>

        <div className="border rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3">
            <p>📞 91 + {college.phone}</p>
            <p>✉️ {college.email}</p>
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              🌐 {college.website}
            </a>
          </div>
        </div>

      </div>

      {/* Courses */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">
          Courses Offered
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {college.branches.map((branch) => (
            <div
              key={branch}
              className="border rounded-xl p-4 hover:shadow-md transition"
            >
              {branch}
            </div>
          ))}

        </div>
      </div>

      {/* Facilities */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">
          Facilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {college.facilities.map((facility) => (
            <div
              key={facility}
              className="bg-gray-100 rounded-xl p-5 text-center"
            >
              {facility}
            </div>
          ))}

        </div>
      </div>
      {/* campus Gallery */}
      <section>
        <div className="flex items-center justify-between m-8 ">
          <div>
            <h2 className="text-3xl font-bold">Campus Gallery</h2>
            <p className="text-gray-500 mt-2">
              Explore the college campus and facilities.
            </p>
          </div>
          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition">
            View All
          </button>
        </div>
        <div className="p-5 gap-5 flex justify-start items-center content-center w-full h-50 bg-slate-100 rounded-2xl ">
          <img
            src={college.image}
            alt={college.name}
            className="w-50 object-cover rounded-3xl"
          />
          <h1 className="text-3xl font-bold cursor-pointer">+</h1>
        </div>

      </section>




    </section>
  );
};

export default CollegeInfo;