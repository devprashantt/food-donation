import React from "react";
import { Link } from "react-router-dom";
import './signup.css';

const Signup = () => {
  return (
    
    <div class="signup_container">
        <div class="signup_main-img">
          
        </div>
  
  <div class="signup_wrapper">
    <form>
      <h1>Sign-Up</h1>
      <p>Create your free account on Food-donation</p>
      <input type="text" id="name" placeholder="Name"></input>
      <input type="email" id="email" placeholder="Email"></input>
      
      <input type="password" id="password" placeholder="Password"></input>
        
      <input type="text" id="phone" placeholder="Phone"></input>
      
      

      <button type="submit" id="signup-btn">Sign Up</button>
      
      <div class="login">
        <p>Already have an account?</p>
        <Link to={"/login"}><button class="login-btn" >Login</button></Link>
      </div>
    </form>  
    

  </div>
  

</div>
  );
};

export default Signup;
