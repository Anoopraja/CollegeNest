import React, { useEffect, useState } from "react";
import authService from "../../appWrite/appwrite.js";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userAccount = await authService.getCurrentUser();

        console.log("PROFILE USER:", userAccount);

        setUser(userAccount);
      } catch (error) {
        console.error("User fetch failed:", error);
      }
    };

    getUser();
  }, []);

  // Jab tak Appwrite se user nahi aata
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-4">

          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&background=2563eb&color=fff`}
            alt={user.name}
            className="w-20 h-20 rounded-full"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user.name}
            </h1>

            <p className="text-gray-500">
              {user.email}
            </p>
          </div>

        </div>

        <div className="mt-8 space-y-4">

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-medium">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email Verification
            </p>

            <p className="font-medium">
              {user.emailVerification ? "Verified" : "Not Verified"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Account Created
            </p>

            <p className="font-medium">
              {new Date(user.registration).toLocaleDateString()}
            </p>
          </div>

        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isEditing ? "Cancel " : "Edit Profile"}
        </button>

      </div>

    </div>
  );
}

export default Profile;