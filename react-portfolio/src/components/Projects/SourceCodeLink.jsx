import React from "react";
import { Link } from "react-router-dom";
import { UilGithub } from "@iconscout/react-unicons";

const SourceCodeLink = ({ item }) => {
  return (
    <>
      <button
        type="button"
        className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-[#924b97] to-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-800"
      >
        <Link to={item.codeLink} target="_blank">
          <span className="relative flex items-center gap-x-1 rounded-md group-hover:bg-opacity-0 md:gap-x-2 md:px-5">
            <UilGithub className=" text-black" />
            Source Code
          </span>
        </Link>
      </button>
    </>
  );
};

export default SourceCodeLink;
