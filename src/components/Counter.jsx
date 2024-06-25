import React from "react";

const Counter = ({ cnt, desc }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-optima text-5xl text-white">{cnt}+</h1>
      <p className="para text-center text-white mt-3">{desc}</p>
    </div>
  );
};

export default Counter;
