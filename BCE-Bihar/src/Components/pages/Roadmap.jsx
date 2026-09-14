import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BookOpen,
    Code2,
    Target,
    Building2,
    GraduationCap,
    ChevronDown,
    CheckCircle2,
    Clock3,
    ArrowRight,
    BriefcaseBusiness,
    CalendarDays,
    FileText,
    X

} from "lucide-react";

const roadmapData = {


    CSE: {
        name: "Computer Science & Engineering",

        syllabus: {
            semester1: [
                "Engineering Mathematics I",
                "Engineering Physics",
                "Engineering Chemistry",
                "Programming Fundamentals",
                "Basic Electrical Engineering",
                "Engineering Graphics",
            ],
            semester2: [
                "Engineering Mathematics II",
                "Data Structures",
                "Object Oriented Programming",
                "Digital Logic",
                "Communication Skills",
                "Environmental Studies",
            ],
        },

        

        gate: [
            {
                year: "1st Year",
                title: "Build Foundation",
                items: [
                    "Programming fundamentals",
                    "Engineering Mathematics",
                    "Basic problem solving",
                    "Start GitHub",
                ],
            },
            {
                year: "2nd Year",
                title: "Start GATE Preparation",
                items: [
                    "Core CS subjects",
                    "Data Structures",
                    "Algorithms",
                    "Discrete Mathematics",
                ],
            },
            {
                year: "3rd Year",
                title: "Serious Preparation",
                items: [
                    "Complete core subjects",
                    "Previous year questions",
                    "Mock tests",
                    "Revision",
                ],
            },
            {
                year: "4th Year",
                title: "Final Revision",
                items: [
                    "Full syllabus revision",
                    "Mock tests",
                    "Previous year papers",
                    "Weak topic improvement",
                ],
            },
        ],

        government: [
            "SSC JE",
            "RRB JE",
            "State AE / JE",
            "GATE based PSU opportunities",
            "Other technical government exams",
        ],

        semester: [
            "Complete syllabus before exam month",
            "Make subject-wise short notes",
            "Practice previous year questions",
            "Revise important formulas",
            "Take mock tests",
        ],
    },

    ECE: {
        name: "Electronics & Communication Engineering",

        syllabus: {
            semester1: [
                "Engineering Mathematics I",
                "Engineering Physics",
                "Engineering Chemistry",
                "Programming Fundamentals",
                "Basic Electrical Engineering",
                "Engineering Graphics",
            ],
            semester2: [
                "Engineering Mathematics II",
                "Electronic Devices",
                "Digital Electronics",
                "Network Theory",
                "Programming",
                "Communication Skills",
            ],
        },


        gate: [
            {
                year: "1st Year",
                title: "Build Foundation",
                items: [
                    "Engineering Mathematics",
                    "Basic Electronics",
                    "Programming",
                    "Circuit fundamentals",
                ],
            },
            {
                year: "2nd Year",
                title: "Core Subjects",
                items: [
                    "Digital Electronics",
                    "Signals",
                    "Networks",
                    "Electronic Devices",
                ],
            },
            {
                year: "3rd Year",
                title: "GATE Preparation",
                items: [
                    "Complete core subjects",
                    "PYQs",
                    "Mock tests",
                    "Revision",
                ],
            },
            {
                year: "4th Year",
                title: "Final Preparation",
                items: [
                    "Full revision",
                    "Mock tests",
                    "Weak topics",
                    "Previous papers",
                ],
            },
        ],

        government: [
            "SSC JE",
            "RRB JE",
            "State AE / JE",
            "GATE based PSU opportunities",
            "Technical government exams",
        ],

        semester: [
            "Follow weekly study schedule",
            "Prepare subject notes",
            "Practice numerical problems",
            "Solve previous papers",
            "Revise before exams",
        ],
    },

    ME: {
        name: "Mechanical Engineering",

        syllabus: {
            semester1: [
                "Engineering Mathematics I",
                "Engineering Physics",
                "Engineering Chemistry",
                "Programming Fundamentals",
                "Basic Electrical Engineering",
                "Engineering Graphics",
            ],
            semester2: [
                "Engineering Mathematics II",
                "Engineering Mechanics",
                "Material Science",
                "Manufacturing Basics",
                "Thermodynamics Basics",
                "Communication Skills",
            ],
        },


        gate: [
            {
                year: "1st Year",
                title: "Engineering Foundation",
                items: [
                    "Mathematics",
                    "Engineering Mechanics",
                    "Engineering Drawing",
                    "Basic programming",
                ],
            },
            {
                year: "2nd Year",
                title: "Core Mechanical",
                items: [
                    "Thermodynamics",
                    "Fluid Mechanics",
                    "Manufacturing",
                    "Materials",
                ],
            },
            {
                year: "3rd Year",
                title: "GATE Preparation",
                items: [
                    "Complete core subjects",
                    "PYQs",
                    "Mock tests",
                    "Revision",
                ],
            },
            {
                year: "4th Year",
                title: "Final Revision",
                items: [
                    "Full revision",
                    "Mock tests",
                    "Previous papers",
                    "Weak areas",
                ],
            },
        ],

        government: [
            "SSC JE",
            "RRB JE",
            "State AE / JE",
            "GATE based PSU opportunities",
            "Technical government exams",
        ],

        semester: [
            "Understand concepts before memorizing",
            "Practice numerical questions",
            "Prepare formula sheets",
            "Solve previous papers",
            "Revise every week",
        ],
    },

    CE: {
        name: "Civil Engineering",

        syllabus: {
            semester1: [
                "Engineering Mathematics I",
                "Engineering Physics",
                "Engineering Chemistry",
                "Programming Fundamentals",
                "Basic Electrical Engineering",
                "Engineering Graphics",
            ],
            semester2: [
                "Engineering Mathematics II",
                "Engineering Mechanics",
                "Building Materials",
                "Surveying Basics",
                "Environmental Engineering Basics",
                "Communication Skills",
            ],
        },



        gate: [
            {
                year: "1st Year",
                title: "Build Foundation",
                items: [
                    "Engineering Mathematics",
                    "Engineering Mechanics",
                    "Drawing",
                    "Basic programming",
                ],
            },
            {
                year: "2nd Year",
                title: "Core Civil",
                items: [
                    "Structural Engineering",
                    "Fluid Mechanics",
                    "Geotechnical",
                    "Surveying",
                ],
            },
            {
                year: "3rd Year",
                title: "GATE Preparation",
                items: [
                    "Complete core subjects",
                    "PYQs",
                    "Mock tests",
                    "Revision",
                ],
            },
            {
                year: "4th Year",
                title: "Final Preparation",
                items: [
                    "Full revision",
                    "Mock tests",
                    "Previous papers",
                    "Weak topics",
                ],
            },
        ],

        government: [
            "SSC JE",
            "RRB JE",
            "State AE / JE",
            "GATE based PSU opportunities",
            "Technical government exams",
        ],

        semester: [
            "Understand diagrams and concepts",
            "Practice numerical problems",
            "Prepare short notes",
            "Solve previous papers",
            "Revise regularly",
        ],
    },
};

const branches = Object.keys(roadmapData);

function Roadmap() {
    const [selectedBranch, setSelectedBranch] = useState("CSE");
    const [expandedSkill, setExpandedSkill] = useState(null);
    const [expandedSubject, setExpandedSubject] = useState(null);
    const [activeSemester, setActiveSemester] = useState("semester1");

    const roadmap = roadmapData[selectedBranch];

    return (
        <div className="h-auto bg-gray-50 text-gray-900 pb-24">

            {/* ================= HERO ================= */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

                    <div className="max-w-3xl">

                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                            <GraduationCap size={16} />
                            Student Roadmap
                        </span>

                        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            Plan your engineering journey
                            <span className="text-blue-600"> from Year 1.</span>
                        </h1>

                        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                            Your roadmap for academics, skills, GATE preparation,
                            government exams and semester success.
                        </p>

                    </div>

                    {/* Branch Selector */}
                    <div className="mt-8 max-w-xl">

                        <label className="block text-sm font-semibold mb-2">
                            Select your branch
                        </label>

                        <div className="relative">

                            <select
                                value={selectedBranch}
                                onChange={(e) => {
                                    setSelectedBranch(e.target.value);
                                    setActiveSemester("semester1");
                                }}
                                className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-4 pr-12 font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                                {branches.map((branch) => (
                                    <option key={branch} value={branch}>
                                        {branch} — {roadmapData[branch].name}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={20}
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                            />

                        </div>

                    </div>
                </div>
            </section>


            <main className="max-w-6xl mx-auto px-4 sm:px-6">


                {/* ================= 01 SYLLABUS ================= */}
                <section className="py-12">

                    <SectionHeading
                        number="01"
                        icon={<BookOpen size={22} />}
                        title="Updated syllabus"
                        description={`Explore the first-year syllabus for ${selectedBranch}.`}
                    />

                    <div className="mt-6 bg-white border border-gray-200 rounded-2xl overflow-hidden">

                        {/* Semester Tabs */}
                        <div className="flex border-b border-gray-200">

                            <button
                                onClick={() => setActiveSemester("semester1")}
                                className={`flex-1 py-4 text-sm sm:text-base font-semibold transition ${activeSemester === "semester1"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                Semester 1
                            </button>

                            <button
                                onClick={() => setActiveSemester("semester2")}
                                className={`flex-1 py-4 text-sm sm:text-base font-semibold transition ${activeSemester === "semester2"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                Semester 2
                            </button>

                        </div>

                        <div className="p-5 sm:p-7">

                            {/* Overlay */}
                            {expandedSubject && (
                                <div
                                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                                    onClick={() => setExpandedSubject(null)}
                                />
                            )}

                            <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                                {roadmap.syllabus[activeSemester].map((subject, index) => {

                                    const isExpanded = expandedSubject === subject;

                                    return (
                                        <div
                                            key={subject}
                                            onClick={() => {
                                                if (!isExpanded) {
                                                    setExpandedSubject(subject);
                                                }
                                            }}
                                            className={`
                                bg-gray-50 border border-gray-100 rounded-xl
                                transition-all duration-300
                                ${isExpanded
                                                    ? `
                                            fixed
                                            z-50
                                            top-1/2
                                            left-1/2
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            w-[90vw]
                                            sm:w-[70vw]
                                            lg:w-[50vw]
                                            min-h-[300px]
                                            max-h-[80vh]
                                            overflow-y-auto
                                            bg-white
                                            border-blue-400
                                            shadow-2xl
                                            p-6
                                          `
                                                    : `
                                            cursor-pointer
                                            p-4
                                            hover:border-blue-300
                                            hover:shadow-sm
                                          `
                                                }
                            `
                                            }
                                        >

                                            {/* Header */}
                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center gap-3">

                                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                                        {index + 1}
                                                    </div>

                                                    <span className="font-medium text-sm sm:text-base">
                                                        {subject}
                                                    </span>

                                                </div>

                                                {/* Close Button */}
                                                {isExpanded && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setExpandedSubject(null);
                                                        }}
                                                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition shrink-0"
                                                    >
                                                        <X size={19} />
                                                    </button>
                                                )}

                                            </div>

                                            {/* Expanded Content */}
                                            {isExpanded && (
                                                <div className="mt-8">

                                                    <div className="text-sm text-gray-500 mb-5">
                                                        {selectedBranch} •{" "}
                                                        {activeSemester === "semester1"
                                                            ? "Semester 1"
                                                            : "Semester 2"}
                                                    </div>

                                                    <h3 className="text-2xl font-bold text-gray-900">
                                                        {subject}
                                                    </h3>

                                                    <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-100">

                                                        <h4 className="font-semibold text-blue-700">
                                                            What to focus on
                                                        </h4>

                                                        <p className="mt-2 text-sm text-gray-600 leading-6">
                                                            Focus on understanding the concepts,
                                                            solving questions regularly and
                                                            preparing your notes for this subject.
                                                        </p>

                                                    </div>

                                                    <div className="mt-5 grid sm:grid-cols-2 gap-3">

                                                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <p className="text-xs text-gray-500">
                                                                Semester
                                                            </p>

                                                            <p className="font-semibold mt-1">
                                                                {activeSemester === "semester1"
                                                                    ? "Semester 1"
                                                                    : "Semester 2"}
                                                            </p>
                                                        </div>

                                                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                                            <p className="text-xs text-gray-500">
                                                                Branch
                                                            </p>

                                                            <p className="font-semibold mt-1">
                                                                {selectedBranch}
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= 02 SKILLS ================= */}
                

                   


                {/* ================= 03 GATE ================= */}
                <section className="pb-12">

                    <SectionHeading
                        number="03"
                        icon={<Target size={22} />}
                        title="GATE exam roadmap"
                        description="You don't need to prepare everything in first year. Build the foundation first."
                    />

                    <div className="mt-6 relative">

                        {/* Desktop line */}
                        <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gray-300" />

                        <div className="grid lg:grid-cols-4 gap-5">

                            {roadmap.gate.map((item, index) => (

                                <div
                                    key={item.year}
                                    className="relative bg-white border border-gray-200 rounded-2xl p-5"
                                >

                                    <div className="relative z-10 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-5">
                                        {index + 1}
                                    </div>

                                    <span className="text-sm font-bold text-blue-600">
                                        {item.year}
                                    </span>

                                    <h3 className="text-lg font-bold mt-1">
                                        {item.title}
                                    </h3>

                                    <div className="mt-4 space-y-3">

                                        {item.items.map((point) => (

                                            <div
                                                key={point}
                                                className="flex items-start gap-2 text-sm text-gray-600"
                                            >
                                                <CheckCircle2
                                                    size={16}
                                                    className="text-blue-600 mt-0.5 shrink-0"
                                                />

                                                {point}
                                            </div>

                                        ))}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ================= 04 GOVERNMENT + SEMESTER ================= */}
                <section className="pb-16">

                    <SectionHeading
                        number="04"
                        icon={<Building2 size={22} />}
                        title="Government jobs & semester preparation"
                        description="Balance long-term career preparation with your current semester."
                    />

                    <div className="mt-6 grid lg:grid-cols-2 gap-5">

                        {/* Government */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <BriefcaseBusiness size={24} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold">
                                        Government job preparation
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Explore technical government career paths.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-6 space-y-3">

                                {roadmap.government.map((exam) => (

                                    <div
                                        key={exam}
                                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50"
                                    >

                                        <div className="flex items-center gap-3">
                                            <FileText
                                                size={18}
                                                className="text-blue-600"
                                            />

                                            <span className="text-sm font-medium">
                                                {exam}
                                            </span>
                                        </div>

                                        <ArrowRight
                                            size={17}
                                            className="text-gray-400"
                                        />

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Semester */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <CalendarDays size={24} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold">
                                        Semester exam preparation
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Keep your semester performance strong.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-6 space-y-4">

                                {roadmap.semester.map((item, index) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >

                                        <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                                            {index + 1}
                                        </div>

                                        <p className="text-sm text-gray-600 pt-1">
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= FINAL CTA ================= */}
                <section className="pb-16">

                    <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                            <div>

                                <div className="flex items-center gap-2">
                                    <Clock3 size={20} />
                                    <span className="text-sm font-semibold text-blue-100">
                                        Start today
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold mt-2">
                                    Your first year matters.
                                </h2>

                                <p className="text-blue-100 mt-2 max-w-xl">
                                    Focus on academics, build useful skills and slowly prepare
                                    for your long-term career goal.
                                </p>

                            </div>

                            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-xl font-semibold hover:bg-blue-50 transition shrink-0">
                                Start roadmap
                                <ArrowRight size={18} />
                            </button>

                        </div>

                    </div>

                </section>

            </main>
        </div>
    );
}


/* ================= SECTION HEADING ================= */

function SectionHeading({
    number,
    icon,
    title,
    description,
}) {
    return (
        <div className="flex items-start gap-4">

            <div className="hidden sm:flex w-10 h-10 rounded-xl bg-blue-600 text-white items-center justify-center font-bold shrink-0">
                {number}
            </div>

            <div>

                <div className="flex items-center gap-2 text-blue-600">
                    {icon}

                    <span className="text-sm font-bold">
                        {number}
                    </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    {title}
                </h2>

                <p className="text-gray-500 mt-2 max-w-2xl">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default Roadmap;