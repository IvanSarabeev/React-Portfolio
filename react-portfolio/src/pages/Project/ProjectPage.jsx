import React, { useState, useEffect } from "react";
import data from "../../constants/data";
import Layout from "../../components/Layout/Layout";
import MenuNavigation from "../../components/Navigation/MenuNavigation";
import ProjectLayout from "./components/ProjectLayout";
import TransitionEffect from "../../utils/TransitionEffect";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function ProjectPage() {
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
    <>
      <TransitionEffect />
      <Layout>
        <div className="max-container mt-6 flex flex-col lg:mt-56 2xl:justify-center">
          <MenuNavigation />
          <section className="container">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="sub-heading"
            >
              Projects
            </motion.h2>
            <article className="container-padding mx-4 flex flex-col gap-x-4 rounded-2xl bg-transparent pb-2 shadow-xl lg:pb-6">
              <div className="flex flex-col justify-center gap-x-4">
                {data.projects.map((item, index) => {
                  const currentImg = item.Imgs[activeIndex];
                  return (
                    <ProjectLayout
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
      </Layout>
    </>
  );
}

export default ProjectPage;
