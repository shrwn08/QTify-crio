import React, { useState, useEffect } from "react";
import AlbumCard from "../albumcard/AlbumCard";
import LeftNavButton from "../LeftNav/LeftNavButton";
import RightNavButton from "../RightNav/RightNavButton";
import { fetchTopAlbum, fetchNewAlbum } from "../FetchData/FetchData";
import { CircularProgress } from "@mui/material";

import "./Card.css";

function Card() {
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);
  const [topAlbumIndex, setTopAlbumIndex] = useState(0);
  const [newAlbumIndex, setNewAlbumIndex] = useState(0);
  const [columns, setColumns] = useState(getColumnCount());
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  function getColumnCount() {
    const width = window.innerWidth;
    if (width <= 480) return 2;
    if (width <= 749) return 4;
    if (width <= 999) return 4;
    return 6;
  }

  useEffect(() => {
    const updateColumns = () => {
      setColumns(getColumnCount());
    };

    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumData = await fetchTopAlbum();
      const newAlbumData = await fetchNewAlbum();
      setTopAlbum(topAlbumData);
      setNewAlbum(newAlbumData);
    };
    fetchData();
  }, []);

  const dataLoaded = topAlbum.length > 0 && newAlbum.length > 0;

  if (!dataLoaded) {
    return <div><CircularProgress/></div>;
  }

  const handleOnClickShowTop = () => {
    setShowAllTop(!showAllTop);
    if (!showAllTop) {
      setTopAlbumIndex(0);
    }
  };

  const handleOnClickShowNew = () => {
    setShowAllNew(!showAllNew);
    if (!showAllNew) {
      setNewAlbumIndex(0);
    }
  };

  const handleLeftNavTop = () => {
    setTopAlbumIndex((prevIndex) =>
      prevIndex - columns < 0 ? topAlbum.length - columns : prevIndex - columns
    );
  };

  const handleRightNavTop = () => {
    setTopAlbumIndex((prevIndex) =>
      prevIndex + columns >= topAlbum.length ? 0 : prevIndex + columns
    );
  };

  const handleLeftNavNew = () => {
    setNewAlbumIndex((prevIndex) =>
      prevIndex - columns < 0 ? newAlbum.length - columns : prevIndex - columns
    );
  };

  const handleRightNavNew = () => {
    setNewAlbumIndex((prevIndex) =>
      prevIndex + columns >= newAlbum.length ? 0 : prevIndex + columns
    );
  };

  return (
    <div className="grid-container">
      <div className="top-new-card-container">
        <div className="top-card-container">
          <div className="album-name-button">
            <p className="album-name">Top Albums</p>
            <button onClick={handleOnClickShowTop} className="show-btn">
              {showAllTop ? "Collapse" : "Show All"}
            </button>
          </div>
          {!showAllTop && <LeftNavButton onClick={handleLeftNavTop} />}
          <div className={`album-cards ${showAllTop ? "show-all" : ""}`}>
            {topAlbum.map((data) => (
              <AlbumCard
                key={data.id}
                data={data}
              />
            ))}
          </div>
          {!showAllTop && <RightNavButton onClick={handleRightNavTop} />}
        </div>
        <div className="new-card-container">
          <div className="album-name-button">
            <p className="album-name">New Albums</p>
            <button onClick={handleOnClickShowNew} className="show-btn">
              {showAllNew ? "Collapse" : "Show All"}
            </button>
          </div>
          {!showAllNew && <LeftNavButton onClick={handleLeftNavNew} />}
          <div className={`album-cards ${showAllNew ? "show-all" : ""}`}>
            {newAlbum.map((data) => (
              <AlbumCard
                key={newAlbum.id}
                data={data}
              />
            ))}
          </div>
          {!showAllNew && <RightNavButton onClick={handleRightNavNew} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
