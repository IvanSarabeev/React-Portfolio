import React from "react";

const filterNames = ["All", "Front-end", "Back-end", "Other"];

const TitleFilter = ({ selectedSkill, setSelectedSkill }) => {
  return (
    <>
      {filterNames.map((item, index) => {
        return (
          <span
            key={index}
            className={`${
              selectedSkill === item
                ? "text-[#1d8cf8]"
                : "text-slate-800 opacity-80 hover:text-[#fa5252]"
            } mx-auto cursor-pointer font-pageheading text-lg font-semibold md:mx-1 md:text-xl`}
            onClick={() => setSelectedSkill(item)}
          >
            {item}
          </span>
        );
      })}
    </>
  );
};

export default TitleFilter;
