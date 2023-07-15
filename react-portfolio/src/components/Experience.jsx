import React from "react";

const Experience = (props) => {
  return (
    <div
      key={props.index}
      className={`${props.exp.bgColor} my-4 flex flex-col rounded-[0.75rem]`}
    >
      <div className="relative flex flex-col rounded-[0.75rem] p-6">
        <h4 className="my-2 leading-8 text-[#2686976]">{props.exp.period}</h4>
        <h3 className="mt-2 flex gap-4 text-[22px] font-semibold capitalize">
          {`${props.exp.company}`}
        </h3>
        <h3 className="my-2 mt-2 flex gap-4 capitalize leading-8 text-[#2686976]">
          Position: {props.exp.title}
        </h3>
        <img
          src={props.exp.icon}
          alt={props.exp.title}
          className="absolute right-[5%] top-[5%] h-[100px] w-[100px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Experience;
