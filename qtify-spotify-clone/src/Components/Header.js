import React from "react";
import Qtify from "./Assets/Qtify-removebg-preview.png";
import SearchIcon from "@mui/icons-material/Search";
import HeroSection from "./HeroSection";
import "./Header.css";
function Header() {
  return (
    <div>
      <div
        className="nav-container"
        sx={{
          height: "74px",
          backgroundColor: "#34c94b",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "poppins",
        }}
      >
        <div className="logo-container">
          <img src={Qtify} alt="logo" className="logo-image" />
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a song of your choice"
          />
          <button className="search-button">
            <SearchIcon height="20px" width="20px" />
          </button>
        </div>
        <button className="feedbackBtn">Give Feedback</button>
      </div>
      <HeroSection />
    </div>
  );
}

export default Header;
