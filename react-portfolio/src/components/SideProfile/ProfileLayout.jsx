import React from "react";
import data from "../../constants/data";
import ProfileInfo from "./ProfileInfo";
import AvatarImg from "../../assets/images/profile.png";
import PdfFile from "../../assets/files/Ivan-Mihaylov-Sarabeev.pdf";
import SocialMedia from "./SocialMedia";
import IconDownload from "../../assets/icons/IconDownload";
import Button from "../HTML/Button";
import { motion } from "framer-motion";

const ProfileCard = () => {
  function handlePdfDownload() {
    window.open(PdfFile);
  }

  return (
    <section className="sticky inset-x-auto top-52 mx-auto mb-0 mt-80 block h-screen w-10/12 flex-1 sm:w-10/12 md:w-9/12 lg:sticky lg:mb-20 lg:max-w-sm xl:mt-64 xl:max-w-md 2xl:max-w-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="relative w-full rounded-3xl bg-slate-300 px-6 text-center lg:mb-0 lg:mt-0"
      >
        <img
          alt="avatar"
          loading="lazy"
          decoding="async"
          src={AvatarImg}
          className="absolute inset-x-0 top-[-20%] mx-auto aspect-square h-52 w-48 rounded-[20px] object-cover drop-shadow-xl md:h-56 md:w-52 lg:h-60 lg:w-56"
        />
        <div className="pb-8 pt-16 md:pt-24">
          <motion.h1 className="mb-1 mt-6 text-2xl md:text-3xl">
            Ivan Sarabeev
          </motion.h1>
          <h2 className="lg:bold-20 mb-4 px-5 py-1.5 capitalize">
            Front-End Developer
          </h2>
          <nav className="flexCenter gap-2">
            <SocialMedia />
          </nav>
          <aside className="mt-7 rounded-2xl bg-slate-100 p-4 lg:p-7">
            {data.personalInfo.map((item, index) => {
              const Icons = item.icon;
              return (
                <ProfileInfo
                  ProfileInfo
                  key={index}
                  item={item}
                  Icons={Icons}
                />
              );
            })}
          </aside>
          <Button
            type="button"
            className="download-btn"
            onClick={() => handlePdfDownload()}
          >
            <IconDownload height={20} width={20} />
            Download CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileCard;
