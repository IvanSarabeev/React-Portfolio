import React from "react";

const Experience = ({ exp }) => {
  return (
    <div
      key={exp.index}
      className={`${exp.bgColor} my-3 flex flex-col rounded-[0.75rem] opacity-80 transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-2xl  hover:opacity-100 hover:ring-2 hover:ring-neutral-200 md:my-4`}
    >
      <div className="relative flex flex-col rounded-[0.75rem] p-6">
        <h4 className="my-2 break-words text-[14px] italic leading-4 text-[#2686976] md:text-[16px] md:leading-8">
          {exp.period}
        </h4>
        <h3 className="mt-3 text-[18px] font-semibold capitalize md:mt-2 md:text-[22px]">
          {exp.company}
        </h3>
        <h5 className="my-2 flex items-start gap-x-1 capitalize leading-6 text-[#2686976] md:flex-row md:items-center md:gap-x-2 md:leading-8">
          Position:
          <h6 className="font-title font-semibold">{exp.title}</h6>
        </h5>
        <img
          src={exp.icon}
          alt={exp.title}
          className="absolute right-[2%] top-[2%] h-[70px] w-[70px] rounded-full sm:h-[80px] sm:w-[80px] md:right-[5%] md:top-[5%] md:h-[90px] md:w-[90px]"
        />
      </div>
    </div>
  );
};

export default Experience;
