import React from "react";
import Headphone from "./Assets/Headphone.png";
import "./HeroSection.css"

function HeroSection() {
  return (
    <div
      className="container">
      <div 
      className="hero-container"
       >
        <div
          className="text-container"
          >
          100 Thousand songs, ad free Over thousand podcast episodes
        </div>
        <div className="headphone-container">
          <img src={Headphone} alt="headphone" className="headphone-img" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
