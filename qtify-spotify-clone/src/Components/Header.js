
    import React from "react";
    import { Box, } from "@mui/material";
    import Qtify from "./Assets/Qtify-removebg-preview.png";
    // import Headphone from "./headphone.png";
    import SearchIcon from "@mui/icons-material/Search"
    import './Header.css'
    function Header() {
      return (
        <Box>
          <Box
            sx={{
              height: "74px",
              backgroundColor: "#34c94b",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily:"poppins"
            }}
          >
            <Box >
              <img
                src={Qtify}
                alt="logo"
                style={{ 
                width:"67px",
                height:"34px",
                margin:"20px 0 20px 32px",
                }}
              />
            </Box>
    
            <Box className= "search-container">
            <input type="text" className="search-input" placeholder="Search a song of your choice" />
            <button className="search-button">
            <SearchIcon  height="20px" width="20px"/>
          </button>
            </Box>
            <button className="feedbackBtn">
              Give Feedback
            </button>
          </Box>
         
        </Box>
      );
    }
    
    export default Header;
 