import React from "react";
import styled from "styled-components";

import { FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5% 10%",
          backgroundColor: "black",
          color: "white",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          FOOD DONATION
        </div>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
