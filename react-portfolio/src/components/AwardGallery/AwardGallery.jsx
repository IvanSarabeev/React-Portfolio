import React from "react";

const AwardGallery = ({ item }) => {
  return (
    <>
      <div>
        <div className="mt-4 flex flex-col items-center justify-between leading-6 sm:mt-0">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            className="object-fit aspect-square h-36 w-52"
          />
          <h6 className="mb-1 mt-3 font-paragraph text-sm font-medium text-[#2686976]">
            {item.text}
          </h6>
          <h5 className="font-text text-base font-semibold text-[#2686976]">
            {item.title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default AwardGallery;
