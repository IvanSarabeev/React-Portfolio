import React, { useState } from "react";
// import useToggle from "../../../../hooks/useToggle"
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../../components/HTML/Button";
import IconArrowTop from "../../../../assets/icons/ArrowTop";
import IconArrowBottom from "../../../../assets/icons/ArrowDown";

const Accordion = ({ item }) => {
  // const [on, handleToggle] = useToggle();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      aria-label="accordion"
      className={`${
        isActive
          ? "rounded-b-xl border border-b-0 border-gray-200"
          : "rounded-b-none bg-transparent"
      } flex flex-col justify-between rounded-t-xl font-medium text-gray-500 focus:ring-4 focus:ring-gray-200  ltr:text-right`}
    >
      <Button
        type="button"
        className={`${
          isActive ? "bg-gray-100 px-2" : "bg-transparent"
        } flexBetween rounded-t-xl px-2.5`}
        onClick={handleToggle}
      >
        <h5
          className={`${
            isActive
              ? "my-2.5 text-gray-900 opacity-100"
              : "my-2 text-slate-900 opacity-90"
          }my-2 bold-20 font-bold`}
        >
          {item.title}
        </h5>
        {isActive ? <IconArrowBottom /> : <IconArrowTop />}
      </Button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, type: "spring" }}
            className="flexCenter border border-b-0 border-gray-700 bg-gray-900 p-5"
          >
            <p className="regular-14 sm:regular-16 cursor-text break-words text-justify indent-1 tracking-normal text-gray-400 antialiased first-letter:text-xl first-letter:uppercase">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
