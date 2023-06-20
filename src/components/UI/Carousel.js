import classes from "@/styles/container.module.scss";
import { useState } from "react";
import Image from "next/image";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";


const Carousel = ({ carouselData }) => {
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleCarousel = (direction) => {
    if (direction === "left") {
      if (carouselIndex === 0) {
        setCarouselIndex(carouselData.length - 1);
        setActiveIndicator(carouselData.length - 1);
      } else {
        setCarouselIndex(carouselIndex - 1);
        setActiveIndicator(carouselIndex - 1);
      }
    } else if (direction === "right") {
      if (carouselIndex === carouselData.length - 1) {
        setCarouselIndex(0);
        setActiveIndicator(0);
      } else {
        setCarouselIndex(carouselIndex + 1);
        setActiveIndicator(carouselIndex + 1);
      }
    }
  };

  const handleIndicatorClick = (index) => {
    setCarouselIndex(index);
    setActiveIndicator(index);
  };

  return (
    <div className={classes["carousel-container"]}>

      { carouselData.map((carouselItem, index) => {
        return (
          <Image
            key={carouselItem.id}
            src={carouselItem.src}
            alt="Un paysage urbain alternant sans transition des environnements sociaux et d'habitats extrêmement contrastés"
            fill={true}
            className={index === carouselIndex ? classes["active-img"] : ""}
          />
        );
      })}

      <div className={classes["arrow-left"]} onClick={() => handleCarousel("left")}><KeyboardArrowLeftRoundedIcon /></div>
      <div className={classes["arrow-right"]} onClick={() => handleCarousel("right")}><KeyboardArrowRightRoundedIcon /></div>

      <div className={classes["carousel-indicators-container"]}>
        {carouselData.map((carouselItem, index) => {
          return(
            <span
            key={carouselItem.id}
            className={`${classes["carousel-indicator"]} ${
              index === activeIndicator ? classes["active-indicator"] : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
            ></span>
          )
        })}
      </div>
    </div>
  );
};

export default Carousel;
