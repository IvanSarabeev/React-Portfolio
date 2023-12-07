import React from "react";
import Blobz from "../../assets/images/blob-haikei.png";
import Layout from "../../components/Layout/Layout";
import MenuNavigation from "../../components/Navigation/MenuNavigation";
import EmailForm from "../../components/Contact/EmailForm";
import Footer from "../../components/Footer/Footer";
import TransitionEffect from "../../components/Animations/TransitionEffect";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <TransitionEffect />
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-56 2xl:justify-center">
        <MenuNavigation />
        <section className="relative z-10 mx-auto mb-8 flex h-auto w-auto flex-col justify-center rounded-3xl bg-slate-200 px-5 pb-6 selection:bg-slate-500 selection:text-slate-900 sm:w-96 sm:max-w-full md:w-[650px] md:px-0 lg:w-[750px] xl:w-[850px] 2xl:w-[950px]">
          <img
            src={Blobz}
            alt="blob"
            loading="lazy"
            className="absolute right-[0%] top-[20%] -z-10 w-56 motion-safe:animate-spin-slow lg:right-[5%] lg:top-[5%] lg:w-[450px]"
          />
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
              className="sub-heading after:left-[10rem] md:after:left-[12rem]"
            >
              Contact
            </motion.h2>
            <article className="px-2.5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
              <EmailForm />
            </article>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
