import React, { useState } from "react";
import IconNavbar from "../icons/Navbar";
import IconXMark from "../icons/Xmark";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-50 w-full items-center justify-between border-b-2 border-gray-600 bg-exp8-background bg-cover bg-no-repeat px-5 py-4 transition-all delay-1000 ease-in-out md:static md:flex md:border-none md:bg-none md:px-8">
      <span className="flex items-center gap-2">
        <img
          src="../images/star.png"
          alt="logo"
          className="h-9 w-9 animate-bounce md:h-12 md:w-12"
        />
        <img
          src="../images/title.png"
          alt="title"
          className="h-9 w-52 md:h-12 md:w-56"
        />
      </span>
      <button
        type="button"
        onClick={handleToggle}
        className="absolute right-5 top-3.5 rounded bg-gradient-to-tr from-[#00a4f7] to-[#01f79a] p-1.5 transition-all delay-500 duration-500 ease-in-out md:hidden"
      >
        {isOpen ? <IconXMark /> : <IconNavbar />}
      </button>
      {isOpen && <Navbar />}
    </header>
  );
};

export default Header;
