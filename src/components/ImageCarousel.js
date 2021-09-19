import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel controls={false} indicators={false} interval={4000} pause={false}>
    {images.map((image) => {
      return (
        <Carousel.Item key={image.alt}>
          <img src={image.image} alt={image.alt} className={"w-100"} />
        </Carousel.Item>
      );
    })}
  </Carousel>
  )
}

export default ImageCarousel;