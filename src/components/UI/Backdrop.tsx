import React from "react";
import { BackdropProps } from "../../types/types";

const Backdrop = ({ toggleModal }: BackdropProps) => {
  return (
    <div
      className="fixed  h-full w-full bg-black z-10 opacity-60"
      onClick={() => toggleModal()}
    ></div>
  );
};

export default Backdrop;
