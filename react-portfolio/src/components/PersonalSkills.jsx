import React from "react";

const SocialSkills = ({ item, activeIndex, setActiveIndex }) => {
  const toggleDescription = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        key={item.num}
        className={`relative mb-2 mt-4 w-full px-4 py-2 text-black underline-offset-4 shadow-2xl ${
          item.btnVisibility ? "visible" : "hidden"
        }`}
      >
        <h3 className="mb-2 font-title text-lg lg:text-2xl">{`${item.num}. ${item.title}`}</h3>
        <button
          type="button"
          onClick={() => toggleDescription(item.num)}
          className={`mr-2 ${activeIndex === item.num ? "active" : ""}`}
        >
          <svg
            className="absolute right-[5%] top-[5%] z-10 h-4 w-4 text-gray-800 transition-all duration-500 ease-in-out "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
          {activeIndex === item.num && (
            <p className="space-x-4 break-words px-2 text-justify font-text leading-6">
              {item.description}
            </p>
          )}
        </button>
      </div>
    </>
  );
};

export default SocialSkills;
