import React from "react";

const AwardGallery = ({ item }) => {
  return (
    <>
      <div>
        <div className="flexCenter mt-4 flex-col sm:mt-0">
          <img
            src={item.icon}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="object-fit aspect-square h-36 w-52"
          />
          <h6 className="regular-14 mb-1 mt-3 text-black/40">{item.text}</h6>
          <h5 className="regular-16 text-black/80">{item.title}</h5>
        </div>
      </div>
    </>
  );
};

export default AwardGallery;
