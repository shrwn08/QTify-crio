import React, { useState, useEffect } from "react";
import axios from "axios";
// import Chip from "@mui/material/Chip";
import AlbumCard from "./AlbumCard";
import "./Card.css";

function Card() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  const fetchTopAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbumData(response.data);
    } catch (error) {
      console.log("Unable to fetch data");
    }
  };
  const fetchNewAlbumData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbumData(response.data);
    } catch (error) {
      console.log("Unable to fetch data");
    }
  };

  useEffect(() => {
    fetchTopAlbumData();
    fetchNewAlbumData();
  }, []);

  // const topAlbumCard=()=>{
  //   const albumsToShow = showAllTop ? topAlbumData : topAlbumData.slice(0, 7);
  //   return albumsToShow.map((item) => (
  //     <div className="cards" key={item.id}>
  //       <div className="album-img">
  //         <img src={item.image} alt="thumbnail" className="thumbnail" />
  //         <div className="follow">
  //           <Chip label={`${item.follows} follows`} variant="outlined" className="chip" />
  //         </div>
  //       </div>
  //       <p className="album-title">{item.title}</p>
  //     </div>
  //   ));
  // }

  // const newAlbumCard=()=>{
  //   const albumsToShow = showAllNew ? newAlbumData : newAlbumData.slice(0, 7);
  //   return albumsToShow.map((item) => (
  //     <div className="cards" key={item.id}>
  //       <div className="album-img">
  //         <img src={item.image} alt="thumbnail" className="thumbnail" />
  //         <div className="follow">
  //           <Chip label={`${item.follows} follows`} variant="outlined" className="chip" />
  //         </div>
  //       </div>
  //       <p className="album-title">{item.title}</p>
  //     </div>
  //   ));
  // }

  return (
    <div className="grid-container">
      <div className="card-container">
        <div className="top-album">
          <div className="cart-text">
            <p className="album-name">Top Albums</p>
            <button
              onClick={() => setShowAllTop(!showAllTop)}
              className="show-btn"
            >
              {showAllTop ? "Collepse" : "Show all"}
            </button>
          </div>

          <div className={`album-cards ${showAllTop?'show-all':''}`}>
           {topAlbumData.map((album)=> <AlbumCard key={album.id}  album={album}/>)}
          </div>
        </div>
        <div className="new-album">
          <div className="cart-text">
            <p className="album-name">New Albums</p>
            <button
              onClick={() => setShowAllNew(!showAllNew)}
              className="show-btn"
            >
              {showAllNew ? "Collepse" : "Show all"}
            </button>
          </div>
          <div className={`album-cards ${showAllNew?'show-all':''}`}>
            {newAlbumData.map((album)=> <AlbumCard key={album.id}  album={album}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
