// Services.js

import React, { useState } from "react";
import DropdownContent from "../components/common/DropdownContent";
import { Tamilnaducategories as categories } from "../data/dummyData";
import { contentTamilnadu1, contentTamilnadu2, contentTamilnadu3, contentTamilnadu4, contentTamilnadu5, contentTamilnadu6, contentTamilnadu7 } from "../data/dummyData";
import { Tamilnaduslides1, Tamilnaduslides2, Tamilnaduslides3, Tamilnaduslides4, Tamilnaduslides5, Tamilnaduslides6, Tamilnaduslides7 } from "../data/dummyData";
import { Tamilnaducategory } from "../data/dummyData";
import { Categories } from "../components/common/page-componets";

const Services = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const contentsArray = [
    { title: "MADURAI / RAMESHWARAM / KANYKUMARI (3 Nights / 4 Days)", contents: contentTamilnadu1, slides: Tamilnaduslides1 },
    { title: "BANGALORE / MYSORE / OOTY (4 Nights / 5 Days)", contents: contentTamilnadu2, slides: Tamilnaduslides2 },
    { title: "CHENNAI / TIRUPATI / MAHABALIPURAM / PONDICHERRY (4 Nights / 5 Days)", contents: contentTamilnadu3, slides: Tamilnaduslides3 },
    { title: "CHENNAI / PONDICHERRY / KUMBAKONAM (NAVAGRAHA TEMPLES) / THANJAVUR / RAMESHWARAM / KANYAKUMARI / MADURAI (6 Nights / 7 Days)", contents: contentTamilnadu4, slides: Tamilnaduslides4 },
    { title: "TAMIL NADU TEMPLES AND BEACHES (9 Nights / 10 Days)", contents: contentTamilnadu5, slides: Tamilnaduslides5 },
    { title: "TEMPLES / HILL STATION / BACK WATER HOUSE BOAT (9 Nights / 10 Days)", contents: contentTamilnadu6, slides: Tamilnaduslides6 },
    { title: "BANGALORE / COORG / WAYANAD (04 Nights / 05 Days)", contents: contentTamilnadu7, slides: Tamilnaduslides7 },
  ];

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Tamil Nadu</h1>
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
      <Categories categories={categories} content={Tamilnaducategory} />
    </div>
  );
};

export default Services;



// import { Categories } from "../components/common/page-componets";
// import DropdownContent from "../components/common/DropdownContent";
// import { Tamilnaducategories as categories } from "../data/dummyData";
// import { contentTamilnadu1, contentTamilnadu2, contentTamilnadu3, contentTamilnadu4, contentTamilnadu5, contentTamilnadu6 } from "../data/dummyData";
// import { Tamilnaduslides1, Tamilnaduslides2, Tamilnaduslides3, Tamilnaduslides4, Tamilnaduslides5, Tamilnaduslides6 } from "../data/dummyData";
// import {Tamilnaducategory} from "../data/dummyData";

// const Services = () => {


//   return (
//     <div className="pt-20 px-[3%] md:px-[6%]">
//       <h1 className="text-3xl md:text-4xl font-bold text-center">Our Tailored Itineraries for Tamil Nadu</h1>
//       <DropdownContent
//         title="MADURAI / RAMESHWARAM / KANYKUMARI (3 Nights / 4 Days)"
//         contents={contentTamilnadu1}
//         slides={Tamilnaduslides1}
//       />
//       <DropdownContent
//         title="BANGALORE / MYSORE / OOTY (4 Nights / 5 Days)"
//         contents={contentTamilnadu2}
//         slides={Tamilnaduslides2}
//       />
//       <DropdownContent
//         title="CHENNAI / TIRUPATI / MAHABALIPURAM / PONDICHERRY (4 Nights / 5 Days)"
//         contents={contentTamilnadu3}
//         slides={Tamilnaduslides3}
//       />
//       <DropdownContent
//         title="CHENNAI / PONDICHERRY / KUMBAKONAM (NAVAGRAHA TEMPLES) / THANJAVUR / RAMESHWARAM / KANYAKUMARI / MADURAI (6 Nights / 7 Days)"
//         contents={contentTamilnadu4}
//         slides={Tamilnaduslides4}
//       />
//       <DropdownContent
//         title="TAMIL NADU TEMPLES AND BEACHES (9 Nights / 10 Days)"
//         contents={contentTamilnadu5}
//         slides={Tamilnaduslides5}
//       />
//       <DropdownContent
//         title="TEMPLES / HILL STATION / BACK WATER HOUSE BOAT (9 Nights / 10 Days)"
//         contents={contentTamilnadu6}
//         slides={Tamilnaduslides6}
//       />
//       <Categories categories={categories} content={Tamilnaducategory} />
//     </div>
//   );
// };

// export default Services
