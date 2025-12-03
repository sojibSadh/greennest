import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../auth/AuthProvider";

const Login = () => {
    const { signIn, googleLogin, resetPass } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setEmail(email);


        signIn(email, password)
            .then((result) => {
                toast.success("Login Successful 🌿");
                navigate(from, { replace: true });
            })
            .catch((error) => toast.error('Email or PassWord not Match, Try Again'));
    };

    const handleReset = (e) => {
        e.preventDefault();
        resetPass(email)
            .then((result) => {
                toast.success("Password reset email sent!");
                // navigate(from, { replace: true });
            })
            .catch((error) => toast.error('Email or PassWord not Match, Try Again'));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success("Logged in with Google ✅");
                navigate(from, { replace: true });
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-green-50 relative z-10">
            <div className="relative animated-border-wrap md:w-[35%] rounded-2xl">
                <div className="bg-white  m-1 p-8 shadow-xl rounded-2xl   border border-green-100">
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                        Login to GreenNest
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-green-800 font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
                                placeholder="Enter your email"
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
                                    className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-500"
                                    placeholder="Enter your password"
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
                            Login
                        </button>
                        <p onClick={handleReset} className="w-full text-red-500 py-3 text-center cursor-pointer  font-bold"> Forget Password </p>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-5">
                        <hr className="flex-1 border-gray-300" />
                        <span className="px-2 text-gray-400">or</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full border border-green-500 text-green-700 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-green-50"
                    >
                        <FaGoogle /> Continue with Google
                    </button>

                    {/* Signup link */}
                    <p className="text-center text-sm mt-5 text-gray-600">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-green-600 font-semibold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
