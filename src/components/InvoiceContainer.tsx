import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./InvoiceCard";
import { InvoiceCardFields } from "../types/types";
import EmptyInvoice from "./EmptyInvoice";
import { useState } from "react";
import invoiceData from "../data.json";

//Backend: Fetch this data from backend and map it to the InvoiceCardProps and then show it.
const dummyData: InvoiceCardFields[] = invoiceData.map((invoice: any) => ({
  id: invoice.id,
  createdAt: invoice.createdAt,
  paymentDue: invoice.paymentDue,
  description: invoice.description,
  paymentTerms: invoice.paymentTerms,
  clientName: invoice.clientName,
  clientEmail: invoice.clientEmail,
  status: invoice.status,
  senderAddress: invoice.senderAddress,
  clientAddress: invoice.clientAddress,
  items: invoice.items.map((item: any) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    total: item.total,
  })),
  total: invoice.total,
}));

const InvoiceContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filteredData: InvoiceCardFields[] =
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
            <InvoiceCard key={invoiceData.id} invoice={invoiceData} />
          ))}
      </div>
    </div>
  );
};

export default InvoiceContainer;
