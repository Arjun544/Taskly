import React from "react";

const StatsTile = ({ title, number, isEven }) => {
  return isEven ? (
    <div className=" flex flex-col px-3 py-2 mb-5 h-24 w-72 rounded-3xl bg-amber-light hover:shadow-md">
      <span className="font-semibold tracking-wider text-black text-sm mb-3">
        {title}
      </span>
      <div className="flex items-center">
        <div className="h-8 w-1 rounded-md bg-white"></div>
        <span className="font-semibold pl-2 text-black tracking-wider text-2xl">
          {number}
        </span>
      </div>
    </div>
  ) : (
    <div className=" flex flex-col px-3 py-2 mr-5 mb-5 h-24 w-72 rounded-3xl bg-amber-light hover:shadow-md">
      <span className="font-semibold tracking-wider text-black text-sm mb-3">
        {title}
      </span>
      <div className="flex items-center">
        <div className="h-8 w-1 rounded-md bg-white"></div>
        <span className="font-semibold pl-2 text-black tracking-wider text-2xl">
          {number}
        </span>
      </div>
    </div>
  );
};

export default StatsTile;
