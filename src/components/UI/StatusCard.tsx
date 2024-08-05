import React from "react";
import righArrow from "../../assets/icon-arrow-right.svg";
import { PaymentStatus, StatusCardProps } from "../../types/types";
import { useMediaQuery } from "react-responsive";

const statusStyles = {
  [PaymentStatus.Paid]: {
    bg: "bg-paid",
    textColor: "text-paid",
    status: "Paid",
  },
  [PaymentStatus.Pending]: {
    bg: "bg-pending",
    textColor: "text-pending",
    status: "Pending",
  },
  [PaymentStatus.Draft]: {
    bg: "bg-5-light-gray",
    textColor: "text-5-light-gray",
    status: "Draft",
  },
};

const StatusCard = ({ statusType }: StatusCardProps) => {
  const { bg, textColor, status } = statusStyles[statusType];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="flex items-center gap-6">
      <div
        className={`${bg} w-[104px] h-[40px] bg-opacity-10 rounded-md flex justify-center items-center`}
      >
        <h3 className={`${textColor} font-semibold`}>
          <span className="pr-2">●</span>
          {status}
        </h3>
      </div>
    </div>
  );
};

export default StatusCard;
