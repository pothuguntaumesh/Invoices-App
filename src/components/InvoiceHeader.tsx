import React, { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import NewInvoiceButton from "./UI/NewInvoiceButton";
import FilterModal from "./FilterModal";
import { InvoideHeaderProps } from "../types/types";
import { useMediaQuery } from "react-responsive";

const InvoiceHeader = ({
  addClickedFilter,
  invoiceCount,
}: InvoideHeaderProps) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const showFilterModal = (): void => {
    setIsFilterModalOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center mb-16">
      <div>
        <h1 className="text-11-white text-xl sm:text-4xl font-semibold tracking-tight">
          Invoices
        </h1>
        {/* {Backend: Show the invoices count below from backend} */}
        <h3 className="text-11-white font-bold">
          {isSmallScreen ? "" : "There are total"} {invoiceCount} invoices
        </h3>
      </div>
      <div className="flex items-center flex-wrap relative">
        <div
          className="flex items-center flex-wrap cursor-pointer select-none"
          onClick={(event) => {
            event.stopPropagation();
            showFilterModal();
          }}
        >
          <h3 className="text-11-white mx-4 text-sm sm:text-lg font-bold">
            Filter {isSmallScreen ? "" : " by status"}
          </h3>
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
