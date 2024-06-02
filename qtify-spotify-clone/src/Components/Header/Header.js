import React from "react";
import Logo from '../QtifyLogo/Logo'
import SearchBar from '../Searchbar/SearchBar';
import FeedbackBtn from "../FDButton/FeedbackBtn";

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
        <Logo />

        <SearchBar/>
        <FeedbackBtn />
        
      </div>
    </div>
  );
}

export default Header;
