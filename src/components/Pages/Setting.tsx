import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import DashboardContainer from "../dashboard/DashboardContainer";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";
import SettingLayout from "../dashboard/Setting/SettingLayout";

const Setting = () => {
  const openModel = useAppSelector((state) => state.nav.openModel);
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar isVisible={openModel} />
        <SettingLayout isVisible={openModel} />
      </DashboardContainer>
    </>
  );
};
export default Setting;
