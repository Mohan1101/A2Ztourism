

import React, { useState } from "react";
import DropdownContent from "../components/common/DropdownContent";
import { SrilankaCategories as categories  } from "../data/dummyData";
import { contentSriLanka1, contentSriLanka2, contentSriLanka3, contentSriLanka4 } from "../data/dummyData";
import { srilankaslides1, srilankaslides2, srilankaslides3, srilankaslides4 } from "../data/dummyData";
import { Srilankacategory } from "../data/dummyData";
import { Categories } from "../components/common/page-componets";

const ServicesFour = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const contentsArray = [
    { title: "GLIMPSES OF SRI LANKA (3 Nights / 4 days)", contents: contentSriLanka1, slides: srilankaslides1 },
    { title: "HILLS AND BEACHES OF SRI LANKA (5 Nights / 6 Days)", contents: contentSriLanka2, slides: srilankaslides2 },
    { title: "HERITAGE TOUR OF SRI LANKA (6 Nights / 7 Days)", contents: contentSriLanka3, slides: srilankaslides3 },
    { title: "RAMAYANA TOUR OF SRI LANKA (7 Nights / 8 Days)", contents: contentSriLanka4, slides: srilankaslides4 },
    
  ];

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Sri Lanka</h1>
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
      <Categories categories={categories} content={Srilankacategory} />
    </div>
  );
};

export default ServicesFour;

