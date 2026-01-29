import React from "react";
import RvenueChart from "./RvenueChart";

const ChatSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <RvenueChart />
      </div>
    </div>
  );
};

export default ChatSection;
