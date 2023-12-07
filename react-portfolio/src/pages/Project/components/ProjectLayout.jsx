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
        <section className="my-4 flex flex-col items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:flex-row lg:gap-x-10">
          <ImgSlider item={item} currentImg={currentImg} />
          <article className="flex w-full flex-col space-y-3 md:w-2/3">
            <motion.h3
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.35, bounce: 0.4 }}
              className="bold-20 my-1 text-center font-semibold lg:text-2xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5, bounce: 0.4 }}
              className="regular-14 lg:regular-16 text-justify indent-1 antialiased first-letter:text-xl first-letter:uppercase lg:indent-2"
            >
              {item.description}
            </motion.p>
            <motion.div
              variants={context}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.7, bounce: 0.6 }}
              className="mx-auto flex flex-wrap justify-center gap-x-1"
            >
              {item.tech}
            </motion.div>
            <span className="flexCenter mt-2 gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
              <Link
                to={item.demoLink}
                target="_blank"
                className="mb-2 mr-2 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300"
              >
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
                className="mb-2 mr-2 cursor-pointer rounded-lg bg-gradient-to-br from-[#924b97] to-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-800"
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
