interface WrapperProps {
  children: React.ReactNode;
}
import React from "react";

const Wrapper = ({ children }: WrapperProps) => {
  return <aside>{children}</aside>;
};

export default Wrapper;
