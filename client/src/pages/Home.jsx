import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Login />
      </div>
      <h1>Welcome to the Food Donation App</h1>
      <p>
        If you have food that can be donated, please upload the details here.
      </p>

      <Link to="/donation">Donate</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
