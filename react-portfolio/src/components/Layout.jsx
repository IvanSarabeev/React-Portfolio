import React from "react";
import Header from "./Header";
import ProfileCard from "./Profile/ProfileCard";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-auto justify-center">
      <div className="ml-0 w-[400px] flex-1 flex-col lg:ml-2 lg:flex xl:ml-16 2xl:max-w-screen-lg">
        <Header />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Layout;
