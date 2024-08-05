import React from "react";
import back from "../assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import InvoiceDetailHeader from "./InvoiceDetailHeader";
import InvoiceDetailContainer from "./InvoiceDetailContainer";
const InvoiceDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll ">
      <div className="mx-auto w-11/12 xl:w-3/5 mt-12  ">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={back}
            alt=""
            className="inline-block align-middle m-0 pr-0 cursor-pointer "
          />
          <button className="inline-block mx-4 align-middle text-white mt-1 font-bold hover:text-6-dark-gray">
            Go back
          </button>
        </div>
        <InvoiceDetailHeader />
        <InvoiceDetailContainer />
      </div>
    </div>
  );
};

export default InvoiceDetail;
