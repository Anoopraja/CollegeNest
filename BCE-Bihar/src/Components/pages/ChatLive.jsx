import React from "react";
import { useParams } from "react-router-dom";

const branches = [
  "CSE",
  "ECE",
  "EE",
  "ME",
  "CE",
];

const ChatLive = () => {
  const { id } = useParams();

  const selectedBranch = branches.find(
    (item) => item.toUpperCase() ===id.toUpperCase()
  );

  if (!selectedBranch) {
    return <h1>Branch not found</h1>;
  }

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mb-6 border">
  <div className="flex items-center justify-between">

    {/* Left */}
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        {selectedBranch} Live Chat
      </h1>

      <p className="text-gray-500 mt-1">
        Discuss • Ask Doubts • Share Notes
      </p>

      <div className="flex items-center gap-2 mt-3">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-green-600 font-medium">
          Live Now
        </span>
      </div>
    </div>

    {/* Right */}
    <div className="text-right">
      <p className="text-sm text-gray-500">Online</p>
      <h2 className="text-3xl font-bold text-blue-600">
        124
      </h2>
      <p className="text-sm text-gray-500">Students</p>
    </div>

  </div>
  <div className="bg-white rounded-xl border shadow-md h-[500px] flex flex-col">

  {/* Messages */}
  <div className="flex-1 p-5 overflow-y-auto">
    {/* Messages yaha aayenge */}
  </div>

  {/* Input */}
  <div className="border-t p-4 flex gap-3">
    <input
      type="text"
      placeholder="Type a message..."
      className="flex-1 border rounded-lg px-4 py-2 outline-none"
    />

    <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
      Send
    </button>
  </div>

</div>
</section>
  );
};

export default ChatLive;