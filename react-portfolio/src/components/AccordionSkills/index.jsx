import React from "react";
import data from "../../data/data";
import Accordion from "./Accordion";

const MainSkills = () => {
  return (
    <article className="mt-4 flex flex-col rounded-b-xl rounded-t-xl bg-transparent shadow-2xl">
      {data.personalSkills.map((item, index) => (
        <Accordion key={index} item={item} />
      ))}
    </article>
  );
};

export default MainSkills;
