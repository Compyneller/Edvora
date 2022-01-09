import React from "react";

const StateFilter = ({ allData, onSelect }) => {
  const uniqueState = [
    ...new Set(
      allData.map((data) => {
        return data.address.state;
      })
    ),
  ];
  return (
    <select
      className="form-select bg-dark text-light mb-2  border-0"
      aria-label="Default select example"
      name=""
      id=""
      onChange={(e) => onSelect(e)}
    >
      {uniqueState.map((curr, index) => {
        return (
          <option key={index} value={curr}>
            {curr}
          </option>
        );
      })}
    </select>
  );
};

export default StateFilter;
