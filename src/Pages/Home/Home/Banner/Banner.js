import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../assets/images/pdb1.jpg";
import img2 from "../../../../assets/images/pbd2.jpeg";
import img3 from "../../../../assets/images/pbd3.jpg";

import "./banner.css";

const Banner = () => {
  const slider = [
    {
      id: 1,
      img: img1,
      model: "PDB Power Controller",
    },
    {
      id: 2,
      img: img2,
      model: "PDB Power Station",
    },
    {
      id: 3,
      img: img3,
      model: "PDB SUB Station of Bandarban",
    },
  ];
  return (
    <Carousel className="main-slider" showArrows={true}>
      {slider.map((slide) => (
        <div key={slide.id}>
          <img
            className="h-[500px] rounded-md"
            src={slide.img}
            alt="images.jpg"
          />

          <p className="legend">{slide.model}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
