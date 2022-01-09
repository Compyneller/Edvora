import React from "react";
import style from "./PoductStyle.module.css";

const Cards = ({ data }) => {
  return (
    <div className={style.cards}>
      <div className={style.CardImage}>
        <img src={data.image} alt="" />
        <div>
          <h4>{data.product_name}</h4>
          <p className={style.brandName}>{data.brand_name}</p>
          <p className={style.price}>$ {data.price}</p>
        </div>
      </div>

      <div className={style.locationDate}>
        <div className={style.location}>
          <p>{data.address.city}</p>
        </div>
        <div className={style.date}>
          <p>Date:{data.date}</p>
        </div>
      </div>
      <div className={style.discription}>
        <p>{data.discription}</p>
      </div>
    </div>
  );
};

export default Cards;
