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
    <div className="flex min-h-screen w-full bg-exp8-background bg-cover bg-fixed bg-no-repeat">
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="bg-gray mb-8 min-h-screen w-[700px] rounded-3xl bg-gray-200 pb-6 lg:w-[850px]">
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              Projects
            </h2>
          </div>
          <article className="mx-4 flex flex-col gap-x-4 rounded-2xl px-2 pb-12 shadow-2xl sm:px-5 md:px-10 lg:mt-10 lg:px-14">
            <div className="flex flex-col justify-center gap-x-4">
              {data.projects.map((item, index) => {
                const currentImg = item.Imgs[activeIndex];
                return (
                  <div key={index}>
                    <div className="my-4 flex items-center justify-center gap-x-4">
                      <img
                        src={currentImg.url}
                        alt={item.title}
                        className="h-[300px] translate-x-[0%] rounded-e-lg rounded-s-3xl object-fill transition-all ease-in-out sm:max-w-full lg:w-[350px]"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                      <div>
                        <h3 className="my-4 text-center font-heading text-xl font-semibold leading-6">
                          {item.title}
                        </h3>
                        <p className="font-paragraph mb-6 text-justify indent-3 text-[16px] leading-6 antialiased">
                          {item.description}
                        </p>
                        <h4 className="text-center font-heading text-[18px]">
                          Technologies:
                          <span className="mb-2 mt-2 flex items-center justify-center gap-2 font-heading text-[16px]">
                            {item.usedTech}
                          </span>
                        </h4>
                        <span className="flex items-center justify-center gap-x-4">
                          <button
                            type="button"
                            className="mb-2 mr-2 flex gap-x-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          >
                            <UilEye />
                            Live Demo
                          </button>
                          <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
                            <Link to={item.codeLink} target="_blank">
                              <span className="relative flex gap-x-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
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
