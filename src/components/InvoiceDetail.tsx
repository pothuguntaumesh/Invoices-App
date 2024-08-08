import React from "react";
import back from "../assets/icon-arrow-left.svg";
import { useLocation, useNavigate } from "react-router-dom";
import InvoiceDetailHeader from "./InvoiceDetailHeader";
import InvoiceDetailContainer from "./InvoiceDetailContainer";
import InvoiceDetailButtons from "./InvoiceDetailButtons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import DeleteInvoice from "./Modals/DeleteInvoice";
import { InvoiceCardFields, InvoiceCardProps } from "../types/types";
const InvoiceDetail = () => {
  const location = useLocation();
  const invoice: InvoiceCardFields = location.state?.invoice;
  console.log(invoice, "Invoice details inside the detail component");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll ">
      <div className="mx-auto w-11/12 xl:w-3/5 mt-12 relative">
        {isDeleteModalOpen && (
          <DeleteInvoice toggleDeleteModal={toggleDeleteModal} />
        )}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={back}
            alt=""
            className="inline-block align-middle m-0 pr-0 cursor-pointer "
          />
          <button className="inline-block mx-4 align-middle text-white mt-1 font-bold hover:text-6-dark-gray">
            Go back
          </button>
        </div>
        <InvoiceDetailHeader
          invoiceStatus={invoice.status}
          toggleDeleteModal={toggleDeleteModal}
        />
        <InvoiceDetailContainer />
      </div>
      {isMediumScreen && (
        <div className="mt-12 bg-3-dark-black py-6 flex justify-center">
          <InvoiceDetailButtons toggleDeleteModal={toggleDeleteModal} />
        </div>
      )}
    </div>
  );
};

export default InvoiceDetail;
