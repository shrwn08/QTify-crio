
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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box color="White" fontSize="25px" fontWeight="900">
              <img
                src={Qtify}
                alt="logo"
                style={{ 
                width:"67px",
                height:"34px",
                margin:"10px 0 ",
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
          {/* <Box
            sx={{
              height: "270px",
              width:"100%",
              backgroundColor: "#121212",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Box
              sx={{
                width: "799px",
                height: "212px",
                display:"flex",
                alignItems:"center"
              }}
            >
              <Box
                sx={{
                  color: "#ffff",
                  fontSize: "36px",
                    textAlign:"center"
                }}
              >
                100 Thousand songs, ad free Over thousand podcast episodes
              </Box>
              <Box>
                <img src={Headphone} alt="headphone" width="150px" height="150px" />
              </Box>
            </Box>
          </Box> */}
        </Box>
      );
    }
    
    export default Header;
 