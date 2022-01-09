import React from "react";

const PoductsFilter = ({ allData, onSelect }) => {
  const uniqueProduct = [
    ...new Set(
      allData.map((data) => {
        return data.product_name;
      })
    ),
  ];
  return (
    <select
      className="form-select bg-dark text-light mb-2  border-0  "
      aria-label="Default select example"
      name=""
      id=""
      onChange={(e) => onSelect(e)}
    >
      {uniqueProduct.map((curr, index) => {
        return (
          <option key={index} value={curr}>
            {curr}
          </option>
        );
      })}
    </select>
  );
};

export default PoductsFilter;
