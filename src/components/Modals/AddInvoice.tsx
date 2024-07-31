import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import { AddInvoiceProps } from "../../types/types";
import InputBox from "../UI/InputBox";

const AddInvoiceModal = () => {
  return (
    <div className="h-full w-[calc(50%-103px)] bg-12-black absolute left-[103px] z-20 overflow-scroll">
      <div className="m-14">
        <h2 className="text-white font-bold">New Invoice</h2>
        <p className="text-1-dark-violet text-sm font-semibold mt-8">
          Bill From
        </p>
        <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
        <InputBox inputType="text" />
        <div className="flex gap-6">
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">City</p>
            <InputBox inputType="text" />
          </div>
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">Postal Code</p>
            <InputBox inputType="text" />
          </div>
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">Country</p>
            <InputBox inputType="text" />
          </div>
        </div>
        <p className="text-1-dark-violet text-sm font-semibold mt-8">Bill To</p>
        <div>
          <p className="text-5-light-gray font mt-4 mb-2">Client's Name</p>
          <InputBox inputType="text" />
        </div>
        <div>
          <p className="text-5-light-gray font mt-4 mb-2">Client's Email</p>
          <InputBox inputType="text" />
        </div>
        <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>

        <InputBox inputType="text" />
        <div className="flex gap-6 ">
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">City</p>
            <InputBox inputType="date" />
          </div>
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">Postal Code</p>
            <InputBox inputType="text" />
          </div>
          <div>
            <p className="text-5-light-gray font mt-4 mb-2">Country</p>
            <InputBox inputType="text" />
          </div>
        </div>
        <div>
          <div className="flex gap-6">
            <div className="flex-1">
              <p className="text-5-light-gray font mt-4 mb-2 opacity-75">
                Invoice Date
              </p>
              <InputBox inputType="text" />
            </div>
            <div className="flex-1">
              <p className="text-5-light-gray font mt-4 mb-2 ">Payment Terms</p>
              <InputBox inputType="text" />
            </div>
          </div>
        </div>
        <p className="text-5-light-gray font mt-4 mb-2 ">Project Description</p>
        <InputBox inputType="text" />
        <p className="text-5-light-gray font-bold text-xl mt-10 mb-2 opacity-75 ">
          Item List
        </p>
      </div>
    </div>
  );
};

const AddInvoice = ({ toggleAddInvoiceModal }: AddInvoiceProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleModal={toggleAddInvoiceModal} />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <AddInvoiceModal />,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default AddInvoice;
