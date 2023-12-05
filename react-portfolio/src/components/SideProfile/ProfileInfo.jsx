import React from "react";
import { Link } from "react-router-dom";

const ProfileInfo = ({ item, Icons }) => {
  return (
    <>
      <div className="flex border-b border-[#E3E3E3] py-2.5 xl:py-3.5">
        <span className="rounded-lg p-3 shadow-lg">
          <Icons height={24} width={24} className={item.color} />
        </span>
        <div className="flexStart ml-3 flex-col text-left">
          <h3 className="regular-16 cursor-default font-semibold text-black/90">
            {item.title}
          </h3>
          <Link
            to={item.href}
            className="regular-14 md:regular-16 text-black/70"
          >
            {item.text}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
