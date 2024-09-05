import React from "react";
import StatusCard from "./UI/StatusCard";
import { InvoiceDetailHeaderProps } from "../types/types";
import { useMediaQuery } from "react-responsive";
import InvoiceDetailButtons from "./InvoiceDetailButtons";
import { mapStatusToEnum } from "../utils/utils";

const InvoiceDetailHeader = ({
  invoiceId,
  invoiceStatus,
  toggleDeleteModal,
}: InvoiceDetailHeaderProps) => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="flex mt-6 px-8 py-10 md:py-6 bg-3-dark-black rounded-md items-center justify-between ">
      <div className="flex items-center gap-6 w-full justify-between md:w-1/6">
        <p className="text-5-light-gray text-md">Status</p>
        <StatusCard statusType={mapStatusToEnum(invoiceStatus)} />
      </div>
      {!isMediumScreen && (
        <InvoiceDetailButtons
          invoiceId={invoiceId}
          toggleDeleteModal={toggleDeleteModal}
        />
      )}
    </div>
  );
};

export default InvoiceDetailHeader;
