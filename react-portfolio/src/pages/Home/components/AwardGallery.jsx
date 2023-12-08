import React from "react";

const AwardGallery = ({ item }) => {
  return (
    <>
      <div className="flexCenter mt-4 flex-col sm:mt-0">
        <img
          src={item.icon}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="object-fit aspect-square h-36 w-52 object-contain"
        />
        <h4 className="regular-14 xl:regular-16 first-letter:bold-20 mb-1 mt-3 text-center text-white/60 first-letter:uppercase">
          {item.text}
        </h4>
        <h5 className="regular-16 xl:regular-18 text-white">{item.title}</h5>
      </div>
    </>
  );
};

export default AwardGallery;
