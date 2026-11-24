
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  MessageSquare,
  Users,
  PlusCircle,
  Settings,
  UserRound,
  ShieldCheck,
  LogOut,
  Mail,
  CalendarDays,
  Phone,
  Activity,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

import api from "../../api/api.js";

// Change these paths according to your App.jsx routes.
const ADMIN_ROUTES = {
  dashboard: "/admin",
  colleges: "/admin/colleges",
  addCollege: "/admin/college/add",
  reviews: "/admin/reviews",
  users: "/admin/users",
  profile: "/admin/profile",
  settings: "/admin/settings",
};

function getCount(response, collectionKeys = []) {
  const body = response?.data;
  const payload = body?.data ?? body;

  if (typeof payload === "number") return payload;

  if (Array.isArray(payload)) return payload.length;

  if (payload && typeof payload === "object") {
    // Supports APIs returning { data: { length: 10 } }
    if (typeof payload.length === "number") {
      return payload.length;
    }

    if (typeof payload.count === "number") {
      return payload.count;
    }

    if (typeof payload.total === "number") {
      return payload.total;
    }

    for (const key of collectionKeys) {
      if (Array.isArray(payload[key])) {
        return payload[key].length;
      }
    }
  }

  return 0;
}

function formatDate(date) {
  if (!date) return "Not available";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Not available";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function AdminProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [stats, setStats] = useState({
    colleges: 0,
    reviews: 0,
    users: 0,
  });

  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);

  // Admin authentication
  useEffect(() => {
    let active = true;

    const getAdmin = async () => {
      try {
        const response = await api.get("/admin/me");
        const data = response.data;

        const admin =
          data.admin ||
          data.user ||
          data.data?.admin ||
          data.data?.user;

        if (!admin || admin.role !== "admin") {
          navigate("/user/login");
          return;
        }

        if (active) {
          setUser(admin);
        }
      } catch (error) {
        console.error("Admin authentication failed:", error);
        navigate("/admin/login");
      } finally {
        if (active) setLoading(false);
      }
    };

    getAdmin();

    return () => {
      active = false;
    };
  }, [navigate]);

  // Fetch platform statistics
  const fetchStats = async () => {
    setStatsLoading(true);

    const requests = await Promise.allSettled([
      api.get("/college"),
      api.get("/review/allreview"),
      api.get("/user/alluser"),
    ]);

    const [collegeResult, reviewResult, userResult] = requests;

    setStats({
      colleges:
        collegeResult.status === "fulfilled"
          ? getCount(collegeResult.value, ["colleges", "college"])
          : 0,

      reviews:
        reviewResult.status === "fulfilled"
          ? getCount(reviewResult.value, ["reviews", "review"])
          : 0,

      users:
        userResult.status === "fulfilled"
          ? getCount(userResult.value, ["users", "user"])
          : 0,
    });

    requests.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(
          `Failed to fetch statistic ${index + 1}:`,
          result.reason
        );
      }
    });

    setStatsLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      navigate("/user/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const initials = user?.username
    ? user.username
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "AD";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-sm text-gray-500">
            Loading admin profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const adminActions = [
    {
      title: "Manage Colleges",
      description: "View, edit and remove college listings.",
      icon: GraduationCap,
      color: "blue",
      path: ADMIN_ROUTES.colleges,
    },
    {
      title: "Add New College",
      description: "Add a new college to CollegeNest.",
      icon: PlusCircle,
      color: "green",
      path: ADMIN_ROUTES.addCollege,
    },
    {
      title: "Manage Reviews",
      description: "Review and moderate student feedback.",
      icon: MessageSquare,
      color: "orange",
      path: ADMIN_ROUTES.reviews,
    },
    {
      title: "Manage Users",
      description: "View registered users and manage accounts.",
      icon: Users,
      color: "purple",
      path: ADMIN_ROUTES.users,
    },
    {
      title: "Admin Profile",
      description: "View your administrator account details.",
      icon: UserRound,
      color: "indigo",
      path: ADMIN_ROUTES.profile,
    },
    {
      title: "Platform Settings",
      description: "Manage platform configuration.",
      icon: Settings,
      color: "gray",
      path: ADMIN_ROUTES.settings,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <LayoutDashboard size={18} />
              <span className="text-sm font-semibold">
                COLLEGENEST ADMIN PANEL
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your CollegeNest platform from one place.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchStats}
              disabled={statsLoading}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
            >
              <RefreshCw
                size={16}
                className={statsLoading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>

        {/* Admin Profile */}
        <section className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6">

            <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-100">
              <span className="text-3xl font-bold text-white">
                {initials}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.username || "CollegeNest Admin"}
                </h2>

                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                  <ShieldCheck size={14} />
                  ADMINISTRATOR
                </span>
              </div>

              <p className="text-gray-500 mt-1">
                CollegeNest Platform Administrator
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Mail size={15} />
                  {user.email || "Email not available"}
                </span>

                {user.phone && (
                  <span className="flex items-center gap-2">
                    <Phone size={15} />
                    {user.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl self-start md:self-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold">
                Active Account
              </span>
            </div>
          </div>
        </section>

        {/* Platform Statistics */}
        <section className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Platform Overview
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Live statistics from your database.
              </p>
            </div>

            <span className="text-xs text-gray-400">
              {statsLoading ? "Updating..." : "Statistics loaded"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard
              title="Total Colleges"
              value={stats.colleges}
              description="Colleges listed on CollegeNest"
              icon={GraduationCap}
              color="blue"
              loading={statsLoading}
            />

            <StatCard
              title="Total Reviews"
              value={stats.reviews}
              description="Student reviews submitted"
              icon={MessageSquare}
              color="orange"
              loading={statsLoading}
            />

            <StatCard
              title="Registered Users"
              value={stats.users}
              description="Total registered platform users"
              icon={Users}
              color="green"
              loading={statsLoading}
            />
          </div>
        </section>

        {/* Account Information */}
        <section className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">
              Administrator Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Details associated with your admin account.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            <InfoRow
              label="Full Name"
              value={user.username || "Not available"}
            />

            <InfoRow
              label="Email Address"
              value={user.email || "Not available"}
            />

            <InfoRow
              label="Account Role"
              value={user.role || "admin"}
            />

            <InfoRow
              label="Phone Number"
              value={user.phone || "Not provided"}
            />

            <InfoRow
              label="Account ID"
              value={user._id || user.id || "Not available"}
            />

            <InfoRow
              label="Member Since"
              value={formatDate(user.createdAt)}
            />

            <InfoRow
              label="Account Status"
              value="Active"
            />
          </div>
        </section>

        {/* Admin Actions */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              Platform Management
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Access all available administration tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adminActions.map((action) => (
              <AdminAction
                key={action.title}
                {...action}
                onClick={() => navigate(action.path)}
              />
            ))}
          </div>
        </section>

        {/* Security Information */}
        <section className="mt-8 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  Account Security
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Your administrator account has access to platform management.
                </p>
              </div>
            </div>

            <div className="text-sm text-green-400 flex items-center gap-2">
              <Activity size={17} />
              Account Active
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-gray-400 mt-8">
          CollegeNest Admin Dashboard
        </p>
      </div>
    </div>
  );
}


// Animated Statistics Card
function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color,
  loading,
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Math.max(0, Number(value) || 0);

    if (loading) {
      setDisplayValue(0);
      return;
    }

    if (target === 0) {
      setDisplayValue(0);
      return;
    }

    let animationFrame;
    const duration = 1200;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(
        Math.floor(easedProgress * target)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, loading]);

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-3 tabular-nums">
            {loading ? (
              <span className="inline-block w-16 h-8 rounded bg-gray-100 animate-pulse" />
            ) : (
              displayValue.toLocaleString("en-IN")
            )}
          </p>
        </div>

        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[color]}`}>
          <Icon size={23} />
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        {description}
      </p>
    </div>
  );
}


// Account Information Row
function InfoRow({ label, value }) {
  return (
    <div className="px-6 py-4 border-b border-gray-100">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
        {label}
      </p>

      <p className="text-sm font-semibold text-gray-800 mt-1 break-all">
        {value}
      </p>
    </div>
  );
}


// Admin Action Card
function AdminAction({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    green: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
    gray: "bg-gray-100 text-gray-600 group-hover:bg-gray-800 group-hover:text-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colors[color]}`}>
          <Icon size={23} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-gray-300 group-hover:text-blue-600 transition"
        />
      </div>

      <h3 className="font-bold text-gray-900 mt-5">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {description}
      </p>
    </button>
  );
}

export default AdminProfile;
