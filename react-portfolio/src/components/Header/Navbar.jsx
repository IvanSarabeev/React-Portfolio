import data from "../../constants/data";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../HTML/Button";
import PdfFile from "../../assets/files/Ivan-Mihaylov-Sarabeev.pdf";
import SocialMedia from "../SideProfile/SocialMedia";

const menuVariables = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: { type: "spring" },
  },
  exit: {
    scaleX: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const locationPath = useLocation();

  function handlePdfDownload() {
    window.open(PdfFile);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-0 top-0 flex h-screen w-full  flex-col items-end bg-black bg-opacity-50 md:hidden"
      >
        <div className="relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10">
          <div className="flex flex-col items-center gap-7">
            <motion.ul
              variants={menuVariables}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-7 text-base"
            >
              {data.headerLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className={`${
                        locationPath.pathname === link.href
                          ? "text-violet-400 opacity-100"
                          : "text-gray-400"
                      } whitespace-nowrap pl-3.5 font-semibold opacity-80 hover:opacity-100`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
            <Button
              type="button"
              className="primary-btn"
              onClick={() => handlePdfDownload()}
            >
              Resume
            </Button>
            <div className="flex flex-nowrap gap-x-4">
              <SocialMedia />
            </div>
            <Link
              to="mailto:ivan.sarabeev99@gmail.com"
              target="_blank"
              className="regular-14 mt-4 w-72 text-center tracking-widest text-slate-300/40"
            >
              ivan.sarabeev99@gmail.com
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
