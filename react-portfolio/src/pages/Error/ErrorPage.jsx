import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-between px-5 py-4 text-gray-700 md:flex-row">
        <div className="mx-8 flex w-full flex-col items-center text-center md:items-start md:text-left lg:w-1/2">
          <div className="mb-8 text-7xl font-extrabold text-green-500">
            {" "}
            404
          </div>
          <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
            Sorry we couldn't find the page you're looking for
          </p>
          <Link
            to="/"
            className="duration-400 bg-dark-coral hover:bg-light-coral inline rounded-lg border border-transparent px-5 py-3 text-sm font-medium leading-5 text-white shadow-2xl transition-all focus:outline-none active:bg-red-600"
          >
            Back to homepage
          </Link>
        </div>
        <div className="mx-5 my-12 w-full lg:flex lg:w-1/2 lg:justify-end">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            alt="error-img"
            className="aspect-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
