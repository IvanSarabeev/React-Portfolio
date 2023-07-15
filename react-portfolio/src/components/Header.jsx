import React from "react";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";

const Header = () => {
  return (
    <header className="mx-auto flex w-full bg-transparent px-0 pb-[1.25rem] pt-[50px] md:w-[992px]">
      <div className="flex w-full items-center justify-between px-4">
        <span className="flex items-center gap-2">
          <img
            src="../images/star.png"
            alt="logo"
            className=" h-[46px] w-[46px] animate-bounce"
          />
          <img
            src="../images/title.png"
            alt="title"
            className="h-[48px] w-[226px]"
          />
        </span>
        <span className="flex items-center justify-end gap-x-4">
          <button
            type="button"
            id="light-theme"
            className="h-6 w-6 rounded-full opacity-100"
          >
            <Sun />
          </button>
          <button type="button" id="dark-theme" className="hidden">
            <Moon />
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
