import React from "react";
import logo from "../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
const FullLogo = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className=" w-[80px] sm:w-full relative">
      <div className="h-[45px] w-full sm:h-[61px] bg-1-dark-violet  rounded-tr-2xl absolute">
        <div className="absolute top-1/3 sm:top-1/2 left-1/4 z-10 w-[50px] h-[50px] ">
          <img src={logo} alt="" width={isSmallScreen ? 40 : 50} />
        </div>
      </div>
      <div className="h-[38px] w-full sm:h-[58px] bg-2-light-violet absolute rounded-tl-2xl top-[30px] sm:top-[50px] rounded-br-2xl"></div>
    </div>
  );
};

export default FullLogo;
