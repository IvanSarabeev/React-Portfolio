import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../Animations/fadeInAnimation";

const Experience = ({ exp, index }) => {
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      whileInView="animate"
      whileHover={{ scale: 1.05, radius: 12, opacity: 1 }}
      viewport={{ once: false }}
      custom={index}
      key={exp.index}
      className={`${exp.bgColor} my-3 flex flex-col rounded-xl opacity-80 transition-all duration-300 ease-in-out md:my-4`}
    >
      <div className="relative flex flex-col rounded-xl p-6 hover:ring-2 hover:ring-neutral-400/30">
        <h4 className="regular-14 md:regular-16 my-2 break-words italic leading-4 text-black/80">
          {exp.period}
        </h4>
        <h3 className="regular-18 mt-3 font-semibold capitalize sm:text-xl md:mt-2 md:text-[22px]">
          {exp.company}
        </h3>
        <span className=" my-2 flex items-start gap-x-1 capitalize md:flex-row md:items-center md:gap-x-2">
          <h5 className="leading-6 text-[#2686976] md:leading-8">Position:</h5>
          <h6 className="font-semibold">{exp.title}</h6>
        </span>
        <img
          src={exp.icon}
          alt={exp.title}
          loading="lazy"
          className="absolute right-[2%] top-[5%] aspect-auto h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20 md:right-[5%] md:top-[5%]"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
