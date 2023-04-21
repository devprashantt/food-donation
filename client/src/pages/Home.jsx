import React from "react";

import ImgDisplay from "../components/ImgDisplay/ImgDisplay";
import AboutUs from "../components/About Us/AboutUs";
import HelpCard from "../components/HelpCard/HelpCard";
import Vision from "../components/Our Visison/Vision";
import Partner from "../components/Partner/Partner";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <ImgDisplay />
      <AboutUs />
      <HelpCard />
      <Vision />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
