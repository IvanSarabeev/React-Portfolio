import React, { memo } from "react";
import data from "../../constants/data";
import ProfileInfo from "./ProfileInfo";
import AvatarImg from "../../assets/images/profile.png";
import PdfFile from "../../assets/files/Ivan-Mihaylov-Sarabeev.pdf";
import SocialMedia from "./SocialMedia";
import IconDownload from "../../assets/icons/IconDownload";
import Button from "../HTML/Button";

const ProfileCard = () => {
  function handlePdfDownload() {
    window.open(PdfFile);
  }

  return (
    <section className="inset-x-auto top-52 mx-auto mb-0 mt-64 block h-screen w-10/12  ring-0 sm:w-10/12 md:sticky md:w-9/12 lg:sticky lg:mb-20 lg:mt-80 lg:max-w-sm xl:mt-64 xl:max-w-md 2xl:max-w-lg">
      <div className="relative w-full rounded-3xl bg-gradient-to-tr from-violet-200/40 from-40% to-sky-300/30 px-6 text-center text-white shadow-2xl lg:mb-0 lg:mt-0">
        <img
          alt="avatar"
          loading="lazy"
          decoding="async"
          src={AvatarImg}
          className="absolute inset-x-0 top-[-20%] mx-auto aspect-square h-52 w-48 rounded-[20px] object-cover drop-shadow-xl md:h-56 md:w-52 lg:h-60 lg:w-56"
        />
        <aside className="pb-8 pt-16 md:pt-24">
          <h1 className="mb-1 mt-6 text-2xl md:text-3xl">Ivan Sarabeev</h1>
          <h2 className="regular-18 xl:bold-20 mb-4 px-5 py-1.5 tracking-wider">
            Front-end Developer
          </h2>
          <span className="flexCenter mx-auto gap-x-4">
            <SocialMedia />
          </span>
          <article className="mx-auto mt-2 max-w-md rounded-2xl p-4 shadow-2xl drop-shadow-2xl lg:p-6">
            {data.personalInfo.map((item, index) => {
              const Icons = item.icon;
              return <ProfileInfo key={index} item={item} Icons={Icons} />;
            })}
          </article>
          <Button
            type="button"
            className="primary-btn"
            onClick={() => handlePdfDownload()}
          >
            <IconDownload height={20} width={20} />
            Resume
          </Button>
        </aside>
      </div>
    </section>
  );
};

export default memo(ProfileCard);
