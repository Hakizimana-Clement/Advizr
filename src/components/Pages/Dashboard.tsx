import React from "react";
import DashboardContainer from "../dashboard/DashboardContainer";
import MainContent from "../dashboard/DashboardMainContent";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar />
        <MainContent />
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
