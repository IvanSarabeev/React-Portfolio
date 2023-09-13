import React from "react";

const TechStack = ({ skill, hoveredSkill, setHoveredSkill }) => {
  return (
    <>
      <div
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex flex-col items-center justify-self-center">
          <div>{skill.icon}</div>
          {hoveredSkill === skill ? (
            <h5 className="font-title text-sm font-medium md:text-base lg:text-lg">
              {skill.title}
            </h5>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TechStack;
