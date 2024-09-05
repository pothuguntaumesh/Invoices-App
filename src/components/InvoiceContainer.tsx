import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./InvoiceCard";
import { InvoiceCardFields } from "../types/types";
import EmptyInvoice from "./EmptyInvoice";
import { useState } from "react";
import { useSelector } from "react-redux";

//Backend: Fetch this data from backend and map it to the InvoiceCardProps and then show it.
const InvoiceContainer = () => {
  const invoiceData: InvoiceCardFields[] = useSelector(
    (state: any) => state.invoices.invoices
  );
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filteredData: InvoiceCardFields[] =
    selectedFilters.length > 0
      ? invoiceData.filter((data) => selectedFilters.includes(data.status))
      : invoiceData;

  const addClickedFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((cur) => cur !== filter)
        : [...prevFilters, filter]
    );
  };
  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll">
      <div className="mx-auto w-11/12 lg:w-3/5 mt-10 sm:mt-20">
        <InvoiceHeader
          invoiceCount={invoiceData.length}
          addClickedFilter={addClickedFilter}
        />

        {!filteredData.length && <EmptyInvoice />}
        {filteredData.length &&
          filteredData.map((invoiceData) => (
            <InvoiceCard key={invoiceData.id} invoice={invoiceData} />
          ))}
      </div>
    </div>
  );
};

export default InvoiceContainer;
