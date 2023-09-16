import React from "react";
import data from "../../../data/data";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="absolute bottom-[2%] right-[5%] mb-2 flex justify-center space-x-2">
      {data.socialLinks.map((links, index) => {
        const Icons = links.icon;
        return (
          <Link
            key={index}
            to={links.href}
            target="_blank"
            aria-label="social-media navigation"
          >
            <span
              className={`${links.color} flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6f6] hover:bg-[#1d8cf8] hover:text-white`}
            >
              <Icons />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
