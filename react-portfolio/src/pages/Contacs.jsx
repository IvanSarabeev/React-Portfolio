import React from "react";
import Blobz from "../assets/images/blob-haikei.png";
import Layout from "../components/Layout";
import Location from "../components/Location";
import Form from "../components/Contact/Form";
import Footer from "../components/Footer";
import TransitionEffect from "../components/TransitionEffect";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <TransitionEffect />
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-56">
        <Location />
        <section className="container relative z-10">
          <img
            src={Blobz}
            alt="blob"
            loading="lazy"
            className="absolute right-[-10%] top-[20%] -z-10 motion-safe:animate-spin-slow lg:right-[5%] lg:top-[5%]"
          />
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="relative flex items-center font-heading text-3xl font-semibold after:absolute after:left-[10rem] after:h-[0.125rem] after:w-[6rem] after:bg-gradient-to-tr after:from-[#1d8cf8] after:to-[#DD2476] sm:after:w-[12rem] md:after:left-[13rem]"
            >
              Contact
            </motion.h2>
          </div>
          <article className="mx-4 p-2 dark:border-2 dark:border-[#212425] dark:bg-[#111111] md:mx-auto md:mb-3 md:p-12 lg:mx-10">
            <Form />
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Contacts;
