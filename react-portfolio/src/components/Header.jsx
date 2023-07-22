import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="mx-auto flex w-11/12 bg-transparent px-0 pb-[1.25rem] pt-[50px] md:w-[992px] ">
      <div className="flex w-full items-center justify-between pl-2 pr-4">
        <span className="flex items-center gap-2">
          <img
            src="../images/star.png"
            alt="logo"
            className="h-[36px] w-[36px] animate-bounce md:h-[46px] md:w-[46px]"
          />
          <img
            src="../images/title.png"
            alt="title"
            className="h-[36px] w-[200px] md:h-[48px] md:w-[226px]"
          />
        </span>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
