import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Tab,
  Tabs,
  CircularProgress,
} from "@mui/material";
import { fetchSongs, fetchGenres } from "../FetchData/FetchData";
import "./SongSelection.css";
import AlbumCard from "../albumcard/AlbumCard";

const SongSelection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterSong, setFilterSong] = useState([]);
  const [tabValue, setTabValue] = useState('all');

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
        setFilterSong(songsData);

        const genresData = await fetchGenres();
        // Normalize genresData to be an array if it's an object
        const genresArray = Array.isArray(genresData.data)
          ? genresData.data
          : Object.values(genresData.data);
        setGenres(genresArray);
      } catch (error) {
        console.error("Error fetching songs or genres:", error);
      }
    };

    fetchSongsAndGenres();
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 'all') {
      setFilterSong(songs);
    } else {
      const filtered = songs.filter((item) => item.genre.key === newValue);
      setFilterSong(filtered);
    }
  };

  if (!genres) {
    return <CircularProgress />;
  }

  return (
    <div className="song-container">
      <div className="song-text">
        <Typography>Songs</Typography>
      </div>
      <div className="song-type">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            color: "#ffff",
          }}
        >
          <Tab
            key="all"
            value="all"
            id="all"
            label="All"
            wrapped
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "600",
              color: "#ffff",
            }}
          />
          {genres.map((item) => (
            <Tab
              key={item.key}
              value={item.key}
              id={item.key}
              label={item.label}
              wrapped
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                color: "#ffff",
              }}
            />
          ))}
        </Tabs>
      </div>
      <Grid container spacing={2}>
        {filterSong.map((song) => (
          <Grid item key={song.id} xs={6} sm={4} md={3} lg={2}>
            <AlbumCard data={song} className="songCard" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SongSelection;
