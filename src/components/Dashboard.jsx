import React from "react";
import StaticGrid from "./StaticGrid.jsx";
import ChatSection from "./ChatSection.jsx";
import TableSection from "./TableSection.jsx";
import ActivityFeed from "./ActivityFeed.jsx";

const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <StaticGrid />

      <ChatSection />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 order-1">
          <TableSection />
        </div>

        <div className="order-2">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
