import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // 🔹 Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return;
    }

    // 🔹 Create User with Email & Password
    createUser(email, password)
      .then((result) => {
        // 🔹 Update Profile (Name & Photo)
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Registration Successful 🌿");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  // 🔹 Google Sign-In
  const handleGoogleRegister = () => {
    googleLogin()
      .then(() => {
        toast.success("Registered with Google 🌱");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-green-800 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-green-800 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Enter photo URL"
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-green-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-green-800 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-green-600"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Register */}
        <button
          onClick={handleGoogleRegister}
          className="w-full border border-green-500 text-green-700 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-50"
        >
          <FaGoogle /> Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
