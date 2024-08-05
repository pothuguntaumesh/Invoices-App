import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./InvoiceCard";
import { InvoiceCardProps } from "../types/types";
import EmptyInvoice from "./EmptyInvoice";
import { useState } from "react";

//Backend: Fetch this data from backend and map it to the InvoiceCardProps and then show it.
const dummyData: InvoiceCardProps[] = [
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Paid",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Pending",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Draft",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Pending",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Draft",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Paid",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Pending",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Draft",
  },
  {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Pending",
  },
];
const InvoiceContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filteredData: InvoiceCardProps[] =
    selectedFilters.length > 0
      ? dummyData.filter((data) => selectedFilters.includes(data.status))
      : dummyData;

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
        <InvoiceHeader addClickedFilter={addClickedFilter} />

        {!filteredData.length && <EmptyInvoice />}
        {filteredData.length &&
          filteredData.map((invoiceData) => (
            <InvoiceCard key={invoiceData.id} {...invoiceData} />
          ))}
      </div>
    </div>
  );
};

export default InvoiceContainer;
