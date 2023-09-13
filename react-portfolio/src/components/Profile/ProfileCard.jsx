import React from "react";
import data from "../../data/data";
import CardBox from "./CardBox";
import AvatarImg from "../../assets/images/profile.png";
import CVFile from "../../assets/files/Ivan-Mihaylov-Sarabeev.pdf";
import SocialButtons from "./SocialButtons";
import IconDownload from "../../assets/icons/IconDownload";
import { motion } from "framer-motion";

const ProfileCard = () => {
  function downloadCV() {
    window.open(CVFile);
  }

  return (
    <section className="sticky top-44 mx-auto mb-6 mt-60 w-10/12 sm:w-10/12 md:mt-44 md:w-9/12 lg:block lg:w-[350px] xl:w-[400px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="relative w-full rounded-3xl bg-slate-300 px-6 text-center lg:mb-0 lg:mt-0"
      >
        <img
          alt="avatar"
          loading="lazy"
          src={AvatarImg}
          className="absolute inset-x-0 top-[-20%] mx-auto aspect-square h-52 w-48 rounded-[20px] object-cover drop-shadow-xl md:h-56 md:w-52 lg:h-60 lg:w-56"
        />
        <div className="pb-8 pt-16 md:pt-24">
          <motion.h1 className="mb-1 mt-6 font-heading text-2xl md:text-3xl">
            Ivan Sarabeev
          </motion.h1>
          <h3 className="mb-4 px-5 py-1.5 font-text capitalize text-[#2686976] lg:text-lg">
            Front-End Web Developer
          </h3>
          <SocialButtons />
          <article className="mt-7 rounded-2xl bg-slate-100 p-4 lg:p-7">
            {data.personalInfo.map((item, index) => {
              const Icons = item.icon;
              return <CardBox key={index} item={item} Icons={Icons} />;
            })}
          </article>
          <button
            type="button"
            onClick={() => downloadCV()}
            className="mb-2 mr-2 mt-6 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-cyan-300 aria-checked:bg-sky-600"
          >
            <IconDownload />
            Download CV
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileCard;
