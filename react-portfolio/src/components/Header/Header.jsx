import React, { useState } from "react";
import NameImg from "../../assets/images/title.png";
import StarLogo from "../../assets/images/star.png";
import IconNavbar from "../../assets/icons/Navbar";
import IconXMark from "../../assets/icons/Xmark";
import Navbar from "./Navbar";
import Button from "../HTML/Button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previousLocation = scrollY.getPrevious();

    if (latest > previousLocation) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      variants={{
        visibility: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, type: "spring", ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className="padding-container fixed z-50 w-full items-center justify-between border-b-2 border-gray-600 bg-exp8-background bg-cover bg-no-repeat px-5 py-4 transition-all delay-1000 ease-in-out md:static md:flex md:border-none md:px-8"
    >
      <span className="flex items-center gap-2">
        <img
          src={StarLogo}
          alt="logo"
          loading="lazy"
          decoding="async"
          className="aspect-auto h-9 w-9 animate-bounce object-contain md:h-12 md:w-12"
        />
        <img
          src={NameImg}
          alt="title"
          loading="lazy"
          decoding="async"
          className="aspect-auto h-9 w-52 object-contain md:h-12 md:w-56"
        />
      </span>
      <Button
        onClick={handleToggle}
        aria-label="Hamburger-menu"
        className="absolute right-5 top-3.5 rounded bg-gradient-to-tr from-[#00a4f7] to-[#01f79a] p-1.5 transition-all delay-500 duration-500 ease-in-out md:hidden"
      >
        {isOpen ? <IconXMark /> : <IconNavbar />}
      </Button>
      {isOpen && <Navbar />}
    </motion.header>
  );
};

export default Header;
