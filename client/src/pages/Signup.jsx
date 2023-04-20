import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      Signup or{" "}
      <Link exact to="/login">
        Login
      </Link>
    </div>
  );
};

export default Signup;
