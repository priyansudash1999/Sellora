import {
  BarChart3,
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "orders", label: "Orders" },
      { id: "products", label: "Products" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "899",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transaction",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calender",
    icon: Calendar,
    label: "Calender",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = ({ close, onToggle, currPage, onPageChange }) => {
  const [expandItem, setExpandItem] = useState(new Set(["analytics"]));
  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandItem);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }

    setExpandItem(newExpanded);
  };

  return (
    <div
      className={`${close ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-b from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>

          {!close && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Sellora
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currPage === item.id || item.active ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shad-lg shadow-blue-500/25" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.id);
                } else {
                  onPageChange(item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 dark:text-white`} />

                {!close && (
                  <>
                    <span className="font-medium ml-2 dark:text-white">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>
              {!close && item.submenu && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform dark:text-slate-400`}
                />
              )}
            </button>

            {/* submenu section */}
            {!close && item.submenu && expandItem.has(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((item) => (
                  <button className="w-full text-left text-sm p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Profile */}
      {!close && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://avatars.githubusercontent.com/u/100997666?v=4"
              alt=""
              className="w-10 h-10 rounded-full ring-purple-500"
            />
            <div className="flex-1 min-w-0 ">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-700 truncate">
                  John Deo
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
