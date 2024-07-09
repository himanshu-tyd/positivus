import React from "react";
import { brandLogos } from "../constants";

const Brands = () => {
  return (
    <div className="w-full h-[140px] relative overflow-hidden ">
      <div className="w-full h-[140px] absolute top-0 animate-slide  ">
        <div className="w-full h-auto flex items-center justify-center">
          {brandLogos.map((items) => (
            <img
              key={items.logo}
              src={items.logo}
              alt={items.logo}
              className="w-[120px] md:w-[150px] lg:w-[180px] mr-10 ml-10    "
            />
          ))}
          {brandLogos.map((items) => (
            <img
              key={items.logo}
              src={items.logo}
              alt={items.logo}
              className="w-[120px] md:w-[150px] lg:w-[180px] mr-10 ml-10    "
            />
          ))}
          {brandLogos.map((items) => (
            <img
              key={items.logo}
              src={items.logo}
              alt={items.logo}
              className="w-[120px] md:w-[150px] lg:w-[180px] mr-10 ml-10    "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
