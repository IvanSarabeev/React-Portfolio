import React from "react";
import data from "../../constants/data";
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

const MenuNavigation = () => {
  const locationPath = useLocation();

  return (
    <header className="md:flexCenter hidden h-36 rounded-2xl  bg-transparent p-8 text-white shadow-2xl drop-shadow-2xl sm:mx-auto md:mb-8 lg:mb-10 lg:mr-0 lg:max-w-md">
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
                      ? // #1d8cf8,
                        "bg-gradient-to-br from-[#6093c6] to-[#3358f4] text-white"
                      : "border-one bg-[#f7f7f7] from-[#FA5252] to-[#1f2251] text-slate-800 transition-all hover:bg-gradient-to-r hover:text-white"
                  }
                  flexCenter regular-14 mx-[0.625rem] h-20 w-20 cursor-pointer flex-col rounded-xl
                  opacity-100 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3358f4] hover:to-[#1d8cf8] `}
                >
                  <Icons height={22} width={22} />
                  <h4 className="regular-14 mt-1">{item.title}</h4>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
};

export default MenuNavigation;
