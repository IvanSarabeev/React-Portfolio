import React, { useState, useEffect } from "react";
import data from "../../constants/data";
import Layout from "../../components/Layout/Layout";
import Location from "../../components/Location";
import ProjectCard from "../../components/Projects/ProjectCard";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../../components/Footer/Footer";

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
      <TransitionEffect />
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-52 2xl:justify-center">
        <Location />
        <section className="mx-auto mb-8 flex min-h-screen w-11/12 flex-col justify-center rounded-3xl bg-slate-200 pb-6 selection:bg-slate-500 selection:text-slate-900 lg:w-[750px] xl:w-[850px] 2xl:w-[950px]">
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="sub-heading">Projects</h2>
          </div>
          <article className="mx-4 flex flex-col gap-x-4 rounded-2xl bg-transparent px-5 pb-2 shadow-xl sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
            <div className="flex flex-col justify-center gap-x-4">
              {data.projects.map((item, index) => {
                const currentImg = item.Imgs[activeIndex];
                return (
                  <ProjectCard
                    key={index}
                    item={item}
                    currentImg={currentImg}
                  />
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
