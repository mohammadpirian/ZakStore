import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = () => {
  return (
    <Splide className="w-full h-[30rem] container mb-10">
      <SplideSlide>
        <img
          src="images/banner/7.jpg"
          alt="Slide 1"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="images/banner/12.jpg"
          alt="Slide 2"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="images/banner/14.jpg"
          alt="Slide 3"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="images/banner/4.jpg"
          alt="Slide 4"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="images/banner/5.jpg"
          alt="Slide 5"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="images/banner/9.jpg"
          alt="Slide 6"
          className="w-full h-[30rem] object-cover"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
