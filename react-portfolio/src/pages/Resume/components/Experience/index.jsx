import React from "react";
import data from "../../../../constants/data";
import Education from "./Education";
import Experience from "./Experience";
import { motion } from "framer-motion";
import { UilSuitcase, UilGraduationCap } from "@iconscout/react-unicons";

const index = () => {
  return (
    <>
      <div className="h-fit w-full">
        <motion.span
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 1.05, type: "spring", bounce: 0.2 }}
          className="flex items-center justify-start gap-x-1"
        >
          <UilGraduationCap height={24} width={24} />
          <h3 className="bold-20 font-bold xl:text-2xl">Education</h3>
        </motion.span>
        {data.education.map((item, index) => {
          return <Education key={index} index={index} item={item} />;
        })}
      </div>
      <div className="h-fit w-full">
        <motion.span
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ delay: 1.05, type: "spring", bounce: 0.2 }}
          className="flex items-center justify-start gap-x-1"
        >
          <UilSuitcase height={24} width={24} />
          <h3 className="bold-20 font-bold xl:text-2xl">Experience</h3>
        </motion.span>
        {data.experience.map((item, index) => {
          return <Experience key={index} index={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default index;
