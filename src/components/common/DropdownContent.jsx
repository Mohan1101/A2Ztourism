// DropdownContent.js

import React, { useState } from "react";
import Content from "./page-componets/Content";
import Subcontent from "./page-componets/Subcontent";

const DropdownContent = ({ index, title, contents, slides, openIndex, onToggle }) => {
  return (
    <div className="my-4">
      <div
        className="flex items-center justify-between cursor-pointer border-b border-gray-300 dark:border-b-dark p-4 hover:text-primary dark:hover:text-primary-dark transition-all duration-300"
        onClick={() => onToggle(index)}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="dropdown-icon">
          {openIndex === index ? <span className="text-lg">&#9650;</span> : <span className="text-lg">&#9660;</span>}
        </div>
      </div>
      {openIndex === index && (
        <div className="mt-4">
          {contents.map((content, contentIndex) => (
            <div key={contentIndex} className="mb-4">
              {contentIndex % 2 === 0 ? (
                <Content slides={slides} title={content.title} subtitle={content.subtitle} content={content.content} />
              ) : (
                <Subcontent slides={slides} title={content.title} subtitle={content.subtitle} content={content.content} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownContent;
