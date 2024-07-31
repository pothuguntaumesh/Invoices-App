import React from "react";
//Backend: This avatar must come from backend or should be an Icon
import avatar from "../assets/image-avatar.jpg";
import sun from "../assets/icon-sun.svg";
import { useMediaQuery } from "react-responsive";

const Avatar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div className="flex container flex-row sm:flex-col w-1/4 right-5  sm:right-0  sm:w-full sm:bottom-8 justify-between items-center sm:justify-center sm:items-center absolute mt-4">
      <img src={sun} width={25} alt="" className="sm:my-10 cursor-pointer" />
      <div className=" sm:border-t-[1px] border-line-color  sm:w-full"></div>
      <img
        src={avatar}
        alt=""
        width={isSmallScreen ? 40 : 50}
        className="mt-1 rounded-full sm:mt-6 cursor-pointer"
      />
    </div>
  );
};

export default Avatar;
