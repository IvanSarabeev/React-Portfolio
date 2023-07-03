import data from "../data/data";

function SocialButtons() {
  return (
    <div className="flex justify-center space-x-3">
      {data.socialLinks.map((links, index) => {
        const Icons = links.icon;
        return (
          <a key={index} href={links.href} target="_blank" rel="noreferrer">
            <span className="group flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3f6f6] from-[#26df] to-[#f7f4f2]  hover:bg-gradient-to-r">
              <Icons className={links.color} />
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialButtons;
