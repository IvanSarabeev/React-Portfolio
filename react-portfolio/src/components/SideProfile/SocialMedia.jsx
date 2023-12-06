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
            aria-label="social-media navigation"
          >
            <span
              className={`${links.color} flexCenter h-10 w-10 rounded-lg bg-[#f7f7f7] hover:${links.hoverBg} hover:text-black`}
            >
              <Icons height={20} width={20} />
            </span>
          </Link>
        );
      })}
    </>
  );
}

export default SocialMedia;
