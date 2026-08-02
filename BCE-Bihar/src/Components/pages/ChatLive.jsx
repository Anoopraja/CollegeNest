import React from "react";
import { useParams } from "react-router-dom";

const branches = [
  "CSE",
  "ECE",
  "ME",
  "CE",
  "EE",
  "IT",
  "AEI",
  "PE",
  "BT",
  "FT",
  "CHE",
  "EIE",
  "MIN",
  "MET",
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
    <section className="p-8">
      <h1 className="text-4xl font-bold">
        {selectedBranch} Live Chat
      </h1>
    </section>
  );
};

export default ChatLive;