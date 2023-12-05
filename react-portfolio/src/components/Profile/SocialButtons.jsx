import data from "../../constants/data";
import { Link } from "react-router-dom";

function SocialButtons() {
  return (
    <div className="flex justify-center space-x-3">
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
              className={`${links.color} flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3f6f6] hover:bg-[#1d8cf8] hover:text-white`}
            >
              <Icons />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default SocialButtons;
