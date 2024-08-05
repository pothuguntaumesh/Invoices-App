import React from "react";
import StatusCard from "./UI/StatusCard";
import { PaymentStatus } from "../types/types";
import { useMediaQuery } from "react-responsive";

const InvoiceDetailHeader = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="flex mt-6 px-8 py-10 md:py-6 bg-3-dark-black rounded-md items-center justify-between ">
      <div className="flex items-center gap-6 w-full justify-between md:w-2/6">
        <p className="text-5-light-gray text-md">Status</p>
        <StatusCard statusType={PaymentStatus.Pending} />
      </div>
      {!isMediumScreen && (
        <>
          <div className="flex gap-4 text-white font-bold">
            <button className="bg-4-light-black px-8 py-4 rounded-full hover:bg-5-light-gray hover:text-7-gray-blue">
              Edit
            </button>
            <button className="bg-9-dark-red px-8 py-4 rounded-full hover:opacity-80 hover:text-5-light-gray">
              Delete
            </button>
            <button className="bg-1-dark-violet px-8 py-4 rounded-full hover:bg-2-light-violet">
              Mark as Paid
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InvoiceDetailHeader;
