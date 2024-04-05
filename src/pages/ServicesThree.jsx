// Services.js

import React, { useState } from "react";
import DropdownContent from "../components/common/DropdownContent";
import { NortheastCategories as categories } from "../data/dummyData";
import { contentNortheast1, contentNortheast2, contentNortheast3, contentNortheast4, contentNortheast5} from "../data/dummyData";
import { norteastslides1, norteastslides2, norteastslides3, norteastslides4, norteastslides5 } from "../data/dummyData";
import { Northeastcategory } from "../data/dummyData";
import { Categories } from "../components/common/page-componets";

const ServicesThree = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const contentsArray = [
    { title: "DARJEELING / GANGTOK (5 Nights / 6 Days)", contents: contentNortheast1, slides: norteastslides1 },
    { title: "GANGTOK / KALIMPONG / DARJEELING (6 Nights / 7 Days)", contents: contentNortheast2, slides: norteastslides2 },
    { title: "GANGTOK / PELLING / KALIMPONG / DARJEELING (7 Nights / 8 Days)", contents: contentNortheast3, slides: norteastslides3 },
    { title: "SHILLONG (3 Nights / 4 Days)", contents: contentNortheast4, slides: norteastslides4 },
    { title: "GUWAHATI / SHILLONG (4 Nights / 5 Days)", contents: contentNortheast5, slides: norteastslides5 },
   
  ];

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Northeast</h1>
      {contentsArray.map((contents, index) => (
        <DropdownContent
          key={index}
          index={index}
          title={contents.title}
          contents={contents.contents}
          slides={contents.slides}
          openIndex={openDropdownIndex}
          onToggle={handleToggle}
        />
      ))}
      <Categories categories={categories} content={Northeastcategory} />
    </div>
  );
};

export default ServicesThree;


