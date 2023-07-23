import React, { useState, useLayoutEffect } from "react";
import ArrowDown from "../icons/ArrowDown";

const SocialSkills = ({ item, activeIndex, setActiveIndex }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDescription = (index) => {
    setActiveIndex(index);
  };

  useLayoutEffect(() => {
    setIsActive(activeIndex === item.num);
  }, [activeIndex, item.num]);

  return (
    <>
      <div
        key={item.num}
        className={`relative my-[6px] flex w-full flex-col justify-center bg-transparent px-2 text-black outline-none ring-0  
        ${item.btnVisibility ? "visible" : "hidden"}`}
      >
        <div
          className={`${isActive ? "bg-indigo-900" : ""}
        relative flex flex-col justify-center gap-y-1 overflow-hidden rounded-2xl p-2 px-3 py-2 underline-offset-4 shadow-2xl`}
        >
          <h3
            className={`my-2 font-title text-[22px] font-medium opacity-90 lg:text-2xl ${
              isActive ? "text-white" : ""
            }`}
          >
            {`${item.num}. ${item.title}`}
          </h3>
          <button
            type="button"
            onClick={() => toggleDescription(item.num)}
            className={`${activeIndex === item.num ? "active text-white" : ""}`}
          >
            {!isActive && <ArrowDown />}
            {activeIndex === item.num && (
              <p className="mb-2 cursor-text space-x-2 break-words px-2 text-center indent-1 font-pargraph text-[14px] leading-6 text-white opacity-80 sm:text-[16px] md:text-justify md:indent-2">
                {item.description}
              </p>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialSkills;
