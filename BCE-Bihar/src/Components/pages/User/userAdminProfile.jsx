import { useEffect, useState } from "react";
import api from "../../api/api.js";
import { useNavigate } from "react-router-dom";

function AdminProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [college] = useState([]);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const { data } = await api.get("/admin/me");
        if (data.admin?.role !== "admin") {
          navigate("/user/login");
          return;
        }
        setUser(data.admin);
      } catch {
        navigate("/admin/login");
      }
    };

    getAdmin();
  }, [navigate]);

  // const getUser = async () => {
  //   try {
  //     const { data: userData } = await api.get("/user/alluser");
  //     const { data: collegeData } = await api.get("/college");
  //     console.log("USER DATA:", userData);
  //     console.log("COLLEGE DATA:", collegeData);

  //     setUser(userData.user);
  //     setCollege(collegeData.college);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setStats(null);
  //     navigate("/user/login");
  //   }
  // };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Admin Profile
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your account and CollegeNest platform activity.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-white">
                CN
              </span>
            </div>

            {/* Admin Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {user?.username || "CollegeNest Admin"}
                </h2>

                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
                  ADMIN
                </span>
              </div>

              <p className="text-gray-500 mt-1">
                Platform Administrator
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {user?.email || ""}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-green-600 font-medium">
                  Active
                </span>
              </div>
            </div>

            {/* Edit Button */}
            {/* <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-5 py-2.5 rounded-xl border border-gray-300
                         text-sm font-medium text-gray-700
                         hover:bg-gray-50 transition"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button> */}

          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

          <StatCard
            title="Colleges"
              value={college.length}
            description="Listed colleges"
          />

          <StatCard
            title="Reviews"
            value="5,240"
            description="Total reviews"
          />

          <StatCard
            title="Users"
              value={user ? 1 : 0}
            description="Registered users"
          />

          <StatCard
            title="Reports"
            value="24"
            description="Pending reports"
          />

        </div>

        {/* Account Information */}
        <div className="bg-white border border-gray-200 rounded-2xl mt-6 overflow-hidden">

          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Account Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your CollegeNest administrator account details.
            </p>
          </div>

          <div className="divide-y divide-gray-100">

            <InfoRow
              label="Full Name"
              value={user?.username || ""}
            />

            <InfoRow
              label="Email"
              value={user?.email || ""}
            />

            <InfoRow
              label="Role"
              value={user?.role || "admin"}
            />

            <InfoRow
              label="Account Status"
              value="Active"
            />

            <InfoRow
              label="Member Since"
              value="September 2026"
            />

          </div>
        </div>

        {/* Admin Actions */}
        <div className="bg-white border border-gray-200 rounded-2xl mt-6 p-6">

          <h2 className="text-lg font-semibold text-gray-900">
            Admin Actions
          </h2>

          <p className="text-sm text-gray-500 mt-1 mb-5">
            Quickly access important platform management tools.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

            <AdminAction
              title="Manage Colleges"
              description="Add, edit or remove colleges"
              icon="🏫"
            />

            <AdminAction
              title="Manage Reviews"
              description="Moderate student reviews"
              icon="💬"
            />

            <AdminAction
              title="Manage Users"
              description="View and manage users"
              icon="👥"
            />

            <AdminAction
              title="Reports"
              description="Review reported content"
              icon="⚠️"
            />

            <AdminAction
              title="Community"
              description="Moderate community posts"
              icon="🌐"
            />

            <AdminAction
              title="Platform Settings"
              description="Configure CollegeNest"
              icon="⚙️"
            />

          </div>
        </div>

        {/* Security */}
        <div className="bg-white border border-gray-200 rounded-2xl mt-6 p-6">

          <h2 className="text-lg font-semibold text-gray-900">
            Security
          </h2>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div>
              <p className="font-medium text-gray-900">
                Administrator account
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Keep your admin credentials secure.
              </p>
            </div>

            <button
              className="px-5 py-2.5 rounded-xl bg-gray-900
                         text-white text-sm font-medium
                         hover:bg-gray-800 transition"
            >
              Change Password
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}


/* ---------------- Components ---------------- */

function StatCard({ title, value, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-2xl font-bold text-gray-900 mt-2">
        {value}
      </p>

      <p className="text-xs text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">

      <span className="text-sm text-gray-500 sm:w-40">
        {label}
      </span>

      <span className="text-sm font-medium text-gray-900">
        {value}
      </span>

    </div>
  );
}


function AdminAction({ title, description, icon }) {
  return (
    <button
      className="text-left p-4 rounded-xl border border-gray-200
                 hover:border-blue-300 hover:bg-blue-50/40
                 transition group"
    >
      <div className="flex items-start gap-4">

        <div className="w-10 h-10 rounded-lg bg-gray-100
                        flex items-center justify-center
                        group-hover:bg-blue-100 transition">
          {icon}
        </div>

        <div>
          <h3 className="font-medium text-gray-900">
            {title}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {description}
          </p>
        </div>

      </div>
    </button>
  );
}


export default AdminProfile;