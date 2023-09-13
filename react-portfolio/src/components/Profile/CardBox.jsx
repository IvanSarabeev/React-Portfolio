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
          <h5 className="cursor-default font-heading text-sm font-extrabold text-[#011117] md:text-sm">
            {item.title}
          </h5>
          <Link
            to={item.href}
            className="font-text text-sm font-light text-black md:text-base"
          >
            {item.text}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardBox;
