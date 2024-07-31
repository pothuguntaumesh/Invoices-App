import React, { useState } from "react";
import button from "../../assets/icon-plus.svg";
import { useMediaQuery } from "react-responsive";
import AddInvoice from "../Modals/AddInvoice";

const NewInvoiceButton = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const [isAddInvoiceModalOpen, setIsAddInvoiceModalOpen] = useState(false);

  const toggleAddInvoiceModal = (): void => {
    console.log("toogleInvoice modal");
    setIsAddInvoiceModalOpen((prev) => !prev);
  };
  return (
    <>
      {isAddInvoiceModalOpen && (
        <AddInvoice toggleAddInvoiceModal={toggleAddInvoiceModal} />
      )}
      <div
        className="h-[48px] bg-1-dark-violet rounded-full ml-4 sm:ml-10 flex justify-between items-center px-2 hover:bg-2-light-violet cursor-pointer"
        onClick={() => toggleAddInvoiceModal()}
      >
        <div className="bg-11-white w-[32px] h-[32px] rounded-full flex justify-center items-center">
          <img src={button} width={10} alt="" />
        </div>
        <h4 className="text-11-white text-sm sm:text-lg font-bold px-3">
          New{isSmallScreen ? "" : " Invoice"}
        </h4>
      </div>
    </>
  );
};

export default NewInvoiceButton;
