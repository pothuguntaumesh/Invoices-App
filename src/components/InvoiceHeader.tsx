import React, { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import NewInvoiceButton from "./UI/NewInvoiceButton";
import FilterModal from "./FilterModal";
import { InvoideHeaderProps } from "../types/types";

const InvoiceHeader = ({ addClickedFilter }: InvoideHeaderProps) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const showFilterModal = (): void => {
    setIsFilterModalOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-cente mb-16">
      <div>
        <h1 className="text-11-white font-semibold tracking-tight text">
          Invoices
        </h1>
        {/* {Backend: Show the invoices count below from backend} */}
        <h3 className="text-11-white font-bold">There are total 7 invoices</h3>
      </div>
      <div className="flex items-center flex-wrap relative">
        <div
          className="flex items-center flex-wrap cursor-pointer select-none"
          onClick={(event) => {
            event.stopPropagation();
            showFilterModal();
          }}
        >
          <h3 className="text-11-white mx-4 font-bold">Filter by status</h3>
          <img src={isFilterModalOpen ? arrowUp : arrowDown} alt="arrow" />
          {isFilterModalOpen && (
            <FilterModal addClickedFilter={addClickedFilter} />
          )}
        </div>
        <NewInvoiceButton />
      </div>
    </div>
  );
};

export default InvoiceHeader;
