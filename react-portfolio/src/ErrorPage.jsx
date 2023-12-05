import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div
          id="error-page"
          className="flex h-fit w-fit flex-col items-center justify-center gap-y-2 rounded-xl bg-gray-600 px-12 py-8"
        >
          <h1 className="text-4xl ">Oops!</h1>
          <p className="text-2xl leading-8">Sorry, and error occured</p>
          <p className="text-xl leading-9">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
