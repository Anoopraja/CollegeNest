import React from "react";
import { useParams } from "react-router-dom";

const branches = ["CSE", "ECE", "EE", "ME", "CE"];

const messages = [
  {
    id: 1,
    name: "Rahul Kumar",
    message: "Anyone preparing for Java Viva?",
    time: "10:32 AM",
    own: false,
  },
  {
    id: 2,
    name: "Priya Singh",
    message: "Yes, I'm preparing. Do you have any resources?",
    time: "10:34 AM",
    own: false,
  },
  {
    id: 3,
    name: "Aman Raj",
    message: "I have some important questions. I'll share them here.",
    time: "10:36 AM",
    own: false,
  },
  {
    id: 4,
    name: "You",
    message: "That would be helpful!",
    time: "10:38 AM",
    own: true,
  },
];

const ChatLive = () => {
  const { id } = useParams();

  const selectedBranch = branches.find(
    (item) => item.toUpperCase() === id?.toUpperCase()
  );

  if (!selectedBranch) {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-50 text-red-500 flex items-center justify-center text-2xl mb-4">
            !
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Branch not found
          </h1>

          <p className="text-slate-500 mt-2">
            The selected branch does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm mb-5">

          <div className="flex items-center justify-between gap-4">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Branch Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                {selectedBranch}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedBranch} Live Chat
                  </h1>

                  <span className="hidden sm:inline-flex items-center gap-1.5 bg-green-50 text-green-600 border border-green-100 px-2.5 py-1 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>

                <p className="text-sm text-slate-500 mt-1">
                  Discuss • Ask Doubts • Share Notes
                </p>

                <div className="flex items-center gap-2 mt-2 sm:hidden">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                  <span className="text-xs font-medium text-green-600">
                    Live Now
                  </span>
                </div>
              </div>
            </div>

            {/* Online Students */}
            <div className="hidden sm:block text-right">

              <div className="flex items-center justify-end gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                <p className="text-sm text-slate-500">
                  Online
                </p>
              </div>

              <h2 className="text-2xl font-bold text-blue-600 mt-0.5">
                124
              </h2>

              <p className="text-xs text-slate-400">
                Students
              </p>

            </div>

          </div>
        </div>

        {/* Chat Box */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

          {/* Chat Top Bar */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">

            <div>
              <h2 className="font-semibold text-slate-900">
                {selectedBranch} Community
              </h2>

              <p className="text-xs text-slate-500 mt-0.5">
                Be respectful and help other students
              </p>
            </div>

            <button className="text-slate-400 hover:text-slate-700 transition">
              ⋮
            </button>

          </div>

          {/* Messages */}
          <div className="h-[430px] sm:h-[500px] p-4 sm:p-6 overflow-y-auto bg-slate-50/60">

            <div className="space-y-5">

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.own ? "justify-end" : "justify-start"
                  }`}
                >

                  <div
                    className={`flex gap-3 max-w-[85%] sm:max-w-[70%] ${
                      message.own ? "flex-row-reverse" : ""
                    }`}
                  >

                    {/* Avatar */}
                    <div
                      className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
                        message.own
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {message.name.charAt(0)}
                    </div>

                    {/* Message */}
                    <div>
                      {!message.own && (
                        <p className="text-xs font-semibold text-slate-700 mb-1">
                          {message.name}
                        </p>
                      )}

                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-6 ${
                          message.own
                            ? "bg-blue-600 text-white rounded-tr-md"
                            : "bg-white border border-slate-200 text-slate-700 rounded-tl-md"
                        }`}
                      >
                        {message.message}
                      </div>

                      <p
                        className={`text-[10px] text-slate-400 mt-1 ${
                          message.own ? "text-right" : ""
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 bg-white p-3 sm:p-4">

            <div className="flex items-center gap-2 sm:gap-3">

              <button
                className="hidden sm:flex w-10 h-10 shrink-0 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition"
                title="Attach file"
              >
                📎
              </button>

              <input
                type="text"
                placeholder={`Message ${selectedBranch} students...`}
                className="flex-1 min-w-0 h-11 border border-slate-200 rounded-xl px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />

              <button className="h-11 px-4 sm:px-6 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 active:scale-95 transition">
                <span className="hidden sm:inline">
                  Send
                </span>
                <span className="sm:hidden">
                  ➤
                </span>
              </button>

            </div>

            <p className="text-[11px] text-slate-400 mt-2 px-1">
              Keep the conversation helpful and respectful.
            </p>

          </div>

        </div>

        {/* Bottom Info */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span>🔒 Community chat</span>
          <span>•</span>
          <span>Only students can participate</span>
          <span>•</span>
          <span>Report inappropriate content</span>
        </div>

      </div>
    </section>
  );
};

export default ChatLive;