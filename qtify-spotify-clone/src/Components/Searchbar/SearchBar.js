import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import "./searchbar.css";


function SearchBar() {
  return (
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
  )
}

export default SearchBar