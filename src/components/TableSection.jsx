import { MoreHorizontal } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "ORD-1001",
    customer: "Rahul Sharma",
    product: "Wireless Headphones",
    amount: 2999,
    status: "Delivered",
    date: "2026-01-28",
  },
  {
    id: "ORD-1002",
    customer: "Ananya Singh",
    product: "Smart Watch",
    amount: 5499,
    status: "Pending",
    date: "2026-01-27",
  },
  {
    id: "ORD-1003",
    customer: "Amit Patel",
    product: "Bluetooth Speaker",
    amount: 1999,
    status: "Cancelled",
    date: "2026-01-26",
  },
  {
    id: "ORD-1004",
    customer: "Sneha Verma",
    product: "Laptop Backpack",
    amount: 1499,
    status: "Delivered",
    date: "2026-01-26",
  },
  {
    id: "ORD-1005",
    customer: "Rohit Kumar",
    product: "Mechanical Keyboard",
    amount: 4299,
    status: "Processing",
    date: "2026-01-25",
  },
  {
    id: "ORD-1006",
    customer: "Priya Nair",
    product: "USB-C Hub",
    amount: 1799,
    status: "Delivered",
    date: "2026-01-24",
  },
  {
    id: "ORD-1007",
    customer: "Karan Malhotra",
    product: "Gaming Mouse",
    amount: 2499,
    status: "Pending",
    date: "2026-01-24",
  },
  {
    id: "ORD-1008",
    customer: "Neha Gupta",
    product: "Noise Cancelling Earbuds",
    amount: 6999,
    status: "Delivered",
    date: "2026-01-23",
  },
];

const topProducts = [
  {
    name: "Wireless Headphones",
    sales: "1,240",
    revenue: "₹3,718,760",
    trend: "up",
    change: "+12.5%",
  },
  {
    name: "Smart Watch",
    sales: "980",
    revenue: "₹5,389,020",
    trend: "up",
    change: "+8.2%",
  },
  {
    name: "Mechanical Keyboard",
    sales: "760",
    revenue: "₹3,267,240",
    trend: "down",
    change: "-3.4%",
  },
  {
    name: "Noise Cancelling Earbuds",
    sales: "690",
    revenue: "₹4,820,310",
    trend: "up",
    change: "+15.1%",
  },
  {
    name: "Gaming Mouse",
    sales: "840",
    revenue: "₹2,099,160",
    trend: "up",
    change: "+5.6%",
  },
  {
    name: "Bluetooth Speaker",
    sales: "620",
    revenue: "₹1,239,380",
    trend: "down",
    change: "-6.8%",
  },
  {
    name: "Laptop Backpack",
    sales: "910",
    revenue: "₹1,364,090",
    trend: "up",
    change: "+9.3%",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-100 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order Id
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((ord, ind) => (
                <tr
                  key={ind}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {ord.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {ord.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      ₹{ord.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      {ord.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-medium text-slate-800 dark:text-white text-xs px-3 py-1 rounded-full`}
                    >
                      {new Date().toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-800 dark:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
