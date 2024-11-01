import React from "react";
import DashboardContainer from "../dashboard/DashboardContainer";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";
import SettingLayout from "../dashboard/Setting/SettingLayout";

const Setting = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar />
        {/* <MainContent /> */}
        <SettingLayout />
      </DashboardContainer>
    </>
  );
};
export default Setting;
