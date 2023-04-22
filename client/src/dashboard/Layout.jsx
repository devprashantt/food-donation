import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <Sidebar
        user={{}} // data is the user data from the context
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className="dashboard__content"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          marginLeft: "21%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8f8fa",
        }}
      >
        {children}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
