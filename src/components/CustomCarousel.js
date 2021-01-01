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

const CustomCarousel = ({ slides, title, style = {} }) => {
  const [slideCount, setCount] = React.useState();
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  React.useEffect(() => {
    if (window.innerWidth < 500) setCount(2);
    else if (window.innerWidth < 1366) setCount(3);
    else setCount(5);
  }, [dimensions]);
  return (
    <CarouselProvider
      style={style}
      visibleSlides={slideCount}
      totalSlides={slides.length}
      step={slideCount}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      infinite
    >
      <div className='container'>
        <h2 style={{ marginBottom: "0.8rem", color: "white" }}>{title}</h2>
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
};
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
export default CustomCarousel;
