import React from "react";
import LiveLink from "./LiveLink";
import SourceCodeLink from "./SourceCodeLink";
import { motion, AnimatePresence } from "framer-motion";

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

const context = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: "0%" },
};

const ProjectCard = ({ item, currentImg }) => {
  return (
    <>
      <AnimatePresence>
        <div className="my-4 flex flex-col-reverse items-center justify-center gap-x-4 space-x-2 lg:flex-row lg:space-x-10">
          <motion.img
            src={currentImg.url}
            alt={item.title}
            loading="lazy"
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="mb-8 mt-4 aspect-video h-52 translate-x-0 rounded-2xl object-fill opacity-80 transition-all ease-in-out hover:opacity-100 sm:max-w-full lg:mt-0 lg:h-[300px] lg:w-[350px] lg:rounded-2xl"
          />
          <div className="flex w-full flex-col space-y-3 md:w-2/3">
            <motion.h3
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.35, bounce: 0.4 }}
              className="my-1 text-center font-heading text-xl font-semibold leading-6 lg:text-2xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5, bounce: 0.4 }}
              className="font-paragraph mb-0 text-justify indent-2 text-base leading-6 antialiased lg:indent-3"
            >
              {item.description}
            </motion.p>
            <motion.h5
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.65, bounce: 0.4 }}
              className="text-center font-title text-lg font-medium"
            >
              Used technologies:
            </motion.h5>
            <motion.div
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.7, bounce: 0.6 }}
              className="mx-auto flex justify-center gap-x-1"
            >
              {item.tech}
            </motion.div>
            <span className="mt-2 flex items-center justify-center gap-x-1 lg:gap-x-4">
              <LiveLink item={item} />
              <SourceCodeLink item={item} />
            </span>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
