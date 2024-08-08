import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import { DeleteInvoiceModalProps, DeleteInvoiceProps } from "../../types/types";

const DeleteInvoiceModal = ({ toggleDeleteModal }: DeleteInvoiceModalProps) => {
  return (
    <div className="bg-3-dark-black p-10 absolute top-1/2 left-1/2 md:left-half-plus-51 -translate-x-1/2 -translate-y-1/2 z-20 rounded-md w-[80%] lg:max-w-[35%]">
      <h2 className="text-white font-bold ">Confirm Deletion</h2>
      <p className="text-5-light-gray mt-4 text-md  leading-relaxed">
        Are you sure you want to delete invoice "{"Invoice number"}"? This
        action cannot be undone.
      </p>
      <div className="flex mt-8 justify-end gap-2">
        <button
          className="bg-4-light-black text-5-light-gray font-semibold py-4 px-7 rounded-full hover:opacity-80"
          onClick={toggleDeleteModal}
        >
          Cancel
        </button>
        <button className="bg-9-dark-red text-white font-semibold py-4 px-7 rounded-full hover:opacity-80">
          Delete
        </button>
      </div>
    </div>
  );
};

const DeleteInvoice = ({ toggleDeleteModal }: DeleteInvoiceProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleModal={toggleDeleteModal} />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <DeleteInvoiceModal toggleDeleteModal={toggleDeleteModal} />,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default DeleteInvoice;
