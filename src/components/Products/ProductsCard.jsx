import React from "react";
import Cards from "./Cards";
import style from "./PoductStyle.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductsCard = ({ allData }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {allData.map((data, index) => {
        return <Cards key={index} data={data} />;
      })}
    </Slider>
  );
};

export default ProductsCard;
