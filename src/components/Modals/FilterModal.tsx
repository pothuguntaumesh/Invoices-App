import React, { useState } from "react";
import { PaymentStatus } from "../../types/types";

const FilterModal = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Array(String));
  const filterValues = Object.values(PaymentStatus).filter(
    (value) => typeof value === "string"
  );
  const clickedFilter = (filter: string) => {
    console.log(filter);
    // setSelectedFilters((prevFilters) => {
    //   const newFilters = [...prevFilters];
    //   newFilters.filter(curFilter=>)
    //   return newFilters;
    // });
    console.log(selectedFilters);
  };
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
              onChange={() => clickedFilter(filter)}
            />
            <h4 className="text-white font-bold">{filter}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterModal;
