import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import DashboardContainer from "../dashboard/DashboardContainer";
import MainContent from "../dashboard/DashboardMainContent";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";

const Dashboard = () => {
  const openModel = useAppSelector((state) => state.nav.openModel);
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar isVisible={openModel} />
        <MainContent isVisible={openModel} />
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
