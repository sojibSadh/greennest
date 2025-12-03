import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../auth/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Profile updated successfully 🌱");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        My Profile
      </h2>

      <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        {/* User Photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-200">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt={user?.displayName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info & Update Form */}
        <form onSubmit={handleUpdate} className="flex-1 space-y-4">
          <div>
            <label className="block text-green-800 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full border border-green-200 rounded-lg p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
