import React from "react";
import data from "../data/data";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <header className="mb-10 ml-auto hidden h-[144px] rounded-[16px] bg-slate-300 p-[30px] dark:bg-slate-900 lg:block lg:w-[560px]">
      <nav className="lg:block">
        <ul className="flex">
          {data.headerLinks.map((item, index) => {
            const Icons = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className="mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center 
                  justify-center rounded-[10px] bg-[#1f2251] text-[.8125rem] font-medium text-white opacity-100 transition-all duration-300
                  hover:bg-gradient-to-b  hover:from-[#3358f4] hover:to-[#1d8cf8]
                   active:bg-gradient-to-bl active:from-[#1d8cf8] active:to-[#3358f4]"
                >
                  <Icons />
                  <h4 className="mt-1 text-[16px]">{item.title}</h4>
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
