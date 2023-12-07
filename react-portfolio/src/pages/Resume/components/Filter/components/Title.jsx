import React from "react";

const filterNames = ["All", "Front-end", "Back-end", "Other"];

const TitleFilter = ({ selectedSkill, setSelectedSkill }) => {
  return (
    <>
      {filterNames.map((item, index) => {
        return (
          <h3
            key={index}
            className={`${
              selectedSkill === item
                ? "text-white"
                : "text-[#101010] underline-offset-4 hover:text-slate-200/60 hover:underline"
            } regular-18 cursor-pointer px-1 font-bold transition-all delay-75 ease-in-out`}
            onClick={() => setSelectedSkill(item)}
          >
            {item}
          </h3>
        );
      })}
    </>
  );
};

export default TitleFilter;
