import React from "react";
import "./ImgDisplay.css";
import { Link, useNavigate } from "react-router-dom";

const ImgDisplay = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    if (user) {
      // User is logged in, navigate to food donation route
      navigate("/dashboard");
    } else {
      // User is not logged in, navigate to signup route
      navigate("/signup");
    }
  };

  return (
    <div className="first-display">
      <div className="text">
        <h1 className="img-text">
          Feeding The <span>Hungry</span>
        </h1>
        <h3>We Serve Food To The Needy Peoples</h3>
        <button className="btn" onClick={handleDonateNowClick}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default ImgDisplay;
