import React from "react";
import data from "../data/data";
import SocialButtons from "./SocialButtons";
import IconDownload from "../icons/IconDownload";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  function downloadCV() {
    window.open("/files/Ivan-Mihaylov-Sarabeev.pdf");
  }

  return (
    <section className="sticky top-44 mx-auto mb-6 mt-[180px] w-10/12 sm:w-10/12 md:w-9/12 lg:block lg:w-[350px] xl:w-[400px]">
      <div className="relative w-full rounded-3xl bg-slate-300 px-6 text-center lg:mb-0 lg:mt-0">
        <img
          alt="avatar"
          src="/images/profile.png"
          className="absolute inset-x-0 top-[-20%] mx-auto h-[200px] w-[190px] rounded-[20px] object-cover drop-shadow-xl md:h-[220px] md:w-[200px] lg:h-[240px] lg:w-[220px]"
        />
        <div className="pb-8 pt-16 md:pt-24">
          <h1 className="mb-1 mt-6 font-heading text-[32px] md:text-[30px]">
            Ivan Sarabeev
          </h1>
          <h3 className="mb-4 px-5 py-1.5 font-text capitalize text-[#2686976] lg:text-[16px] ">
            Front-End Web Developer
          </h3>
          <SocialButtons />
          <article className="mt-7 rounded-2xl bg-slate-100 p-4  lg:p-7">
            {data.personalInfo.map((item, index) => {
              const Icons = item.icon;
              return (
                <div
                  key={index}
                  className="flex border-b border-[#E3E3E3] py-2.5"
                >
                  <span className="rounded-md p-2 shadow-md">
                    <Icons className={item.color} />
                  </span>
                  <div className="ml-2.5 flex flex-col text-left">
                    <p
                      className={`text[#44566C] md:text[12px] cursor-default font-heading text-[14px] font-semibold`}
                    >
                      {item.title}
                    </p>
                    <Link
                      to={item.href}
                      className="font-text text-[14px]  font-light text-black md:text-[16px]"
                    >
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
            className="mb-2 mr-2 mt-6 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-[16px] font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-cyan-300 aria-checked:bg-sky-600"
          >
            <IconDownload />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
