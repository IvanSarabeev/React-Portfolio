import React from "react";
import Location from "../components/Location";
import data from "../data/data";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full bg-light-background bg-cover bg-fixed bg-no-repeat">
      {/* dark:bg-dark-background */}
      <Layout />
      <div className="mx-auto mt-[220px] flex flex-col">
        <Location />
        <section className="mb-8 min-h-screen w-[700px] bg-white pb-6 lg:w-[850px] lg:rounded-2xl">
          <div className="px-2 pt-12 sm:px-5 md:px-10 lg:px-14">
            <h2 className="relative flex items-center text-4xl font-bold after:absolute after:left-[13rem] after:h-[0.125rem] after:w-[12rem] after:bg-gradient-to-tr after:from-[#FA5252] after:to-[#DD2476]">
              About Me
            </h2>
            <div className="space-y-2.5 pt-4 text-left md:pt-[30px] lg:mr-16">
              <p className="leading-7 text-[#44566c]">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
              </p>
              <p className="mt-2.5 leading-7 text-[#44566c]">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p>
            </div>
          </div>
          <article className="px-2 pb-12 sm:px-5 md:px-10 lg:mt-10 lg:px-14">
            <h3 className="font-robotoSlab pb-5 text-[35px] font-bold">
              What I do!
            </h3>
            <div className="grid grid-cols-2 justify-center gap-8">
              {data.mainOccupations.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div
                    key={index}
                    className={`${item.color} flex flex-col rounded-[0.75rem] p-6`}
                  >
                    <div className="space-y-2">
                      <h3 className="flex gap-4 text-[22px] font-semibold">
                        <Icons
                          className={`${item.textColor} h-10 w-10 object-contain`}
                        />
                        {item.title}
                      </h3>
                      <p className="my-2 leading-8 text-[#A6A6A6]">
                        {" "}
                        {item.text}
                      </p>
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
};

export default Home;
