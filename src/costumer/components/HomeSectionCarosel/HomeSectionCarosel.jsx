import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import { mens_kurta } from "../../../Data/men_kurts";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <h1 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h1>

      <div className="relative p-5">
        <AliceCarousel
          items={items}
          // disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowCircleLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowCircleLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
