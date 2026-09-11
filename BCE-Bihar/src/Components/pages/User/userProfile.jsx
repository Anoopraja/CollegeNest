import React, { useEffect, useState } from "react";
import authService from "../../appWrite/appwrite.js";
import conf from "../../appWrite/conf.js";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  // const [profile, setProfile] = useState(null);

  const [profile, setProfile] = useState({
    college: "",
    branch: "",
    year: "",
    about: "",
    name: "",
    // profileImage: "",
  });


  const getProfileInfo = async () => {
  try {
    const currentUser = await authService.getCurrentUser();

    const userInf = await authService.getUserInfo(currentUser.$id);

    // console.log("User Info:", userInf);

    setProfile(userInf);

    return userInf;
  } catch (error) {
    console.error("Error fetching profile info:", error);
  }
};
  useEffect(() => {
    getProfileInfo();
  }, []);
  const handleUpdateProfile = async () => {
    try {
      let existingProfile;

      // 1. Check karo profile already database me hai ya nahi
      try {
        existingProfile = await authService.databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteUserInfo,
          user.$id
        );
      } catch (error) {
        if (error.code !== 404) {
          throw error;
        }

        existingProfile = null;
      }

      // 2. Profile already hai → UPDATE
      if (existingProfile) {
        const updatedProfile =
          await authService.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUserInfo,
            user.$id,
            profile,

          );

        setProfile(updatedProfile);

        // console.log("Profile updated:", updatedProfile);
      }

      // 3. Profile nahi hai → CREATE
      else {
        const newProfile =
          await authService.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUserInfo,
            user.$id,
            profile
          );

        setProfile(newProfile);

        // console.log("Profile created:", newProfile);
      }

      setIsEditing(false);
      alert("Profile updated successfully!");

    } catch (error) {
      console.error("Profile save/update failed:", error);
      alert("Profile save failed!");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userAccount = await authService.getCurrentUser();

        // console.log("PROFILE USER:", userAccount);

        setUser(userAccount);

        // Temporary profile data
        // Later Appwrite Database se aayega
        setProfile({
          college: "add college name" || profile.college,
          branch: "add branch" || profile.branch,
          year: "add Year" || profile.year,
          about: "add about your self" || profile.about,
          name: "add name" || profile.name,

        });
      } catch (error) {
        console.error("User fetch failed:", error);
        setUser(null);
      }
    };

    getUser();
  }, []);

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
                profile.name || "User"
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
              <p className="text-sm text-gray-500 mb-2">
                Name
              </p>

              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-600"
                />
              ) : (
                <p className="font-medium text-gray-900">
                  {profile.name || "Not added"}
                </p>
              )}
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
              <p className="text-sm text-gray-500 mb-2">
                College
              </p>

              {isEditing ? (
                <input
                  type="text"
                  value={profile.college}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      college: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-600"
                />
              ) : (
                <p className="font-medium text-gray-900">
                  {profile.college || "Not added"}
                </p>
              )}
            </div>

            {/* Branch */}
            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-2">
                Branch
              </p>

              {isEditing ? (
                <input
                  type="text"
                  value={profile.branch}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      branch: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-600"
                />
              ) : (
                <p className="font-medium text-gray-900">
                  {profile.branch || "Not added"}
                </p>
              )}
            </div>

            {/* Year */}
            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-2">
                Year
              </p>

              {isEditing ? (
                <input
                  type="text"
                  value={profile.year}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      year: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-600"
                />
              ) : (
                <p className="font-medium text-gray-900">
                  {profile.year || "Not added"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ================= BIO ================= */}

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            About
          </h2>

          <div className="border rounded-xl p-4">

            {isEditing ? (
              <textarea
                value={profile.about}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    about: e.target.value,
                  })
                }
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-600 resize-none"
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {profile.about || "No about added yet."}
              </p>
            )}

          </div>
        </div>

        {/* ================= ACCOUNT INFORMATION ================= */}

       

        {/* ================= EDIT / SAVE BUTTON ================= */}

        <div className="mt-6 flex gap-3">

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleUpdateProfile}
                type="submit"
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Changes
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </>
          )}

        </div>

      </div>
      <div>
        <p className="text-sm text-gray-400 mt-4 text-center">
          🔒 **Your data is securely saved and protected.**
        </p>
      </div>
    </div>
  );
}

export default Profile;