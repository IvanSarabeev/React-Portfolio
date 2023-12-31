import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../../../utils/fadeInAnimation";

const Experience = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      viewport={{ once: false }}
      custom={index}
      key={item.index}
      className={`${item.bgColor} my-3 flex flex-col rounded-xl opacity-80 transition-all duration-300 ease-in-out md:my-4`}
    >
      <div className="exp-body">
        <p className="exp-subtitle">{item.period}</p>
        <h4 className="exp-title">{item.company}</h4>
        <h5 className="regular-16 my-2 capitalize md:leading-8">
          {item.title}
        </h5>
        <img
          src={item.icon}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="main-circle"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
