import React from "react";
import { InputBoxProps } from "../../types/types";

const InputBox = ({ inputType }: InputBoxProps) => {
  return (
    <input
      type={inputType}
      className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
    />
  );
};

export default InputBox;
