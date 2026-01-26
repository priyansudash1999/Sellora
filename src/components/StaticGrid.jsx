import {
  ArrowUpRight,
  IndianRupee,
  Users,
  ShoppingBag,
  Eye,
  UserPlus,
  ArrowDown,
} from "lucide-react";
import React from "react";
const stats = [
  {
    title: "Total Revenue",
    value: "₹6,42,800",
    change: "+10.4%",
    trend: "up",
    icon: IndianRupee,
    bgColor: "bg-gradient-to-r from-purple-500 to-red-400",
    textColor: "text-purple-100",
    progressGradient: "from-purple-500 to-red-400",
  },
  {
    title: "Active Users",
    value: "2,348",
    change: "+5.9%",
    trend: "up",
    icon: Users,
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
    textColor: "text-cyan-100",
    progressGradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Total Orders",
    value: "4,126",
    change: "-2.1%",
    trend: "down",
    icon: ShoppingBag,
    bgColor: "bg-gradient-to-r from-orange-500 to-amber-400",
    textColor: "text-orange-100",
    progressGradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Page Views",
    value: "98,430",
    change: "+14.7%",
    trend: "up",
    icon: Eye,
    bgColor: "bg-gradient-to-r from-emerald-500 to-green-400",
    textColor: "text-green-100",
    progressGradient: "from-emerald-500 to-green-400",
  },
];

const StaticGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl ro-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transform-all duration-300 rounded-md"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {stat.value}
              </p>
              <div className="flex items-center space-x-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500 " />
                )}
                <span
                  className={`text-sm font-semibold ${stat.trend === "up" ? "text-emerald-500" : "text-red-400"}`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs Last Month
                </span>
              </div>
            </div>
            <div
              className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-200`}
            >
              {<stat.icon className={`w-6 h-6 ${stat.textColor}`} />}
            </div>
          </div>
          {/* Progressbar */}
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-linear-to-r ${stat.progressGradient} rounded-full transition-all duration-700 ease-out`}
              style={{ width: stat.trend === "up" ? "65%" : "35%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticGrid;
