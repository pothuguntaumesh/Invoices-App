import React from "react";
//Backend: This avatar must come from backend or should be an Icon
import avatar from "../assets/image-avatar.jpg";
import sun from "../assets/icon-sun.svg";

const Avatar = () => {
  return (
    <div className="flex container flex-col  w-full bottom-8 items-center absolute mt-2">
      <img src={sun} width={25} alt="" className="my-10 cursor-pointer" />
      <div className="border-t-[1px] border-line-color w-full"></div>
      <img
        src={avatar}
        alt=""
        width={50}
        className="rounded-full mt-6 cursor-pointer"
      />
    </div>
  );
};

export default Avatar;
