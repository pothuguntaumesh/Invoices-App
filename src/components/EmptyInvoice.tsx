import React from "react";
import emptyInvoice from "../assets/illustration-empty.svg";

const EmptyInvoice = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <div>
        <img src={emptyInvoice} alt="" />
      </div>
      <h2 className="text-white mt-10 font-bold">There is nothing here</h2>
      <h4 className="text-5-light-gray mt-5 w-1/4 text-center mx-auto">
        Create an invoice by clicking the{" "}
        <span className="font-bold ">New Invoice</span> button and get started
      </h4>
    </div>
  );
};

export default EmptyInvoice;
