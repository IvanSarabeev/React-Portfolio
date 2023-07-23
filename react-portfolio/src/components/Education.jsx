import React from "react";

const Education = ({ edu }) => {
  return (
    <div>
      <div
        key={edu.index}
        className={`${edu.color} my-3 flex flex-col rounded-[0.75rem] opacity-80 transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-2xl  hover:opacity-100 hover:ring-2 hover:ring-neutral-200 md:my-4`}
      >
        <div className="relative flex flex-col rounded-[0.75rem] p-6">
          <h4 className="my-2 break-words text-[14px] leading-4 text-[#2686976] md:text-[16px] md:leading-8">
            {edu.year}
          </h4>
          <h3 className="mt-3 text-[18px] font-semibold capitalize md:mt-2 md:text-[22px]">
            {edu.title}
          </h3>
          <p className="my-2 leading-6 text-[#2686976] md:leading-8">
            {edu.establishment}
          </p>
          <img
            src={edu.icon}
            alt={edu.title}
            className="absolute right-[2%] top-[2%] h-[60px] w-[60px] rounded-full md:right-[5%] md:top-[5%] md:h-[100px] md:w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
