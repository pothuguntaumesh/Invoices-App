import React from "react";
import FullLogo from "./FullLogo";
import Avatar from "./Avatar";
import { SideBarProps } from "../types/types";
import { useMediaQuery } from "react-responsive";

const SideBar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="bg-3-dark-black w-full h-[200px] z-20">
            <FullLogo />
            <Avatar />
          </div>
        </>
      ) : (
        <div className="bg-3-dark-black w-side-bar z-20">
          <aside className="h-full w-side-bar bg-3-dark-black rounded-tr-2xl rounded-br-2xl relative">
            <FullLogo />
            <Avatar />
          </aside>
        </div>
      )}
    </>
  );
};

export default SideBar;
