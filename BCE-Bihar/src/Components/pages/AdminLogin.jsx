import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

   const adminLogin = async (e) => {
    e.preventDefault();

    console.log("1. FUNCTION START");

    setError("");
    setLoading(true);

    try {
        console.log("2. TRY START");
        console.log("3. BEFORE API");

        const response = await api.post("/admin/adminlogin", {
            gmail: gmail.trim(),
            password: password,
        });

        console.log("4. AFTER API");
        console.log("Response:", response.data);

        if (response.data.success) {
            navigate("/");
        } else {
            setError(response.data.message || "Admin login failed");
        }

    } catch (error) {
        console.error("Login failed:", error);

        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);

        setError(
            error.response?.data?.message ||
            "Admin login failed"
        );
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5">

            {/* Login Card */}
            <div className="relative w-full max-w-[390px] min-h-[650px] overflow-hidden rounded-[32px] bg-white shadow-xl">

                {/* ================= TOP DESIGN ================= */}
                <div className="relative h-[300px] overflow-hidden">

                    {/* Blue background shape */}
                    <div className="absolute -top-20 -left-20 h-[300px] w-[330px] rounded-full bg-blue-600" />

                    {/* Dark blue shape */}
                    <div className="absolute -top-16 right-[-100px] h-[300px] w-[330px] rounded-full bg-blue-900" />

                    {/* Light blue shape */}
                    <div className="absolute top-[155px] right-[-110px] h-[230px] w-[300px] rounded-full bg-blue-300" />

                    {/* Back Button */}
                    <button
                        onClick={() => navigate("/")}
                        className="absolute left-7 top-7 z-10 text-2xl font-light text-white"
                    >
                        ←
                    </button>

                    {/* Welcome Text */}
                    <div className="absolute left-8 top-[135px] z-10">
                        <p className="text-4xl font-bold leading-tight text-white">
                            Welcome
                            <br />
                            Back
                        </p>

                        <p className="mt-3 text-sm font-medium text-blue-100">
                            CollegeNest Admin
                        </p>
                    </div>
                </div>

                {/* ================= FORM ================= */}
                <form
                    onSubmit={adminLogin}
                    className="px-8 pb-8"
                >

                    {/* Email */}
                    <div className="mb-7">
                        <label className="mb-2 block text-sm text-gray-400">
                            Email
                        </label>

                        <input
                            type="email"
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                            placeholder="admin@example.com"
                            required
                            className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 pb-2 text-lg text-gray-800 outline-none placeholder:text-gray-400 focus:border-blue-600"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="mb-2 block text-sm text-gray-400">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 pb-2 text-lg tracking-widest text-gray-800 outline-none placeholder:text-gray-400 focus:border-blue-600"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="mb-4 text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {/* Sign In */}
                    <div className="mb-14 flex items-center justify-between">

                        {/* <span className="text-xl font-semibold text-gray-800">
                            {loading ? "Signing in..." : "Sign in"}
                        </span> */}

                        <button
                            type="submit"
                            // onClick={adminLogin}
                            disabled={loading}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            →
                        </button>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex items-center justify-between text-sm">

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="text-gray-600 underline underline-offset-4 hover:text-blue-600"
                        >
                            Back to CollegeNest
                        </button>

                        {/* <button
                            type="button"
                            className="text-gray-600 underline underline-offset-4 hover:text-blue-600"
                        >
                            Forgot Password
                        </button> */}

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdminLogin;