import React from "react";

const CityFIlter = ({ allData, onSelect }) => {
  const uniqueCity = [
    ...new Set(
      allData.map((data) => {
        return data.address.city;
      })
    ),
  ];
  return (
    <select
      className="form-select bg-dark text-light mb-2 border-0"
      aria-label="Default select example"
      name=""
      id=""
      onChange={(e) => onSelect(e)}
    >
      {uniqueCity.map((curr, index) => {
        return (
          <option key={index} value={curr}>
            {curr}
          </option>
        );
      })}
    </select>
  );
};

export default CityFIlter;
