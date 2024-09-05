import React from "react";
import { InvoiceDetailButtonsProps, InvoiceCardFields } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { markInvoicePaid } from "../features/invoices/invoiceSlice";
import AddEditInvoice from "./Modals/AddEditInvoice";
import { setModalTypeToEdit, toggleModal } from "../features/modals/modalSlice";

const InvoiceDetailButtons = ({
  invoiceId,
  toggleDeleteModal,
}: InvoiceDetailButtonsProps) => {
  const isAddEditInvoiceOpen = useSelector(
    (state: any) => state.modal.isModalOpen
  );
  const dispatch = useDispatch();
  const invoices: InvoiceCardFields[] = useSelector(
    (state: any) => state.invoices.invoices
  );
  const invoice = invoices.find((invoice) => invoice.id === invoiceId)!;

  const handleInvoicePaid = (invoiceId: string) => {
    dispatch(markInvoicePaid(invoiceId));
  };
  const toggleAddEditInvoiceModal = () => {
    dispatch(setModalTypeToEdit());
    dispatch(toggleModal());
  };

  return (
    <div className="flex gap-4 text-white font-bold">
      {isAddEditInvoiceOpen && (
        <AddEditInvoice toggleAddEditInvoiceModal={toggleAddEditInvoiceModal} />
      )}
      <button
        className="bg-4-light-black px-8 py-4 rounded-full hover:bg-5-light-gray hover:text-7-gray-blue"
        onClick={toggleAddEditInvoiceModal}
      >
        Edit
      </button>
      <button
        className="bg-9-dark-red px-8 py-4 rounded-full hover:opacity-80 hover:text-5-light-gray"
        onClick={toggleDeleteModal}
      >
        Delete
      </button>
      {invoice.status !== "paid" && (
        <button
          className="bg-1-dark-violet px-8 py-4 rounded-full hover:bg-2-light-violet"
          onClick={() => handleInvoicePaid(invoiceId)}
        >
          Mark as Paid
        </button>
      )}
    </div>
  );
};

export default InvoiceDetailButtons;
