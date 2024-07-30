import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./UI/InvoiceCard";
import { InvoiceCardProps } from "../types/types";
import EmptyInvoice from "./EmptyInvoice";
import { useState } from "react";

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
  console.log(selectedFilters);

  const addClickedFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((cur) => cur !== filter)
        : [...prevFilters, filter]
    );
  };
  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll">
      <div className="mx-auto w-11/12 lg:w-3/5 mt-20">
        <InvoiceHeader addClickedFilter={addClickedFilter} />
        {/* //Show the below Invoice if the there is not data in the backend. */}

        {/* <EmptyInvoice /> */}
        {dummyData.map((data) => {
          if (selectedFilters.length > 0) {
            if (selectedFilters.includes(data.status)) {
              return <InvoiceCard {...data} />;
            }
          } else {
            return <InvoiceCard {...data} />;
          }
        })}
        {/* <InvoiceCard {...dummyData} /> */}
        {/* <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard /> */}
      </div>
    </div>
  );
};

export default InvoiceContainer;
