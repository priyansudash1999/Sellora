import { Header, Sidebar } from "./components/index.js";
import React, { useState } from "react";

const App = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [currPage, setCurrPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark::from-slate-900 dark:via-blue-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          close={sidebarShow}
          onToggle={() => setSidebarShow(!sidebarShow)}
          currPage={currPage}
          onPageChange={setCurrPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            sidebaClosed={sidebarShow}
            onToggleSidebar={() => setSidebarShow(!sidebarShow)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
