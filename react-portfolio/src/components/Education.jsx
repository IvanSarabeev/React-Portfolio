import React from "react";

const Education = (props) => {
  return (
    <div>
      <div
        key={props.index}
        className={`${props.edu.color} my-4 flex flex-col rounded-[0.75rem]`}
      >
        <div className="relative flex flex-col rounded-[0.75rem] p-6">
          <h4 className="my-2 leading-8 text-[#2686976]">{props.edu.year}</h4>
          <h3 className="mt-2 flex gap-4 text-[22px] font-semibold capitalize">
            {props.edu.title}
          </h3>
          <div className="absolute right-[5%] top-[5%]">{props.icon}</div>
          <p className="my-2 leading-8 text-[#2686976]">
            {props.edu.establishment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
