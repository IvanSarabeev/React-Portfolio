import React from "react";
import Location from "../components/Location";
import data from "../data/data";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import IconCertificate from "../icons/Certificate";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="mb-8 flex min-h-screen w-[700px] flex-col justify-center rounded-3xl bg-slate-200 pb-6 lg:w-[850px]">
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center font-heading text-4xl after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              About Me
            </h2>
            <div className="space-y-2.5 pt-4 text-left font-pargraph md:pt-[30px] lg:mr-16">
              <p className="indent-2 leading-7 text-[#2686976]">
                Hi there, my name is Ivan Sarabeev and I'am Software Developer
                and Assistant Ice Hockey coach from Varna, Bulgaria. I'am
                excited to begin my proffesional journey into web dev. I enjoy
                turning my work from complex problems into simple, beatiful and
                intuitive ideas.
                {/* I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs. */}
              </p>
              <p className="mt-2.5 leading-7 text-[#2686976]">
                My aim is to bring across your message and identity in the most
                creative way. I have created my first website for our hockey
                family -{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.hcvarna.bg/"
                >
                  HC_Varna{" "}
                </a>
                .
              </p>
            </div>
          </div>
          <article className="px-2 pb-12 sm:px-5 md:px-10 lg:mt-10 lg:px-14">
            <h3 className="pb-5 font-text text-[35px] font-semibold">
              What I do!
            </h3>
            <div className="grid grid-cols-2 justify-center gap-8">
              {data.mainOccupations.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div
                    key={index}
                    className={`${item.color} flex flex-col rounded-[0.75rem] p-6 opacity-80 transition-all duration-300 ease-in-out hover:scale-110 hover:rounded-2xl  hover:opacity-100 hover:ring-2 hover:ring-neutral-200`}
                  >
                    <div className="space-y-2">
                      <h3 className="flex gap-4 font-title text-[22px] font-semibold">
                        <Icons
                          className={`${item.textColor} h-10 w-10 object-contain`}
                        />
                        {item.title}
                      </h3>
                      <p className="my-2 text-left font-pargraph leading-8 text-[#2686976] antialiased">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="pt-5 font-text text-[35px] font-semibold">
              Awards & Certificates
            </h3>
            <div className="mt-4 flex items-center justify-center">
              <IconCertificate />
            </div>
          </article>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
