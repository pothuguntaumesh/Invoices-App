import React from "react";
import { InvoiceDetailButtonsProps } from "../types/types";

const InvoiceDetailButtons = ({
  toggleDeleteModal,
}: InvoiceDetailButtonsProps) => {
  return (
    <div className="flex gap-4 text-white font-bold">
      <button className="bg-4-light-black px-8 py-4 rounded-full hover:bg-5-light-gray hover:text-7-gray-blue">
        Edit
      </button>
      <button
        className="bg-9-dark-red px-8 py-4 rounded-full hover:opacity-80 hover:text-5-light-gray"
        onClick={toggleDeleteModal}
      >
        Delete
      </button>
      <button className="bg-1-dark-violet px-8 py-4 rounded-full hover:bg-2-light-violet">
        Mark as Paid
      </button>
    </div>
  );
};

export default InvoiceDetailButtons;
