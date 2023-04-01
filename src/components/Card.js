import React, { useState } from "react";

const Card = ({ airline, i }) => {
  const [hover, setHover] = useState(null);
  const { name, logoURL, alliance, phone, site } = airline || {};

  return (
    <div
      onMouseOver={() => setHover(i)}
      onMouseOut={() => setHover(null)}
      className={`p-10 cursor-pointer  shadow-md hover:shadow-lg border border-black flex justify-center items-center h-[200px] hover:bg-gray-50 duration-200 `}
    >
      <div className="flex justify-center items-center ">
        <img
          className="h-[50px] m-[22px]"
          src={`https://www.kayak.com${logoURL}`}
          alt="air"
        />

        <div>
          <p className="text-[14px] font-bold">{name}</p>
          <div className={`${hover === i ? "block" : "hidden"}`}>
            <p className="text-[14px] font-semibold">{alliance}</p>
            <p className="text-[14px] font-semibold">
              {phone ? phone : "number not found!"}
            </p>
            <p className="text-[14px] font-semibold">{site}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
