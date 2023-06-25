import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
// import Location from "./Location";
// import data from "../data/data";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-fit">
      <div className="ml-16 w-[400px] ">
        <Header />
        <ProfileCard />
      </div>
      {/* <div className="ml-16 flex flex-col">
        <Location />
        <section className="bg-white lg:rounded-2xl ">
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
          <article className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14">
            <h3 className="font-robotoSlab pb-5 text-[35px] font-bold">
              What I do!
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {data.mainOccupations.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div
                    key={index}
                    className={`bg-[${item.color}] flex gap-4 rounded-[0.75rem] p-6`}
                  >
                    <Icons className="block h-10 w-10 object-contain" />
                    <div className="space-y-2">
                      <h3 className="text-[22px] font-semibold">
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
        </section>
      </div> */}
    </div>
  );
};

export default Layout;
