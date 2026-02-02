import React from "react";
import RvenueChart from "./RvenueChart";
import SalesChart from "./SalesChart";

const ChatSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
      {/* Revenue Chart */}
      <div className="xl:col-span-2 order-1">
        <RvenueChart />
      </div>

      {/* Sales Chart */}
      <div className="order-2">
        <SalesChart />
      </div>
    </div>
  );
};

export default ChatSection;
