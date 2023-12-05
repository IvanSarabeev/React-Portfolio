import data from "../../constants/data";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariables = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const locationPath = useLocation();

  return (
    <>
      <motion.ul
        variants={menuVariables}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mt-2 w-full rounded-md border border-gray-200 bg-slate-900 py-1 md:hidden"
      >
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
      </motion.ul>
    </>
  );
};

export default Navbar;
