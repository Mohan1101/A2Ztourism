// ServicesTwo.js

import React, { useState } from "react";
import DropdownContent from "../components/common/DropdownContent";
import { categories } from "../data/dummyData";
import { contents1, contents2, contents3, contents4, contents5, contents6, contentTamilnadu7} from "../data/dummyData";
import { slides1, slides2, slides3, slides4, slides5, slides6, Tamilnaduslides7 } from "../data/dummyData";
import { Keralacategory } from "../data/dummyData";
import { Categories } from "../components/common/page-componets";

const ServicesTwo = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const contentsArray = [
    { title: "COCHIN / MUNNAR / THEKKADY (3 Nights / 4 Days)", contents: contents1, slides: slides1 },
    { title: "COCHIN / MUNNAR / ALLEPPEY (3 Nights / 4 Days)", contents: contents2, slides: slides2 },
    { title: "TRIVANDRUM / KANYAKUMARI (3 Nights / 4 Days)", contents: contents3, slides: slides3 },
    { title: "COCHIN / MUNNAR / ALLEPPEY (4 Nights / 5 Days)", contents: contents4, slides: slides4 },
    { title: "COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM (7 Nights / 8 Days)", contents: contents5, slides: slides5 },
    { title: "COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM / KANYAKUMARI (8 Nights / 9 Days)", contents: contents6, slides: slides6 },
    { title: "BANGALORE / COORG / WAYANAD (04 Nights / 05 Days)", contents: contentTamilnadu7, slides: Tamilnaduslides7 },
  ];

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Kerala</h1>
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
      <Categories categories={categories} content={Keralacategory} />
    </div>
  );
};

export default ServicesTwo;


// import { Categories } from "../components/common/page-componets";
// import DropdownContent from "../components/common/DropdownContent";
// import { categories } from "../data/dummyData";
// import { contents1, contents2, contents3, contents4, contents5, contents6 } from "../data/dummyData";
// import { slides1, slides2, slides3, slides4, slides5, slides6 } from "../data/dummyData";
// import { Keralacategory } from "../data/dummyData";

// const ServicesTwo = () => {


//   return (
//     <div className="pt-20 px-[3%] md:px-[6%]">
//       <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Kerala</h1>
//       <DropdownContent
//         title="COCHIN / MUNNAR / THEKKADY (3 Nights / 4 Days)"
//         contents={contents1}
//         slides={slides1}
//       />
//       <DropdownContent
//         title="COCHIN / MUNNAR / ALLEPPEY (3 Nights / 4 Days)"
//         contents={contents2}
//         slides={slides2}
//       />
//       <DropdownContent
//         title="TRIVANDRUM / KANYAKUMARI (3 Nights / 4 Days)"
//         contents={contents3}
//         slides={slides3}
//       />
//       <DropdownContent
//         title="COCHIN / MUNNAR / ALLEPPEY (4 Nights / 5 Days)"
//         contents={contents4}
//         slides={slides4}
//       />
//       <DropdownContent
//         title="COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM (7 Nights / 8 Days)"
//         contents={contents5}
//         slides={slides5}
//       />
//       <DropdownContent
//         title="COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM / KANYAKUMARI (8 Nights / 9 Days)"
//         contents={contents6}
//         slides={slides6}
//       />
//       <Categories categories={categories} content={Keralacategory} />
//     </div>
//   );
// };

// export default ServicesTwo;
