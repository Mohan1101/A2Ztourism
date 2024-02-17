import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Filters as slides } from "../../../data/dummyData";

const Filters = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Set the time in milliseconds (e.g., 3000 = 3 seconds)
        width: "100%",


    };
    return (


        <div id="default-carousel" className="pt-4 flex flex-col items-center rounded-lg z-0 relative w-full px-1 md:py-4 bg-card-dark md:px-4" data-carousel="slide">
            <h1 className="text-xl font-semibold w-2/3 md:w-1/3 rounded-lg md:text-xl px-4 py-2.5 bg-primary font-bold text-center text-white ">Welcome to the world of adventure</h1>
            <div className="relative w-full md:w-2/3 py-8 md:px-4">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="relative h-[360px]">
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
        </div>

    );
};

export default Filters;
