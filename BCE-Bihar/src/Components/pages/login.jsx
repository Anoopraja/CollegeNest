import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appWrite/appwrite.js";
import { Eye, EyeOff } from "react-feather";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    try {
      const session = await authService.login({ email: email.trim(), password });
      setError("");
      navigate("/");
    } catch (error) {
      console.error("LOGIN FAILED:", error);
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm mt-2 text-center">
            login in to your CollegeNest Reviews account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={login}>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-blue-700 hover:underline"
              >
                Forgot?
              </button>
            </div>

            <div className="overflow-hidden relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 "
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>

          <span className="mx-4 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Google Login */}
        {/* <button className="w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition">
          Continue with Google
        </button> */}

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;