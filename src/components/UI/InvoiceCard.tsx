import React from "react";
import StatusCard from "./StatusCard";
import { InvoiceCardProps } from "../../types/types";
import { formatCurrency, mapStatusToEnum } from "../../utils/utils";

const InvoiceCard = ({
  id,
  dueDate,
  name,
  amount,
  status,
}: InvoiceCardProps) => {
  return (
    <div className="w-full rounded-md bg-3-dark-black mt-2 flex pl-10 pr-6 text-11-white py-8 items-center justify-between gap-4 mb-5">
      <h2 className="font-bold">
        <span className="text-7-gray-blue">#</span>
        {id}
      </h2>
      <h4 className="text-5-light-gray">Due {dueDate}</h4>
      <h4>{name}</h4>
      <h2 className="font-bold tracking-wide">
        <span className="pr-1">$</span>
        {formatCurrency(amount)}
      </h2>
      <StatusCard statusType={mapStatusToEnum(status)} />
    </div>
  );
};

export default InvoiceCard;
