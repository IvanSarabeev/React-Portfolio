import React from "react";
import Header from "../Header/Header";
import ProfileLayout from "../SideProfile/ProfileLayout";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full flex-1 flex-col bg-exp8-background bg-cover bg-fixed bg-no-repeat font-inter lg:flex-row lg:gap-2.5">
        <ProfileLayout />
        {children}
      </main>
    </>
  );
};

export default Layout;
