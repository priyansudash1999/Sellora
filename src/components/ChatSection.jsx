import React from "react";
import RvenueChart from "./RvenueChart";
import SalesChart from "./SalesChart";

const ChatSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <RvenueChart />
      </div>
      <div className="space-y-6">
        <SalesChart />
      </div>
    </div>
  );
};

export default ChatSection;
