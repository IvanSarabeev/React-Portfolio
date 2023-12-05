import React from "react";
import data from "../../constants/data";
import Education from "./Education";
import Experience from "./Experience";
import { motion } from "framer-motion";
import { UilSuitcase, UilGraduationCap } from "@iconscout/react-unicons";

const index = () => {
  return (
    <article className="mt-6 grid grid-cols-1 justify-center gap-4 align-middle sm:grid-cols-2 lg:gap-8">
      <div>
        <motion.span
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 1.05, type: "spring", bounce: 0.2 }}
          className="flex items-center gap-x-2"
        >
          <UilGraduationCap className="h-6 w-6 text-[#011a49] md:h-8 md:w-8" />
          <h3 className="bold-20 text-[#010409] lg:text-2xl">Education</h3>
        </motion.span>
        {data.education.map((edu, index) => {
          return <Education key={index} index={index} edu={edu} />;
        })}
      </div>
      <div>
        <motion.span
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 1.05, type: "spring", bounce: 0.2 }}
          className="flex items-center gap-x-2"
        >
          <UilSuitcase className="h-6 w-6 text-[#362f78] md:h-8 md:w-8" />
          <h3 className="bold-20 text-[#010409] lg:text-2xl">Experience</h3>
        </motion.span>
        {data.experience.map((exp, index) => {
          return <Experience key={index} index={index} exp={exp} />;
        })}
      </div>
    </article>
  );
};

export default index;
