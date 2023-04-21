import React, { useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import FoodDonation from "./pages/FoodDonation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./dashboard/Layout";
import Navbar from "./components/Navbar/Navbar";

import Profile from "./dashboard/Profile";
import Food from "./dashboard/Food";

function App() {
  const token = localStorage.getItem("token");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {!pathname.includes("/login") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Navbar token={token} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<FoodDonation />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {token ? (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<FoodDonation />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/food" element={<Food />} />
          </Route>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
