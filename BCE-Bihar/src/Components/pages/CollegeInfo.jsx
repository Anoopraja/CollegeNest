import College from "./Colleges";
import React from "react";
import { useParams } from "react-router-dom";


const CollegeInfo = () => {
  const { id } = useParams();

  const college = Colleges.find(
    (item) => item.id === Number(id)
  );

  if (!college) {
    return <h1>College Not Found</h1>;
  }

  return (
    <div className="p-10">
        <h1>heyy</h1>
        <h1>{id}</h1>
      <h1 className="text-3xl font-bold">{college.name}</h1>
      <p>District: {college.district}</p>
      <p>Rating: ⭐ {college.rating}</p>
    </div>
  );
};

export default CollegeInfo;