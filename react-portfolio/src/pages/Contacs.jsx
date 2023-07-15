import React from "react";
import Layout from "../components/Layout";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contacts() {
  return (
    <div className="flex min-h-screen w-full bg-exp8-background bg-cover bg-fixed bg-no-repeat">
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="bg-gray relative z-10 mb-8 min-h-screen w-[700px] rounded-3xl bg-gray-200 pb-6 lg:w-[850px]">
          <img
            src="../images/blob-haikei.png"
            alt="blob"
            className="absolute right-[5%] top-[5%] -z-10 motion-safe:animate-spin-slow"
          />
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              Contact
            </h2>
          </div>
          <article className="rounded-xlp-4 mx-4 mb-[30px] dark:border-2 dark:border-[#212425] dark:bg-[#111111] md:mx-[60px] md:mb-[60px] md:p-16">
            <Form />
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Contacts;
