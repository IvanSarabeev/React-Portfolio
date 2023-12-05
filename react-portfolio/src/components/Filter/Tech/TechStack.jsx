import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../Animations/fadeInAnimation";

const TechStack = ({ techItem, index }) => {
  return (
    <>
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.7 }}
        whileHover={{ scale: 1.25 }}
        custom={index}
        key={index}
        className="flex flex-col items-center justify-self-center"
      >
        {techItem.icon}
      </motion.div>
    </>
  );
};

export default TechStack;
