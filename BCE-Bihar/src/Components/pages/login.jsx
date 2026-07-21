import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center text-white text-2xl font-bold">
            B
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Sign in to your BEU Reviews account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
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

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
            />
          </div>

          <button
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
        <button className="w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition">
          Continue with Google
        </button>

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