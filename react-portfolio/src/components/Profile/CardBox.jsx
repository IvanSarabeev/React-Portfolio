import React from "react";
import { Link } from "react-router-dom";

const CardBox = ({ item, Icons }) => {
  return (
    <>
      <div className="flex border-b border-[#E3E3E3] py-2.5">
        <span className="rounded-md p-2 shadow-md">
          <Icons className={item.color} />
        </span>
        <div className="ml-2.5 flex flex-col text-left">
          <h5 className="regular-18 cursor-default font-semibold text-black">
            {item.title}
          </h5>
          <Link
            to={item.href}
            className="regular-14 md:regular-16 ml-1 text-black/90"
          >
            {item.text}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardBox;
