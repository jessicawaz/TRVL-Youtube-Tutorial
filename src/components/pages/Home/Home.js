import React from "react";
import "../../../App.css";
import Cards from "../../Cards/Cards.js";
import Footer from "../../Footer/Footer";
import HeroSection from "../../HeroSection/HeroSection.js";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
