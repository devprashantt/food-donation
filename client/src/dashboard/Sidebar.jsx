import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Sidebar = ({ user, isSiderOpen, setIsSiderOpen }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const sideItems = [
    {
      text: "Home",
      path: "/dashboard",
    },
    {
      text: "Food",
      path: "/dashboard/food",
    },
    {
      text: "Profile",
      path: "/dashboard/profile",
    },
  ];

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <div
      className="sidebar"
      style={{
        height: "100%",
        width: "18%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1rem 2rem",
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
      }}
    >
      <div
        className="sidebar__header"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem 0",
          gap: "0.5rem",
        }}
      >
        <div className="sidebar__header__logo">
          <Link to="/">
            <h1>
              <span style={{ color: "#000000" }}>Food</span>{" "}
              <span style={{ color: "#7848f4" }}>Donation</span>
            </h1>
          </Link>
        </div>
      </div>
      <div
        className="sidebar__body"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {sideItems.map((item) => (
          <div
            className="sidebar__body__item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              color: active === item.path.substring(1) ? "#ffffff" : "",
              backgroundColor:
                active === item.path.substring(1) ? "#7848f4" : "",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
            onClick={() => navigate(item.path)}
          >
            <div className="sidebar__body__item__icon">
              <i className="fas fa-home">Icon</i>
            </div>
            <div
              className={`sidebar__body__item__text ${
                active === item.path.substring(1) ? "active" : ""
              }`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
          marginTop: "auto",
        }}
      >
        Give feedback
      </div>
    </div>
  );
};

export default Sidebar;
