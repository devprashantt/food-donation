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
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
<<<<<<< HEAD
          backgroundColor: "#f8f8fa",
=======
          // backgroundColor: "#f8f8fa",
          // border: "1px solid blue"
>>>>>>> ac971f32097fad64ac88e088fa1ac6293fc9d857
        }}
      >
        <div
          style={{
            height: "5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem",
            backgroundColor: "#ffffff",
            position: "fixed",
            top: 0,
            right: 0,
            left: "21%",
            zIndex: 100,
          }}
        >
          Header
        </div>
        {children}
        <Outlet />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          Footer
        </div>
      </div>
    </div>
  );
};

export default Layout;
