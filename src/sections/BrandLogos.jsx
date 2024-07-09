import React from "react";
import Slider from "react-infinite-logo-slider";
import { brandLogos } from "../constants";

const BrandLogos = () => {
  return (
    <div>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <img
            src="../assets/images/brandLogos/b1.png"
            alt="any"
            className="w-36"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default BrandLogos;
