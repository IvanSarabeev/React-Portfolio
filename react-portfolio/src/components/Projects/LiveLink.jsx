import React from "react";
import { Link } from "react-router-dom";
import IconArrowTop from "../../assets/icons/ArrowTopRight";

const DemoLink = ({ item }) => {
  return (
    <>
      <button
        type="button"
        class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
      >
        <Link to={item.demoLink} target="_blank">
          <span className="flex items-center gap-x-1">
            <IconArrowTop />
            Live Demo
          </span>
        </Link>
      </button>
    </>
  );
};

export default DemoLink;
