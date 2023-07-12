import data from "../data/data";
import { Link } from "react-router-dom";

function SocialButtons() {
  return (
    <div className="flex justify-center space-x-3">
      {data.socialLinks.map((links, index) => {
        const Icons = links.icon;
        return (
          <Link key={index} to={links.href} target="_blank" rel="noreferrer">
            <span
              className={`group flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3f6f6] from-[#2aa6ac] to-[#f7f4f2]  hover:bg-gradient-to-b`}
            >
              <Icons className={links.color} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default SocialButtons;
