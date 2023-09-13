import React from "react";
import data from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const groupingVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const listItems = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Location = () => {
  const locationPath = useLocation();

  return (
    <header className="hidden h-36 rounded-2xl bg-slate-300 p-8 sm:mx-auto md:mb-8 md:block lg:mb-10 lg:mr-0 lg:w-[480px]">
      <nav className="lg:block">
        <motion.ul
          variants={groupingVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between"
        >
          {data.headerLinks.map((item, index) => {
            const Icons = item.icon;
            return (
              <motion.li variants={listItems} key={index}>
                <Link
                  to={item.href}
                  className={`${
                    locationPath.pathname === item.href
                      ? "bg-gradient-to-br from-[#1d8cf8] to-[#3358f4] text-white"
                      : "bg-[#f7f7f7] from-[#FA5252] to-[#1f2251] text-slate-800 transition-all hover:bg-gradient-to-r hover:text-white"
                  }
                  mx-[0.625rem] flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-xl text-sm font-extralight 
                  opacity-100 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3358f4] hover:to-[#1d8cf8] `}
                >
                  <Icons />
                  <h4 className="mt-1 font-title text-base font-medium">
                    {item.title}
                  </h4>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Location;
