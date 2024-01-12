import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { Container } from "postcss";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <div className="flex h-full ">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
