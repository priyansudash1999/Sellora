import {
  Clock,
  ShoppingCart,
  UserPlus,
  CreditCard,
  Package,
  AlertCircle,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import React from "react";

const activities = [
  {
    id: 1,
    type: "order",
    icon: ShoppingCart,
    title: "New Order Placed",
    description: "Order #ORD-1008 was placed by Neha Gupta",
    time: "2 minutes ago",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    type: "user",
    icon: UserPlus,
    title: "New Customer Registered",
    description: "Rahul Sharma created a new account",
    time: "15 minutes ago",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    title: "Payment Successful",
    description: "₹6,999 received for Order #ORD-1008",
    time: "30 minutes ago",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    id: 4,
    type: "inventory",
    icon: Package,
    title: "Stock Updated",
    description: "Mechanical Keyboard stock increased by 50 units",
    time: "1 hour ago",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    id: 5,
    type: "alert",
    icon: AlertCircle,
    title: "Low Stock Alert",
    description: "Bluetooth Speaker stock is below 10 units",
    time: "2 hours ago",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: 6,
    type: "analytics",
    icon: TrendingUp,
    title: "Sales Spike Detected",
    description: "Sales increased by 18% compared to yesterday",
    time: "3 hours ago",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 7,
    type: "message",
    icon: MessageSquare,
    title: "New Support Message",
    description: "You received a message from Ananya Singh",
    time: "5 hours ago",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Activity Feed
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Recent System Activities
            </p>
          </div>

          <button className="self-start sm:self-auto text-blue-500 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
      </div>

      {/* Activity List */}
      <div className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {activities.map((act) => (
            <div
              key={act.id}
              className="flex gap-3 sm:gap-4 items-start p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              {/* Icon */}
              <div className={`p-2 rounded-lg shrink-0 ${act.bgColor}`}>
                <act.icon className={`w-4 h-4 ${act.color}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {act.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 sm:line-clamp-none">
                  {act.description}
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {act.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
