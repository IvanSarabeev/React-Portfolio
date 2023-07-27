import React, { useState, useEffect } from "react";
import data from "../data/data";
import Layout from "../components/Layout";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { UilEye, UilGithub } from "@iconscout/react-unicons";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % data.projects[activeIndex].Imgs.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-[220px] 2xl:justify-center">
        <Location />
        <section className="mx-auto mb-8 flex min-h-screen w-11/12 flex-col justify-center rounded-3xl bg-slate-200 pb-6 selection:bg-slate-500 selection:text-slate-900 lg:w-[750px] xl:w-[850px] 2xl:w-[950px]">
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-[32px] font-semibold after:absolute after:left-[10rem] after:h-[0.125rem] after:w-[6rem] after:bg-gradient-to-tr after:from-[#1d8cf8] after:to-[#DD2476] sm:after:w-[12rem] md:after:left-[13rem]">
              Projects
            </h2>
          </div>
          <article className="mx-4 flex flex-col gap-x-4 rounded-2xl px-5 pb-2 shadow-xl sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
            <div className="flex flex-col justify-center gap-x-4">
              {data.projects.map((item) => {
                const currentImg = item.Imgs[activeIndex];
                return (
                  <div key={item.index}>
                    <div className="my-4 flex flex-col-reverse items-center justify-center gap-x-4 space-x-2 lg:flex-row lg:space-x-10">
                      <img
                        src={currentImg.url}
                        alt={item.title}
                        className="mb-8 mt-4 h-[220px] translate-x-[0%] rounded-2xl object-fill opacity-80 transition-all ease-in-out hover:opacity-100 sm:max-w-full lg:mt-0 lg:h-[300px] lg:w-[350px] lg:rounded-e-lg lg:rounded-s-3xl"
                      />
                      <div className="flex w-full flex-col space-y-3 md:w-2/3">
                        <h3 className="my-1 text-center font-heading text-[20px] font-semibold leading-6 lg:text-[22px]">
                          {item.title}
                        </h3>
                        <p className="font-paragraph mb-0 text-justify indent-2 text-[16px] leading-6 antialiased lg:indent-3">
                          {item.description}
                        </p>
                        <h4 className="text-center font-title text-[18px] font-medium">
                          Used technologies:
                          <span className="mx-auto my-1 flex justify-center gap-x-1 transition-all duration-300 ease-in-out hover:scale-105">
                            {item.tech}
                          </span>
                        </h4>
                        <span className="mt-2 flex items-center justify-center gap-x-1 lg:gap-x-4">
                          <button
                            type="button"
                            className="mb-2 mr-2 flex items-center rounded-full border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:gap-x-2 md:px-5"
                          >
                            <Link to={item.demoLink} target="_blank">
                              <span className="flex items-center gap-x-1">
                                <UilEye />
                                Live Demo
                              </span>
                            </Link>
                          </button>
                          <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600">
                            <Link to={item.codeLink} target="_blank">
                              <span className="relative flex items-center gap-x-1 rounded-md bg-white px-2 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0  md:gap-x-2 md:px-5">
                                <UilGithub />
                                Source Code
                              </span>
                            </Link>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Projects;
