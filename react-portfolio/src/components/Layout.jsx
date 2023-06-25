import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-fit">
      <div className="ml-16 w-[400px] ">
        <Header />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Layout;
