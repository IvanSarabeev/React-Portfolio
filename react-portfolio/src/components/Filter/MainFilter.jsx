import React, { useState } from "react";
import data from "../../data/data";
import TitleFilter from "./Title/TitleFilter";
import TechStack from "./Tech/TechStack";

const MainFilter = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filterSkills =
    selectedSkill !== "All"
      ? data.tech.filter((item) => item.area === selectedSkill)
      : data.tech;

  return (
    <>
      <div className="mt-4 flex flex-auto flex-wrap rounded-2xl p-1 shadow-xl lg:p-4">
        <div className="mb-5 flex flex-wrap justify-start gap-2 md:gap-6">
          <TitleFilter
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
          <div className="flex flex-wrap items-center justify-evenly gap-x-5 gap-y-2 p-2 md:justify-around md:gap-x-6 md:gap-y-4 ">
            {filterSkills.map((skill, index) => {
              return (
                <TechStack
                  key={index}
                  skill={skill}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFilter;
