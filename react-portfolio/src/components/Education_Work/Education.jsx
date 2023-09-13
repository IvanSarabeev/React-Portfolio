import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../fadeInAnimation";

const Education = ({ edu, index }) => {
  return (
    <>
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: false }}
        whileHover={{ scale: 1.05, radius: 12, opacity: 1 }}
        custom={index}
        key={edu.index}
        className={`${edu.color} my-3 flex flex-col rounded-xl opacity-80 transition-all duration-300 ease-in-out md:my-4`}
      >
        <div className="relative flex flex-col rounded-xl p-6 hover:ring-2 hover:ring-neutral-400/30">
          <h3 className="my-2 break-words text-sm italic leading-4 text-[#2686976] md:text-base">
            {edu.year}
          </h3>
          <h4 className="mt-3 text-lg font-semibold capitalize sm:text-xl md:mt-2 md:text-[22px]">
            {edu.title}
          </h4>
          <p className="my-2 leading-6 text-[#2686976] md:leading-8">
            {edu.establishment}
          </p>
          <img
            src={edu.icon}
            alt={edu.title}
            loading="lazy"
            className="absolute right-[2%] top-[5%] aspect-auto h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20 md:right-[5%] md:top-[5%]"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Education;
