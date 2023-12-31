import React from "react";
import { motion } from "framer-motion";

const groupingVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const Occupation = ({ item, Icons }) => {
  return (
    <>
      <motion.div
        variants={groupingVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col rounded-xl bg-white/40 p-6 opacity-90 ring-0 transition-all duration-500 ease-in-out hover:rounded-[14px] hover:bg-slate-300/40 hover:opacity-100 hover:ring-2 hover:ring-white/40"
      >
        <motion.div className="flexStart flex-col gap-y-2">
          <h3 className="bold-20 flexStart gap-x-2 font-bold">
            <Icons
              height={32}
              width={32}
              className={`${item.svgColor} object-contain`}
            />
            {item.title}
          </h3>
          <p className="regular-14 sm:regular-16 my-2 text-justify indent-1 tracking-normal antialiased md:indent-2">
            {item.text}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Occupation;
