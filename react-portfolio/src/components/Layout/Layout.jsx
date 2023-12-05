import React from "react";
import Header from "../Header/Header";
import ProfileCard from "../Profile/ProfileCard";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full flex-1 flex-col bg-exp8-background bg-cover bg-fixed bg-no-repeat lg:flex-row">
        <ProfileCard />
        {children}
      </main>
    </>
  );
};

export default Layout;
