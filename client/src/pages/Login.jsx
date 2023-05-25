import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await axios.post("http://localhost:3000/signin", {
        email,
        password,
      });
      console.log(res);
      const { token } = res.data.token;
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data.existingUser));
      console.log(JSON.stringify(res.data.existingUser));
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      navigate("/"); // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="login_container">
      <div class="login_wrapper">
        <form>
          <h1 className="login__heading">Login</h1>
          <p>If you are already a member, easily log in</p>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            id="email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            id="password"
          />
          <a href="#">Forgot my password</a>
          <Link to={"/home"}>
            <button
              className="main__button"
              type="submit"
              id="login-btn"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </Link>

          <div class="or">
            <hr></hr>
            OR
            <hr></hr>
          </div>
          <button class="google-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            Login with Google
          </button>
          <div class="register">
            <p>If you don't have an account</p>
            <Link to={"/signup"}>
              <button class="register-btn">Register</button>
            </Link>
          </div>
        </form>
      </div>

      <div class="login_main-img"></div>
    </div>
  );
};

export default Login;
