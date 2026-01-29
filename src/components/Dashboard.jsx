import React from "react";
import StaticGrid from "./StaticGrid.jsx";
import ChatSection from "./ChatSection.jsx";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StaticGrid />

      <ChatSection />
    </div>
  );
};

export default Dashboard;
