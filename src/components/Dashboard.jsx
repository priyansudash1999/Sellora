import React from "react";
import StaticGrid from "./StaticGrid.jsx";
import ChatSection from "./ChatSection.jsx";
import TableSection from "./TableSection.jsx";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StaticGrid />

      <ChatSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
