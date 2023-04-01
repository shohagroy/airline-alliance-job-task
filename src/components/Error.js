import React from "react";

const Error = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        className="w-1/2"
        src="https://images.squarespace-cdn.com/content/v1/58f25c8b197aea0b0dda7cc4/1518489070273-ONTN9EFFNGC8RS6LZJEM/Error-404.gif"
        alt="error"
      />

      <h2 className="text-3xl font-bold text-red-600">Please try Agin!</h2>
    </div>
  );
};

export default Error;
