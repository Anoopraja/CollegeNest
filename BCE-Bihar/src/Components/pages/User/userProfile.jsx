import { useEffect, useMemo, useState } from "react";

import {
  UserRound,
  Mail,
  GraduationCap,
  GitBranch,
  CalendarDays,
  Pencil,
  Save,
  X,
  LogOut,
  ShieldCheck,
  ShieldAlert,
  FileText,
  Sparkles,
} from "lucide-react";

import api from "../../api/api.js";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState({
    college: "",
    branch: "",
    year: "",
    bio: "",
    username: "",
    profileImage: "",
  });

  // =========================
  // GET PROFILE
  // =========================
  const getProfileInfo = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/user/me");

      const currentUser = data.user;

      if (!currentUser) {
        navigate("/user/login");
        return;
      }

      console.log("Current user:", currentUser);

      setUser(currentUser);

      setIsVerified(true);

      setProfile({
        college: currentUser.college || "",
        branch: currentUser.branch || "",
        year: currentUser.year || "",
        bio: currentUser.bio || "",
        username: currentUser.username || "",
        profileImage: currentUser.profileImage || "",
      });
    } catch (error) {
      console.error("Error fetching profile:", error);

      setUser(null);

      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  // =========================
  // PROFILE COMPLETION
  // =========================
  const completion = useMemo(() => {
    const fields = [
      "username",
      "college",
      "branch",
      "year",
      "bio",
    ];

    const filledFields = fields.filter(
      (field) => profile[field]?.trim().length > 0
    ).length;

    return Math.round((filledFields / fields.length) * 100);
  }, [profile]);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (field, value) => {
    setProfile((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // =========================
  // UPDATE PROFILE
  // =========================
  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      setSaving(true);

      const userId = user._id || user.id;

      console.log("Updating user:", userId);

      console.log("Sending profile:", {
        college: profile.college,
        branch: profile.branch,
        year: profile.year,
        bio: profile.bio,
        username: profile.username,
      });

      const { data } = await api.post(
        `/user/updateprofile/${userId}`,
        {
          college: profile.college,
          branch: profile.branch,
          year: profile.year,
          bio: profile.bio,
          username: profile.username,
        }
      );

      console.log("Updated profile response:", data);

      const updatedProfile = data.user;

      setProfile({
        college: updatedProfile.college || "",
        branch: updatedProfile.branch || "",
        year: updatedProfile.year || "",
        bio: updatedProfile.bio || "",
        username: updatedProfile.username || "",
        profileImage: updatedProfile.profileImage || "",
      });

      setUser((previous) => ({
        ...previous,
        username: updatedProfile.username,
        college: updatedProfile.college,
        branch: updatedProfile.branch,
        year: updatedProfile.year,
        bio: updatedProfile.bio,
      }));

      setIsEditing(false);


      console.log("ye bhai ho gya tera profile update")
      // alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile save failed:", error);

      console.error(
        "Backend response:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Profile save failed. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      await api.post("/user/logout");

      navigate("/user/login");
    } catch (error) {
      console.error("Logout failed:", error);

      alert("Logout failed. Please try again.");
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <UserRound size={30} />
          </div>

          <h2 className="text-xl font-bold text-gray-900">
            Loading your profile
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Please wait while we prepare your CollegeNest profile.
          </p>

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600" />

            <span
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"
              style={{ animationDelay: "150ms" }}
            />

            <span
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  // =========================
  // AVATAR
  // =========================
  const avatarUrl =
    profile.profileImage ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      profile.username || user.username || "User"
    )}&background=2563eb&color=fff&size=200`;

  // =========================
  // UI
  // =========================
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            CollegeNest Account
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Manage your personal information and keep your college identity
            updated.
          </p>
        </div>

        {/* Profile Header */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="h-20 bg-blue-600 sm:h-36" />

          <div className="px-5 pb-6 sm:px-8">
            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">

                {/* Avatar */}
                <div className="rounded-full border-4 border-white bg-white shadow-md">
                  <img
                    src={avatarUrl}
                    alt={profile.username || "Profile"}
                    className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                  />
                </div>

                {/* User Information */}
                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-2xl font-bold text-gray-900">
                      {profile.username || "Your Username"}
                    </h2>

                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                        <ShieldCheck size={14} />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                        <ShieldAlert size={14} />
                        Unverified
                      </span>
                    )}
                  </div>

                  <p className="mt-10 break-all text-sm text-gray-500">
                    {user.email}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">

                    {profile.college && (
                      <>
                        <GraduationCap
                          size={16}
                          className="text-blue-600"
                        />

                        <span>{profile.college}</span>
                      </>
                    )}

                    {profile.branch && (
                      <>
                        <span className="text-gray-300">
                          •
                        </span>

                        <span>{profile.branch}</span>
                      </>
                    )}

                    {profile.year && (
                      <>
                        <span className="text-gray-300">
                          •
                        </span>

                        <span>{profile.year}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">

          {/* Information Section */}
          <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Keep your details accurate and up to date.
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Pencil size={16} />

                  <span className="hidden sm:inline">
                    Edit
                  </span>
                </button>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* USERNAME */}
              <InfoField
                icon={<UserRound size={18} />}
                label="Username"
                value={profile.username}
                field="username"
                isEditing={isEditing}
                onChange={handleChange}
              />

              {/* EMAIL */}
              <InfoField
                icon={<Mail size={18} />}
                label="Email Address"
                value={user.email}
                disabled
              />

              {/* COLLEGE */}
              <InfoField
                icon={<GraduationCap size={18} />}
                label="College"
                value={profile.college}
                field="college"
                isEditing={isEditing}
                onChange={handleChange}
              />

              {/* BRANCH */}
              <InfoField
                icon={<GitBranch size={18} />}
                label="Branch"
                value={profile.branch}
                field="branch"
                isEditing={isEditing}
                onChange={handleChange}
              />

              {/* YEAR */}
              <InfoField
                icon={<CalendarDays size={18} />}
                label="Academic Year"
                value={profile.year}
                field="year"
                isEditing={isEditing}
                onChange={handleChange}
              />
            </div>

            {/* About */}
            <div className="mt-5">

              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText
                  size={18}
                  className="text-blue-600"
                />

                About You
              </div>

              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(event) =>
                    handleChange("bio", event.target.value)
                  }
                  rows={5}
                  placeholder="Tell something about yourself..."
                  className="w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              ) : (
                <div className="min-h-28 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm leading-7 text-gray-600">
                  {profile.bio ||
                    "You have not added anything about yourself yet."}
                </div>
              )}
            </div>

            {/* Edit Actions */}
            {isEditing && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">

                <button
                  onClick={handleUpdateProfile}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Save size={17} />

                  {saving
                    ? "Saving..."
                    : "Save Changes"}
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                >
                  <X size={17} />

                  Cancel
                </button>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Completion Card */}
            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Sparkles size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Complete your profile
                  </h3>

                  <p className="text-xs text-gray-500">
                    Improve your CollegeNest experience
                  </p>
                </div>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${completion}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Add your college, branch, year, and introduction to make your
                profile more useful to other students.
              </p>
            </section>

            {/* Account Status */}
            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

              <h3 className="mb-4 font-bold text-gray-900">
                Account Status
              </h3>

              <div className="flex items-start gap-3">

                {isVerified ? (
                  <ShieldCheck
                    className="mt-0.5 text-green-600"
                    size={20}
                  />
                ) : (
                  <ShieldAlert
                    className="mt-0.5 text-amber-600"
                    size={20}
                  />
                )}

                <div>

                  <p className="text-sm font-semibold text-gray-800">
                    {isVerified
                      ? "Email verified"
                      : "Email not verified"}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {isVerified
                      ? "Your email address has been successfully verified."
                      : "Please verify your email address to secure your account."}
                  </p>
                </div>
              </div>
            </section>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white px-5 py-3.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />

              Logout Account
            </button>
          </aside>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          🔒 Your CollegeNest profile information is securely stored.
        </p>
      </div>
    </main>
  );
}

// =========================
// INFO FIELD COMPONENT
// =========================

function InfoField({
  icon,
  label,
  value,
  field,
  isEditing,
  onChange,
  disabled = false,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-blue-200">

      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-600">
        <span className="text-blue-600">
          {icon}
        </span>

        {label}
      </div>

      {isEditing && field && !disabled ? (
        <input
          type="text"
          value={value || ""}
          onChange={(event) =>
            onChange(field, event.target.value)
          }
          placeholder={`Enter ${label.toLowerCase()}`}
          className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      ) : (
        <p className="break-words text-sm font-semibold text-gray-900">
          {value || "Not added yet"}
        </p>
      )}
    </div>
  );
}

export default Profile;