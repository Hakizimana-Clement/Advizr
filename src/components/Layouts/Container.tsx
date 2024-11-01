import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="min-h-screen  flex flex-col justify-center">{children}</div>
  );
};
export default Container;
