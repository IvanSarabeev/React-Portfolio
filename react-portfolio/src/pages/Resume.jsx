import React from "react";
import Layout from "../components/Layout";
import Location from "../components/Location";
import data from "../data/data";
import ReactSvg from "../icons/React";
import { UilSuitcase, UilGraduationCap } from "@iconscout/react-unicons";

const Resume = () => {
  return (
    <div className="flex min-h-screen w-full bg-techDark-background bg-cover bg-fixed bg-no-repeat">
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
                <span className="flex items-center">
                  <UilGraduationCap />
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
                <span className="flex items-center">
                  <UilSuitcase />
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
            <div>
              <h3 className="relative flex items-center text-4xl font-bold after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              Tech Stack
            </h3>
              <ReactSvg />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Resume;