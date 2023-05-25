import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      number: formData.number,
    };
    try {
      axios.post("http://localhost:3000/signup", data).then((response) => {
        console.log(response);
      });

      navigate("/"); // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="signup_container">
      <div class="signup_main-img"></div>

      <div class="signup_wrapper">
        <form>
          <h1>Sign-Up</h1>
          <p>Create your free account on Food-donation</p>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            id="name"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            id="password"
          />
          <input
            type="phone"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            id="phone"
          />

          <button type="submit" id="signup-btn" onClick={handleSubmit}>
            Sign Up
          </button>

          <div class="login">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <button class="login-btn">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
