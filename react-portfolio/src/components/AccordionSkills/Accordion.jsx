import React, { useState } from "react";
import IconArrowTop from "../../assets/icons/ArrowTop";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${
        isActive ? " bg-gradient-to-t from-gray-300 to-white" : "bg-transparent"
      } flex w-full flex-col justify-center rounded-b-2xl rounded-t-2xl`}
    >
      <span className="flex w-full justify-between pl-5 pr-3.5">
        <h5
          className={`${
            isActive
              ? "my-2.5 w-full text-[#3ba1e6] opacity-100"
              : "my-2 text-slate-700/40 opacity-80"
          }my-2 font-pageheading text-xl font-medium md:text-2xl`}
        >
          {item.title}
        </h5>
        <button type="button" onClick={handleToggle}>
          <IconArrowTop />
        </button>
      </span>
      <AnimatePresence>
        {isActive && (
          <motion.p
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
            className="mb-2 cursor-text overflow-clip break-words px-4 text-justify indent-1 font-paragraph text-sm tracking-normal opacity-80 sm:text-base md:text-left md:indent-2 md:text-lg"
          >
            {item.description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
