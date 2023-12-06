import React, { useState } from "react";
import data from "../../../../constants/data";
import Title from "./components/Title";
import { fadeInAnimation } from "../../../../components/Animations/fadeInAnimation";
// import TechStack from "./components/TechItems";

const TechFilter = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  const filterSkills =
    selectedSkill !== "All"
      ? data.tech.filter((item) => item.area === selectedSkill)
      : data.tech;

  return (
    <>
      <span className="flex items-center justify-start gap-x-2">
        <Title
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
      </span>
      <div className="flex flex-wrap items-center justify-evenly gap-x-5 gap-y-2 p-2 md:justify-around md:gap-x-8 md:gap-y-4 ">
        {filterSkills.map((item, index) => {
          return (
            <>
              <div
                key={index}
                custom={index}
                variants={fadeInAnimation}
                initial="initial"
                animate="animate"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", duration: 0.7 }}
                className={`${item.area} drop-shadow-xl`}
              >
                {item.icon}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TechFilter;
