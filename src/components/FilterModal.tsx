import React from "react";
import { FilterModalProps, PaymentStatus } from "../types/types";

const FilterModal = ({ addClickedFilter }: FilterModalProps) => {
  const filterValues = Object.values(PaymentStatus).filter(
    (value) => typeof value === "string"
  );
  return (
    <div
      className="pl-8 py-4 pr-24 mt-5 bg-4-light-black absolute top-10 rounded-md"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <ul>
        {filterValues.map((filter) => (
          <li key={filter} className="flex gap-3 my-2">
            <input
              type="checkbox"
              className="custom-checkbox"
              value={filter}
              onChange={() => addClickedFilter(filter)}
            />
            <h4 className="text-white font-bold">{filter}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterModal;
