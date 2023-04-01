import React from "react";
import Logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <div className="h-[92px] w-full border-b-2 border-gray-400 flex items-center">
      <img
        className="w-[125px] mx-[35px] md:mx-[68px] lg:mx-[80px]"
        src={Logo}
        alt="Logo"
      />
    </div>
  );
};

export default Header;
