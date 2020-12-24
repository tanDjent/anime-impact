import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./carousel.css";
import AnimeCard from "./AnimeCard";

const CustomCarousel = ({ slides, title, style = {} }) => (
  <CarouselProvider
    style={style}
    visibleSlides={5}
    totalSlides={slides.length}
    step={5}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    infinite
  >
    <div className='container'>
      <h2 style={{ marginBottom: "0.8rem" }}>{title}</h2>
      <Slider className='slider'>
        {slides.map((slide, index) => (
          <Slide key={index} index={index}>
            <AnimeCard animeData={slide} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className='button Back'>
        <i className='fas fa-chevron-left'></i>
      </ButtonBack>
      <ButtonNext className='button Next'>
        <i className='fas fa-chevron-right'></i>
      </ButtonNext>
    </div>
  </CarouselProvider>
);
export default CustomCarousel;
