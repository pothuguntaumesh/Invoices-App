import React from "react";
import button from "../../assets/icon-plus.svg";

const NewInvoiceButton = () => {
  return (
    <div className="w-[150px] h-[48px] bg-1-dark-violet rounded-full ml-10 flex justify-between items-center px-2">
      <div className="bg-11-white w-[32px] h-[32px] rounded-full flex justify-center items-center">
        <img src={button} width={10} alt="" />
      </div>
      <h4 className="text-11-white font-bold px-3">New Invoice</h4>
    </div>
  );
};

export default NewInvoiceButton;
