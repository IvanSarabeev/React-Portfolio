import React from "react";
import data from "../../../../constants/data";
import Accordion from "./Accordion";

const MainSkills = () => {
  return (
    <article className="mt-4 flex flex-col rounded-xl shadow-2xl lg:mt-6">
      {data.personalSkills.map((item, index) => (
        <Accordion key={index} item={item} />
      ))}
    </article>
  );
};

export default MainSkills;
