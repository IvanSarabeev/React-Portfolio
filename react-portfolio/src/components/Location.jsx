import React from "react";
import data from "../data/data";

const Location = () => {
  return (
    <header className="mb-10 ml-auto h-[144px] rounded-[16px] bg-white p-[30px] lg:w-[560px]">
      <nav className="lg:block">
        <ul className="flex">
          {data.headerLinks.map((item, index) => {
            const Icons = item.icon;
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col 
                  items-center justify-center rounded-[10px] bg-[#F3F6F6] text-[.8125rem] font-medium opacity-100 transition-all duration-300
                  hover:bg-gradient-to-r  hover:from-[#FA5252] hover:to-[#DD2476]
                   active:bg-gradient-to-tr active:from-[#FA5252] active:to-[#DD2476]"
                >
                  <Icons />
                  <h4>{item.title}</h4>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Location;
