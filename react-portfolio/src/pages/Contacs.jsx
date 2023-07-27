import React from "react";
import Layout from "../components/Layout";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contacts() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-[220px]">
        <Location />
        <section className="relative z-10 mx-auto mb-8 min-h-screen w-11/12 rounded-3xl bg-slate-200 pb-6 selection:bg-slate-500 selection:text-slate-900 lg:w-[750px] xl:w-[850px]">
          <img
            src="../images/blob-haikei.png"
            alt="blob"
            className="absolute right-[-10%] top-[20%] -z-10 motion-safe:animate-spin-slow lg:right-[5%] lg:top-[5%]"
          />
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-[32px] font-semibold after:absolute after:left-[10rem] after:h-[0.125rem] after:w-[6rem] after:bg-gradient-to-tr after:from-[#1d8cf8] after:to-[#DD2476] sm:after:w-[12rem] md:after:left-[13rem]">
              Contact
            </h2>
          </div>
          <article className="mx-4 p-2 dark:border-2 dark:border-[#212425] dark:bg-[#111111] md:mx-auto md:mb-[10px] md:p-12 lg:mx-10">
            <Form />
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Contacts;
