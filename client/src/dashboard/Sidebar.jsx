import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaHome, FaUser, FaListAlt, FaHandsHelping } from "react-icons/fa";

const Sidebar = ({ user, isSiderOpen, setIsSiderOpen }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const sideItems = [
    {
      text: "Home",
      logo: <FaHome />,
      path: "/dashboard",
    },
    {
      text: "Food",
      logo: <FaListAlt />,
      path: "/dashboard/food",
    },
    {
      text: "Profile",
      logo: <FaUser />,
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
        width: "20%",
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
        margin: "10px",
      }}
    >
      <div
        className="sidebar__header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <div className="sidebar__header__logo">
          <Link to="/">
            <h1>
              <span style={{ color: "#000000", fontSize: "1.5rem" }}>
                ShareThe<span style={{ color: "red", fontSize: "2rem" }} >MEAL</span>
              </span>
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
              color: active === item.path.substring(1) ? "#fff" : "",
              backgroundColor: active === item.path.substring(1) ? "red" : "",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
            onClick={() => navigate(item.path)}
          >
            <div className="sidebar__body__item__icon">
              <i className="fas fa-home">{item.logo}</i>
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
        {email === "abhyuday7176@gmail.com" && (
          <div
            className="sidebar__body__item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              color: active === "admin" ? "#fff" : "",
              backgroundColor: active === "admin" ? "red" : "",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
            onClick={() => navigate("/dashboard/admin")}
          >
            <div className="sidebar__body__item__icon">
              <i className="fas fa-home">
                <FaUser />
              </i>
            </div>
            <div
              className={`sidebar__body__item__text ${
                active === "admin" ? "active" : ""
              }`}
            >
              Admin
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
