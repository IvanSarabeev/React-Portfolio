import React from "react";

const Experience = ({ exp }) => {
  return (
    <div
      key={exp.index}
      className={`${exp.bgColor} my-4 flex flex-col rounded-[0.75rem] opacity-80 transition-all duration-300 ease-in-out hover:scale-105  hover:rounded-2xl hover:opacity-100 hover:ring-2 hover:ring-neutral-200`}
    >
      <div className="relative flex flex-col rounded-[0.75rem] p-6">
        <h4 className="my-2 leading-4 text-[#2686976] md:leading-8">
          {exp.period}
        </h4>
        <h3 className="mt-3 text-[18px] font-semibold capitalize md:mt-2 md:text-[22px]">
          {`${exp.company}`}
        </h3>
        <h5 className="my-2 capitalize leading-6 text-[#2686976] md:leading-8">
          Position: {exp.title}
        </h5>
        <img
          src={exp.icon}
          alt={exp.title}
          className="absolute right-[2%] top-[2%] h-[60px] w-[60px] rounded-full md:right-[5%] md:top-[5%] md:h-[100px] md:w-[100px]"
        />
      </div>
    </div>
  );
};

export default Experience;
