import React from "react";
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection";
import Card from "./Components/Card/Card";
import SongSelection from "./Components/SongSelection/SongSelection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Card />
      <SongSelection />
    </div>
  );
}

export default App;
