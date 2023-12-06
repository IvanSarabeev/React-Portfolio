import React from "react";
import data from "../../constants/data";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <>
      {data.socialLinks.map((links, index) => {
        const Icons = links.icon;
        return (
          <Link
            key={index}
            to={links.href}
            target="_blank"
            aria-label="social-media"
            className={`flexCenter h-10 w-10 rounded-lg bg-slate-500/30 shadow-md transition-all ease-in-out hover:bg-slate-100 hover:text-white`}
          >
            <Icons height={20} width={20} className={`${links.color}`} />
          </Link>
        );
      })}
    </>
  );
}

export default SocialMedia;
