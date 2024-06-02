
import Chip from "@mui/material/Chip";
import "./album-card.css";
function AlbumCard({ image,follows,title}) {

  // if (!album) {
  //   return <div>Loading...</div>;
  // }

  console.log("is Amused Young there ",(title === "Amused Young"))

  return (
    <div className="cards">
      <div className="album-img">
        <img src={image} alt="thumbnail" className="thumbnail" />
        <div className="follow">
          <Chip
            label={`${follows} follows`}
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
      <p className="album-title">{title}</p>
    </div>
  );
}

export default AlbumCard;
