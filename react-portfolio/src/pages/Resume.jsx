import React, { useState } from "react";
import data from "../data/data";
import Layout from "../components/Layout";
import Location from "../components/Location";
import Education from "../components/Education";
import Experience from "../components/Experience";
import PersonalSkills from "../components/PersonalSkills";
import Footer from "../components/Footer";
import { UilSuitcase, UilGraduationCap } from "@iconscout/react-unicons";

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState("All");

  const filterNames = ["All", "Front-end", "Back-end", "Other"];
  const filterSkills =
    selectedSkill !== "All"
      ? data.tech.filter((item) => item.area === selectedSkill)
      : data.tech;

  return (
    <div className="flex min-h-screen w-full bg-exp8-background bg-cover bg-fixed bg-no-repeat">
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="mb-8 min-h-screen w-[700px] rounded-3xl bg-white pb-6 lg:w-[850px]">
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              Resume
            </h2>
          </div>
          <article className="px-2 pb-12 sm:px-5 md:px-10 lg:mt-10 lg:px-14">
            <div className="grid grid-cols-2 justify-center gap-8">
              <div>
                <span className="flex items-center gap-x-2 text-2xl">
                  <UilGraduationCap className="h-8 w-8" />
                  Education
                </span>
                {data.education.map((edu, index) => {
                  return <Education key={index} edu={edu} />;
                })}
              </div>
              <div>
                <span className="flex items-center gap-x-2 text-2xl">
                  <UilSuitcase className="h-8 w-8" />
                  Experience
                </span>
                {data.experience.map((exp, index) => {
                  return <Experience key={index} exp={exp} />;
                })}
              </div>
            </div>
            <div className="my-16">
              <h3 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
                Tech Stack
              </h3>
              <div className="mt-4 flex flex-auto flex-wrap rounded-[16px] p-4 shadow-2xl">
                <div className="mb-5 flex flex-wrap justify-start gap-4">
                  {filterNames.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className={`${
                          selectedSkill === item
                            ? "text-[#1d8cf8]"
                            : "text-slate-800 opacity-80 hover:text-[#fa5252]"
                        } cursor-pointer font-title text-xl font-semibold`}
                        onClick={() => setSelectedSkill(item)}
                      >
                        {item}
                      </span>
                    );
                  })}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {filterSkills.map((skill, index) => {
                      return <div key={index}>{skill.icon}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
                Soft Skills
              </h3>
              <article className="mt-4 flex flex-auto flex-wrap rounded-[16px] p-4 shadow-xl">
                {data.personalSkills.map((item, index) => (
                  <PersonalSkills
                    key={index}
                    item={item}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </article>
            </div>
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Resume;
