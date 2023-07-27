import React from "react";
import data from "../data/data";
import { Link, useLocation } from "react-router-dom";

const Location = () => {
  const locationPath = useLocation();

  return (
    <header className="hidden h-[144px] rounded-[16px] bg-slate-300 p-[30px] sm:mx-auto md:mb-8 md:block lg:mb-10 lg:mr-0 lg:w-[480px]">
      <nav className="lg:block">
        <ul className="flex items-center justify-between">
          {data.headerLinks.map((item, index) => {
            const Icons = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`${
                    locationPath.pathname === item.href
                      ? "bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-white"
                      : "bg-[#f7f7f7] from-[#FA5252] to-[#1f2251] text-slate-800 transition-all hover:bg-gradient-to-r hover:text-white"
                  }
                  mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-[10px] text-[14px] font-extralight 
                  opacity-100 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3358f4] hover:to-[#1d8cf8] `}
                >
                  <Icons />
                  <h4 className="mt-1 font-title text-[16px] font-medium">
                    {item.title}
                  </h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Location;
