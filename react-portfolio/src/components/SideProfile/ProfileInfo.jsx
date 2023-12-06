import React from "react";
import { Link } from "react-router-dom";

const ProfileInfo = ({ item, Icons }) => {
  return (
    <>
      <div className="flex border-b-[2px] border-solid border-white/40 py-2.5 xl:py-3.5">
        <div className="rounded-lg bg-slate-600 p-3 shadow-xl">
          <Icons
            height={28}
            width={28}
            className={`${item.color} drop-shadow-xl`}
          />
        </div>
        <div className="flexStart ml-3 flex-col text-left">
          <h3 className="regular-16 cursor-default font-semibold text-white/90">
            {item.title}
          </h3>
          <Link
            to={item.href}
            className="regular-14 md:regular-16 text-white/70"
          >
            {item.text}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
