import React from "react";
import Location from "../components/Location";
import data from "../data/data";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <Layout />
      <div className="mx-auto mt-6 flex flex-col lg:mt-[220px]">
        <Location />
        <section className="mx-auto mb-8 flex min-h-screen w-11/12 flex-col justify-center rounded-3xl bg-slate-200 pb-6 selection:bg-slate-500 selection:text-slate-900 lg:w-[750px] xl:w-[850px]">
          <div className="px-5 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-[32px] font-semibold after:absolute after:left-[10rem] after:h-[0.125rem] after:w-[6rem] after:bg-gradient-to-tr after:from-[#1d8cf8] after:to-[#DD2476] sm:after:w-[12rem] md:after:left-[13rem]">
              About Me
            </h2>
            <div className="space-y-2.5 pt-4 text-justify font-pargraph text-[14px] leading-7 tracking-normal text-[#2686976] sm:text-[16px] md:pt-[30px] lg:mr-16">
              <p className="indent-2">
                Hello, I'm Ivan Sarabeev, a passionate Software Developer and
                Assistant Ice Hockey coach from Varna, Bulgaria. I am
                enthusiastic about embarking on my proffessional journey in web
                development and constatnly seeking new challenges and growth
                opportunities. My goal is to transform complex problems into
                elegant and user-friednly solutions, driven by my passion for
                creating beautiful and intuitive web experience.
              </p>
              <p className="mt-2.5">
                I am dedicated to effectively communicating your message and
                brand identity through creative and innovative web solutions. I
                take pride in my work, such as the development of{" "}
                <Link
                  to="http://www.hcvarna.bg/"
                  target="_blank"
                  className="font-bold hover:text-[#1d8cf8] hover:underline hover:underline-offset-4"
                >
                  HCVarna
                </Link>
                , a website dedicated to our hockey family, showcasing our
                team's achievments and fostering strong connections within the
                community.
              </p>
            </div>
          </div>
          <article className="px-5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
            <h3 className="py-5 font-text text-4xl font-medium lg:pt-0">
              What I do!
            </h3>
            <div className="grid grid-cols-1 justify-center gap-8 px-2 sm:px-4 md:grid-cols-2">
              {data.mainOccupations.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div
                    key={index}
                    className={`${item.color} flex flex-col rounded-[0.75rem] p-6 opacity-80 transition-all duration-500 ease-in-out hover:scale-105 hover:rounded-2xl hover:opacity-100 hover:ring-2 hover:ring-neutral-200`}
                  >
                    <div className="space-y-2">
                      <h3 className="flex items-center gap-4 font-title text-[22px] font-semibold">
                        <Icons
                          className={`${item.textColor} h-8 w-8 object-contain`}
                        />
                        {item.title}
                      </h3>
                      <p className="my-2 text-justify indent-1 font-pargraph text-[14px] leading-7 tracking-normal text-[#2686976] antialiased sm:text-[16px] md:text-left md:indent-2">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-5 pb-0 sm:px-5 md:px-10 lg:mt-10 lg:px-14">
              <h3 className="py-5 font-text text-4xl font-medium lg:pt-0">
                Awards & Certificates
              </h3>
              <div className="mt-2 flex flex-col flex-wrap items-center justify-between gap-x-10 sm:mt-4 sm:flex-row sm:justify-center sm:gap-y-6 lg:flex-nowrap">
                {data.certificate.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="mt-4 flex flex-col items-center justify-center sm:mt-0">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="object-fit h-[150px] w-[200px]"
                        />
                        <h6 className="mb-1 mt-3 font-heading text-[14px] font-medium leading-6 text-[#2686976]">
                          {item.text}
                        </h6>
                        <h5 className="font-heading text-[16px] font-semibold leading-6 text-[#2686976]">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
