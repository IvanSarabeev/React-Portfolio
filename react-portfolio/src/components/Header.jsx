import React from "react";

const Header = () => {
  return (
    <header className="mx-auto flex w-full justify-between bg-transparent px-0 pb-[1.25rem] pt-[50px] md:w-[992px]">
      <div className="">
        <div className="flex w-full items-center justify-center px-4">
          <span className="flex items-center gap-2">
            <img
              src="../images/star.png"
              alt="logo"
              className="h-[46px] w-[46px] animate-bounce"
            />
            <img
              src="../images/title.png"
              alt="title"
              className="h-[48px] w-[226px]"
            />
          </span>
          <div className="flex items-center">
            {/* <button
              id="light-theme"
              type="button"
              className="z-99 h-[50px] w-[50px] cursor-pointer rounded-full bg-gray-600"
            >
              {UilSun}
            </button>
            <button
              id="dark-theme"
              type="button"
              className="z-99 h-[50px] w-[50px] cursor-pointer rounded-full bg-gray-600"
            >
              {UilMoon}
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
