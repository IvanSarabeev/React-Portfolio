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
        className={`${item.color} flex flex-col rounded-xl p-6 opacity-80 transition-all duration-500 ease-in-out hover:scale-110 hover:rounded-2xl hover:opacity-100 hover:ring-2 hover:ring-neutral-400`}
      >
        <motion.div className="space-y-2">
          <h3 className="bold-20 flex items-center gap-4 font-semibold">
            <Icons className={`${item.textColor} h-8 w-8 object-contain`} />
            {item.title}
          </h3>
          <p className="regular-14 sm:regular-16 my-2 text-justify indent-1 tracking-normal text-black/80 antialiased md:indent-2 lg:text-left">
            {item.text}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Occupation;
