import React from "react";
import Layout from "../../components/Layout/Layout";
import MenuNavigation from "../../components/Navigation/MenuNavigation";
import Experience from "./components/Experience/index";
import TechFilter from "./components/Filter/TechFilter";
import SectionAccordion from "./components/AccordionSkills/index";
import TransitionEffect from "../../utils/TransitionEffect";
import { UilAtom, UilIllustration } from "@iconscout/react-unicons";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <>
      <TransitionEffect />
      <Layout>
        <div className="max-container mt-6 flex flex-col lg:mt-56 2xl:justify-center">
          <MenuNavigation />
          <section className="container">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="sub-heading"
            >
              Resume
            </motion.h2>
            <section className="container-padding">
              <aside className="grid grid-cols-1 justify-center gap-4 align-middle sm:grid-cols-2 lg:gap-8">
                <Experience />
              </aside>
              <aside className="mx-auto mt-8 flex flex-col items-start justify-center">
                <motion.span
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ delay: 1.06, type: "spring", bounce: 0.2 }}
                  className="flex items-center justify-start gap-x-2"
                >
                  <UilAtom
                    height={28}
                    width={28}
                    className="animate-spin-slow text-[#5ccfee]"
                  />
                  <h3 className="bold-20 font-bold xl:text-2xl">Tech Stack</h3>
                </motion.span>
                <div className="flexStart mt-2 h-fit w-full flex-auto flex-col flex-wrap rounded-2xl p-2 shadow-xl md:p-4 lg:p-6">
                  <TechFilter />
                </div>
              </aside>
              <article className="mx-auto mt-8">
                <span className="flex items-center justify-start gap-x-2">
                  <UilIllustration
                    height={28}
                    width={28}
                    className="animate-bounce text-[#5ccfee]"
                  />
                  <h3 className="bold-20 font-bold xl:text-2xl">Soft Skills</h3>
                </span>
                <SectionAccordion />
              </article>
            </section>
            <Footer />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ResumePage;
