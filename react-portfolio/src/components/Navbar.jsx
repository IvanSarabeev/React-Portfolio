import data from "../data/data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const locationPath = useLocation();

  return (
    <>
      <ul className="mt-2 w-full rounded-md border border-gray-200 bg-slate-900 py-1 md:hidden">
        {data.headerLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.href}
                className={`${
                  locationPath.pathname === link.href
                    ? "text-[#01f79a] opacity-100"
                    : "text-gray-200"
                } whitespace-nowrap pl-3.5 font-semibold opacity-80 hover:opacity-100`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
