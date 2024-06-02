import React from "react";
import HeroImage from "../HeroImg/HeroImage";
import HeroText from "../HeroText/HeroText";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="container">
        <div className="hero-container">
       <HeroText/>
       <HeroImage />
      </div>
    
    </div>
      
  );
}

export default HeroSection;
