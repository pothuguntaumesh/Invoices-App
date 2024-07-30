import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./UI/InvoiceCard";
import { InvoiceCardProps } from "../types/types";
import EmptyInvoice from "./EmptyInvoice";

const InvoiceContainer = () => {
  const dummyData: InvoiceCardProps = {
    id: "RT3080",
    dueDate: "19 Aug 2021",
    name: "Jensen Huang",
    amount: 1901,
    status: "Paid",
  };
  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll">
      <div className="mx-auto w-11/12 lg:w-3/5 mt-20">
        <InvoiceHeader />
        {/* //Show the below Invoice if the there is not data in the backend. */}
        {/* <EmptyInvoice /> */}
        <InvoiceCard {...dummyData} />
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
