import React from "react";
import logo from "../assets/logo.svg";
const FullLogo = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[61px] bg-1-dark-violet  rounded-tr-2xl absolute">
        <div className="absolute top-1/2 left-1/4 z-10 w-[50px] h-[50px] ">
          <img src={logo} alt="" width={50} />
        </div>
      </div>
      <div className="w-full h-[58px] bg-2-light-violet absolute rounded-tl-2xl top-[50px] rounded-br-2xl"></div>
    </div>
  );
};

export default FullLogo;
