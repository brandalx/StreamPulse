interface WrapperProps {
  children: React.ReactNode;
}
import React from "react";

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      {children}
    </aside>
  );
};

export default Wrapper;
