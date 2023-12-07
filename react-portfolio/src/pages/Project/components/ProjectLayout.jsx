import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { UilGithub } from "@iconscout/react-unicons";
import ImgSlider from "./ImgSlider";
import Button from "../../../components/HTML/Button";
import IconArrowRight from "../../../assets/icons/ArrowTopRight";

const context = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: "0%" },
};

const ProjectLayout = ({ item, currentImg }) => {
  return (
    <>
      <AnimatePresence>
        <section className="my-4 flex flex-col items-center justify-center gap-x-4 shadow-2xl sm:gap-x-6 md:gap-x-8 lg:gap-x-10 lg:p-6">
          <motion.h3
            variants={context}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.35, bounce: 0.4 }}
            className="bold-20 my-1 text-center font-semibold lg:text-2xl"
          >
            {item.title}
          </motion.h3>
          <div className="flex flex-col-reverse gap-y-10">
            <div className="flexCenter">
              <ImgSlider item={item} currentImg={currentImg} />
            </div>
            <motion.p
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5, bounce: 0.4 }}
              className="regular-14 lg:regular-16 max-w-xl text-justify indent-1 antialiased first-letter:text-xl first-letter:uppercase lg:indent-2"
            >
              {item.description}
            </motion.p>
          </div>
          <article className="flex w-full flex-col space-y-3 md:w-2/3">
            {/* <motion.h3
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.35, bounce: 0.4 }}
              className="bold-20 my-1 text-center font-semibold lg:text-2xl"
            >
              {item.title}
            </motion.h3> */}
            {/* <motion.p
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5, bounce: 0.4 }}
              className="regular-14 lg:regular-16 text-justify indent-1 antialiased first-letter:text-xl first-letter:uppercase lg:indent-2"
            >
              {item.description}
            </motion.p> */}
            <motion.div
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.7, bounce: 0.6 }}
              className="mx-auto flex flex-wrap justify-center gap-x-1 lg:gap-x-2 xl:gap-x-4"
            >
              {item.tech}
            </motion.div>
            <span className="flexCenter mt-2 gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
              <Link to={item.demoLink} target="_blank" className="project-btn">
                <Button
                  type="button"
                  className="relative flex items-center gap-x-1 rounded-md border-none outline-none ring-0 md:gap-x-2"
                >
                  <IconArrowRight height={24} width={24} />
                  Live Demo
                </Button>
              </Link>
              <Link
                to={item.codeLink}
                target="_blank"
                aria-label="code-repo"
                className="project-btn"
              >
                <Button
                  type="button"
                  aria-label="code-repo"
                  className="relative flex items-center gap-x-1 border-none outline-none ring-0 md:gap-x-2"
                >
                  <UilGithub height={24} width={24} />
                  Source Code
                </Button>
              </Link>
            </span>
          </article>
        </section>
      </AnimatePresence>
    </>
  );
};

export default ProjectLayout;
