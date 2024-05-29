import React from "react";
import Chip from "@mui/material/Chip";
import "./Card.css";
function AlbumCard({ album }) {
  console.log("album from albumcard", album);
  return (
    <div className="cards">
      <div className="album-img">
        <img src={album.image} alt="thumbnail" className="thumbnail" />
        <div className="follow">
          <Chip
            label={`${album.follows} follows`}
            variant="outlined"
            className="chip"
            sx={{
              width: "auto",
              height: "23px",
              borderRadius: "10px",
              backgroundColor: "#121212",
              color: "#ffff",
              fontFamily: "Poppins",
            }}
          />
        </div>
      </div>
      <p className="album-title">{album.title}</p>
    </div>
  );
}

export default AlbumCard;
