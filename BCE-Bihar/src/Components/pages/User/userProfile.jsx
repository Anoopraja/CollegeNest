
import React, { useEffect, useState } from "react";
import authService from "../../appWrite/appwrite.js";


function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);

  // Custom profile information
  const [profile, setProfile] = useState({
    college: "",
    branch: "",
    year: "",
    bio: "",
    profileImage: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const userAccount = await authService.getCurrentUser();

        console.log("PROFILE USER:", userAccount);

        setUser(userAccount);

        // Temporary profile data
        // Later ye Appwrite Database se aayega
        setProfile({
          college: "Shri Phanishwar Nath Renu Engineering College",
          branch: "Computer Science & Engineering",
          year: "3rd Year",
          bio: "CSE student interested in web development and technology.",
          profileImage: "",
        });
      } catch (error) {
        console.error("User fetch failed:", error);
        setUser(null);
      }
    };

    getUser();
  }, []);

  // Loading
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6">

        {/* ================= PROFILE HEADER ================= */}

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

          {/* Profile Image */}

          <img
            src={
              profile.profileImage ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.name || "User"
              )}&background=2563eb&color=fff&size=150`
            }
            alt={user.name || "User"}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="text-center sm:text-left">

            <h1 className="text-2xl font-bold text-gray-900">
              {user.name || "No Name"}
            </h1>

            <p className="text-gray-500">
              {user.email}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              User ID: {user.$id}
            </p>

            {/* College */}

            {profile.college && (
              <p className="text-sm text-gray-600 mt-2">
                {profile.college}
              </p>
            )}

            {/* Branch + Year */}

            <p className="text-sm text-gray-500 mt-1">
              {profile.branch}
              {profile.branch && profile.year && " • "}
              {profile.year}
            </p>

          </div>
        </div>

        {/* ================= BASIC INFORMATION ================= */}

        <div className="mt-8">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Name */}

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {user.name || "Not available"}
              </p>
            </div>

            {/* Email */}

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-medium text-gray-900 mt-1 break-all">
                {user.email || "Not available"}
              </p>
            </div>

            {/* College */}

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                College
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {profile.college || "Not added"}
              </p>
            </div>

            {/* Branch */}

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Branch
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {profile.branch || "Not added"}
              </p>
            </div>

            {/* Year */}

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Year
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {profile.year || "Not added"}
              </p>
            </div>

          </div>
        </div>

        {/* ================= BIO ================= */}

        <div className="mt-6">

          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            About
          </h2>

          <div className="border rounded-xl p-4">

            <p className="text-gray-700 leading-relaxed">
              {profile.bio || "No bio added yet."}
            </p>

          </div>
        </div>

        {/* ================= ACCOUNT INFORMATION ================= */}

        <div className="mt-8">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Account Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Email Verification */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Email Verification
              </p>

              <p
                className={`font-medium mt-1 ${
                  user.emailVerification
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {user.emailVerification
                  ? "Verified"
                  : "Not Verified"}
              </p>

            </div>

            {/* Phone */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {user.phone || "Not added"}
              </p>

            </div>

            {/* Phone Verification */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Phone Verification
              </p>

              <p
                className={`font-medium mt-1 ${
                  user.phoneVerification
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {user.phoneVerification
                  ? "Verified"
                  : "Not Verified"}
              </p>

            </div>

            {/* Account Status */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <p className="font-medium text-green-600 mt-1">
                {user.status ? "Active" : "Inactive"}
              </p>

            </div>

            {/* Account Created */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Account Created
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {formatDate(user.registration)}
              </p>

            </div>

            {/* Last Login */}

            <div className="border rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Last Login
              </p>

              <p className="font-medium text-gray-900 mt-1">
                {formatDate(user.accessedAt)}
              </p>

            </div>

          </div>
        </div>

        {/* ================= USER ID ================= */}

        <div className="mt-6 border rounded-xl p-4">

          <p className="text-sm text-gray-500">
            User ID
          </p>

          <p className="font-mono text-sm text-gray-900 mt-1 break-all">
            {user.$id}
          </p>

        </div>

        {/* ================= EDIT BUTTON ================= */}

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>

      </div>
    </div>
  );
}

export default Profile;

