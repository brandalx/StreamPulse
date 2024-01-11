import React from "react";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <nav className="flex top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 justify-between items-center shadow-sm">
      <Logo />
    </nav>
  );
};

export default Navbar;
