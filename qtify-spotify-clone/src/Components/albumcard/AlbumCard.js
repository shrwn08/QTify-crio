import Chip from "@mui/material/Chip";
import "./album-card.css";

function AlbumCard({ data }) {

  if (!data) {
    return (
      <div style={{
        color:"#ffff"
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="cards">
      <div className="album-img">
        <img src={data.image} alt="thumbnail" className="thumbnail" />
        <div className="follow">
          <Chip
            label={data.follows?`${data.follows} follows`:`${data.likes} likes`}
            variant="outlined"
            className="chip"
            sx={{
              width: "auto",
              height: "23px",
              borderRadius: "10px",
              backgroundColor: "#121212",
              color: "#ffff",
              fontFamily: "Poppins",
              marginLeft: "8px",
            }}
          />
        </div>
      </div>
     
        <p className="album-title">{data.title}</p>
      
    </div>
  );
}

export default AlbumCard;
