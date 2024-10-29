import AliceCarousel from "react-alice-carousel";
import { MainCoroselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
const MainCarosel = () => {
  const items = MainCoroselData.map((item) => (
    <img
      className="cursor-pointer -z-10"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarosel;
