import React from "react";
import FullLogo from "./FullLogo";
import Avatar from "./Avatar";

const SideBar = () => {
  return (
    <div className=" bg-3-dark-black w-side-bar">
      <aside className="h-full  w-side-bar bg-3-dark-black rounded-tr-2xl rounded-br-2xl relative">
        <FullLogo />
        <Avatar />
      </aside>
    </div>
  );
};

export default SideBar;
