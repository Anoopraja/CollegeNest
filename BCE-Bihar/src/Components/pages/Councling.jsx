import React from "react";
import {
    GraduationCap,
    CalendarDays,
    FileText,
    School,
    Search,
    ArrowRight,
    CheckCircle,
    ClipboardList,
    BadgeCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const quickActions = [
    {
        title: "Registration",
        icon: <ClipboardList size={34} />,
        color: "bg-blue-100 text-blue-700",
    },
    {
        title: "Choice Filling",
        icon: <School size={34} />,
        color: "bg-green-100 text-green-700",
    },
    {
        title: "Seat Allotment",
        icon: <BadgeCheck size={34} />,
        color: "bg-orange-100 text-orange-700",
    },
    {
        title: "Documents",
        icon: <FileText size={34} />,
        color: "bg-purple-100 text-purple-700",
    },
];

const steps = [
    {
        title: "Registration",
        desc: "Register using your JEE Main details and create your account.",
    },
    {
        title: "Document Verification",
        desc: "Upload and verify all required documents.",
    },
    {
        title: "Choice Filling",
        desc: "Select your preferred engineering colleges and branches.",
    },
    {
        title: "Seat Allotment",
        desc: "Seats are allotted according to rank and preferences.",
    },
    {
        title: "Reporting",
        desc: "Report to the allotted college with original documents.",
    },
];

export default function Counselling() {
    return (
        <div className="bg-slate-50">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">

                <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
                <div className="absolute w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

                <div className="max-w-7xl mx-auto px-6 py-24">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                                BEU Engineering Counselling
                            </span>

                            <h1 className="text-5xl font-extrabold mt-6 leading-tight">
                                Bihar Engineering
                                <br />
                                Counselling Portal
                            </h1>

                            <p className="mt-6 text-blue-100 text-lg leading-8">
                                Find engineering colleges, explore branches, track counselling
                                schedules, upload documents, and stay updated with every round
                                of admission.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300 flex items-center gap-2">
                                    Start Counselling
                                    <ArrowRight size={18} />
                                </button>

                                <NavLink to="/college">
                                    <button

                                        className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 duration-300">
                                        View Colleges
                                    </button>
                                </NavLink>
                            </div>

                            <div className="grid grid-cols-3 gap-5 mt-14">

                                <div>
                                    <h2 className="text-3xl font-bold">38+</h2>
                                    <p className="text-blue-100">Engineering Colleges</p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold">15K+</h2>
                                    <p className="text-blue-100">Students</p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold">100+</h2>
                                    <p className="text-blue-100">Reviews</p>
                                </div>

                            </div>

                        </div>

                        <div>

                            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">

                                <div className="flex items-center gap-3 mb-6">

                                    <GraduationCap className="text-blue-700" size={34} />

                                    <h2 className="text-2xl font-bold">
                                        College Predictor
                                    </h2>

                                </div>

                                <input

                                    placeholder="Enter JEE Main Rank"
                                    className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input

                                    placeholder="Enter BCECE Rank"
                                    className="w-full border rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <select className="w-full border rounded-xl p-3 mb-4">

                                    <option>General</option>
                                    <option>OBC</option>
                                    <option>EWS</option>
                                    <option>SC</option>
                                    <option>ST</option>

                                </select>

                                <button className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 duration-300 flex justify-center gap-2">
                                    <Search />
                                    Predict Colleges
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= QUICK ACTIONS ================= */}

            <section className="max-w-7xl mx-auto py-20 px-6">

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold">
                        Quick Actions
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Everything you need for counselling in one place.
                    </p>

                </div>
                <NavLink to="/login">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {quickActions.map((item, index) => (


                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
                            >

                                <div
                                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <h3 className="font-bold text-xl mt-6">
                                    {item.title}
                                </h3>

                            </div>

                        ))}

                    </div>
                </NavLink>
            </section>

            {/* ================= PROCESS ================= */}

            <section className="bg-white py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-4xl font-bold">
                            Counselling Process
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Follow these steps to complete your admission.
                        </p>

                    </div>

                    <div className="space-y-8">

                        {steps.map((step, index) => (

                            <div
                                key={index}
                                className="flex gap-6 items-start"
                            >

                                <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">

                                    {index + 1}

                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 flex-1 shadow">

                                    <div className="flex items-center gap-2">

                                        <CheckCircle className="text-green-600" />

                                        <h3 className="font-bold text-xl">
                                            {step.title}
                                        </h3>

                                    </div>

                                    <p className="text-gray-600 mt-3">
                                        {step.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ===== Part 2 se yahin continue hoga ===== */}

        </div>
    );
}