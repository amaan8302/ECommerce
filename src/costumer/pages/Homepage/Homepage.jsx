import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import { Home } from "@mui/icons-material";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/men_kurts";
import { Saree_1 } from "../../../Data/Saree_1";
import { Lehenga } from "../../../Data/Lehenga";
import { mens_jeans } from "../../../Data/mens_jeans";
export const Homepage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName="Men's Kurta" />
        <HomeSectionCarosel data={mens_jeans} sectionName="Jeans" />
        <HomeSectionCarosel data={Saree_1} sectionName="Sarees" />
        <HomeSectionCarosel data={Lehenga} sectionName="Lenegas" />
      </div>
    </div>
  );
};
