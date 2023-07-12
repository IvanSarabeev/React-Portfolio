import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-fit">
      <div className="ml-16 flex w-[400px] flex-1 flex-col ">
        <Header />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Layout;
