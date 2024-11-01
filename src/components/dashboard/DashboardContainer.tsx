import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashboardContainer = ({ children }: Props) => {
  return <div className="text-white grid grid-cols-5 ">{children}</div>;
};
export default DashboardContainer;
