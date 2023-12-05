import React from "react";
import Location from "../../components/Location";
import data from "../../constants/data";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TransitionEffect from "../../components/TransitionEffect";
import AwardGallery from "../../components/AwardGallery/AwardGallery";
import Occupation from "../../components/Occupation/Occupation";

const Home = () => {
  const opacityAnimation = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    transition: {
      delay: 1.2,
      type: "spring",
      ease: "easeInOut",
      bounce: 0.3,
    },
  };

  return (
    // <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
    <>
      <TransitionEffect />
      <Layout>
        <div className="mx-auto mt-6 flex flex-col lg:mt-56 2xl:justify-center">
          <Location />
          <section className="container">
            <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
              <motion.h2
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{
                  delay: 1.2,
                  ease: "easeInOut",
                  type: "spring",
                }}
                className="sub-heading"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={opacityAnimation.initial}
                animate={opacityAnimation.animate}
                transition={opacityAnimation.transition}
                className="flex flex-col justify-center space-y-2.5 px-6 pt-4 text-justify font-paragraph text-sm font-normal leading-7 tracking-normal text-[#2686976] sm:text-base md:pt-8 xl:text-justify"
              >
                <p className="indent-2">
                  Hello, I'm Ivan Sarabeev, a passionate Software Developer and
                  Assistant Ice Hockey coach from Varna, Bulgaria. I am
                  enthusiastic about embarking on my proffessional journey in
                  web development and constatnly seeking new challenges and
                  growth opportunities. My goal is to transform complex problems
                  into elegant and user-friednly solutions, driven by my passion
                  for creating beautiful and intuitive web experience.
                </p>
                <p className="mt-2.5 indent-2 lg:indent-0">
                  I am dedicated to effectively communicating your message and
                  brand identity through creative and innovative web solutions.
                  I take pride in my work, such as the development of{" "}
                  <Link
                    to="http://www.hcvarna.bg/"
                    target="_blank"
                    className="font-bold underline hover:text-[#1d8cf8] hover:underline-offset-4"
                  >
                    HCVarna
                  </Link>
                  , a website dedicated to our hockey family, showcasing our
                  team's achievments and fostering strong connections within the
                  community.
                </p>
              </motion.div>
            </div>
            <article className="px-5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
              <motion.h3
                initial={opacityAnimation.initial}
                animate={opacityAnimation.animate}
                transition={opacityAnimation.transition}
                className="py-5 pl-5 font-text text-2xl font-medium lg:pt-0 lg:text-3xl"
              >
                What I do!
              </motion.h3>
              <div className="grid grid-cols-1 justify-center gap-8 px-2 sm:px-4 md:grid-cols-2">
                {data.mainOccupations.map((item, index) => {
                  const Icons = item.icon;
                  return <Occupation key={index} item={item} Icons={Icons} />;
                })}
              </div>
              <div className="px-2 pb-0 sm:px-5 md:px-10 lg:mt-10 lg:px-7">
                <h3 className="pl-5 pt-5 font-text text-2xl font-medium lg:pt-0 lg:text-3xl">
                  Awards & Certificates
                </h3>
                <div className="mt-2 flex flex-col flex-wrap items-center justify-center gap-x-10 sm:mt-4 sm:flex-row sm:justify-center sm:gap-y-6 lg:flex-nowrap">
                  {data.certificate.map((item, index) => {
                    return <AwardGallery key={index} item={item} />;
                  })}
                </div>
              </div>
            </article>
            <Footer />
          </section>
        </div>
      </Layout>
      {/* </div> */}
    </>
  );
};

export default Home;
