import React from "react";
import Headphone from "./Assets/Headphone.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="container">
        <div className="hero-container">
        <div className="text-container">
           <p className="thousand-Songs">100 Thousand Songs, ad-free</p> 
           <p className="over-thousand">Over thousands podcast episodes</p>  
        </div>
        <div className="headphone-container">
          <img src={Headphone} alt="headphone" className="headphone-img" />
        </div>
      </div>
    
    </div>
      
  );
}

export default HeroSection;
