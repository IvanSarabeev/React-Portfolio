import React from "react";

const Education = (props) => {
  return (
    <div>
      <div
        key={props.index}
        className={`${props.edu.color} my-4 flex flex-col rounded-[0.75rem] opacity-80 transition-all duration-300 ease-in-out hover:scale-105  hover:rounded-2xl hover:opacity-100 hover:ring-2 hover:ring-neutral-200`}
      >
        <div className="relative flex flex-col rounded-[0.75rem] p-6">
          <h4 className="my-2 leading-8 text-[#2686976]">{props.edu.year}</h4>
          <h3 className="mt-2 flex gap-4 text-[22px] font-semibold capitalize">
            {props.edu.title}
          </h3>
          <p className="my-2 leading-8 text-[#2686976]">
            {props.edu.establishment}
          </p>
          <img
            src={props.edu.icon}
            alt={props.edu.title}
            className="absolute right-[5%] top-[5%] h-[100px] w-[100px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
