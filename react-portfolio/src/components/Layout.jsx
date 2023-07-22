import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-auto justify-center lg:flex">
      <div className="ml-0 w-[400px] flex-1 flex-col lg:ml-16 lg:flex">
        <Header />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Layout;
