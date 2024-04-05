import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = ({ slides, title, subtitle, content }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Set the time in milliseconds (e.g., 3000 = 3 seconds)
        prevArrow: false,
        nextArrow: false,
      };
  return (
    <div className="flex flex-col items-center px-2 md:flex md:flex-row items-center justify-center w-full bg-primary bg-opacity-20">
      <div className="relative w-full md:w-1/2 py-8 md:px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[360px]">
              <div className="absolute inset-0 bg-black bg-opacity-20  z-20"></div>
              <img
                src={slide.image}
                className="rounded-lg w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              <h2 className="absolute z-30 text-xl top-0 left-0 md:text-3xl font-bold py-12 px-12 text-white">
                {slide.title}
              </h2>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative w-full pb-6 -mt-12 md:mt-0 md:w-1/2 md:pt-24 md:px-4">
        <h1 className="text-2xl mt-24 md:-mt-12 font-bold capitalize md:text-4xl">{title}</h1>
        <h2 className="mt-4 text-xl font-bold text-primary">{subtitle}</h2>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
