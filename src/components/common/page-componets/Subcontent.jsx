import React from "react";

const Subcontent = ({ slides, title, subtitle, content }) => {
  // Randomly select one index from the slides array
  const randomIndex = Math.floor(Math.random() * slides.length);
  const randomSlide = slides[randomIndex];

  return (
    <>
      <div className="flex flex-col items-center px-2 py-8 md:flex md:flex-row items-start justify-center w-full bg-primary bg-opacity-10 relative">
        <div className="w-full pb-6 md:w-1/2 md:px-4">
          {title && (
            <h1 className="text-2xl font-bold capitalize md:text-3xl">
              {title}
            </h1>
          )}
          <h2 className="mt-4 text-xl font-bold text-primary">
            {subtitle}
          </h2>
          <div className="pl-3 mt-5 border-l-4 border-primary">
            <p>
              {content}
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 md:px-4">
          {/* Display only the randomly selected image */}
          <img
            src={randomSlide.image}
            className="w-full h-[360px] object-cover rounded-lg"
            alt={`Random Slide`}
          />
          <div className="absolute top-0 left-0 p-4 text-white z-10">
            <h3 className="text-xl top-0 left-0 md:text-3xl font-bold py-12 px-12 text-white">{randomSlide.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcontent;
