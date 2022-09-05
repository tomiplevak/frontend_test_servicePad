import React from "react";

import HeroSection from "../components/Main/HeroSection/HeroSection";
import Subsection from "../components/Main/Subsection/Subsection";
import LatestArticlesSection from "../components/Main/LatestArticlesSection/LatestArticlesSection";

import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <HeroSection />
      <Subsection />
      <LatestArticlesSection />
    </div>
  );
};

export default Home;
