import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../appWrite/appwrite.js";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const signup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
       const userAccount = await authService.createAccount({
        email,
        password,
        name: fullName,
      });
      if (userAccount) {
        return authService.login({ email:email.trim(), password });
      }
      setError("");
      navigate("/");
    } catch (e) {
      console.error(e);
      setError("Signup failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <h1 className="text-2xl font-bold text-gray-900 mt-4">
            Create Account
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Join the CollegeNest Reviews community
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={signup}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@college.edu.in"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-700"
            />
          </div>

          {/* Password */}
          <div>


            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-700"
            />
           <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="relative left-85 bottom-6 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
              placeholder="Create your Confirm password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-700"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="relative left-85 bottom-6 -translate-y-1/2"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
            />

            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-700 cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )} */}

          {/* Sign Up Button */}
          <button
            value={signup}
            onChange={(e) => setSignup(e.target.value)}
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition"
          >
            Create Account
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

        {/* Google */}
        <button className="w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition">
          Continue with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;