import React, { useState } from "react";
import button from "../../assets/icon-plus.svg";
import { useMediaQuery } from "react-responsive";
import AddEditInvoice from "../Modals/AddEditInvoice";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalTypeToAdd,
  toggleModal,
} from "../../features/modals/modalSlice";

const NewInvoiceButton = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const dispatch = useDispatch();
  const isAddEditInvoiceOpen = useSelector(
    (state: any) => state.modal.isModalOpen
  );
  console.log(isAddEditInvoiceOpen, "toggle modal value");

  const toggleAddInvoiceModal = (): void => {
    dispatch(setModalTypeToAdd());
    dispatch(toggleModal());
  };
  return (
    <>
      {isAddEditInvoiceOpen && (
        <AddEditInvoice toggleAddEditInvoiceModal={toggleAddInvoiceModal} />
      )}
      <div
        className="h-[48px] bg-1-dark-violet rounded-full ml-4 sm:ml-10 flex justify-between items-center px-2 hover:bg-2-light-violet cursor-pointer"
        onClick={() => {
          toggleAddInvoiceModal();
        }}
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
