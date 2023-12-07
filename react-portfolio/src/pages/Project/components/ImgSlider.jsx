import React from "react";
import { motion } from "framer-motion";

const imgVariants = {
  enter: {
    x: "100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 0,
    opacity: 0,
  },
};

const ImgSlider = ({ item, currentImg }) => {
  return (
    <>
      <motion.img
        src={currentImg.url}
        alt={item.title}
        loading="lazy"
        decoding="async"
        variants={imgVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="mx-auto mb-8 mt-4 aspect-video h-52 w-full rounded-xl object-cover object-center sm:max-w-full lg:max-h-80 lg:max-w-sm"
      />
    </>
  );
};

export default ImgSlider;
