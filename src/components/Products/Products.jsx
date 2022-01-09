import React from "react";
import ProductsCard from "./ProductsCard";
import style from "./PoductStyle.module.css";

const Products = ({ allData }) => {
  return (
    <React.Fragment>
      <h1>Edvora</h1>
      <h4>Products</h4>
      <h6>Products Name</h6>
      <hr />
      <div className={style.CardContainer}>
        <ProductsCard allData={allData} />
      </div>
    </React.Fragment>
  );
};

export default Products;
