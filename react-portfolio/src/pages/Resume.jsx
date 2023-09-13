import React, { useState } from "react";
import data from "../data/data";
import Layout from "../components/Layout";
import Location from "../components/Location";
import PersonalInfo from "../components/Education_Work/index";
import MainFilter from "../components/Filter/MainFilter";
import PersonalSkills from "../components/Skills/PersonalSkills";
import TransitionEffect from "../components/TransitionEffect";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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
            <aside className="mt-16">
              <h3 className="pb-4 pl-4 font-text text-4xl font-medium lg:pt-0">
                Tech Stack
              </h3>
              <MainFilter />
            </aside>
            <article className="mt-16">
              <h3 className="pl-4 pt-5 font-text text-4xl font-medium lg:pt-0">
                Soft Skills
              </h3>
              <aside className="mt-4 flex flex-row flex-wrap rounded-2xl p-2 lg:p-4">
                {data.personalSkills.map((item, index) => (
                  <PersonalSkills
                    key={index}
                    item={item}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </aside>
            </article>
          </section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Resume;
