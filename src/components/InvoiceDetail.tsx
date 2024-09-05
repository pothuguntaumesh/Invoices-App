import React from "react";
import back from "../assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import InvoiceDetailHeader from "./InvoiceDetailHeader";
import InvoiceDetailContainer from "./InvoiceDetailContainer";
import InvoiceDetailButtons from "./InvoiceDetailButtons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import DeleteInvoice from "./Modals/DeleteInvoice";
import { InvoiceCardFields } from "../types/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const InvoiceDetail = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { id } = useParams();

  const invoices: InvoiceCardFields[] = useSelector(
    (state: any) => state.invoices.invoices
  );
  const invoice = invoices.find((invoice) => invoice.id === id)!;
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  return (
    <div className="flex-grow bg-8-very-dark-black overflow-scroll ">
      <div className="mx-auto w-11/12 xl:w-3/5 mt-12 relative">
        {isDeleteModalOpen && (
          <DeleteInvoice
            invoiceId={invoice!.id}
            toggleDeleteModal={toggleDeleteModal}
          />
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
          invoiceId={invoice.id}
          invoiceStatus={invoice!.status}
          toggleDeleteModal={toggleDeleteModal}
        />
        <InvoiceDetailContainer invoice={invoice} />
      </div>
      {isMediumScreen && (
        <div className="mt-12 bg-3-dark-black py-6 flex justify-center">
          <InvoiceDetailButtons
            invoiceId={invoice.id}
            toggleDeleteModal={toggleDeleteModal}
          />
        </div>
      )}
    </div>
  );
};

export default InvoiceDetail;
