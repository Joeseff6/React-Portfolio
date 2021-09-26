import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel controls={false} indicators={false} interval={4000} pause={false}>
    {images.map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <img src={image.image} alt={image.alt} className="w-100 carouselImage" />
        </Carousel.Item>
      );
    })}
  </Carousel>
  )
}

export default ImageCarousel;