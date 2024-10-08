import React from "react";
import { useMediaQuery } from "react-responsive";
import { InvoiceCardFields, InvoiceDetailContainerProps } from "../types/types";

const InvoiceDetailContainer = ({ invoice }: InvoiceDetailContainerProps) => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="mt-8 bg-3-dark-black rounded-md overflow-scroll mb-4">
      <div className="px-10 py-10 text-white font-bold">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-left">
            <p className="text-lg">#{invoice.id}</p>
            <p className="font-normal text-md mt-1 md:mt-4 text-5-light-gray">
              {invoice.description}
            </p>
          </div>
          <div className="md:text-right mt-8 font-normal">
            <p className="text-md mt-2 text-5-light-gray">
              {invoice.senderAddress.street}
            </p>
            <p className="text-md mt-2 text-5-light-gray">
              {invoice.senderAddress.city}
            </p>
            <p className="text-md mt-2 text-5-light-gray">
              {invoice.senderAddress.postCode}
            </p>
            <p className="text-md mt-2 text-5-light-gray">
              {invoice.senderAddress.country}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  w-11/12 md:w-4/5 justify-between mt-12 md:mt-4 gap-12">
          <div>
            <p className="text-md font-normal text-5-light-gray">
              Invoice Date
            </p>
            <p className="text-lg mt-3">{invoice.createdAt}</p>
            <p className="text-md font-normal text-5-light-gray mt-6">
              Payment Due
            </p>
            <p className="text-lg mt-3">{invoice.paymentDue}</p>
          </div>
          <div>
            <div>
              <p className="text-md font-normal text-5-light-gray">Bill To</p>
              <p className="mt-3 text-lg">{invoice.clientName}</p>
              <p className="font-normal text-5-light-gray text-md mt-2">
                {invoice.clientAddress.street}
              </p>
              <p className="font-normal text-5-light-gray text-md mt-2">
                {invoice.clientAddress.city}
              </p>
              <p className="font-normal text-5-light-gray text-md mt-2">
                {invoice.clientAddress.postCode}
              </p>
              <p className="font-normal text-5-light-gray text-md mt-2">
                {invoice.clientAddress.country}
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-md font-normal text-5-light-gray">Sent To</p>
            <p className="text-md mt-3">{invoice.clientEmail}</p>
          </div>
        </div>
        {isMediumScreen ? (
          <div className="bg-4-light-black mt-10 rounded-lg text-left">
            <div className="px-8 pb-8 pt-2">
              {invoice.items?.map((item) => {
                return (
                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <p className="text-lg">{item.name ?? ""}</p>
                      <p className="text-md text-6-dark-gray">{`${item.quantity} x ${item.price}`}</p>
                    </div>
                    <p className="text-lg">
                      {"$ " +
                        parseFloat(item.price?.toString() ?? "0") *
                          item.quantity!}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="w-full text-center py-8 px-6 bg-8-very-dark-black rounded-b-lg flex items-center justify-between">
              <p className="text-md font-semibold">Amount Due</p>
              <p className="text-2xl font-bold">$ {invoice.total ?? ""}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-4-light-black mt-10 rounded-md text-left">
              <div className="p-8">
                <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-4">
                  <p className="text-5-light-gray font-normal text-md">
                    Item Name
                  </p>
                  <p className="text-5-light-gray font-normal text-md">QTY.</p>
                  <p className="text-5-light-gray font-normal text-md">Price</p>
                  <p className="text-5-light-gray font-normal text-md ">
                    Total
                  </p>
                </div>
                <div className="flex flex-col text-left">
                  {invoice.items?.map((item) => (
                    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 mt-4">
                      <p className="text-lg">{item.name ?? ""}</p>
                      <p className="text-lg">{item.quantity ?? ""}</p>
                      <p className="text-lg">$ {item.price ?? ""}</p>
                      <p className="text-lg">
                        {"$ " +
                          parseFloat(item.price?.toString() ?? "0") *
                            item.quantity!}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-10 px-16 items-center">
              <p className="text-md">Amount Due</p>
              <p className="text-3xl">$ {invoice.total ?? ""}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InvoiceDetailContainer;
