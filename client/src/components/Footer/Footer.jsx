import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="heading-footer">
        ShareThe<span>MEAL</span>
      </div>
      <div className="div1">
        <h4 className="footer-h4">Who We Are</h4>
        <p className="footer-p">About Us</p>
        <p className="footer-p">Our Work</p>
        <p className="footer-p">Our Vision</p>
        <p className="footer-p">Contact</p>
      </div>
      <div className="div2">
        <h4 className="footer-h4">Get Involved</h4>
        <p className="footer-p">Request For Food</p>
        <p className="footer-p">Partner with Us</p>
      </div>
      <div className="div3">
        <h4 className='footer-h4 className="footer-p"'>Socials</h4>
        <div className="footer-icons">
          <p className="footer-p">
            <FaInstagram size={40} />
          </p>
          <p className="footer-p">
            <FaTwitter size={40} />
          </p>
          <p className="footer-p">
            <FaFacebook size={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
