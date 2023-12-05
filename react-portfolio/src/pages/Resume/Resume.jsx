import React from "react";
import Layout from "../../components/Layout/Layout";
import Location from "../../components/Location";
import PersonalInfo from "../../components/Education_Work/index";
import MainFilter from "../../components/Filter/MainFilter";
import SectionAccordion from "../../components/AccordionSkills/index";
import TransitionEffect from "../../components/Animations/TransitionEffect";
import { UilAtom, UilIllustration } from "@iconscout/react-unicons";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <TransitionEffect />
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-56 2xl:justify-center">
        <Location />
        <section className="container">
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="sub-heading"
            >
              Resume
            </motion.h2>
          </div>
          <section className="px-5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
            <PersonalInfo />
            <aside className="mx-auto mt-16">
              <motion.span
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{ delay: 1.06, type: "spring", bounce: 0.2 }}
                className="flex items-center gap-x-2"
              >
                <UilAtom className="h-6 w-6 animate-spin-slow text-[#5ccfee] md:h-8 md:w-8" />
                <h3 className="bold-20 font-semibold lg:pt-0 lg:text-2xl">
                  Tech Stack
                </h3>
              </motion.span>
              <MainFilter />
            </aside>
            <aside className="mx-auto mt-16">
              <span className="flex items-center gap-x-2">
                <UilIllustration className="h-6 w-6 animate-bounce text-[#3ba1e6] md:h-8 md:w-8" />
                <h3 className="bold-20 font-semibold lg:pt-0 lg:text-2xl">
                  Soft Skills
                </h3>
              </span>
              <SectionAccordion />
            </aside>
          </section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Resume;
