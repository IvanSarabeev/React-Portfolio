import React, { useState } from "react";
import Layout from "../components/Layout";
import Location from "../components/Location";
import data from "../data/data";
import PersonalSkills from "../components/PersonalSkills";
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
    <div className="flex min-h-screen w-full bg-dark-background bg-cover bg-fixed bg-no-repeat">
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="mb-8 min-h-screen w-[700px] bg-slate-200 pb-6 lg:w-[850px] lg:rounded-2xl">
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center text-4xl font-bold after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
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
                  return (
                    <div
                      key={index}
                      className={`${edu.color} my-4 flex flex-col rounded-[0.75rem]`}
                    >
                      <div className="flex flex-col rounded-[0.75rem] p-6">
                        <h4 className="my-2 leading-8 text-[#2686976]">
                          {edu.year}
                        </h4>
                        <h3 className="mt-2 flex gap-4 text-[22px] font-semibold capitalize">
                          {edu.title}
                        </h3>
                        <p className="my-2 leading-8 text-[#2686976]">
                          {edu.establishment}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <span className="flex items-center gap-x-2 text-2xl">
                  <UilSuitcase className="h-8 w-8" />
                  Experience
                </span>
                {data.experience.map((exp, index) => {
                  return (
                    <div
                      key={index}
                      className={`${exp.bgColor} my-4 flex flex-col rounded-[0.75rem]`}
                    >
                      <div className="flex flex-col rounded-[0.75rem] p-6">
                        <h4 className="my-2 leading-8 text-[#2686976]">
                          {exp.period}
                        </h4>
                        <h3 className="mt-2 flex gap-4 text-[22px] font-semibold capitalize">
                          {`${exp.company}`}
                        </h3>
                        <h3 className="my-2 mt-2 flex gap-4 capitalize leading-8 text-[#2686976]">
                          Position: {exp.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="my-16">
              <h3 className="relative flex items-center text-4xl font-bold after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
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
                            ? "text-[#fa5252]"
                            : "text-slate-700 hover:text-[#fa5252]"
                        } cursor-pointer  font-semibold`}
                        onClick={() => setSelectedSkill(item)}
                      >
                        {item}
                      </span>
                    );
                  })}
                  <div className="flex flex-wrap items-center justify-center gap-5">
                    {filterSkills.map((skill, index) => {
                      return (
                        <div key={index} className={`${skill.color}`}>
                          {skill.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-16">
              <h3 className="relative flex items-center text-4xl font-bold after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
                Soft Skills
              </h3>
              <article className="mt-4 flex flex-auto flex-wrap rounded-[16px] p-4 shadow-2xl">
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
        </section>
      </div>
    </div>
  );
};

export default Resume;
