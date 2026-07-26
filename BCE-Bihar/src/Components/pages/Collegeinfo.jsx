import { useParams } from "react-router-dom";
const colleges = [
  {
    id: 1,
    name: "Bhagalpur College of Engineering",
    shortName: "BCE Bhagalpur",
    district: "Bhagalpur",
    established: 1960,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "167 Acres",
    rating: 4.5,
    image: "/images/bce-bhagalpur.jpg",
    location: "Bhagalpur, Bihar",
    website: "https://www.bcebhagalpur.ac.in",
    email: "principal@bcebhagalpur.ac.in",
    phone: "+91-641-2401030",
    about:
      "Bhagalpur College of Engineering is one of Bihar's oldest engineering colleges, known for its academics, alumni network, and experienced faculty.",
    branches: [
      "CSE",
      "IT",
      "ECE",
      "EEE",
      "Mechanical",
      "Civil"
    ],
    facilities: [
      "Hostel",
      "Library",
      "Sports",
      "WiFi",
      "Labs",
      "Cafeteria"
    ]
  },

  {
    id: 2,
    name: "Muzaffarpur Institute of Technology",
    shortName: "MIT Muzaffarpur",
    district: "Muzaffarpur",
    established: 1954,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "55 Acres",
    rating: 4.7,
    image: "/images/mit.jpg",
    location: "Muzaffarpur, Bihar",
    website: "https://mitmuzaffarpur.ac.in",
    email: "principal@mitmuzaffarpur.ac.in",
    phone: "+91-621-2260008",
    about:
      "MIT Muzaffarpur is one of the premier engineering institutions in Bihar with strong placements and experienced faculty.",
    branches: ["CSE","IT","ECE","EEE","Mechanical","Civil"],
    facilities: ["Hostel","Library","Gym","Sports","Labs","Auditorium"]
  },

  {
    id: 3,
    name: "Nalanda College of Engineering",
    shortName: "NCE Chandi",
    district: "Nalanda",
    established: 2008,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "100 Acres",
    rating: 4.3,
    image: "/images/nce.jpg",
    location: "Chandi, Nalanda",
    website: "https://ncechandi.ac.in",
    email: "principal@ncechandi.ac.in",
    phone: "+91-6112-255111",
    about:
      "NCE Chandi offers quality engineering education with modern infrastructure and growing placement opportunities.",
    branches: ["CSE","Civil","Mechanical","EEE","ECE"],
    facilities: ["Hostel","Library","Sports","Labs","WiFi"]
  },

  {
    id: 4,
    name: "Darbhanga College of Engineering",
    shortName: "DCE Darbhanga",
    district: "Darbhanga",
    established: 2008,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "50 Acres",
    rating: 4.2,
    image: "/images/dce.jpg",
    location: "Darbhanga, Bihar",
    website: "https://dcedarbhanga.ac.in",
    email: "principal@dce.ac.in",
    phone: "+91-6272-000000",
    about:
      "DCE provides quality engineering education with well-equipped laboratories and hostel facilities.",
    branches: ["CSE","Civil","Mechanical","EEE","ECE"],
    facilities: ["Hostel","Library","Labs","Sports","Cafeteria"]
  },

  {
    id: 5,
    name: "Gaya College of Engineering",
    shortName: "GCE Gaya",
    district: "Gaya",
    established: 2008,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "87 Acres",
    rating: 4.4,
    image: "/images/gce-gaya.jpg",
    location: "Gaya, Bihar",
    website: "https://gcegaya.ac.in",
    email: "principal@gcegaya.ac.in",
    phone: "+91-631-000000",
    about:
      "GCE Gaya is among Bihar's leading engineering colleges with excellent infrastructure and academic environment.",
    branches: ["CSE","Civil","Mechanical","EEE","ECE"],
    facilities: ["Hostel","Library","Sports","Labs","WiFi","Gym"]
  },

  {
    id: 6,
    name: "Shri Phanishwar Nath Renu Engineering College",
    shortName: "SPNREC Araria",
    district: "Araria",
    established: 2019,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "40 Acres",
    rating: 4.1,
    image: "/images/spnrec.jpg",
    location: "Araria, Bihar",
    website: "https://spnrec.ac.in",
    email: "principal@spnrec.ac.in",
    phone: "+91-0000000000",
    about:
      "A rapidly growing government engineering college with modern infrastructure and active student communities.",
    branches: ["CSE","Civil","Mechanical","EEE"],
    facilities: ["Hostel","Library","Labs","Sports","WiFi"]
  },

  {
    id: 7,
    name: "Bakhtiyarpur College of Engineering",
    shortName: "BCE Bakhtiyarpur",
    district: "Patna",
    established: 2016,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "70 Acres",
    rating: 4.2,
    image: "/images/bakhtiyarpur.jpg",
    location: "Bakhtiyarpur, Patna",
    website: "https://bcebakhtiyarpur.ac.in",
    email: "principal@bcebakhtiyarpur.ac.in",
    phone: "+91-0000000000",
    about:
      "Government engineering college with good academic environment and expanding facilities.",
    branches: ["CSE","Civil","Mechanical","EEE","ECE"],
    facilities: ["Hostel","Library","Labs","Sports","WiFi"]
  },

  {
    id: 8,
    name: "Motihari College of Engineering",
    shortName: "MCE Motihari",
    district: "East Champaran",
    established: 2008,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "48 Acres",
    rating: 4.0,
    image: "/images/mce.jpg",
    location: "Motihari, Bihar",
    website: "https://motihariengg.ac.in",
    email: "principal@mce.ac.in",
    phone: "+91-0000000000",
    about:
      "Government engineering college offering quality technical education with experienced faculty.",
    branches: ["CSE","Civil","Mechanical","EEE"],
    facilities: ["Hostel","Library","Labs","Sports"]
  },

  {
    id: 9,
    name: "Purnea College of Engineering",
    shortName: "PCE Purnea",
    district: "Purnea",
    established: 2017,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "65 Acres",
    rating: 4.0,
    image: "/images/pce.jpg",
    location: "Purnea, Bihar",
    website: "https://purneaengineering.ac.in",
    email: "principal@pce.ac.in",
    phone: "+91-0000000000",
    about:
      "One of the newer government engineering colleges with modern classrooms and laboratories.",
    branches: ["CSE","Civil","Mechanical","EEE"],
    facilities: ["Hostel","Library","Sports","Labs","WiFi"]
  },

  {
    id: 10,
    name: "Saharsa College of Engineering",
    shortName: "SCE Saharsa",
    district: "Saharsa",
    established: 2017,
    type: "Government",
    university: "Bihar Engineering University",
    approval: "AICTE",
    campus: "50 Acres",
    rating: 3.9,
    image: "/images/sce.jpg",
    location: "Saharsa, Bihar",
    website: "https://scebihar.ac.in",
    email: "principal@sce.ac.in",
    phone: "+91-0000000000",
    about:
      "A growing engineering college providing quality education with modern academic facilities.",
    branches: ["CSE","Civil","Mechanical","EEE"],
    facilities: ["Hostel","Library","Labs","Sports","WiFi"]
  }
];



const CollegeInfo = () => {
  const { id } = useParams();

  const college = colleges.find((item) => item.id === Number(id));

  if (!colleges) {
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
            <p><strong>Principal:</strong> {college.principal}</p>
            <p><strong>Affiliation:</strong> {college.affiliation}</p>
            <p><strong>Approval:</strong> {college.approval}</p>
            <p><strong>Campus Size:</strong> {college.campus}</p>
          </div>
        </div>

        <div className="border rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3">
            <p>📞 {college.phone}</p>
            <p>✉️ {college.email}</p>
            <p>🌐 {college.website}</p>
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

    </section>
  );
};

export default CollegeInfo;