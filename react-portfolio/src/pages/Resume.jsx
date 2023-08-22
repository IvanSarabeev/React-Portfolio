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
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filterNames = ["All", "Front-end", "Back-end", "Other"];
  const filterSkills =
    selectedSkill !== "All"
      ? data.tech.filter((item) => item.area === selectedSkill)
      : data.tech;

  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-[220px] 2xl:justify-center">
        <Location />
        <section className="mx-auto mb-8 flex min-h-screen w-11/12 flex-col justify-center rounded-3xl bg-slate-200 pb-6 selection:bg-slate-500 selection:text-slate-900 lg:w-[750px] xl:w-[850px] 2xl:w-[950px]">
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-3xl font-semibold after:absolute after:left-[10rem] after:h-[0.125rem] after:w-[6rem] after:bg-gradient-to-tr after:from-[#1d8cf8] after:to-[#DD2476] sm:after:w-[12rem] md:after:left-[13rem]">
              Resume
            </h2>
          </div>
          <article className="px-5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
            <div className="mt-6 grid grid-cols-1 justify-center gap-4 align-middle sm:grid-cols-2 lg:gap-8">
              <div>
                <span className="flex items-center gap-x-2 font-title text-2xl">
                  <UilGraduationCap className="h-6 w-6 text-[#8dc4c8] md:h-8 md:w-8" />
                  Education
                </span>
                {data.education.map((edu, index) => {
                  return <Education key={index} edu={edu} />;
                })}
              </div>
              <div>
                <span className="flex items-center gap-x-2 font-title text-2xl">
                  <UilSuitcase className="h-6 w-6 text-[#362f78] md:h-8 md:w-8" />
                  Experience
                </span>
                {data.experience.map((exp, index) => {
                  return <Experience key={index} exp={exp} />;
                })}
              </div>
            </div>
            <section className="mt-16">
              <h3 className="flex items-center pb-4 pl-4 font-text text-4xl font-medium">
                Tech Stack
              </h3>
              <div className="mt-4 flex flex-auto flex-wrap rounded-[16px] p-1 shadow-xl lg:p-4">
                <div className="mb-5 flex flex-wrap justify-start gap-2 md:gap-6">
                  {filterNames.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className={`${
                          selectedSkill === item
                            ? "text-[#1d8cf8]"
                            : "text-slate-800 opacity-80 hover:text-[#fa5252]"
                        } mx-auto cursor-pointer font-title text-lg font-semibold md:mx-1 md:text-xl`}
                        onClick={() => setSelectedSkill(item)}
                      >
                        {item}
                      </span>
                    );
                  })}
                  <div className="flex flex-wrap items-center justify-evenly gap-x-5 gap-y-2 p-2 md:justify-around md:gap-x-6 md:gap-y-4 ">
                    {filterSkills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="fb-popover flex flex-col items-center justify-self-center">
                            <div>{skill.icon}</div>
                            {hoveredSkill === skill && (
                              <div>
                                <div className="font-title text-sm font-medium md:text-base">
                                  {skill.title}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-16">
              <h3 className="pl-4 pt-5 font-text text-4xl font-medium lg:pt-0">
                Soft Skills
              </h3>
              <article className="mt-4 flex flex-auto flex-wrap rounded-[16px] p-2 lg:p-4">
                {data.personalSkills.map((item, index) => (
                  <PersonalSkills
                    key={index}
                    item={item}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </article>
            </section>
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Resume;
