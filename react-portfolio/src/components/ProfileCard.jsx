import React from "react";
import data from "../data/data";
import SocialButtons from "./SocialButtons";
import Download from "../icons/Download";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  function downloadCV() {
    window.open("/files/Ivan-Mihaylov-Sarabeev.pdf");
  }

  return (
    <section className="sticky top-44 mb-6 mt-[180px] min-h-screen w-[400px] lg:w-[400px]">
      <div className="relative w-full rounded-3xl bg-slate-300 px-6 text-center lg:mb-0 lg:mt-0">
        <img
          alt="avatar"
          src="/images/profile.jpg"
          className="absolute inset-x-0 top-[-20%] mx-auto h-[240px] w-[220px] rounded-[20px] drop-shadow-xl"
        />
        <div className="pb-8 pt-24">
          <h1 className="mb-1 mt-6  font-heading text-[32px]">Ivan Sarabeev</h1>
          <h3 className="mb-4 px-5 py-1.5 font-text text-[#2686976]  ">
            Full Stack Web Developer
          </h3>
          <SocialButtons />
          <article className="mt-7 rounded-2xl bg-slate-100 p-7">
            {data.personalInfo.map((item, index) => {
              const Icons = item.icon;
              return (
                <div
                  key={index}
                  className="flex border-b border-[#E3E3E3] py-2.5"
                >
                  <span className="group rounded-md from-[#FA5252] to-[#DD2476] p-2 text-[#E93B81] shadow-md hover:bg-gradient-to-tr hover:text-[#f7f7f7]">
                    <Icons className={item.color} />
                  </span>
                  <div className="ml-2.5 flex flex-col text-left">
                    <p className="text[#44566C] text-xs dark:text-[#A6A6A6]">
                      {item.title}
                    </p>
                    <Link to={item.href} className="break-words text-black">
                      {item.text}
                    </Link>
                  </div>
                </div>
              );
            })}
          </article>
          <button
            type="button"
            onClick={() => downloadCV()}
            className="mb-2 mr-2 mt-6 inline-flex gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            <Download />
            Download CV
          </button>
          {/* <button
            type="button"
            onClick={() => downloadCV()}
            className="mx-auto mt-6 flex w-fit items-center rounded-[35px]
             bg-gradient-to-tr from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-xl text-white
             hover:bg-gradient-to-tr hover:from-[#fa5252ef] hover:to-[#DD2476]"
          >
            <Download /> Download CV
          </button> */}
          {/* #6AB5B9 */}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
